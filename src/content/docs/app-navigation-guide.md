---
status: current
title: App navigation guide
description: Find the current desktop screens for instruments, research, backtests, sessions, data policies, providers, reviews, and Activity.
sidebar:
  order: 20
---

Use this guide to find the desktop screen that matches your task. The documentation is grouped by topic; the app sidebar is grouped by the work you do.

## What this is

The sidebar separates daily operation, instrument knowledge, preparation, tools, and setup. Research belongs to an instrument's Hub. Connection settings have dedicated pages.

## How it fits into Cortiq

Start with **Setup** to connect the app, **Knowledge** to investigate a market, **Preparation** to define or test rules, and **Library** to operate and review sessions.

## Find a screen

| Sidebar group | Current entries |
| --- | --- |
| **Library** | Home, Dashboard, Chart, Sessions, Journal, Session Reviews, Activity. |
| **Knowledge** | My Instruments and instrument shortcuts. |
| **Preparation** | My Playbooks, Backtests, Skills, Preparation, Sentiment, Instrument Profiles. |
| **Tools** | Data Access Policies, Indicators, Risk Management, Provider Health. |
| **Setup** | MT5 Accounts, AI Providers, License. |
| **Settings** | General, Copilot; Remote access appears only in builds where that feature is enabled. |
| **Community** | Documentation, Report a Bug, and feedback/discussion links. |

Open Copilot with **Ctrl+K**. Its context follows the current screen; it is separate from provider connection settings and the session's trading loop.

## Choose the screen for your task

| To… | Open… | Guide |
| --- | --- | --- |
| Connect a terminal | **Setup** → **MT5 Accounts** | [MT5 integration](/cortiq-public/mt5-integration/) |
| Set an AI provider and transport | **Setup** → **AI Providers** | [AI providers](/cortiq-public/ai-providers/) |
| Activate a license | **Setup** → **License** | [Licensing and support](/cortiq-public/licensing-and-support/) |
| Study a market | **Knowledge** → **My Instruments** → instrument | [Instrument Hub](/cortiq-public/instrument-hub/) |
| Build research input files | Instrument Hub → **Data** | [Research](/cortiq-public/research/) |
| Prepare or reopen research | Instrument Hub → **Research a topic** or saved drafts/research history; approve a ready draft in its wizard | [Research](/cortiq-public/research/) |
| Inspect knowledge and its evidence | Instrument Hub → **Knowledge** | [Instrument Hub](/cortiq-public/instrument-hub/) |
| Create or edit trading rules | **Preparation** → **My Playbooks** | [Playbooks and data](/cortiq-public/playbooks-and-data/) |
| Define AI input limits | **Tools** → **Data Access Policies**, or the playbook policy editor | [Data policy design](/cortiq-public/trading-cycle/data-package-design/) |
| Check available indicator definitions | **Tools** → **Indicators** | [Playbooks and data](/cortiq-public/playbooks-and-data/) |
| Replay historical execution | **Preparation** → **Backtests** | [Backtesting](/cortiq-public/backtesting/) |
| Open a standalone chart | **Library** → **Chart** | [Charting](/cortiq-public/charting/) |
| Create or operate a session | **Library** → **Sessions** | [Sessions](/cortiq-public/sessions/) |
| Review saved session evidence | Session → **Reviews**; saved versions also appear in **Library** → **Session Reviews** | [Session review](/cortiq-public/session-review/) |
| Read alerts or pending approvals | **Library** → **Activity** | [Activity](/cortiq-public/system-messages/) |
| Configure trading limits | **Tools** → **Risk Management** | [Risk management](/cortiq-public/risk-management/) |
| Inspect provider errors | **Tools** → **Provider Health** | [Workspace and monitoring](/cortiq-public/workspace-and-monitoring/) |
| Configure trade notifications | Session detail → **Settings** | [Execution modes and notifications](/cortiq-public/execution-modes-and-notifications/) |
| Configure Copilot permissions | **Settings** → **Copilot** | [Agent permissions](/cortiq-public/agent-permissions/) |

## Older names and links

- **Research** is no longer a standalone sidebar list. Its old route opens Instruments or the specified instrument's Knowledge tab.
- **Data packages** is the older name used by some saved records and documentation URLs. The current sidebar entry is **Data Access Policies**.
- **System Messages** is now labelled **Activity**. Its route remains `/system-messages`.
- Trade Ideas, Cohorts, and Conversations have existing screens, but are not entries in the current main sidebar. Follow contextual links where available.

Keep existing bookmarks: the documentation's older page slugs remain stable even where screen labels have changed.

## Verify your destination

Check the page heading and selected instrument or session before starting work. A Hub is instrument-scoped; a session and its chart belong to their configured account and single instrument.

## What to read next

1. [Instrument Hub](/cortiq-public/instrument-hub/) — the starting point for research and knowledge.
2. [Workspace and monitoring](/cortiq-public/workspace-and-monitoring/) — operate and inspect daily activity.
3. [First 30 minutes](/cortiq-public/first-30-minutes/) — follow the initial setup path.

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Current Library and Knowledge navigation beside MT5 Accounts](/cortiq-public/images/screenshots/app-navigation-guide__sidebar.png)

*The middle sidebar scrolls to reveal the remaining sections. Demo accounts use temporary ports.*

## Related

- [Documentation map](/cortiq-public/documentation-map/)
- [Feature overview](/cortiq-public/feature-overview/)
- [Capability reference](/cortiq-public/capability-reference/)
- [Glossary](/cortiq-public/glossary/)
