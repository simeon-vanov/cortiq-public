---
status: current
title: Instrument profiles
description: Configure an instrument profile package, generate saved runs, and inspect current analysis, run metadata, and freshness before reuse.
sidebar:
  order: 60
---

Instrument profiles describe an instrument's recurring behavior. This reference explains the package recipe, generation runs, and saved outputs you inspect before attaching that context to a session.

## What this is

Instrument profiles store persistent knowledge about how a market typically behaves. Charts show what's happening *now*; instrument profiles explain what's *normal or unusual* for that symbol over time.

A profile can include volatility character, range behavior, session tendencies, recurring structural habits, and longer-lived notes that help interpret the instrument correctly.

A profile package is reusable configuration: instrument, description, data access policy, linked skills, lookback, refresh settings, and validity. Each generation creates a saved run with its profile outputs. Editing the package doesn't rewrite an earlier output's analysis.

## How it fits into Cortiq

Instrument profiles are reusable support layers attached to sessions. Review them when their evidence or market assumptions change; a recent save does not make old research current. Keep current external news in sentiment reports and prepared technical analysis in preparation reports.

For the broader support-layer model, see [Supporting context](/cortiq-public/trading-cycle/supporting-context/).

## How to use it

Use an instrument profile when recurring behavior provides relevant context. It helps the AI judge:

- Whether price behavior is stretched or typical.
- Whether a move is unusually aggressive for this market.
- How much session behavior matters for this symbol.

### Generate and inspect a profile

1. Open `Preparation` → `Instrument Profiles` and select or create the package for your symbol.
2. Review the description, linked skills, optional data access policy, and lookback. Confirm the generation provider in `Setup` → `AI Providers`.
3. Check the refresh mode and validity settings, then save the recipe.
4. Select `Generate` on the package detail page.
5. Inspect the new run's effective date, freshness badge, generator, trigger, and recorded token usage. Expand it to see output names and generation stamps.

The detailed analysis shows the latest valid profile. Expanding a historical run shows its metadata and output names; it doesn't switch that analysis to the historical content. A failed generation can leave an earlier valid profile visible.

### Check validity before reuse

The saved effective time and deadline determine when an output applies. The history row shows the effective date and freshness state, but doesn't expose the exact historical deadline. Review the package's validity hours and any fixed override alongside that state. A weeks-to-months research horizon is authoring guidance, not a guaranteed validity period.

The package validity override changes deadlines across its runs. Clearing it recomputes each deadline from that run's effective or generated time plus the package's validity hours. Changing a deadline doesn't refresh the underlying evidence; recheck the freshness badges.

### Verify the result

Confirm that generation added a run for the correct instrument with the expected effective date, freshness state, and output names. Review the latest valid analysis separately. A package alone, or an older profile still visible, doesn't prove the latest generation succeeded.

## Reference

### Important distinction

Keep recurring behavior in the profile. Use sentiment for changing external news and preparation for current technical structure. A short-lived directional call needs those more timely layers.

### Compare to other support layers

| Layer | Typical content horizon, not saved validity | Best for |
| --- | --- | --- |
| Instrument profile | Weeks to months | Persistent symbol behavior. |
| Preparation package | Hours to days | Slower-moving prepared analysis. |
| Sentiment report | Hours to a few days | News, macro, positioning. |

## What to read next

1. [Supporting context](/cortiq-public/trading-cycle/supporting-context/) — how the support layers fit together.
2. [Sentiment reports](/cortiq-public/trading-cycle/entities/sentiment-reports/) — for shorter-lived external context.
3. [Preparation packages](/cortiq-public/trading-cycle/entities/preparation-packages/) — for cached analysis.

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Instrument Profiles package list with the Create package entry point](/cortiq-public/images/screenshots/profiles__packages.png)

*The demo starts with no profile packages. Create a recipe before generating a saved output.*

## Related

- [Sessions](/cortiq-public/trading-cycle/entities/sessions/)
- [Trading cycle: overview](/cortiq-public/trading-cycle/overview/)
- [Glossary](/cortiq-public/glossary/)
