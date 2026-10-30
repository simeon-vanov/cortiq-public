---
status: current
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

Trade ideas are configured in their dedicated screen or contextual session/Copilot workflow, with statuses such as active, executed, closed, invalidated, expired, and unassigned. The existing Trade Ideas route is not an entry in the current main sidebar.

## How to use it

Capture trade ideas when:

- You spot one breakout level you want monitored.
- You're waiting on a retracement setup tied to current structure.
- A thesis should expire if conditions don't develop in time.

Don't use trade ideas as a replacement for your core playbook library. If the logic is reusable and central to your workflow, it belongs in a playbook.

## Reference

### Automated trade ideas

Where the runtime supports automated ideas, a Manual session can host one under its own reviewed mandate. A saved thesis alone does not enable automatic execution.

Review the concrete plan, source account and instrument, entry/management constraints, expiry, and proposed changes before approving and enabling it. Invalid or incomplete mandate rules keep approval disabled. This authority is separate from the general Autonomous session loop and from a one-time operator order.

Check the idea's current lifecycle and approval status after edits. Copilot draft preparation does not grant permission to enable it. See [Agent permissions](/cortiq-public/agent-permissions/) for the approval boundaries.

### When to use what

| Need | Use |
| --- | --- |
| Reusable rule-based setup | Playbook |
| Single live thesis with an expiry | Trade idea |
| Macro/headline context | Sentiment report |
| Pre-session prepared analysis | Preparation package |

## What to read next

1. [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) — the Trade Ideas screen.
2. [Playbooks](/cortiq-public/trading-cycle/entities/playbooks/) — for opportunities that should become permanent rules.
3. [Sentiment reports](/cortiq-public/trading-cycle/entities/sentiment-reports/) — for macro context layered into a session.

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Trade Idea list with thesis fields and saved idea controls](/cortiq-public/images/screenshots/workspace-and-monitoring__trade-ideas.png)

*Saving a thesis does not grant execution authority; an automated Manual-session idea needs its own reviewed mandate.*

## Related

- [Sessions](/cortiq-public/trading-cycle/entities/sessions/)
- [Trading cycle: overview](/cortiq-public/trading-cycle/overview/)
- [Supporting context](/cortiq-public/trading-cycle/supporting-context/)
- [Glossary](/cortiq-public/glossary/)
