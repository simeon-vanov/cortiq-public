---
status: current
title: Sentiment reports
description: Generate current sentiment from provider web research, inspect saved sources and history, and distinguish report expiry from confidence.
sidebar:
  order: 70
---

Sentiment reports add current news, macro, positioning, and event context to one instrument's technical analysis. Inspect each saved report's evidence and actual deadline; some saved reports have no deadline.

## What this is

A sentiment package is the reusable recipe: instrument, instructions, skills, optional data policy, and expiry settings. Generating it creates a report run. Editing the recipe does not rewrite the saved report's narrative or research evidence.

Cortiq first asks the selected provider to research the current web, then synthesizes that evidence. A report requires completed search evidence, observed source URLs, and substantive research text. Providers that don't expose queries must disclose that limitation. Empty or failed research creates no report.

## How it fits into Cortiq

Sessions can use a valid sentiment report as supporting context when their rules call for it. It can qualify a technical read, but does not override playbook authority or risk controls.

The economic calendar can supplement web research; it does not replace it. [Preparation packages](/cortiq-public/trading-cycle/entities/preparation-packages/) serve a different purpose: analysis of their configured market inputs.

## Before you begin

- Configure both provider and connection type for **Sentiment Reports** under **Setup** → **AI Providers**.
- Use a supported web-research connection. OpenAI and Claude support API and subscription/ACP paths; Gemini and OpenRouter use API. Local Model has no supported live-search adapter.
- Check the selected provider's search allowance or billing. Research uses your subscription, API account, or OpenRouter credits.

:::caution
While Cortiq runs, active packages can receive provider-billed post-event updates even without a running session. Review the package's automatic-refresh settings and active state before leaving it enabled.
:::

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
| **Current / Expired** | Whether the selected run is inside its saved validity window. A missing deadline means no deadline, not recent evidence. |
| AI confidence | The model's confidence in its interpretation, not the report's age or a trading success rate. |
| Coverage, conflicts, and unknowns | What the gathered evidence supports, where it disagrees, and what is missing. |
| Research details | The saved provider, connection, research time, observed queries/searches where recorded, missing telemetry, and billing owner. |
| Sources and claims | Observed URLs, claim-linked excerpts, and available publication or data-as-of dates. Older reports can have only report-level sources. |

Research time is when Cortiq gathered material. Source publication, event, and data-as-of dates appear where supplied; missing dates stay unknown. A page-update date doesn't establish the date of its underlying data.

Expand `Evidence and sources`, then `Claims and supporting evidence`, to inspect each claim's exact excerpt and recorded support. Research-summary and calendar evidence are labelled separately from source excerpts. Older reports retain their recorded report-level sources and limitations rather than gaining invented claim links.

`AI review` shows a separate model's assessment of factual support, freshness, balance, and confidence against the same evidence. An observed URL or quoted excerpt establishes traceability; neither proves that a claim is correct. AI review is not independent factual certification.

### Review history and expiry

Use recent history or **All history** to select a saved report. History filters use local generated dates and Current/Expired state.

Recipe expiry edits apply to future reports. An advanced package-wide override requires acknowledgment and can affect existing report deadlines, so read its preview before applying it.

### Understand automatic post-event updates

While the desktop host runs, Cortiq maintains the latest live, nonexpired report of every active package, including packages without sessions. Relevant exact-time High-impact calendar events become eligible after the package's configured delay: 30 minutes by default, adjustable from 0 to 1,440 minutes.

Calendar coverage requires a compatible connected MT5 adapter. Unavailable calendars, unknown instrument mappings, and tentative or date-only events remain coverage limitations. They don't count as confirmed event outcomes.

Eligible events share research and analysis. Each event has an initial attempt and up to three retries, ten minutes after the previous attempt completes. Your selected provider's allowance and billing apply. Inspect the update status, pending or exhausted events, and change history instead of assuming every event produced an update.

Updates keep the same report, original generation time, and original expiry. The saved history records triggering events and before/after content. Updates stop when the report expires or the package is deactivated; they don't automatically extend its validity.

Select `Generate` for full new research and a new saved run. An expired package without a running session needs this explicit renewal. A running session can renew expired sentiment when automatic artifact renewal is enabled. Candle-count and price-move refresh triggers are not available for sentiment.

## Verify the report

A successful run has a saved briefing, observed source links, research details, and a recorded validity state. Inspect its actual deadline, including no deadline. If generation fails, the previous saved run can remain visible; its presence does not mean the new attempt succeeded.

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

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Sentiment package list with the Create package entry point](/cortiq-public/images/screenshots/sentiment__packages.png)

*The demo has no active packages. Review provider-usage and event-update behavior before activating your own.*

## Related

- [Preparation packages](/cortiq-public/trading-cycle/entities/preparation-packages/)
- [Instrument profiles](/cortiq-public/trading-cycle/entities/instrument-profiles/)
- [Sessions](/cortiq-public/sessions/)
