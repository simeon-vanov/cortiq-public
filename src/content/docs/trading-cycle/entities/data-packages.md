---
title: Data Package Entity
description: What a Cortiq data package contains and how it controls the live information the AI receives.
---

The data package is the entity that controls what the AI can see during a trading cycle.

## What A Data Package Contains

A data package can define:

- one or more timeframes
- candle depth per timeframe
- indicator inputs
- screenshot capture rules
- economic-calendar context
- account information
- risk and performance context
- trade history and supporting data

## Data Package Parts Explained

### Timeframes

Timeframes decide which chart views the AI receives.

Use them to give the AI the right balance of:

- execution detail
- structural context
- higher-timeframe direction

### Candle Depth

Candle depth controls how much historical data is sent for a given timeframe.

More bars can help with structure, but too many bars can also increase prompt weight and reduce clarity.

### Indicators

Indicators add calculated market context on top of raw candles.

Use them when the strategy truly depends on them. Avoid adding indicators only because they are familiar.

### Screenshots

Screenshots attach chart images for selected timeframes.

They are most useful when visual structure matters, such as:

- trend shape
- support and resistance zones
- pattern recognition
- context that is easier to see than describe numerically

### News, Account, Risk, And Trade History

These toggles widen the context beyond pure chart data.

They help when the AI should consider:

- event risk
- current account state
- platform risk state
- recent trading behavior

## How Screenshot Capture Works

In practical terms, screenshots are configured per timeframe.

- A timeframe can have screenshots enabled or disabled.
- Screenshot collection is most useful on the timeframes where chart structure matters.
- If screenshots are enabled, Cortiq can include the relevant chart image alongside the rest of the market payload.
- Screenshots work best when paired with the indicators that matter on that same timeframe.

This means screenshots should be treated as selective visual context, not as something to enable everywhere by default.

## Why Screenshot Discipline Matters

Screenshots can improve understanding, but they are not free.

They can increase prompt weight and operational complexity, so the best professional setups usually:

- enable screenshots only on the most meaningful timeframes
- avoid visual duplication across too many charts
- use screenshots when visual confirmation genuinely improves decision quality

## Why It Matters

The data package is not the strategy. It is the information scope.

This distinction is important:

- playbooks tell the AI what to look for
- data packages tell the AI what it is allowed to use while looking for it

## Good Public Use Cases

Use lean data packages for:

- focused intraday setups
- narrow strategy logic
- faster review and less noise

Use broader packages for:

- multi-timeframe swing workflows
- more context-heavy strategies
- workflows where screenshots and broader account context genuinely help

## What It Uses

Data packages usually work together with:

- [Playbooks](../entities/playbooks/)
- [Sessions](../entities/sessions/)
- [Preparation Packages](../entities/preparation-packages/)

## Best Practice

Keep the package tight enough that every included input has a reason to be there.

## Related Guide

- [Data Package Design Guide](../data-package-design/)