---
title: Data Package Design Guide
description: How to design timeframes, indicators, screenshots, and payload scope for a professional Cortiq data package.
---

This page explains how to design a data package professionally.

The goal of a good data package is not to include everything. The goal is to include the right information for the strategy.

## Data Package Design Goals

A good data package should help the AI:

- understand the market structure clearly
- see the indicators the strategy truly depends on
- avoid prompt overload
- get visual context only where that visual context adds value

## The Main Design Parts

| Part | Main Job |
| --- | --- |
| Timeframes | Decide which market views the AI receives |
| Candle depth | Decide how much history is sent per timeframe |
| Indicators | Add technical context where it matters |
| Screenshots | Add visual chart context where it helps |
| News and account context | Add broader operating information |
| Token budget | Keep the payload within a sensible size |

## How To Think About Timeframes

Use each timeframe for a specific job.

Examples:

- one higher timeframe for structure
- one main timeframe for setup validation
- one tighter timeframe for entry confirmation

If you cannot explain why a timeframe is included, it probably does not belong in the package.

## How To Think About Candle Depth

More history is not always better.

Use deeper history when the strategy needs broader structure. Use shallower history when the strategy needs speed and clarity.

The customer question should be:

How much history does the AI actually need to make this strategy work well?

## How To Think About Indicators

Indicators should support the playbook, not compete with it.

Use indicators when:

- the strategy really depends on them
- the AI benefits from those values consistently
- they reduce ambiguity rather than add noise

Do not add indicators only because they are popular.

## How Screenshots Work

Screenshots are configured per timeframe.

In practice, this means:

- you choose which timeframes should produce chart images
- Cortiq captures those charts when screenshots are enabled for that timeframe
- the AI can receive those images as part of the market context
- indicators configured on the same timeframe can be part of that visual chart view

Screenshots are best used when the strategy benefits from visual confirmation of:

- price structure
- trend shape
- support and resistance zones
- chart patterns
- context that is awkward to express from candle values alone

## When Screenshots Help Most

Screenshots are especially useful when:

- the setup depends on visual pattern recognition
- the higher-timeframe chart structure matters strongly
- the operator wants the AI to confirm what a human would normally inspect visually

## When Screenshots Should Be Used Sparingly

Screenshots should be used carefully when:

- the strategy is already clear from candle and indicator data alone
- too many visual charts would duplicate the same information
- prompt size and processing weight matter more than visual confirmation

Professional setups usually enable screenshots only on the timeframes where the image earns its place.

## Timeframe Tiers And Screenshot Scope

The data-package model supports different collection depth and screenshot scope for lighter and heavier passes.

For customers, the practical takeaway is this:

- not every timeframe needs the same amount of history every time
- not every timeframe needs screenshots every time
- the package can be designed so the most important visual context is attached where it matters most

## Token Budget And Payload Discipline

Data packages also need size discipline.

More timeframes, more indicators, more screenshots, more news, and more account context all make the package heavier.

That is why a professional package design focuses on:

- signal quality over quantity
- clarity over completeness
- the smallest payload that still supports good decisions

## Professional Design Checklist

Before treating a data package as production-ready, ask:

1. Does each timeframe have a clear job?
2. Does each indicator serve the strategy rather than decorate it?
3. Are screenshots enabled only where visual context really helps?
4. Is the package still understandable when reviewed later in journals and session output?
5. Could I remove anything without hurting the strategy?

## What Good Data Package Documentation Does For The Customer

Well-designed data packages help the customer:

- get cleaner AI decisions
- reduce context noise
- make session behavior easier to review
- keep the strategy and the information scope aligned

## Related Pages

- [Playbooks and Data Packages](../playbooks-and-data/)
- [Data Packages](entities/data-packages/)
- [Supporting Context](supporting-context/)