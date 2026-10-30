---
status: current
title: Sessions
description: One account and instrument, a fixed session type, optional pinned playbooks and policy, context, and execution settings.
sidebar:
  order: 10
---

This is the entity reference for sessions. By the end you'll know what a session contains, what it references, and how to think about it as a reusable operating template.

## What this is

The session is the main operating unit in the Cortiq trading cycle — the practical bridge between strategy design and live operation. Every other entity in the trading cycle is something a session points at.

A session bundles:

- One MT5 account.
- A fixed Manual or Autonomous session type; Autonomous requires a supported explicit AI route.
- One symbol — the single instrument the session trades.
- An optional data access policy.
- Optional ordered playbooks pinned to saved versions.
- Optional trade ideas.
- Optional support layers — preparation package, instrument profile, sentiment report.
- An optional `End Date`, lifecycle controls, and execution settings.

## How it fits into Cortiq

Without sessions, you'd reassemble the whole workflow manually each time. The session is what makes the trading cycle repeatable — start it, pause it, review it, improve it, duplicate it into a new template.

For runtime behavior and the session lifecycle, see [Sessions](/cortiq-public/sessions/). For the architectural role, see [Session architecture](/cortiq-public/trading-cycle/session-architecture/).

## How to use it

Treat the session as a trading-desk template. Duplicate a stable setup before experimenting, then compare saved runs and trade history. Use virtual sessions or replay when broker execution isn't needed; simultaneous live sessions create separate exposure.

Pinned playbooks own user-local active days, entry windows, and automatic-close offsets. A closed playbook window suppresses new entries for that playbook without pausing the session or ending management. The session's `End Date` separately limits its lifetime.

## Reference

### Entities a session references

| Reference | Required? | Read more |
| --- | --- | --- |
| MT5 account | yes | [MetaTrader 5 integration](/cortiq-public/mt5-integration/) |
| AI provider + mode | Required for Autonomous AI execution; Manual operator trading does not need a model | [AI providers](/cortiq-public/ai-providers/) |
| Data access policy | Optional; selected policies and actual required inputs must pass validation | [Data access policies](/cortiq-public/trading-cycle/entities/data-packages/) |
| Playbooks | Optional; attached versions and required context are checked | [Playbooks](/cortiq-public/trading-cycle/entities/playbooks/) |
| Trade ideas | optional | [Trade ideas](/cortiq-public/trading-cycle/entities/trade-ideas/) |
| Preparation package | optional | [Preparation packages](/cortiq-public/trading-cycle/entities/preparation-packages/) |
| Instrument profile | optional | [Instrument profiles](/cortiq-public/trading-cycle/entities/instrument-profiles/) |
| Sentiment report | optional | [Sentiment reports](/cortiq-public/trading-cycle/entities/sentiment-reports/) |

## What to read next

1. [Session architecture](/cortiq-public/trading-cycle/session-architecture/) — the four scopes a session controls.
2. [Sessions](/cortiq-public/sessions/) — the runtime view and session lifecycle.
3. [Trading cycle: overview](/cortiq-public/trading-cycle/overview/) — the cycle the session drives.

## Related

- [Session trades and timeline](/cortiq-public/trading-cycle/entities/session-trades-and-timeline/)
- [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/)
- [Glossary](/cortiq-public/glossary/)
