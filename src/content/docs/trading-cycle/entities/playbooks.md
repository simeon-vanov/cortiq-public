---
title: Playbook Entity
description: What a playbook is and how it defines strategy logic inside the trading cycle.
---

The playbook is the strategy entity in Cortiq.

## What A Playbook Contains

A playbook typically defines:

- market conditions the setup requires
- entry conditions and filters
- invalidation logic
- stop and target guidance
- trade-management expectations
- priority relative to other linked playbooks

## Why It Matters

Playbooks keep the AI inside a structured trading framework.

That means Cortiq is not just asking an AI model to improvise trades from raw chart data.

## What A Good Playbook Looks Like

Good playbooks are:

- narrow enough to be clear
- specific enough to be testable in journals and reviews
- explicit about when not to trade
- explicit about what to do after entry

## What A Playbook Should Not Be

A playbook should not be:

- a catch-all idea list
- a macro-news summary
- a one-off active thesis for one current setup

Those belong in other entities such as trade ideas or sentiment reports.

## What It Uses

Playbooks work most effectively with:

- [Data Packages](../entities/data-packages/)
- [Sessions](../entities/sessions/)
- [Trade Ideas](../entities/trade-ideas/)