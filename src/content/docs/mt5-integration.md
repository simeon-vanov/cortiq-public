---
title: MetaTrader 5 Integration
description: How Cortiq connects to MetaTrader 5 and what must be configured for live operation.
---

## How Cortiq Connects To MT5

Cortiq is built around MetaTrader 5. It runs as a local Windows desktop application and communicates with MT5 on the same machine for pricing, account state, orders, and trade management.

This is not a generic broker connector. The supported execution path is MetaTrader 5.

## Who This Is For

This page is for users who want to:

- trade live through Cortiq
- understand how Cortiq reaches their broker environment
- run one or more MT5 accounts from the same machine
- confirm their execution setup before enabling real orders

## What The Integration Handles

| Area | Cortiq Role |
| --- | --- |
| Market data | Reads price and candle updates from the connected MT5 environment |
| Account context | Uses account information such as balance, equity, margin, and symbol properties |
| Order flow | Places market and pending orders when a session is allowed to execute |
| Position management | Modifies stop loss and take profit, performs closes, and handles management actions |
| Monitoring | Tracks health and session status so trading can pause cleanly on connection or risk events |

## Setup Expectations

For a reliable MT5 setup, prepare the following:

- An installed MT5 terminal on the same Windows machine
- A configured MT5 account in Cortiq
- Correct terminal executable path and data folder path where required
- Unique communication ports per MT5 account in multi-account setups

## Multi-Account Support

Cortiq supports multiple MT5 accounts, but each connected terminal must use its own port pair.

Example pattern:

- Account 1: command port `5555`, data port `5556`
- Account 2: command port `5557`, data port `5558`

The point is not the exact numbers. The point is that each connected account must have a non-conflicting communication pair.

## Operational Guidance

Use this checklist before enabling live execution:

1. Confirm MT5 is installed and can open normally.
2. Confirm Cortiq is pointing to the correct MT5 environment.
3. Confirm the target account is the intended one for the session.
4. Confirm risk settings are configured before the first live trade.
5. Start with a narrow session scope or virtual mode before scaling.

## What To Avoid

- Do not assume MT4 or non-MT5 brokers are supported.
- Do not run live trading without first confirming the account mapping and session target.
- Do not treat multi-account setups as plug-and-play without checking port separation.

## Best Use Cases

Use the MT5 integration layer when you want:

- a local desktop trading workflow instead of a cloud broker bridge
- direct access to account state, pricing, and order management on the same machine
- one execution path for both autonomous sessions and advanced external-agent workflows

## Related Pages

- [Installation & Activation](installation-and-activation/)
- [First 30 Minutes in Cortiq](first-30-minutes/)
- [Sessions & AutoScan](sessions-and-autoscan/)
- [Risk Management](risk-management/)