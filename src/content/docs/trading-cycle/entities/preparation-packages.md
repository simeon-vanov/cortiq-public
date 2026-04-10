---
title: Preparation Package Entity
description: How preparation packages store slower-moving pre-session analysis that supports the live cycle.
---

Preparation packages are the entity for cached analysis that supports the live trading loop.

## What A Preparation Package Contains

A preparation package can define:

- what type of analysis should be generated
- which symbol it applies to
- what data source it should use
- custom prompts for specialized analysis
- refresh behavior such as candle-count or price-movement triggers

## Why It Matters

Some analysis is useful, but not useful enough to regenerate every cycle.

Examples include:

- broader market structure
- regime classification
- higher-timeframe directional framing
- prepared key-level maps

Preparation packages let Cortiq carry this context into the cycle without making the live prompt heavier than necessary every time.

## Best Use Cases

Use preparation packages when you want the AI to begin with already prepared context rather than discovering the same structure again and again.

## What It Works With

- [Sessions](../entities/sessions/)
- [Data Packages](../entities/data-packages/)
- [Instrument Profiles](../entities/instrument-profiles/)
- [Sentiment Reports](../entities/sentiment-reports/)