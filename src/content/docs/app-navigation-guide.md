---
title: App navigation guide
description: How the public documentation maps to the Cortiq desktop sidebar and screens, with a quick task map for finding any feature in the app.
sidebar:
  order: 20
---

This page is the bridge between the docs and the desktop app. By the end you'll know which sidebar section and screen each documented feature lives in.

## What this is

The docs explain Cortiq by topic; the desktop app is operated through a left sidebar with six top-level sections. The two views don't always match name-for-name — a single docs page can span multiple screens, and a single screen can host capabilities described on different docs pages.

This page closes that gap. It lists the six sidebar sections, what each contains, and a task-to-screen lookup for the questions readers most often hold while learning the app.

![Cortiq desktop app sidebar showing all top-level pages](/images/screenshots/app-navigation-guide__sidebar.png)
<!-- SCREENSHOT-NEEDED: app-navigation-guide__sidebar.png – Cortiq desktop app sidebar (full + mini state side-by-side if possible) showing all top-level pages -->

## How it fits into Cortiq

A simple mental model for the app:

- `Settings` configures the machine and external connections.
- `Playbooks`, `Preparation`, and `Tools` define what the AI works with.
- `Library` is where you operate, monitor, and review the result.
- `Community` is the public support surface.

Configuration on the left, runtime in the middle, review and support on the right.

## Reference

### Sidebar structure

| Sidebar section | What you'll find there | Typical use |
| --- | --- | --- |
| `Library` | Home, Dashboard, Sessions, Trade Ideas, Journal, Session Cohorts, Conversations | Day-to-day operation, monitoring, review. |
| `Playbooks` | My Playbooks plus quick links to saved playbooks | Strategy design and maintenance. |
| `Preparation` | Instrument Profiles, Prep Packages, Sentiment | Reusable supporting context for sessions. |
| `Tools` | Symbol Scanner, Data Packages, Indicators, Risk Management, Provider Health | Payload design, scanning, control layers. |
| `Settings` | MT5 Accounts, AI Providers, Notifications, License | Machine setup and platform configuration. |
| `Community` | Report a Bug, Feedback, Discussion | Public support and product communication. |

### Quick task map

| If you want to… | Open this in the app |
| --- | --- |
| Activate a license or check license state | `Settings` → `License` |
| Connect MetaTrader 5 | `Settings` → `MT5 Accounts` |
| Configure OpenAI, Gemini, Claude, or Grok | `Settings` → `AI Providers` |
| Build or edit a strategy | `Playbooks` → `My Playbooks` |
| Define the candles, indicators, and screenshots the AI receives | `Tools` → `Data Packages` |
| Manage supporting indicators | `Tools` → `Indicators` |
| Add reusable market context | `Preparation` → `Instrument Profiles`, `Prep Packages`, or `Sentiment` |
| Create or run a trading workflow | `Library` → `Sessions` |
| Let Cortiq scan symbols first | `Tools` → `Symbol Scanner` |
| Adjust risk limits | `Tools` → `Risk Management` |
| Watch performance across the environment | `Library` → `Dashboard` |
| Review AI reasoning and trade history | `Library` → `Journal` |
| Compare multiple sessions | `Library` → `Session Cohorts` |
| Inspect raw AI conversations | `Library` → `Conversations` |
| Open public support links | `Community` → `Report a Bug`, `Feedback`, `Discussion` |

### Docs-to-UI map

| Docs page | Main UI surface |
| --- | --- |
| [Installation & activation](installation-and-activation/) | `Settings` → `License` |
| [MetaTrader 5 integration](mt5-integration/) | `Settings` → `MT5 Accounts` |
| [AI providers](ai-providers/) | `Settings` → `AI Providers`, `Library` → `Sessions` |
| [Playbooks & data packages](playbooks-and-data/) | `Playbooks` → `My Playbooks`, `Tools` → `Data Packages`, `Tools` → `Indicators` |
| [Sessions & AutoScan](sessions-and-autoscan/) | `Library` → `Sessions`, `Tools` → `Symbol Scanner` |
| [Risk management](risk-management/) | `Tools` → `Risk Management`, `Library` → `Dashboard` |
| [Execution modes & notifications](execution-modes-and-notifications/) | `Library` → `Sessions`, `Settings` → `Notifications` |
| [Workspace & monitoring](workspace-and-monitoring/) | `Library` (most screens), `Tools` → `Provider Health` |
| [Journal & analytics](journal-and-analytics/) | `Library` → `Journal`, `Dashboard`, `Session Cohorts`, `Conversations` |
| [Licensing & support](licensing-and-support/) | `Settings` → `License`, `Community` |

## What to read next

1. [Workspace & monitoring](workspace-and-monitoring/) — once you can navigate, this is the tour of the screens you'll spend most of your time in.
2. [Trading cycle: overview](trading-cycle/overview/) — the architecture behind the screens.
3. [Capability reference](capability-reference/) — what each major function does in plain English.

## Related

- [Documentation map](documentation-map/)
- [Feature overview](feature-overview/)
- [Glossary](glossary/)
- [Trading cycle: session architecture](trading-cycle/session-architecture/)
- [Trading cycle: supporting context](trading-cycle/supporting-context/)
