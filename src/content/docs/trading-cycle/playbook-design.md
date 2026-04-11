---
title: Playbook Design Guide
description: How to structure each playbook section professionally so the AI can reason clearly and consistently.
---

This page explains how to write playbooks professionally.

The main idea is simple: each section of a playbook should have one job.

When sections are mixed together, the AI gets a blurred strategy. When sections are clean, the AI gets a more disciplined operating framework.

## Playbook Structure At A Glance

| Section | Main Job |
| --- | --- |
| Name and description | Identify the strategy clearly |
| Market bias | Tell the AI what style of setup this is |
| Primary timeframe | Define where the broader structure is judged |
| Entry timeframe | Define where the trigger must appear |
| Setup conditions | Describe what the market must look like |
| Entry conditions | Describe what must happen before execution |
| Risk rules | Define stop, target, and risk boundaries |
| Trade-management rules | Define what to do after entry |
| Invalidation conditions | Define when the setup is no longer valid |
| Preferred symbols and sessions | Express where the playbook fits best |

## How To Write Each Section

### Name And Description

Use these fields to make the playbook understandable to a human reviewer first.

Good naming makes later journal review much easier.

### Market Bias

Use this to classify the strategy style.

Examples:

- trend following
- mean reversion
- breakout
- range
- news-driven

This is not where you explain the whole strategy. It is where you tell the AI what type of reasoning frame to apply.

### Primary Timeframe

Use the primary timeframe for the bigger structural read.

This is usually the chart where trend, structure, or broad regime should be judged.

### Entry Timeframe

Use the entry timeframe for the trigger.

This is where the setup becomes actionable.

The entry timeframe should usually be tighter than the primary timeframe.

### Setup Conditions

This is the section for market context.

Use it for conditions like:

- directional alignment
- structure location
- trend quality
- volatility conditions
- higher-timeframe agreement

Good setup conditions answer:

What must be true before we even care about an entry?

### Entry Conditions

This is the section for timing.

Use it for:

- trigger candles
- retests
- confirmation behavior
- level reactions
- final filters before the trade is allowed

Good entry conditions answer:

What must happen before the AI is allowed to act?

### Risk Rules

This section should explain how the trade is protected.

Use it for:

- stop-loss logic
- take-profit logic
- minimum reward-to-risk rules
- special risk boundaries or no-trade conditions tied to risk

Good risk rules tell the AI how to avoid low-quality trade framing, not only where to place a stop.

### Trade-Management Rules

This section explains what happens after entry.

Use it for:

- trailing rules
- break-even rules
- partial exits
- conditions for holding or reducing exposure

Keep this section separate from the initial risk rules so the AI can distinguish pre-entry discipline from post-entry management.

### Invalidation Conditions

This section explains when the whole idea should be abandoned.

This is one of the most valuable sections in a professional playbook because it gives the AI permission to stop forcing a setup that is no longer valid.

### Preferred Symbols And Preferred Sessions

Use these to express fit.

They help the user and the system keep a playbook aligned with the markets and trading windows where it tends to make sense.

They should support the main logic, not replace it.

## Common Playbook Mistakes

- putting entry logic into setup conditions
- mixing risk rules with management rules
- writing invalidation as an afterthought or not at all
- writing vague playbooks that sound intelligent but cannot be reviewed objectively later
- making one playbook responsible for too many different market types

## Professional Writing Pattern

The cleanest playbooks usually follow this flow:

1. describe the market context
2. describe the trigger
3. describe the risk box
4. describe the management plan
5. describe the invalidation path

## What Good Playbook Documentation Does For The Customer

Well-structured playbooks help the customer:

- keep strategy logic understandable
- review trades more objectively
- improve AI consistency
- separate strategic intent from execution timing

## Related Pages

- [Playbooks and Data Packages](../playbooks-and-data/)
- [Playbooks](entities/playbooks/)
- [Sessions and AutoScan](../sessions-and-autoscan/)