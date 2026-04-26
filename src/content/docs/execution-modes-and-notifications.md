---
title: Execution modes & notifications
description: How Cortiq sessions actually trade — live, virtual, or copy — and how notification channels and scheduled reports keep you informed without watching the desktop.
sidebar:
  order: 60
---

This page covers the four execution modes a Cortiq session can use and the notification surface that surrounds them. By the end you'll know which mode fits which situation and how to receive trade events on the channels you already check.

## What this is

A session has to do something with the AI's decision. Cortiq supports four execution modes — three that send orders (live, copy) or simulate them (virtual), plus the notification layer that surfaces events from any of those modes through Windows toasts, X, and Telegram.

The split exists because users move through phases: most start in virtual mode to rehearse the workflow, graduate to live on one account, then optionally use copy trading to scale a single decision engine across more accounts. Notifications run across all modes.

## How it fits into Cortiq

| Mode | What it does | When to use |
| --- | --- | --- |
| Virtual | Simulates the trade lifecycle without sending MT5 orders. | First runs, prop-firm challenges that restrict EAs, and any time you're testing a configuration. |
| Live | Sends real orders to MT5 through the connected account. | Once virtual mode is producing readable journals and risk settings are configured. |
| Copy trading | Replicates master-account activity to follower accounts. | When one decision engine should drive multiple accounts. |

Notifications and scheduled reports run on top of every mode and are configured separately.

## How to use it

### Pick the right execution mode

Every session has a mode set at creation time. You can switch a stopped session to a different mode by editing it; you cannot change the mode of a running session.

**Virtual mode** simulates the full trade lifecycle on current market conditions. Cortiq still goes through every step — data gathering, AI decision, risk validation, journal entry — but skips sending the order to MT5. Critically, virtual mode is **not historical backtesting**; it runs on live data, just without execution.

**Live mode** sends real actions to MT5 through the connected local account. Don't go live until MT5 connectivity is verified, the playbook is stable, the data package is focused, and risk settings are active.

**Copy trading** designates a master session whose trade actions are replicated to follower accounts. Modifications and closes on the master propagate to copies. Use this when you want centralized trade management across an account group.

### Configure notifications

Open `Settings` → `Notifications` and enable the channels you want.

![Notifications settings with Windows Toast, X, and Telegram channels configured](/images/screenshots/execution-modes-and-notifications__settings.png)
<!-- SCREENSHOT-NEEDED: execution-modes-and-notifications__settings.png – Notifications settings with Windows Toast, X, and Telegram channels configured. Mask any tokens — use placeholder values -->

The three supported channels:

- **Windows notifications** — immediate desktop awareness while you're at the machine.
- **X** — public or semi-public posting workflows.
- **Telegram** — team or private channel monitoring; also used for scheduled reports.

For Telegram, paste a bot token and chat ID. For X, follow the OAuth flow to authorize an account.

### Schedule performance reports

Open `Settings` → `Reports` to schedule daily, weekly, or monthly summaries delivered through Telegram. You can choose the account scope (one account or all) and which sections appear: P/L summary, trade breakdown, symbol breakdown, streak analysis, and risk metrics. Preview the report once before scheduling so the format is what you expected.

## Reference

### Notification event categories

| Category | Examples |
| --- | --- |
| Trade open | Market or pending order placed. |
| Trade close | SL hit, TP hit, manual close, AI-driven close. |
| Pending order events | Order activated, modified, expired, cancelled. |
| Partial closes | Volume reduced on an open position. |
| SL/TP modifications | Stop or target adjusted by the AI. |

### Notification channels

| Channel | Configured in | Typical use |
| --- | --- | --- |
| Windows notifications | `Settings` → `Notifications` → Windows Toast | Real-time alerts while at the desk. |
| X | `Settings` → `Notifications` → X | Public posting; useful for transparency journaling. |
| Telegram | `Settings` → `Notifications` → Telegram | Private channel; also handles scheduled reports. |

### Mode comparison

| Property | Virtual | Live | Copy |
| --- | --- | --- | --- |
| Sends orders to MT5 | No | Yes (master account) | Yes (follower accounts only) |
| Risk validators run | Yes | Yes | Yes (per follower) |
| Journal output | Yes | Yes | Yes |
| Suitable for first runs | Yes | No | No |

## Common questions

**Is virtual mode the same as backtesting?**
No. Backtesting replays historical bars; virtual mode runs forward on the current market. Use virtual mode to rehearse the operating loop, not to validate a strategy against years of data — Cortiq doesn't include a backtester.

**Can I run a virtual session and a live session at the same time?**
Yes, on different accounts or even the same account. They produce separate journal entries; only the live session affects the MT5 balance.

**My copy trades aren't replicating — what should I check?**
Confirm the follower accounts are configured in `Settings` → `MT5 Accounts`, that the master session is the one designated as master, and that the follower account has a healthy MT5 bridge. Risk validators on the follower account can also block copies — check `RiskPaused` state.

## What to read next

1. [Sessions & AutoScan](sessions-and-autoscan/) — where the mode is set per session.
2. [Risk management](risk-management/) — risk validators run for every mode.
3. [Workspace & monitoring](workspace-and-monitoring/) — where mode-specific outputs land in the workspace.

## Related

- [MetaTrader 5 integration](mt5-integration/)
- [Journal & analytics](journal-and-analytics/)
- [Capability reference](capability-reference/)
- [Glossary](glossary/)
