---
title: Documentation map
description: How the Cortiq docs are organized, what each page is for, and where to start based on what you're trying to accomplish.
sidebar:
  order: 10
---

This page is the index for the rest of the site. It explains the logic behind the structure, summarizes what every page contains, and points you to the right starting page for the question you're holding.

## What this is

The Cortiq docs are organized around the decisions a real operator makes in order: *what is this and is it for me?*, *how do I install it?*, *how do the major features fit together?*, *where do I go for help?*. The site is shaped like an operating manual, not an engineering wiki.

The desktop app itself is organized differently. It uses sidebar groups like `Library`, `Playbooks`, `Preparation`, `Tools`, `Settings`, and `Community`. The docs therefore do two jobs at once: explain the product concept-first, and translate each concept back to the screen where you'll find it. The [App navigation guide](app-navigation-guide/) handles the second job in detail.

## How it fits into Cortiq

Reading order from a cold start:

1. Home and this page — orient.
2. [Getting started](getting-started/) — decide if Cortiq fits.
3. [Installation & activation](installation-and-activation/), then [First 30 minutes](first-30-minutes/) — get a virtual session running.
4. [MetaTrader 5 integration](mt5-integration/) and [AI providers](ai-providers/) — wire in the two external systems.
5. [Playbooks & data packages](playbooks-and-data/), [Sessions & AutoScan](sessions-and-autoscan/), [Risk management](risk-management/) — build your operating model.
6. [Workspace & monitoring](workspace-and-monitoring/) and [Journal & analytics](journal-and-analytics/) — daily operation and review.

After the linear path, every page is independently readable.

## Reference

### What each page is for

| Page | Purpose | What you get |
| --- | --- | --- |
| Home | Product orientation | A fast understanding of Cortiq and the recommended reading order. |
| Documentation map *(this page)* | Site overview | The logic behind the structure and where to start based on intent. |
| [App navigation guide](app-navigation-guide/) | UI discovery | Direct translation from docs to sidebar entries inside the app. |
| [Feature overview](feature-overview/) | Capability summary | A short explanation of every major feature in the product. |
| [Capability reference](capability-reference/) | Practical function guide | What each major function does and when to use it. |
| [Getting started](getting-started/) | Evaluation and readiness | Who Cortiq is for, prerequisites, recommended first-run path. |
| [Installation & activation](installation-and-activation/) | Windows onboarding | Purchase, download, install, and license activation flow. |
| [First 30 minutes in Cortiq](first-30-minutes/) | Guided first run | A safe path from activation to a first virtual session. |
| [Glossary](glossary/) | Vocabulary | One-link-deep definitions of platform terms used elsewhere. |
| [MetaTrader 5 integration](mt5-integration/) | Broker terminal connectivity | How Cortiq and MT5 connect, plus the multi-account setup. |
| [AI providers](ai-providers/) | AI setup and routing | Supported providers, browser vs API mode, how to pick. |
| [MCP and agent integration](mcp-and-agent-integration/) | Advanced external control | How MCP-compatible agents control Cortiq via tool calls. |
| [Playbooks & data packages](playbooks-and-data/) | Strategy input design | How rules and data scope shape AI decisions. |
| [Sessions & AutoScan](sessions-and-autoscan/) | Runtime operation | How autonomous sessions work and how symbol selection automates. |
| [Risk management](risk-management/) | Control layer | The limits and pause behavior that sit above execution. |
| [Execution modes & notifications](execution-modes-and-notifications/) | Deployment options | Live, virtual, copy trading, and notification flows. |
| [Workspace & monitoring](workspace-and-monitoring/) | Daily operating screens | The Home, Dashboard, Trade Ideas, Journal, Cohorts, Conversations, and Provider Health screens. |
| [Journal & analytics](journal-and-analytics/) | Review and learning | How Cortiq records performance and explains trades. |
| [Trading cycle: overview](trading-cycle/overview/) | Architecture summary | How one session cycle is assembled from strategy, data, context, and execution. |
| [Trading cycle: playbook design](trading-cycle/playbook-design/) | Professional playbook writing | Disciplined use of each playbook section. |
| [Trading cycle: data package design](trading-cycle/data-package-design/) | Professional payload design | Picking timeframes, indicators, screenshots, and scope. |
| Trading cycle entity pages | Detailed reference | Per-entity pages for sessions, data packages, playbooks, trade ideas, preparation packages, instrument profiles, sentiment reports, and session trade history. |
| [Licensing & support](licensing-and-support/) | Commercial and support flow | License behavior, renewals, and public support channels. |
| [FAQ](faq/) | Fast answers | Common evaluation, setup, and operational questions. |

### Best starting page by intent

| If you're trying to… | Start with |
| --- | --- |
| Understand where things live in the desktop UI | [App navigation guide](app-navigation-guide/) |
| Decide whether Cortiq fits before installing | [Getting started](getting-started/) |
| Install and activate the product | [Installation & activation](installation-and-activation/) |
| Configure strategy inputs | [Playbooks & data packages](playbooks-and-data/) |
| Operate day-to-day sessions | [Sessions & AutoScan](sessions-and-autoscan/) |
| Understand the desktop workspace after setup | [Workspace & monitoring](workspace-and-monitoring/) |
| Review performance and decisions | [Journal & analytics](journal-and-analytics/) |
| Handle support or license issues | [Licensing & support](licensing-and-support/) |

## How to use it

The public Cortiq repository serves four roles in one place:

- Read the official product documentation (this site).
- Download the current public Windows installer from GitHub Releases.
- Report reproducible bugs through GitHub Issues.
- Ask usage questions and share workflows through GitHub Discussions.

Don't use the public repository for security disclosures or license-sensitive personal data. Those go through direct support contact, not a public issue.

## What to read next

1. [Getting started](getting-started/) — the natural next stop if you're evaluating Cortiq.
2. [App navigation guide](app-navigation-guide/) — if you want each doc page mapped to the screen it describes.
3. [Glossary](glossary/) — if a vocabulary term sent you here.

## Related

- [Feature overview](feature-overview/)
- [Capability reference](capability-reference/)
- [FAQ](faq/)
- [Licensing & support](licensing-and-support/)
