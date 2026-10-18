---
title: Backtesting
description: Create a single-instrument historical replay, trade manually or run autonomous AI decisions, and inspect saved results and reviews.
status: current
sidebar:
  order: 60
---

Backtesting lets you practise manual trading or evaluate autonomous decisions over a historical period. This guide covers setup, artifact coverage, replay controls, recovery, and reading the saved results.

:::caution
Starting a backtest requires an active Cortiq license. Autonomous replay makes real AI requests and uses your provider's billing or subscription allowance. Copilot and requested reviews also use AI.
:::

## What this is

A backtest is a standalone replay for one MT5 account, one instrument, and one historical period. You don't need to create a trading session first. MT5 supplies historical data and broker information; replay orders stay inside Cortiq's simulator.

Choose `Manual` when you want to reveal candles and place simulated trades yourself. Choose `Autonomous` when you want Cortiq to run AI planning and decision cycles. Both modes allow you to start without a playbook.

Autonomous replay requires a saved data access policy and an available AI model. Selected playbooks retain their order and pinned versions for the run. The policy controls the market data available to the AI; playbook requirements determine which preparation, sentiment, and instrument-profile inputs need coverage.

## How it fits into Cortiq

Use backtesting to inspect decisions and execution before starting a [session](/cortiq-public/sessions/). Autonomous replay uses the live planning and decision workflow with historical inputs and simulated execution. It still depends on the selected model, policy, playbooks, and available evidence.

Use [Research](/cortiq-public/research/) to measure recurring market behaviour across occurrences. A backtest shows what happened in a particular replay; a profitable result alone doesn't establish a repeatable edge.

## Before you begin

- Activate your [license](/cortiq-public/licensing-and-support/).
- Configure the MT5 account that supplies the instrument, historical candles, and broker specifications. Replay needs access to that account's available history.
- For Autonomous replay, save a `Backtest` provider, connection, and model in [AI Providers](/cortiq-public/ai-providers/). Backtests support API and subscription connections.
- For Autonomous replay, prepare a saved [data access policy](/cortiq-public/playbooks-and-data/) and any packages required by your selected playbooks.

## How to use it

### 1. Create the replay

1. Open `Preparation` → `Backtests`.
2. Select `New Backtest`.
3. Choose `Manual` or `Autonomous`.
4. Select the `MT5 Account` and one `Instrument`.
5. Add compatible playbooks if you want them, then arrange their priority with the arrow controls.

Choosing an instrument creates a saved draft. Later setup changes save automatically, and the Backtests list lets you reopen the draft. Starting successfully replaces the draft with the run; a rejected start preserves it. Run acknowledgements must be selected again when needed.

### 2. Choose the autonomous data policy

For Autonomous replay, the `Data access policy` section uses the selected playbooks' shared saved policy when they have one. To test a different policy, expand `Use a different policy for this backtest` and choose a `Policy override`.

If the playbooks don't share one saved policy, or you haven't selected a playbook, choose the policy explicitly. `Use playbook policy` restores the inherited selection. Resolve any confirmed compatibility or required-input blockers before starting.

Manual replay doesn't require a data access policy, AI model, or artifact coverage.

### 3. Set the period and fill required coverage

Enter `Start` and `End` under `Backtest period` in your computer's local time. Cortiq converts them to UTC for replay. The artifact coverage grid labels its dates and expected windows in UTC.

For Autonomous replay, select preparation, sentiment, and instrument-profile packages for the chosen instrument. Required packages and uncovered required intervals block launch. Optional gaps don't block it. These requirements come from the playbooks, rather than per-run requirement switches.

The grid uses the selected account's recorded historical trading dates. Dates without recorded bars are excluded, while weekends remain when that market traded. A history-read failure leaves coverage unready; Cortiq doesn't treat it as a market closure.

1. Inspect each missing cell's reason and expected coverage window.
2. Select a missing cell to queue that package and date, or select `Generate all missing`.
3. Wait for the required cells to become covered before starting.

Generation runs sequentially in the background, with a limit of 90 package/date cells per attempt. You can append other missing cells while it runs. Progress and completed dates survive navigation; after an app restart, an interrupted attempt needs an explicit retry. Completed work is retained, so retrying targets the remaining gaps.

:::note
Historical sentiment generation is currently unavailable. A missing required historical sentiment report remains a launch blocker; the generator doesn't substitute today's news. Future artifact dates cannot be generated either.
:::

### 4. Set capital, risk, and AI guidance

Set `Starting capital` and choose whether to `Apply risk management rules`.

When risk enforcement is on, expand `Risk management settings` to edit the supported limits for this backtest. The initial values come from your global and selected-account settings. Each layer keeps its own limits and UTC trading-day boundary; zero disables an individual limit. Changing the selected account reloads its defaults.

These edits belong to the draft and run. They don't change your account settings. Launch captures the risk configuration, so later changes to live defaults don't alter the run or its recovered replay.

For Autonomous replay:

1. Select the model and set `Max AI cycles`.
2. Add optional `Instructions` for strategy notes or special guidance. Cortiq retains these for planning, later decisions, and resumed replay.
3. Read the run summary and acknowledge the real-cost, candle-approximation, latency, SL-first, and historical-indicator warnings.

Broker-cost warnings explain estimated results. They don't require a separate cost acknowledgement.

Select `Start Backtest`. The detail page opens with the replay chart and saved run state. Start remains disabled while required model, coverage, or setup checks are incomplete.

### 5. Control manual replay

A new Manual run waits for your input before advancing. Select a timeframe in the chart toolbar, then use:

- `Next candle` to reveal the next available completed candle on that timeframe.
- `Previous candle` to restore an earlier retained replay state while auto replay is stopped. Rewind stops at the latest trade opening or the earliest retained checkpoint.
- `Auto replay` to repeat advances using `Delay` and `Candles/tick`.
- `Stop auto replay` to stop automatic advances while keeping manual stepping available.

Use the order ticket for simulated market, limit, and stop orders. Risk sizing uses simulated equity: starting capital plus realised replay P/L. Manage open positions from `Trade` with close, partial-close, and SL/TP actions.

The page-header `Pause` stops the whole run and disables stepping and trading. `Resume` enables those controls without advancing time. Leaving the detail page pauses Manual replay, and normal app close saves its checkpoint. Reopen the run and resume to continue.

Chart drawings and the selected timeframe are saved with the run. Manual replay Copilot uses the revealed replay context and simulated book; its tools don't place live orders.

### 6. Monitor autonomous replay and recover interruptions

Autonomous replay advances through historical M1 candles and runs AI cycles when its planning or accepted triggers require them. During a provider turn, replay time stays fixed while the status shows the active work. A turn can take several minutes.

Navigating away leaves an autonomous run working in the background. `Pause` lets the current AI call finish before parking replay; `Resume` continues from the committed boundary. `Cancel Run` ends the replay and keeps its recorded partial results.

Cortiq supports up to five active background backtests. Pause doesn't free an active run's slot; finish or cancel a run before starting a sixth.

After an app restart, interrupted runs with valid saved checkpoints return as `Paused`. Resume them explicitly. An interrupted provider request isn't continued mid-call. If a failed autonomous run has a valid checkpoint before the end of its period, the page offers `Resume from checkpoint`. Completed and cancelled runs don't resume; a Manual run without a valid checkpoint cannot recover.

Provider rate limits and some bounded recovery conditions also pause autonomous replay with a reason. Inspect that reason before choosing `Resume` or `Retry and resume`. Open simulated positions remain in the saved recovery state; Cortiq doesn't infer when your provider's allowance resets.

## Verify the result

Open the run from Backtests and check its status, period, warnings, and recorded coverage before interpreting P/L. `Completed` means replay reached its stopping condition; check whether the AI-cycle cap shortened it.

| View | What to inspect |
| --- | --- |
| `Overview` | Recorded performance, analysis metrics, and their evidence coverage or limitations. |
| `Trade` | Open and pending simulated positions. Manual actions require an active Manual run. |
| `History` | Closed trades, execution prices, net result, and cost evidence. |
| `Observations` | Saved observations and historical cycle-memory material; raw text alone isn't verified proof. |
| `Warnings` | Replay approximations, missing evidence, and run limits. |
| `AI Cycles` | Autonomous decisions, execution outcomes, and reasons an intended trade didn't open. |
| `Settings` | Autonomous run settings, selected packages, model, and saved instructions. |

Autonomous chart decision markers open the corresponding decision details. Inspect the recorded evidence and rejection reason when the AI intended a trade but no position opened.

### Request a review

Select `Review backtest` when the control is available. Reviews use stable saved evidence: terminal runs can qualify, as can paused autonomous runs. Running replay isn't reviewed concurrently. Manual backtests can be reviewed without AI cycles.

A review assesses decisions and outcomes, identifies supported Observations, and proposes improvements. It doesn't automatically edit a playbook or create a Learning or Edge. `Discuss` opens the suggestion in Copilot for further work.

`Update review` incorporates new completed evidence; unchanged evidence reuses the saved result. Review generation is explicit and can spend provider allowance. Opening, finishing, or recovering a backtest doesn't start a review automatically. See [Session review](/cortiq-public/session-review/) for review configuration and uncertain-request recovery.

## Understand the limits

Replay results depend on the historical data and broker evidence available to Cortiq.

- **Candle fills are approximate.** M1 OHLC doesn't reconstruct tick order, intraminute spread movement, or actual slippage. Ambiguous exits use conservative SL-first ordering after available lower-timeframe evidence.
- **Costs can be estimates.** Spread is included in execution prices. Commission, swap, and separate broker fees appear as explicit charges when calculable. Missing charges are omitted with a reason and an estimated-net label; they aren't proof of zero cost. Open `Trade costs` to inspect the evidence.
- **Broker rules are captured at run start.** Current specifications and commission rules don't reproduce every historical broker schedule.
- **Historical account state isn't reconstructed.** Starting capital and replay trades determine simulated equity and risk results, rather than the account's actual past balance or margin.
- **Historical inputs have limits.** News depends on available historical sources, and indicators need historical-range support. Review the run's input and warning details.
- **No-lookahead applies to supplied replay evidence.** Chart, candle, artifact, and Manual Copilot reads are bounded by the revealed cursor. This doesn't remove a model's pre-existing knowledge or turn an approximate replay into proof of future performance.

## What to read next

1. [Playbooks & data](/cortiq-public/playbooks-and-data/) — prepare the playbooks and policy for an autonomous replay.
2. [Research](/cortiq-public/research/) — investigate whether a market observation repeats across occurrences.
3. [Session review](/cortiq-public/session-review/) — interpret saved evidence and evaluate suggested improvements.

## Related

- [Sessions](/cortiq-public/sessions/)
- [Risk management](/cortiq-public/risk-management/)
- [AI providers](/cortiq-public/ai-providers/)
- [Glossary](/cortiq-public/glossary/)
