---
title: Backtesting
description: Replay an existing session and its playbooks over a historical UTC window, simulate positions in memory, and inspect per-day artifact coverage and the AI cycle timeline — the only license-free path in Cortiq.
sidebar:
  order: 60
  badge: New
---

Backtesting replays one of your existing sessions over a historical period, calls the same AI stack it would call live, and simulates the resulting positions in memory instead of sending orders to MT5. By the end of this page you'll know how to start a run, read the coverage grid and cycle timeline, and why backtests are the one path that needs no license.

:::tip
Backtests are the **only** part of Cortiq that runs without a valid license. Every MT5-bound session needs an active key; a backtest never touches MT5 execution, so you can validate a playbook before you buy.
:::

## What this is

A backtest takes an existing `AISession` — its symbol, playbooks, data package, and pinned context packages — and runs it against historical M1 candles over a UTC window you choose. The engine streams those candles in batches, uses the AI's own `nextTrigger` directives to decide when to call the model again, and books the trades the AI opens into an in-memory position simulator.

Nothing is sent to MetaTrader 5. The run measures what the same session *would* have done over that period, including SL/TP exits, pending-order activation, and management actions, all priced from M1 high/low.

Runs execute in a background service and persist to local SQLite. You can leave the page while a costly run continues, then return to History to inspect the saved parameters, simulated trades, AI cycles, warnings, and final metrics. The cycle journal is rich enough to trace a dropped trade — a decision that intended to trade but produced no executable order is recorded as a visible cycle with an explicit drop reason, never silently discarded.

## How it fits into Cortiq

A backtest reuses the live trading cycle end to end. It calls the same prompt builder, the same provider, and the same response parser the session uses live, and it never tells the model it is being simulated — a model that knows it is being evaluated may behave differently and distort the result.

| Aspect | Live session | Backtest |
| --- | --- | --- |
| Market data | Live MT5 stream | Historical M1 candles, replayed |
| Order routing | Real orders to MT5 | In-memory position book |
| License | Required | Not required |
| Clock | Real time | Replay clock over your UTC window |
| Context layers | Live as-of now | As-of the candle date, no lookahead |

Because backtests can spend real provider tokens, the service runs **one** active background run at a time and rejects a second start until the current run finishes or is cancelled.

:::caution
A backtest still makes real AI calls and spends real provider tokens. The run guardrails cap cycles and candle volume, but the cost is yours. Start with a short window before committing to a long one.
:::

## How to use it

### 1. Open Backtests and pick a session

Open `Preparation` → `Backtests`, or navigate to `/backtests`. The list shows recent persisted runs with status, P/L, period, cycle count, and an unread dot for runs that finished in the background while you were away.

![Backtests page listing recent runs with status, P/L, period, and cycle count](/images/screenshots/backtesting__list.png)

Select **New** to start a run. A backtest always targets an existing session, so the session carries the symbol, playbooks, and pinned packages into the run.

### 2. Define the window and acknowledge the warnings

Choose the session, then set the **UTC period** with the start and end fields. You enter the period in your local machine time; Cortiq converts it to UTC once before the engine sees it, and converts back to local for every display.

Editable run settings expose the max-cycle cap and the M1 batch size. Lot fallback, tick size, and tick value are derived from the session's MT5 symbol metadata — they are not operator inputs.

![New backtest form showing session selector, UTC period fields, and run settings](/images/screenshots/backtesting__new.png)

Start stays disabled until the selected session has a data package, the period validates, and you acknowledge the run warnings (real token cost, M1 approximation, latency, SL-first exit ordering, and historical-indicator safety).

### 3. Fill any required coverage gaps

If the session's playbooks require a context layer — preparation, sentiment, or instrument profile — the new-backtest page renders a **coverage grid**: a per-day ✓/✕ matrix per pinned package across the whole window.

A missing cell offers **click-to-generate**, which backdates that artifact to the day in question (stamped with an effective date so the engine selects it without lookahead). A **Generate all missing** action fills the row. Where a layer is `Required`, any uncovered day blocks Start until it is filled; an `Optional` layer never blocks and is omitted on days it has no artifact.

:::note
Context-layer usage is derived from the session's playbook requirements. There are no per-run toggles — the playbook decides whether a layer is `Off`, `Optional`, or `Required`.
:::

### 4. Start, then pause or resume

Starting hands the run to the background service and returns you a running state; the page polls history while the run is active. Navigating away does not cancel it.

While a run is `Running` you can **Pause** it. The current in-flight AI call finishes, then the candle loop parks at the next boundary and the status persists as `Paused`. **Resume** continues from exactly that boundary with no state lost. Cancel is valid from both `Running` and `Paused`.

:::caution
Pause is in-process only. If the app exits while a run is paused or running, orphan recovery marks it `Failed` on restart — there is no durable mid-run resume across a process restart. A paused run also holds the single concurrency slot until you resume or cancel it.
:::

### 5. Read the result

A completed run opens at `/backtests/{id}` with the coverage grid and the cycle timeline. Result tabs cover the overview metrics, simulated trades, AI cycles, warnings, and the frozen settings the run used.

![Backtest detail page showing the per-day coverage grid and the AI cycle timeline](/images/screenshots/backtesting__detail.png)

The AI-cycles view uses the same timeline component as a live session, so cycle action chips (BUY / SELL / WAIT / MANAGE) read identically. Cycles that intended a trade but opened nothing render with a distinct marker and carry the drop reason, including risk rejects prefixed `[Risk]` or `[Risk halt]`.

## Reference

### Run status values

| Status | Meaning |
| --- | --- |
| `Queued` | Run record written, background task not yet started. |
| `Running` | The replay loop is active. |
| `Paused` | Operator paused at a candle boundary; resumable in-process. |
| `Completed` | Replay finished and results persisted. |
| `Cancelled` | Operator cancelled; open positions force-closed and partial results kept. |
| `Failed` | Run errored, or orphan recovery found it interrupted by an app restart. |

### Cycle outcomes

| Outcome | Meaning |
| --- | --- |
| `Wait` | No trade intent this cycle. |
| `Opened` | A position was opened. |
| `IntendedNotOpened` | The AI flagged a trade but produced no executable order; carries a drop reason. |
| `Managed` | A management action (CLOSE / MOVE_SL / MOVE_TP) was applied. |
| `Error` | The cycle errored or the response was unparseable; carries a drop reason. |

### What a backtest does not reconstruct

| Limitation | Detail |
| --- | --- |
| Account balance / margin / drawdown | Not reconstructed historically; equity is tracked as starting capital plus realized P/L. |
| Intra-minute tick order | M1 OHLC cannot know tick sequence; SL is checked first as the conservative default. |
| Durable pause | Pause and resume are in-memory; an app restart fails a paused run. |
| Historical news | Depends on MT5 economic-calendar availability for the requested window. |

## Common questions

**Do I need a license to run a backtest?**
No. Backtests are the only license-free path. Any session bound to MT5 needs a valid license; a backtest never reaches MT5.

**Why did my run finish with fewer cycles than I expected?**
The run respects a max-AI-cycle cap and hard first-slice limits on candle volume. If the cap stopped the run, the result records it. Lower the window or raise the cap.

**A required coverage cell won't generate for a future date — why?**
Backdated artifacts cannot be stamped with a future effective date. A day later than today is skipped; pick a window that ends on or before today.

## What to read next

1. [Sessions](sessions/) — the session a backtest replays, and its lifecycle states.
2. [Playbooks & data](playbooks-and-data/) — the playbooks and data package that drive every cycle.
3. [Journal & analytics](journal-and-analytics/) — how live runs are recorded once you go past simulation.

## Related

- [Risk management](risk-management/)
- [AI providers](ai-providers/)
- [Research](research/)
- [Glossary](glossary/)
