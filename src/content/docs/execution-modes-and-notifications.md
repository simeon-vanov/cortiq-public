---
title: Execution Modes and Notifications
description: Live trading, virtual trading, copy trading, and user notification flows in Cortiq.
---

## Execution Modes

Cortiq supports more than one way to operate a session. That is important because not every user wants to go directly from installation to live execution.

## Live Trading

Live trading sends real actions to MetaTrader 5 through the connected local account.

Use this mode only after:

- MT5 connectivity is verified
- The AI provider is configured correctly
- The playbook and data package are stable
- Risk settings are active

## Virtual Trading

Virtual trading simulates the full trade lifecycle without placing real MT5 orders.

This mode is useful for:

- Evaluating a new strategy
- Testing workflow discipline
- Prop firm environments that restrict expert advisor behavior
- Building trust in the operating flow before deploying capital

Important limitation:

- Virtual trading is not historical backtesting. It simulates trades on current market conditions.

## Copy Trading

Copy trading allows a session to replicate master account activity to one or more additional MT5 accounts.

This is useful when you want:

- One decision engine controlling multiple accounts
- A master-follower operational model
- Centralized trade management across account groups

When the master trade is modified or closed, the copied trades can be kept in sync.

## Notifications

Cortiq can notify users when important trade events happen.

Supported public-facing channels include:

| Channel | Typical Use |
| --- | --- |
| Windows notifications | Immediate desktop awareness |
| X | Public or semi-public social posting workflows |
| Telegram | Team or private channel monitoring |

Typical event categories include trade opens, closes, pending-order events, partial closes, and stop-loss or take-profit modifications.

## What These Functions Can Do For You

This part of Cortiq helps the user move from experimentation to real operation.

It can help you:

- test a workflow in virtual mode before risking capital
- move the same workflow into live execution when you are ready
- replicate one decision engine across multiple accounts
- keep track of what is happening without watching the desktop full time

## Why These Features Matter Together

Execution modes and notifications are linked operationally:

- Virtual mode lets you validate the decision flow.
- Live mode turns the same workflow into real execution.
- Copy trading expands the reach of that workflow.
- Notifications make the workflow observable without constant manual monitoring.

## Related Pages

- [MetaTrader 5 Integration](mt5-integration/)
- [Risk Management](risk-management/)
- [Capability Reference](capability-reference/)
- [Journal & Analytics](journal-and-analytics/)