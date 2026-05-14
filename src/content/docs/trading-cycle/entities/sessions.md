---
title: Sessions
description: The session entity — the operating container that bundles account, symbols, provider, playbooks, data package, support layers, and execution settings into one runnable unit.
sidebar:
  order: 10
---

This is the entity reference for sessions. By the end you'll know what a session contains, what it references, and how to think about it as a reusable operating template.

## What this is

The session is the main operating unit in the Cortiq trading cycle — the practical bridge between strategy design and live operation. Every other entity in the trading cycle is something a session points at.

A session bundles:

- One MT5 account.
- One primary AI provider and integration mode.
- One symbol selection method (fixed or AutoScan).
- One data package.
- One or more playbooks (with priority).
- Optional trade ideas.
- Optional support layers — preparation package, instrument profile, sentiment report.
- A time window, active days, and execution settings.

## How it fits into Cortiq

Without sessions, you'd reassemble the whole workflow manually each time. The session is what makes the trading cycle repeatable — start it, pause it, review it, improve it, duplicate it into a new template.

For runtime behavior and the session lifecycle, see [Sessions & AutoScan](../../sessions-and-autoscan/). For the architectural role, see [Session architecture](../session-architecture/).

## How to use it

Treat the session as a trading-desk template. Once it's stable, duplicate before changing — keep the original running as a control while you experiment on the duplicate. Cohort comparison turns the two runs into evidence.

## Reference

### Entities a session references

| Reference | Required? | Read more |
| --- | --- | --- |
| MT5 account | yes | [MetaTrader 5 integration](../../mt5-integration/) |
| AI provider + mode | yes | [AI providers](../../ai-providers/) |
| Data package | yes | [Data packages](../entities/data-packages/) |
| Playbooks | yes (one or more) | [Playbooks](../entities/playbooks/) |
| Trade ideas | optional | [Trade ideas](../entities/trade-ideas/) |
| Preparation package | optional | [Preparation packages](../entities/preparation-packages/) |
| Instrument profile | optional | [Instrument profiles](../entities/instrument-profiles/) |
| Sentiment report | optional | [Sentiment reports](../entities/sentiment-reports/) |

## What to read next

1. [Session architecture](../session-architecture/) — the four scopes a session controls.
2. [Sessions & AutoScan](../../sessions-and-autoscan/) — the runtime view, lifecycle, and AutoScan.
3. [Trading cycle: overview](../overview/) — the cycle the session drives.

## Related

- [Session trades and timeline](session-trades-and-timeline/)
- [Workspace & monitoring](../../workspace-and-monitoring/)
- [Glossary](../../glossary/)
