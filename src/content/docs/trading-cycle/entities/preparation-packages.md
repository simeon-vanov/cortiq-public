---
status: current
title: Preparation packages
description: Review a preparation recipe's inputs, generate a report, and inspect its saved analysis, history, effective time, and expiry.
sidebar:
  order: 50
---

A preparation package defines reusable market analysis. Generate a report from that recipe, then use the valid report as context for a session or historical replay.

## What this is

The **package** is the recipe: instrument, analysis instructions, linked skills, data policy, and expiry settings. A **report run** is one saved result with its own effective time, inputs, analysis, and deadline.

Keeping the recipe separate from its results lets you inspect what was known at a particular time. Editing today's recipe does not make an old report fresh.

## How it fits into Cortiq

Preparation can describe higher-timeframe structure, regimes, directional context, or key levels. [Sentiment](/cortiq-public/trading-cycle/entities/sentiment-reports/) supplies current external research; an [instrument profile](/cortiq-public/trading-cycle/entities/instrument-profiles/) holds slower-changing context.

A session's execution policy and a package's generation policy have different jobs. The package policy supplies the inputs needed to produce the report. Execution checks the resulting report's instrument, type, effective time, and expiry when the playbook requires it. The package's raw research lookbacks do not automatically become per-decision requirements.

## Before you begin

- Connect the source MT5 account and configure the generation provider.
- Define the actual analysis recipe and its linked skills.
- Select a data policy that supplies those instructions' required candles and exact indicators.

If the recipe asks for an unspecified indicator period or an unclear freshness window, clarify it before generation.

## Generate prepared context

1. Open **Preparation** → **Preparation** and select or create your package.
2. Review the recipe, custom instructions, linked skills, data policy, and expiry.
3. Use the input-review control to check the recipe against its policy.
4. Save the reviewed recipe. Material edits require matching input review again.
5. Select **Generate report**.
6. Open the saved run and check its analysis, effective time, deadline, and recorded input limitations.

Generation checks the actual delivered closed candles and indicators before asking the model to analyse them. A compatible configuration alone does not prove that the source returned the required data.

## Read saved reports

Use the selected-run briefing and history to inspect the intended report. Read the report's effective time and expiry alongside its content, particularly when viewing historical runs.

Expiry recipe edits describe future reports. Read any explicit override preview before changing the validity of existing results. Extending an expiry cannot supply missing source evidence.

## Use preparation in execution and backtests

Attach the package through the session or playbook configuration that needs it. Required report coverage blocks execution when a usable report is missing; optional context can be absent. Report validity uses the actual effective-to-expiry interval, not merely the existence of a report on that calendar date.

Backtest setup shows historical coverage and generation progress. Generate only supported historical analysis, and inspect failures before starting replay. Historical sentiment has a separate restriction: current web search cannot be backdated.

## Verify the result

Confirm that a new saved run exists and that its instrument, analysis type, effective time, and expiry match your intended use. If required inputs are missing, repair the recipe or source and generate again; an old report still visible on the page is not proof that the latest attempt succeeded.

## Common questions

### Why do I need to review inputs before generation?

The review checks whether the recipe and selected policy agree. Runtime collection then checks whether the actual required data arrived. These checks answer different questions.

### Does attaching a preparation skill make all its raw inputs mandatory during trading?

No. Recipe inputs belong to report generation. Execution requirements come from the trading rules and their report dependencies.

## What to read next

1. [Playbooks and data access policies](/cortiq-public/playbooks-and-data/) — align rules and allowed execution inputs.
2. [Backtesting](/cortiq-public/backtesting/) — fill historical report coverage.
3. [Supporting context](/cortiq-public/trading-cycle/supporting-context/) — compare the supporting layers.

## Related

- [Sentiment reports](/cortiq-public/trading-cycle/entities/sentiment-reports/)
- [Instrument profiles](/cortiq-public/trading-cycle/entities/instrument-profiles/)
- [Sessions](/cortiq-public/sessions/)
