---
title: Documentation map
description: How the Cortiq docs are organized, what each page is for, and where to start based on what you're trying to accomplish.
sidebar:
  order: 10
---

This page is the index for the rest of the site. It explains the logic behind the structure, summarizes what every page contains, and points you to the right starting page for the question you're holding.

## What this is

The Cortiq docs are organized around the decisions a real operator makes in order: *what is this and is it for me?*, *how do I install it?*, *how do the major features fit together?*, *where do I go for help?*. The site is shaped like an operating manual, not an engineering wiki.

The desktop app itself is organized differently. It uses sidebar groups like `Library`, `Playbooks`, `Preparation`, `Tools`, and `Community`, plus standalone entries — `Settings` is a lone NavItem, not a group, and `Copilot` is a toggle button (`Ctrl+K`). The docs therefore do two jobs at once: explain the product concept-first, and translate each concept back to the screen where you'll find it. The [App navigation guide](/cortiq-public/app-navigation-guide/) handles the second job in detail.

## How it fits into Cortiq

Reading order from a cold start:

1. Home and this page — orient.
2. [Getting started](/cortiq-public/getting-started/) — decide if Cortiq fits.
3. [Installation & activation](/cortiq-public/installation-and-activation/), then [First 30 minutes](/cortiq-public/first-30-minutes/) — get a first session running.
4. [MetaTrader 5 integration](/cortiq-public/mt5-integration/) and [AI providers](/cortiq-public/ai-providers/) — wire in the two external systems.
5. [Playbooks & data packages](/cortiq-public/playbooks-and-data/), [Sessions](/cortiq-public/sessions/), [Risk management](/cortiq-public/risk-management/) — build your operating model.
6. [Backtesting](/cortiq-public/backtesting/) — validate a playbook against history before committing capital.
7. [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) and [Journal & analytics](/cortiq-public/journal-and-analytics/) — daily operation and review.
8. [Session review](/cortiq-public/session-review/) — turn each finished session into durable instrument lessons.

After the linear path, every page is independently readable.

## Reference

### What each page is for

The site is grouped into **Start Here**, **Platform**, **Research & Skills**, **MCP & Agent**, **Trading Cycle**, and **Support**.

**Start Here**

| Page | Purpose | What you get |
| --- | --- | --- |
| Home | Product orientation | A fast understanding of Cortiq and the recommended reading order. |
| Documentation map *(this page)* | Site overview | The logic behind the structure and where to start based on intent. |
| [App navigation guide](/cortiq-public/app-navigation-guide/) | UI discovery | Direct translation from docs to sidebar entries inside the app. |
| [Feature overview](/cortiq-public/feature-overview/) | Capability summary | A short explanation of every major feature in the product. |
| [Capability reference](/cortiq-public/capability-reference/) | Practical function guide | What each major function does and when to use it. |
| [Getting started](/cortiq-public/getting-started/) | Evaluation and readiness | Who Cortiq is for, prerequisites, recommended first-run path. |
| [Installation & activation](/cortiq-public/installation-and-activation/) | Windows onboarding | Purchase, download, install, and license activation flow. |
| [First 30 minutes in Cortiq](/cortiq-public/first-30-minutes/) | Guided first run | A safe path from activation to a first session. |
| [Glossary](/cortiq-public/glossary/) | Vocabulary | One-link-deep definitions of platform terms used elsewhere. |

**Platform**

| Page | Purpose | What you get |
| --- | --- | --- |
| [MetaTrader 5 integration](/cortiq-public/mt5-integration/) | Broker terminal connectivity | How Cortiq and MT5 connect, plus the multi-account setup. |
| [AI providers](/cortiq-public/ai-providers/) | AI setup and routing | Supported providers and the API / ACP / CLI / External MCP transports, how to pick. |
| [Playbooks & data packages](/cortiq-public/playbooks-and-data/) | Strategy input design | How rules and data scope shape AI decisions. |
| [Sessions](/cortiq-public/sessions/) | Runtime operation | How autonomous sessions work and how each session is locked to one instrument. |
| [Risk management](/cortiq-public/risk-management/) | Control layer | The limits and pause behavior that sit above execution. |
| [Backtesting](/cortiq-public/backtesting/) | Historical validation | Historical M1 replay of a session or playbook; the only license-free path. |
| [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) | Deployment options | Live, virtual, copy trading, and notification flows. |
| [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) | Daily operating screens | The Home, Dashboard, Trade Ideas, Journal, Cohorts, Conversations, and Provider Health screens. |
| [Journal & analytics](/cortiq-public/journal-and-analytics/) | Review and learning | How Cortiq records performance and explains trades. |
| [Session review](/cortiq-public/session-review/) | Post-session learning | One-click AI review that scores a session into suggestions and durable instrument lessons. |
| [System messages](/cortiq-public/system-messages/) | Notification inbox | The in-app inbox and the actionable permission cards it surfaces. |

**Research & Skills**

| Page | Purpose | What you get |
| --- | --- | --- |
| [Research](/cortiq-public/research/) | Single-instrument idea lab | Workspaces, runs, artifacts, and opt-in edge-discovery guardrails. |
| [Skills](/cortiq-public/skills/) | Reusable instructions | Markdown instruction templates injected into generation flows. |

**MCP & Agent**

| Page | Purpose | What you get |
| --- | --- | --- |
| [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/) | Advanced external control | How MCP-compatible agents control Cortiq via tool calls. |
| [Cortiq Copilot](/cortiq-public/cortiq-copilot/) | In-app authoring agent | The Copilot dock (`Ctrl+K`) that authors entities behind the approval gate. |
| [Agent permissions](/cortiq-public/agent-permissions/) | Approval and grants | The always-on trade gate plus persisted capability grants. |

**Trading Cycle**

| Page | Purpose | What you get |
| --- | --- | --- |
| [Trading cycle: overview](/cortiq-public/trading-cycle/overview/) | Architecture summary | How one session cycle is assembled from strategy, data, context, and execution. |
| [Trading cycle: playbook design](/cortiq-public/trading-cycle/playbook-design/) | Professional playbook writing | Disciplined use of each playbook section. |
| [Trading cycle: data package design](/cortiq-public/trading-cycle/data-package-design/) | Professional payload design | Picking timeframes, indicators, screenshots, and scope. |
| Trading cycle entity pages | Detailed reference | Per-entity pages for sessions, data packages, playbooks, trade ideas, preparation packages, instrument profiles, sentiment reports, and session trade history. |

**Support**

| Page | Purpose | What you get |
| --- | --- | --- |
| [Licensing & support](/cortiq-public/licensing-and-support/) | Commercial and support flow | One-time license behavior, the re-verify grace window, and public support channels. |
| [FAQ](/cortiq-public/faq/) | Fast answers | Common evaluation, setup, and operational questions. |

### Best starting page by intent

| If you're trying to… | Start with |
| --- | --- |
| Understand where things live in the desktop UI | [App navigation guide](/cortiq-public/app-navigation-guide/) |
| Decide whether Cortiq fits before installing | [Getting started](/cortiq-public/getting-started/) |
| Install and activate the product | [Installation & activation](/cortiq-public/installation-and-activation/) |
| Configure strategy inputs | [Playbooks & data packages](/cortiq-public/playbooks-and-data/) |
| Operate day-to-day sessions | [Sessions](/cortiq-public/sessions/) |
| Validate a playbook against history | [Backtesting](/cortiq-public/backtesting/) |
| Research a single instrument deeply | [Research](/cortiq-public/research/) |
| Understand the desktop workspace after setup | [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) |
| Review performance and decisions | [Journal & analytics](/cortiq-public/journal-and-analytics/) |
| Turn a finished session into lessons | [Session review](/cortiq-public/session-review/) |
| Control what the agent may do on its own | [Agent permissions](/cortiq-public/agent-permissions/) |
| Handle support or license issues | [Licensing & support](/cortiq-public/licensing-and-support/) |

## How to use it

The public Cortiq repository serves four roles in one place:

- Read the official product documentation (this site).
- Download the current public Windows installer from GitHub Releases.
- Report reproducible bugs through GitHub Issues.
- Ask usage questions and share workflows through GitHub Discussions.

Don't use the public repository for security disclosures or license-sensitive personal data. Those go through direct support contact, not a public issue.

## What to read next

1. [Getting started](/cortiq-public/getting-started/) — the natural next stop if you're evaluating Cortiq.
2. [App navigation guide](/cortiq-public/app-navigation-guide/) — if you want each doc page mapped to the screen it describes.
3. [Glossary](/cortiq-public/glossary/) — if a vocabulary term sent you here.

## Related

- [Feature overview](/cortiq-public/feature-overview/)
- [Capability reference](/cortiq-public/capability-reference/)
- [FAQ](/cortiq-public/faq/)
- [Licensing & support](/cortiq-public/licensing-and-support/)
