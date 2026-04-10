---
title: App Navigation Guide
description: How the public documentation maps to the actual Cortiq desktop sidebar and screens.
---

## Why This Page Exists

The documentation site explains Cortiq by topic. The desktop app is operated through a left sidebar.

If you read a docs page and then wonder where that feature lives in the product, this page is the bridge.

## The Sidebar Structure

| Sidebar Section | What You Will Find There | Typical Use |
| --- | --- | --- |
| `Library` | Home, Dashboard, Sessions, Trade Ideas, Journal, Session Cohorts, Conversations | Day-to-day operation, monitoring, and review |
| `Playbooks` | My Playbooks and quick links to saved playbooks | Strategy design and maintenance |
| `Preparation` | Instrument Profiles, Prep Packages, Sentiment | Reusable supporting context for sessions |
| `Tools` | Symbol Scanner, Data Packages, Indicators, Risk Management, Provider Health | Supporting utilities, payload design, scanning, and control layers |
| `Settings` | MT5 Accounts, AI Providers, Notifications, License | Machine setup and platform configuration |
| `Community` | Report a Bug, Feedback, Discussion | Public support and product communication |

## Quick Task Map

| If You Want To... | Open This In The App |
| --- | --- |
| Activate a license or check license state | `Settings` -> `License` |
| Connect MetaTrader 5 | `Settings` -> `MT5 Accounts` |
| Configure OpenAI, Gemini, Claude, or Grok | `Settings` -> `AI Providers` |
| Build or edit a strategy | `Playbooks` -> `My Playbooks` |
| Define the candles, indicators, and screenshots the AI receives | `Tools` -> `Data Packages` |
| Manage supporting indicators | `Tools` -> `Indicators` |
| Add reusable market context | `Preparation` -> `Instrument Profiles`, `Prep Packages`, or `Sentiment` |
| Create or run a trading workflow | `Library` -> `Sessions` |
| Let Cortiq scan symbols first | `Tools` -> `Symbol Scanner` |
| Adjust risk limits | `Tools` -> `Risk Management` |
| Watch performance across the whole environment | `Library` -> `Dashboard` |
| Review AI reasoning and trade history | `Library` -> `Journal` |
| Compare multiple sessions | `Library` -> `Session Cohorts` |
| Inspect raw AI conversations | `Library` -> `Conversations` |
| Open public support links | `Community` -> `Report a Bug`, `Feedback`, or `Discussion` |

## How The Main Docs Pages Map To The UI

| Documentation Page | Main UI Area |
| --- | --- |
| [Installation & Activation](installation-and-activation/) | `Settings` -> `License` |
| [MetaTrader 5 Integration](mt5-integration/) | `Settings` -> `MT5 Accounts` |
| [AI Providers](ai-providers/) | `Settings` -> `AI Providers` and `Library` -> `Sessions` |
| [Playbooks & Data Packages](playbooks-and-data/) | `Playbooks` -> `My Playbooks`, `Tools` -> `Data Packages`, `Tools` -> `Indicators` |
| [Sessions & AutoScan](sessions-and-autoscan/) | `Library` -> `Sessions` and `Tools` -> `Symbol Scanner` |
| [Risk Management](risk-management/) | `Tools` -> `Risk Management` and `Library` -> `Dashboard` |
| [Execution Modes & Notifications](execution-modes-and-notifications/) | `Library` -> `Sessions` and `Settings` -> `Notifications` |
| [Workspace & Monitoring](workspace-and-monitoring/) | `Library` -> `Home`, `Dashboard`, `Trade Ideas`, `Journal`, `Session Cohorts`, `Conversations`, and `Tools` -> `Provider Health` |
| [Journal & Analytics](journal-and-analytics/) | `Library` -> `Journal`, `Dashboard`, `Session Cohorts`, and `Conversations` |
| [Licensing & Support](licensing-and-support/) | `Settings` -> `License` and `Community` |

## A Good Mental Model

Use this shortcut when learning the app:

- `Settings` configures the machine and platform connections.
- `Playbooks`, `Preparation`, and `Tools` define what the AI will work with.
- `Library` is where you operate, monitor, and review the result.
- `Community` sends you to the public support surface.

That model makes the UI easier to understand because it separates configuration from runtime operation.

## If You Want The Architecture Behind The UI

The screens above are the user-facing surface. If you want to understand the deeper runtime model behind them, continue with:

- [Trading Cycle Overview](trading-cycle/overview/)
- [Session Architecture](trading-cycle/session-architecture/)
- [Supporting Context](trading-cycle/supporting-context/)