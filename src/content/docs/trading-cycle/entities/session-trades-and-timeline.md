---
title: Session trades & timeline
description: The session trades and timeline entities — Cortiq's per-cycle execution record that turns AI decisions into reviewable, auditable history.
sidebar:
  order: 80
---

This is the entity reference for session trades and the session timeline. By the end you'll know what each output captures and how to use them in a review loop.

## What this is

This part of the trading cycle is where execution becomes reviewable. The most important outputs:

- **Session trades** — every executed trade, live or virtual, with the context that led to it.
- **Session timeline** — the readable history of what happened in each cycle.
- **Cycle decisions and action history** — the AI's reasoning trail and the actions taken.
- **Run and review history** — start-to-stop runs, useful for comparing executions.

This is one of Cortiq's strongest features because it makes the AI workflow auditable. You don't only see the trade result — you see the path that led to it.

## How it fits into Cortiq

The trades and timeline land in the local SQLite database and surface across the workspace:

- `Library` → `Journal` shows the trade journal and session journal.
- `Library` → `Conversations` shows the raw AI dialogue.
- `Library` → `Dashboard` aggregates across sessions.
- `Library` → `Session Cohorts` compares sessions side-by-side.

For analysis and review, see [Journal & analytics](../../journal-and-analytics/).

## How to use it

### What session trades record

- The instrument and action taken.
- Entry, stop, and target details.
- Whether the trade was live or virtual.
- Trade-management changes over time.
- The strategy or idea that led to the trade.
- Screenshots, notes, and journal context where available.

### What the timeline records

- What the AI saw.
- What it concluded.
- Whether it traded, held, or managed a position.
- What happened after the decision.

## Reference

### How to use the trade and timeline history

| Use case | What to look for |
| --- | --- |
| Review whether playbooks are too loose or too strict | Patterns of low-conviction entries or repeatedly-passed setups. |
| Compare live and virtual behavior | Differences in trade frequency, sizing, or post-entry management. |
| Identify drift in the AI decision process | Reasoning that's noticeably different than past cycles for the same setup. |
| Improve future sessions based on evidence | Specific cycles where the AI's reasoning was strongest or weakest. |

## What to read next

1. [Journal & analytics](../../journal-and-analytics/) — the review surface that surfaces this data.
2. [Workspace & monitoring](../../workspace-and-monitoring/) — the screens that render it.
3. [Sessions](sessions/) — what generates the timeline.

## Related

- [Playbooks](playbooks/)
- [Trading cycle: overview](../overview/)
- [Glossary](../../glossary/)
