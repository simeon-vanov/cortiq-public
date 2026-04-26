---
title: Session architecture
description: Why the session is the root of Cortiq's trading cycle, the four scopes it controls, and how two sessions on the same symbol can operate as completely different systems.
sidebar:
  order: 20
---

This page explains why the session — not the AI provider or the playbook — is the architectural unit of Cortiq. By the end you'll understand the four scopes a session controls and why thinking session-first speeds up everything else in this section.

## What this is

In Cortiq, the session is the root of the trading architecture. If you understand the session correctly, the rest of the trading-cycle entities make sense much faster.

A session controls four scopes at once:

1. **Trading scope** — which MT5 account, which symbols, when trading is allowed.
2. **Strategy scope** — which playbooks, in what priority.
3. **Execution scope** — which provider and mode, live or virtual or copy.
4. **Support context** — which preparation packages, instrument profiles, sentiment reports, and instructions.

That's why one session can define a very different operating model from another even when both use the same broker terminal. The session isn't a saved form; it's the thing that makes the trading cycle repeatable.

## How it fits into Cortiq

The session sits in the middle of every cycle:

`Session → Data gather → Prompt build → AI decision → Risk check → Execute → Timeline`

Every other Cortiq concept is something a session points at. Playbooks, data packages, support layers, providers — all of them are referenced by sessions and reused across sessions.

## How to use it

### Treat the session as a system, not a form

When you create or edit a session, you're not filling in a form — you're assembling a trading system from reusable parts. Those parts (playbooks, data packages, instrument profiles, sentiment reports) live in their own sidebar areas precisely because the same building block can show up in many sessions.

### Duplicate before you experiment

Once a session has produced a stable journal, duplicate it before changing anything. Keep the original running as a control while you change one variable on the duplicate. Cohort comparison then shows you what the change did. Editing in place destroys the comparison.

### Add support context only when it earns its place

Two sessions on the same symbol can be radically different operating systems:

- Session A — a narrow London-breakout playbook, a lean data package, no support layers.
- Session B — a swing-oriented playbook stack, a broader multi-timeframe data package, a preparation package, an instrument profile, and a fresh sentiment report.

Both are valid. Both produce different results. Neither is wrong. Pick the support set that matches the strategy's actual needs — adding a sentiment report to an intraday breakout session usually noises up the prompt without improving it.

## Reference

### What a session configures

| Area | What you choose |
| --- | --- |
| Broker and market scope | MT5 account, fixed symbol or AutoScan behavior. |
| AI routing | Provider, integration mode, fallback behavior. |
| Strategy | Playbooks and their priority. |
| Data | Data package and indicator scope. |
| Support context | Preparation package, instrument profile, sentiment report, instructions. |
| Operating window | Active days, hours, close-before-end behavior. |
| Execution mode | Live, virtual, copy-trading behavior, notifications. |

### What a session can add for support

| Layer | Useful when |
| --- | --- |
| Playbooks | Rule-based setup logic that should run every cycle. |
| Trade ideas | Specific discretionary theses tracked separately from playbooks. |
| Session instructions | Operator-specific cautions, desk rules, and constraints. |
| Preparation packages | Slower-moving structure (HTF analysis, daily bias). |
| Instrument profile | Persistent symbol behavior over weeks or months. |
| Sentiment report | Macro and headline context for the session window. |

## What to read next

1. [Supporting context](supporting-context/) — what each support layer offers, in detail.
2. [Playbook design guide](playbook-design/) — disciplined playbook authoring.
3. [Data package design guide](data-package-design/) — payload discipline.

## Related

- [Sessions & AutoScan](../sessions-and-autoscan/)
- [Sessions](entities/sessions/)
- [Trading cycle: overview](overview/)
- [Glossary](../glossary/)
