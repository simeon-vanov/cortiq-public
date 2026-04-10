---
title: Session Trades and Timeline
description: How Cortiq records trade actions, decisions, and review history inside the trading cycle.
---

This part of the trading cycle is where execution becomes reviewable.

## What This Entity Group Covers

For customers, the most important output entities are:

- session trades
- session timeline entries
- cycle decisions and action history
- run and review history

## What Session Trades Represent

Session trades record:

- the instrument and action taken
- entry, stop, and target details
- whether the trade was live or virtual
- trade-management changes over time
- the strategy or idea that led to the trade
- screenshots, notes, and journal context when available

## What The Timeline Represents

The session timeline is the readable history of what happened in each cycle.

That can include:

- what the AI saw
- what it concluded
- whether it traded, held, or managed a position
- what happened after the decision

## Why It Matters

This is one of Cortiq's strongest product features because it makes the AI workflow more auditable.

Instead of only seeing a final trade result, the operator can review the path that led to it.

## Best Use Cases

Use the trade and timeline history to:

- review whether playbooks are too loose or too strict
- compare live and virtual behavior
- identify drift in the AI decision process
- improve future sessions based on actual evidence rather than memory

## Related Pages

- [Journal and Analytics](../../journal-and-analytics/)
- [Sessions](../entities/sessions/)
- [Playbooks](../entities/playbooks/)