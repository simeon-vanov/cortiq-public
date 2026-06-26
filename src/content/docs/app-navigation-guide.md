---
title: App navigation guide
description: How the public documentation maps to the Cortiq desktop sidebar and screens, with a quick task map for finding any feature in the app.
sidebar:
  order: 20
---

This page is the bridge between the docs and the desktop app. By the end you'll know which sidebar section and screen each documented feature lives in.

## What this is

The docs explain Cortiq by topic; the desktop app is operated through a left sidebar. The sidebar has four grouped sections — `Library`, `Playbooks`, `Preparation`, and `Tools` — plus a standalone `Settings` item, a `Copilot` toggle, and a `Community` block of external links. The two views don't always match name-for-name: a single docs page can span multiple screens, and a single screen can host capabilities described on different docs pages.

This page closes that gap. It lists each sidebar group, what it contains, and a task-to-screen lookup for the questions readers most often hold while learning the app.

![Cortiq desktop app sidebar showing the Library, Playbooks, Preparation, and Tools groups](/cortiq-public/images/screenshots/app-navigation-guide__sidebar.png)

## How it fits into Cortiq

A simple mental model for the app:

- `Settings` is a single page that configures the machine and external connections — MT5 accounts, notification credentials, reports, and agent permissions are tabs inside it.
- `Playbooks`, `Preparation`, and `Tools` define what the AI works with, including provider and license setup.
- `Library` is where you operate, monitor, and review the result.
- `Copilot` (`Ctrl+K`) opens an in-app assistant that can author entities for you behind the approval gate.
- `Community` links out to the public support surface.

Configuration and inputs on the left, runtime and review in the middle, Copilot and community at the edges.

## Reference

### Sidebar structure

| Sidebar group | What you'll find there | Typical use |
| --- | --- | --- |
| `Library` | Home, Dashboard, Sessions, Trade Ideas, Journal, Session Reviews, Cohorts, Conversations, System Messages | Day-to-day operation, monitoring, review. |
| `Playbooks` | My Playbooks, plus up to five pinned playbook links | Strategy design and maintenance. |
| `Preparation` | Research, Backtests, Skills, Preparation, Sentiment, Instrument Profiles | Idea work, validation, and reusable context. |
| `Tools` | Data Packages, Indicators, Risk Management, Provider Health, AI Providers, License | Payload design, control layers, providers, and licensing. |
| `Settings` *(standalone)* | One page with tabs for MT5 accounts, notification credentials, reports, and agent permissions | Machine setup and platform configuration. |
| `Copilot` *(toggle)* | An in-app assistant dock opened with `Ctrl+K` | Author entities by asking, behind the approval gate. |
| `Community` *(external links)* | Report a Bug, Feedback, Discussion | Public support and product communication. |

:::note
`AI Providers` and `License` live under `Tools`, not `Settings`. The standalone `Settings` page holds MT5 accounts, notification credentials, reports, and agent permissions as tabs — there is no separate `Settings` group.
:::

### Quick task map

| If you want to… | Open this in the app |
| --- | --- |
| Activate a license or check license state | `Tools` → `License` |
| Configure OpenAI, Gemini, Claude, OpenRouter, or a local model | `Tools` → `AI Providers` |
| Watch provider reliability | `Tools` → `Provider Health` |
| Adjust risk limits | `Tools` → `Risk Management` |
| Define the candles, indicators, and screenshots the AI receives | `Tools` → `Data Packages` |
| Manage supporting indicators | `Tools` → `Indicators` |
| Connect MetaTrader 5 | `Settings` → MT5 accounts tab |
| Set up notification credentials or reports | `Settings` → notifications / reports tabs |
| Review or grant agent permissions | `Settings` → agent permissions tab |
| Build or edit a strategy | `Playbooks` → `My Playbooks` |
| Add reusable market context | `Preparation` → `Preparation`, `Sentiment`, or `Instrument Profiles` |
| Reuse an instruction template | `Preparation` → `Skills` |
| Explore an idea on one instrument | `Preparation` → `Research` |
| Replay a session against history | `Preparation` → `Backtests` |
| Create or run a trading workflow | `Library` → `Sessions` |
| Watch performance across the environment | `Library` → `Dashboard` |
| Review AI reasoning and trade history | `Library` → `Journal` |
| Get an AI review of a finished run | `Library` → `Session Reviews` |
| Compare multiple sessions | `Library` → `Cohorts` |
| Inspect raw AI conversations | `Library` → `Conversations` |
| Read alerts and approve agent actions | `Library` → `System Messages` |
| Author an entity by asking | `Copilot` toggle (`Ctrl+K`) |
| Open public support links | `Community` → `Report a Bug`, `Feedback`, `Discussion` |

### Docs-to-UI map

| Docs page | Main UI surface |
| --- | --- |
| [Installation & activation](/cortiq-public/installation-and-activation/) | `Tools` → `License` |
| [MetaTrader 5 integration](/cortiq-public/mt5-integration/) | `Settings` → MT5 accounts tab |
| [AI providers](/cortiq-public/ai-providers/) | `Tools` → `AI Providers`, `Library` → `Sessions` |
| [Playbooks & data packages](/cortiq-public/playbooks-and-data/) | `Playbooks` → `My Playbooks`, `Tools` → `Data Packages`, `Tools` → `Indicators` |
| [Skills](/cortiq-public/skills/) | `Preparation` → `Skills` |
| [Sessions](/cortiq-public/sessions/) | `Library` → `Sessions` |
| [Backtesting](/cortiq-public/backtesting/) | `Preparation` → `Backtests` |
| [Research](/cortiq-public/research/) | `Preparation` → `Research` |
| [Risk management](/cortiq-public/risk-management/) | `Tools` → `Risk Management`, `Library` → `Dashboard` |
| [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) | `Library` → `Sessions`, `Settings` → notifications tab |
| [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) | `Library` (most screens), `Tools` → `Provider Health` |
| [Journal & analytics](/cortiq-public/journal-and-analytics/) | `Library` → `Journal`, `Dashboard`, `Cohorts`, `Conversations` |
| [Session reviews](/cortiq-public/session-review/) | `Library` → `Session Reviews` |
| [System messages](/cortiq-public/system-messages/) | `Library` → `System Messages` |
| [Cortiq Copilot](/cortiq-public/cortiq-copilot/) | `Copilot` toggle (`Ctrl+K`) |
| [Agent permissions](/cortiq-public/agent-permissions/) | `Settings` → agent permissions tab |
| [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/) | `Library` → `Sessions` (external MCP), external clients |
| [Licensing & support](/cortiq-public/licensing-and-support/) | `Tools` → `License`, `Community` |

## What to read next

1. [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) — once you can navigate, this is the tour of the screens you'll spend most of your time in.
2. [Feature overview](/cortiq-public/feature-overview/) — the at-a-glance map of every capability the sidebar exposes.
3. [Capability reference](/cortiq-public/capability-reference/) — what each major function does in plain English.

## Related

- [Documentation map](/cortiq-public/documentation-map/)
- [Feature overview](/cortiq-public/feature-overview/)
- [Cortiq Copilot](/cortiq-public/cortiq-copilot/)
- [System messages](/cortiq-public/system-messages/)
- [Glossary](/cortiq-public/glossary/)
- [Trading cycle: session architecture](/cortiq-public/trading-cycle/session-architecture/)
