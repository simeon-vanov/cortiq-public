---
title: Preparation packages
description: The preparation package entity — slower-moving cached analysis that supports the live trading loop without inflating every cycle's prompt.
sidebar:
  order: 50
---

This is the entity reference for preparation packages. By the end you'll know what they hold, when to refresh them, and which strategies benefit most.

## What this is

Preparation packages store cached analysis that supports the live trading loop. The idea is simple: some analysis is useful but not useful enough to regenerate every cycle. Examples — broader market structure, regime classification, higher-timeframe directional framing, prepared key-level maps.

A preparation package can define what type of analysis to generate, the symbol it applies to, the data source, custom prompts for specialized analysis, and refresh behavior (candle-count or price-movement triggers).

## How it fits into Cortiq

Preparation packages are referenced by sessions as a support layer. The same package can be reused across sessions; one session typically references one prep package per topic. For the role within the cycle, see [Supporting context](/cortiq-public/trading-cycle/supporting-context/).

## How to use it

Use a preparation package when you want the AI to begin each cycle with already-prepared context rather than rediscovering the same structure repeatedly. A daily preparation package refreshed before market open is a high-impact layer for swing-style sessions.

Update or refresh the package when the underlying structure changes — most prep packages refresh on a candle-count trigger (every N higher-timeframe candles) or a price-movement trigger (when price moves outside the prepared range).

## Reference

### Good fit

- Higher-timeframe structure summaries.
- Regime classification (trending, ranging, transitional).
- Directional skew from slower charts.
- Prepared key-level maps for the session window.

### Poor fit

- Single-cycle observations (those belong in the data package).
- Discretionary one-off theses (those belong in trade ideas).
- Persistent symbol behavior (that belongs in the instrument profile).

## What to read next

1. [Supporting context](/cortiq-public/trading-cycle/supporting-context/) — how prep packages relate to other support layers.
2. [Instrument profiles](/cortiq-public/trading-cycle/entities/instrument-profiles/) — for context that ages slower than prep packages.
3. [Sessions](/cortiq-public/trading-cycle/entities/sessions/) — how the package is attached.

## Related

- [Data packages](/cortiq-public/trading-cycle/entities/data-packages/)
- [Sentiment reports](/cortiq-public/trading-cycle/entities/sentiment-reports/)
- [Trading cycle: overview](/cortiq-public/trading-cycle/overview/)
- [Glossary](/cortiq-public/glossary/)
