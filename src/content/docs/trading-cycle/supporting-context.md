---
title: Supporting context
description: The four reusable context layers Cortiq can attach to a session — preparation packages, instrument profiles, sentiment reports, and session instructions — and where each one belongs.
sidebar:
  order: 30
---

This page explains the support layers Cortiq can attach to a session beyond the raw market payload. By the end you'll know which type of information belongs in which layer and how to avoid the most common over-stuffing mistakes.

## What this is

Supporting context is the extra information Cortiq gives the AI on top of the current market payload. It exists because not all useful trading information changes at the same speed:

- Raw candles and prices change every cycle.
- Strategy rules change only when you edit them.
- Instrument behavior may shift slowly over weeks.
- News and macro sentiment matter for a few hours or days.
- Pre-session analysis stays useful until a major move resets it.

Cortiq separates those layers so you can decide what should be fresh, what should be stable, and what should only be attached when it genuinely helps.

## How it fits into Cortiq

| Information type | Best home | Reusable across sessions? |
| --- | --- | --- |
| Live factual market payload | Data package | No — generated fresh per cycle. |
| Reusable setup logic | Playbook | Yes. |
| One active thesis | Trade idea | No — single-purpose. |
| Slower-moving prepared analysis | Preparation package | Yes. |
| Long-lived instrument behavior | Instrument profile | Yes. |
| Macro and headline context | Sentiment report | Yes, until stale. |
| Operator notes or exceptions | Session instructions | Yes. |

## How to use it

### Session instructions

Use session instructions for operator guidance the AI should respect during this run:

- Symbols to avoid around specific events.
- Special broker behavior to keep in mind.
- Desk-specific execution cautions.
- Scope reminders that don't belong inside a playbook.

### Preparation packages

Use a preparation package when you want the AI to start the cycle with already-prepared analysis rather than rediscovering it. Common content:

- Higher-timeframe structure.
- Regime classification.
- Directional skew from slower charts.
- Key levels prepared before the session opens.

A daily preparation package refreshed before market open is a high-leverage layer for swing-style sessions.

### Instrument profiles

Use an instrument profile for long-lived context about how an instrument behaves:

- Range character and volatility behavior.
- Session tendencies (London open, NY overlap, etc.).
- Recurring structural habits of the instrument.
- Notes that help interpret today's chart against the symbol's longer-term character.

Instrument profiles age slowly. Update them every few weeks at most.

### Sentiment reports

Use a sentiment report for context that isn't visible in the chart alone:

- Recent headlines that matter for this market.
- Institutional bias and forecast direction.
- Known event risk ahead.
- Positioning or macro pressure.

Sentiment reports age fast. Detach or replace them when the underlying narrative changes.

### Trade ideas

Use a trade idea for a specific thesis you want Cortiq to track separately from the reusable playbooks:

- A specific breakout level you're waiting on.
- A pullback setup tied to current structure.
- An idea that should expire if conditions don't develop in time.

Trade ideas are inherently single-use. Don't promote them into the playbook library.

## Reference

### Common mistakes to avoid

| Mistake | Why it hurts |
| --- | --- |
| One-off trade ideas in a reusable playbook | Pollutes the playbook with logic that won't apply tomorrow. |
| Short-term directional calls in the instrument profile | Profile is meant for long-lived behavior; calls go stale. |
| Old sentiment report still attached | The AI reasons against an outdated narrative. |
| Multiple support layers added without clear roles | Noise grows; signal doesn't. |
| Treating "more information" as "better information" | Bigger prompts ≠ better decisions. |

### Best practice

The best support stack is usually the cleanest one, not the biggest. Add a layer only when it improves judgment in a way the data package and playbooks don't already cover.

## What to read next

1. [Preparation packages](entities/preparation-packages/) — the entity reference for prep packages.
2. [Instrument profiles](entities/instrument-profiles/) — the entity reference for profiles.
3. [Sentiment reports](entities/sentiment-reports/) — the entity reference for sentiment.
4. [Trade ideas](entities/trade-ideas/) — the entity reference for ideas.

## Related

- [Trading cycle: overview](overview/)
- [Session architecture](session-architecture/)
- [Playbooks & data packages](../playbooks-and-data/)
- [Glossary](../glossary/)
