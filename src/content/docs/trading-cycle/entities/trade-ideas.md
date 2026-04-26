---
title: Trade ideas
description: The trade idea entity — single-purpose theses Cortiq can monitor alongside reusable playbooks, with optional expiry and per-idea status tracking.
sidebar:
  order: 40
---

This is the entity reference for trade ideas. By the end you'll know when to capture a trade idea instead of a playbook and what each field on the idea is for.

## What this is

Trade ideas track specific opportunities being watched right now. They're inherently single-use: a breakout level you're waiting on, a pullback setup tied to current structure, a discretionary thesis that should expire if it doesn't develop in time.

Not every opportunity should become a reusable playbook. Some setups are specific to a short window or current structure — that's the role of trade ideas.

A trade idea typically includes a name, an optional symbol target, the thesis description, execution or invalidation conditions, an enabled/disabled state, and optional expiry timing.

## How it fits into Cortiq

Trade ideas are configured in the workspace and can be attached to sessions. They surface on `Library` → `Trade Ideas`, with statuses like *active*, *executed*, *closed*, *invalidated*, *expired*, *unassigned*. Active ideas can spawn a session directly.

## How to use it

Capture trade ideas when:

- You spot one breakout level you want monitored.
- You're waiting on a retracement setup tied to current structure.
- A thesis should expire if conditions don't develop in time.

Don't use trade ideas as a replacement for your core playbook library. If the logic is reusable and central to your workflow, it belongs in a playbook.

## Reference

### When to use what

| Need | Use |
| --- | --- |
| Reusable rule-based setup | Playbook |
| Single live thesis with an expiry | Trade idea |
| Macro/headline context | Sentiment report |
| Pre-session prepared analysis | Preparation package |

## What to read next

1. [Workspace & monitoring](../../workspace-and-monitoring/) — the Trade Ideas screen.
2. [Playbooks](playbooks/) — for opportunities that should become permanent rules.
3. [Sentiment reports](sentiment-reports/) — for macro context layered into a session.

## Related

- [Sessions](sessions/)
- [Trading cycle: overview](../overview/)
- [Supporting context](../supporting-context/)
- [Glossary](../../glossary/)
