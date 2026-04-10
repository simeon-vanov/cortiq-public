---
title: Playbook Entity
description: What a playbook is and how it defines strategy logic inside the trading cycle.
---

The playbook is the strategy entity in Cortiq.

## What A Playbook Contains

A playbook typically defines:

- market conditions the setup requires
- entry conditions and filters
- invalidation logic
- stop and target guidance
- trade-management expectations
- priority relative to other linked playbooks

## Playbook Sections Explained

### Market Bias

This is the strategy hint.

Use it to tell Cortiq whether the playbook is fundamentally a trend-following, mean-reversion, breakout, range, or similar style setup.

### Primary Timeframe

This is the main analysis timeframe.

It tells the AI where the broader market structure for the setup should be judged.

### Entry Timeframe

This is the trigger timeframe.

It tells the AI where the actual execution signal should appear after the setup becomes valid.

### Setup Conditions

This section explains what the market must look like before the setup is considered real.

Use it for structure, alignment, volatility character, trend state, or regime conditions.

### Entry Conditions

This section explains what must happen before the AI is allowed to act.

Use it for confirmation, timing, candle behavior, or specific trigger logic.

### Risk Rules

This section explains how the trade should be boxed.

Use it for stop placement, take-profit logic, reward-to-risk thresholds, or sizing boundaries.

### Trade Management Rules

This section explains what should happen after entry.

Use it for trailing, partials, break-even logic, or what should happen as the trade progresses.

### Invalidation Conditions

This section explains when the setup should be abandoned.

Use it to tell the AI exactly what makes the playbook no longer trustworthy.

### Preferred Symbols And Preferred Sessions

These fields help the user express where the playbook belongs.

They are useful when a setup works better on certain markets or during certain trading windows.

## Best Practice For Each Section

- Keep setup conditions broader than entry conditions.
- Keep entry conditions more precise than setup conditions.
- Keep risk and management rules separate.
- Always define invalidation if the setup can lose its logic.
- Use preferred symbols and sessions as fit guidance, not as a substitute for the actual setup logic.

## Why It Matters

Playbooks keep the AI inside a structured trading framework.

That means Cortiq is not just asking an AI model to improvise trades from raw chart data.

## What A Good Playbook Looks Like

Good playbooks are:

- narrow enough to be clear
- specific enough to be testable in journals and reviews
- explicit about when not to trade
- explicit about what to do after entry

## What A Playbook Should Not Be

A playbook should not be:

- a catch-all idea list
- a macro-news summary
- a one-off active thesis for one current setup

Those belong in other entities such as trade ideas or sentiment reports.

## What It Uses

Playbooks work most effectively with:

- [Data Packages](../entities/data-packages/)
- [Sessions](../entities/sessions/)
- [Trade Ideas](../entities/trade-ideas/)

## Related Guide

- [Playbook Design Guide](../playbook-design/)