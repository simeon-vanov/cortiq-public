---
title: Instrument profiles
description: The instrument profile entity — long-lived persistent knowledge about how a symbol behaves, used as a behavior reference layer in the trading cycle.
sidebar:
  order: 60
---

This is the entity reference for instrument profiles. By the end you'll know what belongs in a profile, what doesn't, and how it differs from sentiment reports and preparation packages.

## What this is

Instrument profiles store persistent knowledge about how a market typically behaves. Charts show what's happening *now*; instrument profiles explain what's *normal or unusual* for that symbol over time.

A profile can include volatility character, range behavior, session tendencies, recurring structural habits, and longer-lived notes that help interpret the instrument correctly.

## How it fits into Cortiq

Instrument profiles are reusable support layers attached to sessions. They age slowly — update them every few weeks at most. They're not for short-term directional calls; that's the role of sentiment reports.

For the broader support-layer model, see [Supporting context](../supporting-context/).

## How to use it

Use an instrument profile for symbols where behavior patterns matter and a longer-lived context layer improves decisions. The profile helps the AI judge:

- Whether price behavior is stretched or typical.
- Whether a move is unusually aggressive for this market.
- How much session behavior matters for this symbol.

## Reference

### Important distinction

An instrument profile is a *behavior reference layer*, not a short-term bullish or bearish call. If the content goes stale within a week, it doesn't belong in the profile — write a sentiment report instead.

### Compare to other support layers

| Layer | Half-life | Best for |
| --- | --- | --- |
| Instrument profile | Weeks to months | Persistent symbol behavior. |
| Preparation package | Hours to days | Slower-moving prepared analysis. |
| Sentiment report | Hours to a few days | News, macro, positioning. |

## What to read next

1. [Supporting context](../supporting-context/) — how the support layers fit together.
2. [Sentiment reports](sentiment-reports/) — for shorter-lived external context.
3. [Preparation packages](preparation-packages/) — for cached analysis.

## Related

- [Sessions](sessions/)
- [Trading cycle: overview](../overview/)
- [Glossary](../../glossary/)
