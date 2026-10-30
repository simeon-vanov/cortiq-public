---
status: current
title: MetaTrader 5 integration
description: How Cortiq connects to MetaTrader 5 over a local ZeroMQ bridge, what to configure before live trading, and how to run multiple accounts on one machine.
sidebar:
  order: 10
---

Cortiq's only execution path is MetaTrader 5 on the same Windows machine. This page explains how that connection works, what to configure before you trade live, and how to scale it across multiple accounts without a port collision.

:::caution
Cortiq talks to MT5 through a small Expert Advisor called `ZmqFacade`. If `ZmqFacade` is not attached to a chart and running, no Cortiq feature that touches MT5 will work — pricing, orders, account state, and risk checks all fail closed.
:::

## What this is

Cortiq runs as a local Windows desktop app and reaches MetaTrader 5 over a ZeroMQ bridge on `localhost`. It's a tightly coupled pair: Cortiq sends commands and receives streaming data through `ZmqFacade`, an Expert Advisor that lives inside your MT5 terminal.

This is not a generic broker connector. Cortiq does not support MT4, web brokers, or proprietary APIs. If your broker offers MT5, you can run Cortiq against it; if it doesn't, Cortiq isn't the right tool.

The integration handles every market interaction the platform needs: live pricing, account state, order placement and modification, position management, and connection health.

## How it fits into Cortiq

```mermaid
flowchart LR
  C[Cortiq desktop app<br/>C#] -- ZeroMQ REQ/REP<br/>command port --> Z(ZmqFacade EA<br/>MQL5)
  C -- ZeroMQ SUB<br/>data port --> Z
  Z --> M[(MetaTrader 5<br/>terminal)]
```

*Cortiq talks to each MT5 terminal through a small Expert Advisor (`ZmqFacade`) over two ZeroMQ ports — one for synchronous commands, one for streaming data.*

| Area | Cortiq's role |
| --- | --- |
| Market data | Reads candles, ticks, and indicator values from the connected terminal. |
| Account context | Reads balance, equity, margin level, and symbol properties on every cycle. |
| Order flow | Places market and pending orders when a session is allowed to execute. |
| Position management | Modifies stop-loss / take-profit, performs partial and full closes, runs trailing logic. |
| Monitoring | Checks bridge and broker-feed health, reports outages, and applies the relevant failure and restart path. |

## How to use it

The setup has three parts: install the EA in your terminal, configure the account in Cortiq, and verify the bridge is healthy before starting a session.

### 1. Configure the MT5 account in Cortiq

Open `Setup` → `MT5 Accounts` and add an entry. You'll need the terminal's executable path, the data folder, and a unique pair of ZeroMQ ports.

### 2. Attach `ZmqFacade` to a chart in MT5

Open MetaTrader 5 and drop `ZmqFacade.ex5` onto any chart with automated trading enabled. The EA also needs the MQL5 ZeroMQ library installed under MT5's `Include/Zmq/` folder. The EA's smiley face icon appears in the top-right of the chart when it's running.

### 3. Verify the bridge is healthy

Cortiq's topbar shows an MT5 health indicator. Green means the bridge is connected and recent heartbeats arrived on time; red means the EA isn't responding. Don't start a session until the indicator is green.

### Multi-account setup

Cortiq supports multiple MT5 accounts on the same machine, but each terminal must run on a non-overlapping pair of ZeroMQ ports.

Example pattern (the EA defaults are command port `6200`, data port `6201`):

- Account 1 — command port `6200`, data port `6201`.
- Account 2 — command port `6202`, data port `6203`.
- Account 3 — command port `6204`, data port `6205`.

The exact numbers don't matter — non-overlap does. Two terminals on the same port will collide silently and one of them will appear to "work intermittently".

## Reference

| Setting | Where | Notes |
| --- | --- | --- |
| Terminal path | `Setup` → `MT5 Accounts` → *Terminal executable* | Full path to `terminal64.exe`. |
| Data folder | `Setup` → `MT5 Accounts` → *Data folder* | Where Cortiq writes the EA companion files. |
| Command port | `Setup` → `MT5 Accounts` → *ZMQ command port* | REQ/REP. Default `6200`. Must be unique across accounts. |
| Data port | `Setup` → `MT5 Accounts` → *ZMQ data port* | PUB/SUB. Default `6201`. Must be unique across accounts. |
| Default account | `Setup` → `MT5 Accounts` → *Default* | The account that new sessions and trade ideas pre-select. |

## Common questions

**Is MT4 supported?**
No. Only MT5. Brokers that offer both will work as long as you connect through their MT5 build.

**Can I run a remote MT5 terminal?**
No. Cortiq and MT5 must be on the same Windows machine. The bridge uses `localhost` ZeroMQ and assumes both processes share the same OS.

**What happens if MT5 disconnects mid-session?**
Bridge availability and the terminal's broker connection are checked separately. An EA/socket failure is debounced and confirmed with a longer PING before Cortiq reports the outage and attempts reconnection. One missed health check does not immediately pause every session.

A confirmed broker-feed outage that persists through its debounce fails the account's running sessions. Inspect their **Failed** state and error. An enabled auto-restart follows the session's backoff and readiness checks; otherwise restart explicitly after correcting the connection. Bridge recovery alone does not establish that a session has resumed.

Existing broker-side protective orders remain at MT5. Cortiq cannot reliably place, change, close, or actively manage orders while the required connection is unavailable. Verify the account, pending orders, open exposure, and session state after recovery.

## What to read next

1. [First 30 minutes in Cortiq](/cortiq-public/first-30-minutes/) — installs the EA and runs a virtual session end-to-end.
2. [Sessions](/cortiq-public/sessions/) — once the bridge is green, this is where you build the session that uses it.
3. [Risk management](/cortiq-public/risk-management/) — configure global and per-account limits before any live execution.

## Screenshots

Screenshots use sample data. Connection states and amounts are illustrative.

![MT5 Accounts page showing command and data ports for demo accounts](/cortiq-public/images/screenshots/mt5-integration__settings-page.png)

*The shown temporary ports isolate the capture. Configure the actual ports used by your terminal.*

## Related

- [Installation & activation](/cortiq-public/installation-and-activation/)
- [AI providers](/cortiq-public/ai-providers/)
- [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/)
- [Glossary](/cortiq-public/glossary/)
