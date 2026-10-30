---
status: current
title: Discretionary trading
description: Manual sessions let you trade an instrument yourself from Cortiq's chart, with the preparation, risk limits, and journal still applied.
sidebar:
  order: 45
---

This page explains how to trade an instrument yourself inside Cortiq, using a manual session. By the end you'll know how manual sessions differ from autonomous ones, how the order ticket sizes a position from your risk, and what Cortiq still does for you while you make the calls.

## What this is

A Manual session has no general automatic AI decision loop. You watch the chart and place trades from the order ticket, or explicitly request a Copilot trade action.

Risk validation and recorded trade history still apply. Preparation, knowledge context, and AI review depend on what you configure and request. Separately enabled automated trade ideas have their own reviewed mandate; inspect that authority before enabling them.

New sessions default to **Autonomous**. Select **Manual** explicitly to trade without the general AI cycle.

## How it fits into Cortiq

| | Manual session | Autonomous session |
| --- | --- | --- |
| Who places orders | You or an explicitly requested agent action; separately enabled trade ideas use their own mandate | The AI decision cycle, subject to session authority |
| Decision loop | None — no cycles run | Updates retained market understanding and opportunities through assessments and local watches |
| Playbook | Optional | Optional; attached playbooks provide pinned operating rules |
| Data access policy | Optional reference/analysis limits | Controls available execution inputs when selected |
| Trade approval | Not used — you are the one submitting | Tri-state approval policy |
| Risk limits | Enforced | Enforced |
| Journal and review | Trade history is recorded; review is explicitly requested | Decisions and trades are recorded; review is explicitly requested |

A session's type is fixed when you create it and cannot be changed afterwards. Cloning a session keeps its type.

## Before you start

- An MT5 account connected to Cortiq. See [MT5 integration](/cortiq-public/mt5-integration/).
- One instrument symbol. A session is locked to exactly one market.
- An active license. See [Licensing and support](/cortiq-public/licensing-and-support/).

An AI provider is not required to place manual trades, but without one Cortiq cannot prepare the market or write the session review.

## Create a manual session

1. Select **New Session**.
2. Enter a name.
3. Set **Session Mode** to **Manual**.
4. Choose the instrument symbol. This is required — a session cannot be created without a real symbol.
5. Optionally attach playbooks and a data access policy as reference context.
6. Select **Create**, then **Start**.

The session must be running before the order ticket will quote a price or calculate a position size.

## Place a trade

Open **Manual Order** beside the chart. With a fresh quote and enough candles, the ticket seeds a stop at 1× ATR(14) and a target at 2× ATR(14), using the selected chart timeframe. Pending entry starts 0.5× ATR from the executable quote. Missing inputs leave the price fields available with an explanation.

1. Choose **Buy** or **Sell**, and **Market**, **Limit**, or **Stop**.
2. Review **Entry Price**, **Stop Loss**, and **Target**. Type prices, use the 1×, 2×, or 3× ATR presets, or drag the chart's bracket handles. Market entry follows the quote and is read-only.
3. Review **Lots**. A valid stop lets Cortiq size from your configured default risk. Choose **0.5%**, **1%**, or **2%** to recalculate at that risk, or enter lots directly.
4. Check the sizing indicator: **Auto · …% risk** identifies calculated size; **Manual** identifies your lot override. Manual lots stay manual when the bracket changes.
5. Check the prices, size, and reward/risk preview, then select **Place Order**.

Dragging a pending entry moves the whole bracket. Dragging the stop changes its distance and recalculates automatic size; a target-only edit preserves size. **Reset to ATR** deliberately recreates the default bracket. Editing or dragging is a preview; only **Place Order** submits it.

:::note
The preview is advisory. Cortiq re-runs license, risk, and broker validation at submission, so an order can still be rejected after the ticket has shown you a size.
:::

The chart shows temporary entry, stop, and target tags while the ticket is open. Hiding the panel clears the draft bracket. Moving prices across an invalid stop or target blocks placement until you correct them.

## Manage an open position

Open positions appear on the **Trades** tab and draw their entry, stop, and target on the chart. Each row offers:

- **Close** — close the position at market.
- **Partial close** — close part of the volume.
- **Modify SL/TP** — move the stop, the target, or both.

## What Cortiq still does for you

| Capability | What it means in a manual session |
| --- | --- |
| Preparation | Read or generate configured context when you need it; a Manual session does not imply automatic preparation. |
| Instrument knowledge | Reviewed conclusions and their evidence are available in the [Instrument Hub](/cortiq-public/instrument-hub/). |
| Risk limits | Daily and weekly drawdown, profit targets, trade caps, and loss-streak stops are checked on your orders. See [Risk management](/cortiq-public/risk-management/). |
| Journal | Trades are reconstructed with entry, stop, target, and outcome. See [Journal and analytics](/cortiq-public/journal-and-analytics/). |
| Session review | Explicitly request a review of saved execution evidence, even when there are no AI cycles. |
| Copilot | Available in the session for analysis and chart annotation. It only submits a trade if you explicitly ask it to. |

## Practising first

Two options let you rehearse without risking money:

- **Virtual mode** runs a session with no real orders reaching MT5.
- **A manual backtest** replays historical candles and lets you place orders against them. See [Backtesting](/cortiq-public/backtesting/).

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Stopped Manual session with an editable Lots field and Manual sizing](/cortiq-public/images/screenshots/sessions__manual-detail.png)

*Unsubmitted order preview with an illustrative 0.10 Lots value. The session must be running to place an order; no order was submitted.*

## Related pages

- [Charting](/cortiq-public/charting/) — the chart surface, timeframes, indicators, and markers.
- [Sessions](/cortiq-public/sessions/) — session states and configuration.
- [Risk management](/cortiq-public/risk-management/) — the limits applied to every order.
- [Backtesting](/cortiq-public/backtesting/) — replay a market and trade it by hand.
