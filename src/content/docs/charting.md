---
status: current
title: Charting
description: The Cortiq chart — where it appears, the timeframes and drawing tools it offers, the indicators it calculates, and what the markers and price lines mean.
sidebar:
  order: 46
---

This page explains Cortiq's chart: where it appears in the app, what you can do on it, and how to read the markers and price lines it draws. By the end you'll know how to add an indicator, read a trade marker, and open the chart attached to a piece of research.

## What this is

Cortiq uses a shared candlestick chart across these surfaces:

| Where | What it shows |
| --- | --- |
| **Library** → **Chart** | A standalone workspace for one account and instrument, without creating a session |
| Session detail | A live chart for the session's instrument, streaming from MT5 |
| Backtest detail | The historical replay, drawn up to the replay cursor |
| Journal | The candles around a completed trade |
| Instrument Hub | The candles around a piece of recorded evidence |

Every chart shows a volume histogram beneath the price bars. It uses broker-reported real volume when available and tick volume otherwise.

## The live session chart

The session chart sits between the session statistics and the tabs, and is always visible while the session is open.

It streams ticks from your MT5 terminal and builds the forming candle from them. When a candle closes, Cortiq replaces the tick-built bar with the broker's own values, so a partially formed bar corrects itself without a reload.

### Timeframes and history

Switch timeframes with the toolbar: **M1**, **M5**, **M15**, **H1**, **H4**, **D1**.

Scroll left and Cortiq fetches older candles automatically as you approach the edge of what is loaded. Scroll far enough forward and it fetches newer ones. Your viewport position is preserved when history is prepended.

If the tick feed goes quiet for 30 seconds, a stale-feed indicator appears and Cortiq attempts to resubscribe.

### Drawing tools

The toolbar offers horizontal lines, trend lines, rectangles, text, and a risk/reward tool that measures a ratio from an entry, a stop, and a target. Editable drawings are saved by account and instrument and restored when you reopen the chart, including after restarting Cortiq.

The in-app Copilot can draw onto the same chart when you ask it to mark a level or a zone.

### Indicators

Select **Indicators** to open the catalogue. Cortiq calculates indicator values in its own engine rather than in the browser, and the chart renders the result.

You can add the same indicator more than once with different settings — an EMA 20 and an EMA 50, for example — and edit or remove each instance independently.

:::note
Chart indicators are a display choice. Adding one does not change the session's data access policy or grant the AI another input. Configure execution inputs separately in the policy.
:::

### Markers and price lines

| What you see | What it means |
| --- | --- |
| Blue or orange arrow on a candle | A trade was opened on that candle, buy or sell |
| Solid horizontal line | The entry price of an open position |
| Dashed red line | A stop loss |
| Dashed green line | A take profit |
| Temporary order-bracket tags | Draft entry, stop, and target prices before submission |
| Marker on the decision rail | A point where the autonomous agent made a decision |

### Adjust a draft order bracket

Open **Manual Order** on a running session to preview entry, stop, and target handles. When quote and ATR inputs are ready, the ticket seeds a 1× ATR stop and 2× ATR target. **Reset to ATR** rebuilds those defaults.

Drag a pending entry to shift the whole bracket, or drag the stop or target independently. Market entry tracks the quote and cannot be dragged. Arrow keys move a selected handle one price increment; Shift or Page keys move ten. Escape cancels a gesture.

Entry or stop changes recalculate automatic risk sizing; manually entered **Lots** remain manual. Target-only changes preserve size. These are temporary previews, separate from saved drawings and broker orders. **Place Order** is the execution action. See [Discretionary trading](/cortiq-public/discretionary-trading/#place-a-trade) for sizing and submission checks.

## The backtest replay chart

Both manual and autonomous backtests open onto a chart.

The chart reveals candles up to the replay cursor. Execution evidence respects each decision's historical cutoff. An AI model can still have prior knowledge of historical events from its training; replay cannot remove that knowledge. See [Backtesting](/cortiq-public/backtesting/) for stepping, pause, recovery, and simulation limits.

## Use the standalone Chart workspace

Open **Library** → **Chart**, then choose an MT5 account, instrument, and timeframe. The workspace supports live prices, history browsing, indicators, editable drawings, and Copilot annotations without starting a trading session.

**Open in chart** from a journal entry, Observation, or research instance opens the saved historical context with its source link and evidence markers. **Jump to live** leaves that historical context and opens the live market.

The standalone chart has no order ticket or automatic trading loop. To place trades, open or create a session for the instrument. Copilot chart annotations do not authorize an order.

## Set a session price notification

Use this when you want Cortiq to notify you at a price without creating an entry order or an AI trigger.

1. Open the live session chart and select the toolbar's **bell**.
2. Select a price on the main plot.
3. Adjust the rounded instrument price, optionally add a label, and save.
4. Open the session's **Alerts** tab to check pending targets or delete one.

Monitoring uses **Bid** while the session is **Running**, Cortiq is open, and the MT5 feed is fresh. The first fresh tick sets the baseline; an exact target touch fires immediately. Later ticks fire on a crossing in either direction.

Pending alerts survive pause, stop, and restart. Monitoring starts from a fresh baseline after an interruption; it does not reconstruct a crossing that happened while monitoring was unavailable.

Activation removes the pending alert and saves an unread **Price alerts** entry in **Activity** with the target, observed Bid, session, and label. Cortiq also attempts a Windows toast. The Activity record survives a failed toast, and price alerts work independently of trade-notification toggles.

Price notifications belong to live sessions. Backtest replay and standalone charts do not monitor them.

## Evidence charts

A recorded observation opens onto the candles around the moment it describes.

Where the AI's write-up describes several moments — a level forming, a sweep, a reclaim, an outcome — the chart draws one marker per moment, and each marker has its own timestamped sentence below the chart. The window spans from the earliest event to the latest.

Marker shapes follow a fixed vocabulary:

| Marker | Moment |
| --- | --- |
| Grey circle | A level formed |
| Red down arrow | A sweep |
| Green up arrow | A breakout |
| Orange down arrow | A reversal |
| Yellow square | A confirmation |
| Red square | An invalidation |
| Blue circle | The outcome |

Observations recorded before timed events were introduced show a single marker at the moment they were recorded.

:::caution
An evidence chart needs the timeframe the observation was recorded on. Cortiq never guesses one — an observation with no recorded timeframe shows **Chart unavailable** instead of a chart drawn at the wrong scale.
:::

## Screenshots

Screenshots use sample data. Connection states and amounts are illustrative.

![Session chart with protection lines and the Manual Order preview](/cortiq-public/images/screenshots/sessions__live-chart.png)

*Stopped-session preview. Editable Lots is separate from automatic risk sizing; the example is not a sizing recommendation.*

![Historical replay chart with simulated positions and trade levels](/cortiq-public/images/screenshots/backtesting__manual-replay.png)

*Saved replay evidence uses simulated positions, not broker orders.*

## Related pages

- [Discretionary trading](/cortiq-public/discretionary-trading/) — placing orders from the chart.
- [Backtesting](/cortiq-public/backtesting/) — the replay cursor and manual replay.
- [Instrument Hub](/cortiq-public/instrument-hub/) — the evidence these charts are attached to.
