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