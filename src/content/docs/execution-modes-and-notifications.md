---
status: current
title: Execution modes & notifications
description: Compare virtual and broker execution, configure session notification toggles, and use Activity and one-shot chart price alerts.
sidebar:
  order: 60
---

Choose virtual execution to practise on the current market without sending orders to MT5. Use the session's notification controls, Activity, and chart price alerts to follow what happens.

## What this is

Execution and decision-making are separate choices. `Virtual Mode` controls whether an order is simulated or sent to the broker. `Manual` or `Autonomous` controls who makes session decisions.

An External MCP client controls a Manual session through tools. It can use virtual or broker execution; it is not an execution mode of its own.

## How it fits into Cortiq

| Work | Market data | Order handling |
| --- | --- | --- |
| Virtual session | Current MT5 feed. | Simulated in Cortiq. |
| Non-virtual session | Current MT5 feed. | Orders sent to the connected MT5 account. |
| Backtest | Historical replay. | Simulated inside the backtest run. |

Virtual and non-virtual sessions need a valid license to start, including sessions connected to broker demo accounts. Backtests also require a valid license. See [Backtesting](/cortiq-public/backtesting/) for replay controls and simulation limits.

## How to use it

### Choose virtual or broker execution

1. Create a session and select its instrument and account.
2. Enable `Virtual Mode` to simulate orders. It is off by default.
3. Review risk and approval settings before starting.
4. Start the session and check its execution-mode badge before placing or authorizing orders.

A virtual session can use the current feed, chart, trades, and journal without changing the broker account's balance. Its results rehearse the workflow; they do not establish actual broker fills or costs.

To change an existing session's execution setting, stop it, inspect any remaining open exposure, then use `Settings` → `Edit Settings` on its detail page. Confirm the setting before starting again.

Virtual trades still face entry risk validation. Their closed P/L does not update the global and account realized-P/L counters used for drawdown and profit targets. Virtual execution therefore does not reproduce every account-risk consequence of broker execution.

### Enable trade notification channels

Open the session's `Settings` tab, select `Edit Settings`, and find `Notifications`.

| Setting | Effect |
| --- | --- |
| `Push Notifications` | Enables the session's Windows trade-event notifications. |
| `Include AI Reasoning in Notifications` | Includes available reasoning in notification content. |
| `Include Screenshots in Notifications` | Requests an available chart screenshot for supported sends. |

Save the session settings after changing them. Windows Push is the desktop trade-notification channel. X and Telegram delivery and their setup controls have been removed; retained flags from older settings do not deliver posts. Scheduled social reports are not an available desktop workflow.

### Read Activity

Open `Library` → `Activity` for persisted background events, trade operations, failures, and actionable permission requests. Entries can link to the session, report, or other item that needs attention.

Activity is the durable in-app record, separate from Windows notification delivery. Read [Activity](/cortiq-public/system-messages/) for filters, unread state, and approval actions.

### Set a chart price alert

A price alert is a one-shot notification for a level you choose. It does not place an order or authorize a trade.

1. Open the live session chart and select the bell in its toolbar.
2. Click a price on the main plot.
3. Review the instrument-rounded price, optionally add a label, and save.
4. Open the session's `Alerts` tab to inspect or delete pending alerts.

Escape, changing drawing tools, or leaving the chart cancels an unfinished price selection.

Saved alerts monitor Bid while the owning session is `Running`, Cortiq is open, and the MT5 feed is fresh. On the first fresh tick, an exact target touch fires immediately. Later ticks trigger when Bid crosses the target in either direction.

Pending alerts survive pause, stop, and restart. After an interruption, a fresh baseline is established; Cortiq does not infer crossings while monitoring was unavailable.

When an alert fires, it is removed from the pending list and an unread `Price alerts` entry is saved in Activity. Cortiq then attempts a Windows notification that opens the session. Price alerts are independent of the trade-notification toggles; a failed Windows notification does not remove the Activity entry.

## Reference

### Delivery boundaries

| Event | Current behavior |
| --- | --- |
| Pending order fills | Trade notification dispatch is connected. |
| Position closes fully or partially | Trade notification dispatch is connected. |
| Market entry, pending-order placement, or cancellation | Windows trade notification dispatch is not connected for these events. Consult the session and Activity. |
| Approval request | Uses its own approval notification path, independent of ordinary trade-event push toggles. |
| Chart price alert | Saves Activity, then attempts its own Windows notification. |

Per-event trade notification switches are not exposed in the current UI.

Windows notification visibility also depends on Windows settings. A Windows toast is best-effort delivery; the saved Activity entry is the durable record.

### Keep the meanings separate

- A chart price alert notifies you when a watched level is reached.
- An Autonomous wake condition asks the decision engine to reconsider the market.
- A pending order can execute under its own broker or simulation rules.
- A trade approval authorizes the specific action presented for review.

Creating a notification alert does not create any of the other three.

## What to read next

1. [Sessions](/cortiq-public/sessions/) — configure who controls the session and when it runs.
2. [Charting](/cortiq-public/charting/) — use the chart's price, drawing, and indicator tools.
3. [Risk management](/cortiq-public/risk-management/) — understand checks before execution.
4. [Activity](/cortiq-public/system-messages/) — inspect saved events and requests.

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Session Settings showing Push Notifications, reasoning, and screenshot toggles](/cortiq-public/images/screenshots/execution-modes-and-notifications__settings.png)

*The panel is in read-only mode here. Select Edit Settings to change the available controls.*

## Related

- [Discretionary trading](/cortiq-public/discretionary-trading/)
- [Backtesting](/cortiq-public/backtesting/)
- [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/)
- [MetaTrader 5 integration](/cortiq-public/mt5-integration/)
