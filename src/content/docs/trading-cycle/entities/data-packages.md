---
title: Data packages
description: The data package entity — what it contains, how its parts relate, and what to keep in mind when designing payloads the AI can reason on cleanly.
sidebar:
  order: 20
---

This is the entity reference for data packages. By the end you'll know what each part of a package does and which decisions earn their place in the prompt.

## What this is

The data package controls what the AI can see during a trading cycle. It is the *information scope*, not the strategy:

- Playbooks tell the AI what to look for.
- Data packages tell the AI what it's allowed to use while looking for it.

A package can include one or more timeframes (with candle depth), indicator inputs, screenshot capture rules, economic-calendar context, account information, risk and performance context, and recent trade history.

## How it fits into Cortiq

A data package is referenced by sessions. The same package can be reused across sessions; one session points at exactly one package. For the design discipline, read [Data package design guide](../data-package-design/).

## How to use it

### Timeframes and candle depth

Each timeframe gives the AI a specific market view; candle depth controls how much history per view. More history isn't always better — the right amount depends on whether the strategy needs broader structure or sharper recent action.

### Indicators

Indicators add calculated context on top of raw candles. Use them when the strategy genuinely depends on them. Avoid adding popular indicators reflexively.

### Screenshots

Screenshots are configured per timeframe. They're most useful when chart structure carries meaning the candle table doesn't — trend shape, support/resistance zones, pattern recognition. Enable them on the timeframes where the visual earns its place; disable them where the candles already say enough.

### News, account, risk, and trade history toggles

These widen the context beyond pure chart data. Useful when the AI should consider event risk, account state, platform risk, or recent trading behavior — but they all add weight, so toggle them on with intent.

## Reference

### Lean vs broad packages

| Use a lean package for | Use a broader package for |
| --- | --- |
| Focused intraday setups | Multi-timeframe swing workflows |
| Narrow strategy logic | Context-heavy strategies |
| Faster review and less noise | Workflows where screenshots or broader context genuinely help |

### Screenshot discipline

- Enable screenshots only on the most meaningful timeframes.
- Avoid visual duplication across multiple charts.
- Pair screenshots with the indicators that matter on that timeframe.

## What to read next

1. [Data package design guide](../data-package-design/) — the design discipline.
2. [Playbooks](playbooks/) — the entity reference for the strategy layer.
3. [Sessions](sessions/) — what binds package and playbook together.

## Related

- [Playbooks & data packages](../../playbooks-and-data/)
- [Preparation packages](preparation-packages/)
- [Trading cycle: overview](../overview/)
- [Glossary](../../glossary/)
