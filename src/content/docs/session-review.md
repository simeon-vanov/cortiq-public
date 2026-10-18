---
status: current
title: Session review
description: Review saved session or backtest evidence, inspect supported Observations, and discuss improvements without changing trading rules automatically.
sidebar:
  order: 100
---

A review assesses recorded decisions and outcomes, captures supported market Observations, and proposes improvements. You request it explicitly and inspect its coverage before using the result.

## What this is

Review works from saved evidence. It can explain a loss without declaring the decision wrong, or a profit without declaring the strategy sound. A later market move alone does not prove that an entry was available at the time.

Stopping a session, opening a page, receiving new evidence, or restarting Cortiq does not start a review or a paid AI call.

## How it fits into Cortiq

| Result | What you use it for |
| --- | --- |
| **Session assessment** | Understand recorded decisions, trade outcomes, and the limits of the available evidence. |
| **Observations** | Inspect specific market facts admitted into the instrument's Knowledge with supporting proof. |
| **Suggested improvements** | Discuss a proposed comparison or open an artifact editor to make a deliberate change. |

A review creates Observations when their evidence passes the required checks. It does not directly create Learnings, Edges, playbooks, rules, or new automatically injected lessons. Use [Research](/cortiq-public/research/) to study comparable events and review a broader conclusion.

## Before you begin

- Save session activity or backtest progress to review. Zero-trade sessions and manual backtests can still contain useful evidence.
- Configure **Setup** → **AI Providers** → **Review**. Review has its own provider/model settings and uses **Max** reasoning effort.
- Check the provider's billing or subscription allowance. An explicit new review can make AI calls.

The selected provider must support the required effort. A missing or unsupported route produces a configuration error; Cortiq does not silently select a cheaper model or another provider.

## Review a session

1. Open the session's **Reviews** tab.
2. Select **Review session**. You can review completed evidence while the session is running; after stopping, the control is also available in the header.
3. Wait for the saved assessment and Observation results.
4. Inspect **Reviewed through**, the included run periods, and coverage counts.
5. Open individual Observations to check their source evidence, or discuss an improvement with Copilot.

**Update review** examines newly completed evidence. If the evidence is unchanged, Cortiq reuses the durable result without another prompt or review version.

In-flight cycles are excluded. Open positions have outcomes frozen at the review cutoff. The coverage display distinguishes included, skipped, unavailable, and unfinished evidence; a partial review is not a complete account of the run.

## Review a backtest

Open a saved backtest after it is **Completed**, **Cancelled**, or **Failed**. An Autonomous backtest can also be reviewed while **Paused**; a paused Manual replay does not show review controls. Do not advance replay while reviewing it.

The review uses the saved execution inventory and replay statistics. A manual run does not need AI decision cycles to be reviewed. Read trade legs, closed positions, and still-pending positions as separate counts.

Saved trade review remains useful when historical market context is unavailable. Additional historical candles, when collected, are retrospective context: they do not prove what you saw at entry. Missing costs, rule versions, or outcomes remain stated limitations.

## Read and act on the results

### Check the assessment's scope

Start with the cutoff and evidence coverage. Distinguish decision quality from outcome quality, and recorded rule adherence from assumptions about what the rules used to be.

### Inspect supported Observations

Observation admission checks the instrument, recognition time, source ownership, and measurable facts. An AI sentence or chart recollection is not enough. Unsupported concepts remain unresolved rather than becoming knowledge automatically.

Repeated captures of the same event do not count as independent evidence. Follow an admitted Observation into the [Instrument Hub](/cortiq-public/instrument-hub/) to review it or research similar events.

### Discuss improvements before changing rules

Use **Discuss** to give Copilot the proposal and its context. Artifact links open the corresponding editors. Review the changes and save them through those editors.

Changing a suggestion's status does not apply a rule, establish an Edge, or validate an experiment. Historical **Applied** labels remain readable as history.

## Continue after interruption

Review saves completed stages and keeps earlier successful content available during an update or failure. Use the visible status to distinguish complete, partial, unavailable, failed, cancelled, outdated, and uncertain work.

**Cancel review** stops the current work. A request that was sent without a saved response has uncertain completion and billing. Ordinary Update does not resend it. **Retry uncertain request** is a separate explicit action that can send another paid request.

Restarting Cortiq does not automatically resume paid review work.

## Verify the review

The result should show the reviewed cutoff, coverage, and an assessment state. Open an admitted Observation and confirm its instrument and source. If coverage is partial or unavailable, retain that limitation when interpreting the conclusion.

The global **Session Reviews** page lists saved versions and links to each session. It reads results; the session's review controls start or update the work.

## Historical reviews and lessons

Older reviews, notes, attention flags, and lessons remain accessible in read-only history. The old automatic distillation and lesson-injection workflow is retired. Historical lessons do not become new session instructions.

## What to read next

1. [Instrument Hub](/cortiq-public/instrument-hub/) — inspect Observations and reviewed Learnings for the market.
2. [Research](/cortiq-public/research/) — measure comparable occurrences before generalizing from one run.
3. [Backtesting](/cortiq-public/backtesting/) — test a proposed execution change on historical data.

## Related

- [Journal and analytics](/cortiq-public/journal-and-analytics/)
- [AI providers](/cortiq-public/ai-providers/)
- [Cortiq Copilot](/cortiq-public/cortiq-copilot/)
- [Sessions](/cortiq-public/sessions/)
