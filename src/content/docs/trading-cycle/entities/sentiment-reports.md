---
status: current
title: Sentiment reports
description: Generate current sentiment from provider web research, inspect saved sources and history, and distinguish report expiry from confidence.
sidebar:
  order: 70
---

Sentiment reports add current news, macro, positioning, and event context to one instrument's technical analysis. Each saved report has a research source trail and a finite validity window.

## What this is

A sentiment package is the reusable recipe: instrument, instructions, skills, optional data policy, and expiry settings. Generating it creates a report run. Editing the recipe does not rewrite the saved report's narrative or research evidence.

Cortiq first asks the selected provider to research the current web, then synthesizes that evidence. A report requires a completed search, an observed query, and an observed source URL. Empty or failed research creates no report.

## How it fits into Cortiq

Sessions can use a valid sentiment report as supporting context when their rules call for it. It can qualify a technical read, but does not override playbook authority or risk controls.

The economic calendar can supplement web research; it does not replace it. [Preparation packages](/cortiq-public/trading-cycle/entities/preparation-packages/) serve a different purpose: analysis of their configured market inputs.

## Before you begin

- Configure both provider and connection type for **Sentiment Reports** under **Setup** → **AI Providers**.
- Use a supported web-research connection. OpenAI and Claude support API and subscription/ACP paths; Gemini and OpenRouter use API. Local Model has no supported live-search adapter.
- Check the selected provider's search allowance or billing. Research uses your subscription, API account, or OpenRouter credits.

Cortiq keeps your selected route. A failed research request does not silently switch providers.

## Generate and inspect a report

1. Open **Preparation** → **Sentiment** and select or create the package for your instrument.
2. Review its instructions, linked skills, optional data policy, and report-expiry recipe.
3. Generate a current report.
4. Open its briefing, sources, and research details.
5. Check its deadline before using it in a session.

The detail page initially shows the newest saved run, including an expired one. Selecting history pins that run for inspection; check which report is selected before interpreting the page.

### Read the labels separately

| Information | What it tells you |
| --- | --- |
| **Current / Expired** | Whether the report is inside its saved validity window. |
| AI confidence | The model's confidence in its interpretation, not the report's age or a trading success rate. |
| Coverage, conflicts, and unknowns | What the gathered evidence supports, where it disagrees, and what is missing. |
| Research details | The saved provider, connection, research time, queries, searches, and billing owner. |
| Sources | URLs actually observed during research. They support the report as a whole, not individual linked claims. |

Research time is when Cortiq gathered the material. Source publication dates are not recorded; do not interpret research time as an article's publication date.

### Review history and expiry

Use recent history or **All history** to select a saved report. History filters use local generated dates and Current/Expired state.

Recipe expiry edits apply to future reports. An advanced package-wide override requires acknowledgment and can affect existing report deadlines, so read its preview before applying it.

Generate manually when the evidence needs refreshing. An enabled running session can renew sentiment on expiry. Candle-count and price-move refresh triggers are not available for sentiment.

## Verify the report

A successful run has a saved briefing, observed source links, research details, and a deadline. If generation fails, the previous saved run can remain visible; its presence does not mean the new attempt succeeded.

## Troubleshooting

| Symptom | Action |
| --- | --- |
| Missing provider or connection | Select both fields in Sentiment Reports settings. |
| Unsupported connection | Choose a supported web-research combination. |
| Authentication or quota failure | Reconnect the selected provider or check its allowance and billing. |
| Empty evidence | Retry with a search-capable connection; no new report was saved. |
| Historical research unavailable | Do not substitute today's search for a past date. Historical/backdated sentiment generation is unsupported. |

A backtest that requires historical sentiment needs usable historical evidence. Present-day news cannot fill that gap without lookahead.

## What to read next

1. [Supporting context](/cortiq-public/trading-cycle/supporting-context/) — choose the right context layer.
2. [AI providers](/cortiq-public/ai-providers/) — configure explicit routes and connections.
3. [Backtesting](/cortiq-public/backtesting/) — understand historical coverage requirements.

## Related

- [Preparation packages](/cortiq-public/trading-cycle/entities/preparation-packages/)
- [Instrument profiles](/cortiq-public/trading-cycle/entities/instrument-profiles/)
- [Sessions](/cortiq-public/sessions/)
