---
title: Capability reference
description: A practical, function-by-function guide to what each major Cortiq capability does for you and where to read more.
sidebar:
  order: 40
---

This page answers one question in plain English: *what can each major Cortiq function actually do for me?* Use it as a product map — pick the function that matches your need and follow the link to the page that explains it in depth.

## What this is

Cortiq has roughly fifty named capabilities split across strategy, supporting context, sessions, execution, risk, review, and platform. Reading every detail page in advance is the wrong move. Instead, scan this page, find the rows that map to what you're trying to do, and follow the links from there.

The Reference section is the page. Each row is one function, what it does, what it does *for you*, and where to read more.

## How it fits into Cortiq

Two reading modes work well:

- *Evaluating* — read every section, then start with [Getting started](getting-started/) and [Sessions & AutoScan](sessions-and-autoscan/).
- *Already running Cortiq* — search this page for the function you're configuring, then jump straight to the linked page.

If you want a higher-altitude view first, [Feature overview](feature-overview/) is shorter and grouped differently.

## Reference

### Strategy functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Playbooks | Defines setup, entry, invalidation, risk, and management logic. | Turns a strategy into a repeatable rule system instead of a loose prompt. | [Playbooks & data packages](playbooks-and-data/) |
| Playbook sections | Splits strategy logic into clean fields: setup, entry, risk, management, invalidation. | Makes playbooks the AI can follow and you can review later. | [Playbook design guide](trading-cycle/playbook-design/) |
| Playbook priority | Orders multiple playbooks inside one session. | Decides which setup logic wins when more than one idea is in play. | [Playbooks](trading-cycle/entities/playbooks/) |
| Data packages | Defines what data the AI receives. | Keeps the AI focused on the exact information your strategy needs. | [Data packages](trading-cycle/entities/data-packages/) |
| Screenshot-enabled timeframes | Adds chart images to selected timeframes. | Gives the AI visual confirmation when chart structure matters. | [Data package design guide](trading-cycle/data-package-design/) |
| Indicator inputs | Adds MT5 indicator values to the decision payload. | Brings your technical signal stack into the AI workflow. | [Playbooks & data packages](playbooks-and-data/) |
| Trade ideas | Tracks specific active theses. | Monitor one-off opportunities without making them permanent playbooks. | [Trade ideas](trading-cycle/entities/trade-ideas/) |

### Supporting context functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Session instructions | Adds operator notes and constraints. | Captures desk rules and guidance that travel with the session. | [Supporting context](trading-cycle/supporting-context/) |
| Preparation packages | Generates reusable prepared analysis. | The AI sees broader market structure without rediscovering it every cycle. | [Preparation packages](trading-cycle/entities/preparation-packages/) |
| Instrument profiles | Stores long-lived per-symbol behavior context. | The AI knows what's typical or unusual for a market over time. | [Instrument profiles](trading-cycle/entities/instrument-profiles/) |
| Sentiment reports | Adds macro and news context. | Lets external pressure support or challenge the technical setup. | [Sentiment reports](trading-cycle/entities/sentiment-reports/) |
| Support-layer stacking | Combines preparation, profile, sentiment, and trade ideas with live data. | A cleaner reasoning environment for the AI. | [Trading cycle: overview](trading-cycle/overview/) |

### Session functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Sessions | Creates the operating container for a strategy. | Turns a configuration into something you can run, pause, review, and improve. | [Sessions & AutoScan](sessions-and-autoscan/) |
| Active days and time windows | Controls when a session may trade. | Keeps a strategy inside the hours and days that fit its design. | [Sessions](trading-cycle/entities/sessions/) |
| Fixed-symbol mode | Locks the session to one instrument. | Clean specialization around one market. | [Sessions & AutoScan](sessions-and-autoscan/) |
| AutoScan | The AI chooses among candidate symbols. | Lets the system find the strongest current opportunity instead of waiting on one fixed symbol. | [Sessions & AutoScan](sessions-and-autoscan/) |
| Provider selection | Picks which AI provider runs the session. | Match cost, reliability, and operating style to your workflow. | [AI providers](ai-providers/) |
| Fallback provider | Configures a secondary AI provider. | Keeps the session resilient when the primary is unavailable. | [AI providers](ai-providers/) |
| Browser vs API mode | Picks how the AI provider is integrated. | Balances convenience, traceability, and account requirements. | [AI providers](ai-providers/) |
| External MCP sessions | Lets an external agent control Cortiq. | Drive the workflow from a separate AI client like Claude Desktop. | [MCP and agent integration](mcp-and-agent-integration/) |

### Execution functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Live trading | Sends real orders through MT5. | Move from simulation to real execution inside the same operating model. | [Execution modes & notifications](execution-modes-and-notifications/) |
| Virtual trading | Simulates the trade lifecycle without sending real orders. | Test and build trust before using live capital. | [Execution modes & notifications](execution-modes-and-notifications/) |
| Copy trading | Replicates a master workflow to follower accounts. | Scale one decision engine across multiple accounts. | [Execution modes & notifications](execution-modes-and-notifications/) |
| Trade management | Modifies, partially closes, or closes positions. | The AI is responsible for handling — not just entering — trades. | [Session trades and timeline](trading-cycle/entities/session-trades-and-timeline/) |
| Notifications | Pushes trade events to selected channels. | Stay informed without watching the desktop continuously. | [Execution modes & notifications](execution-modes-and-notifications/) |

### Risk and protection functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Global risk controls | Limits across the full environment. | Protect the whole operating environment, not one account. | [Risk management](risk-management/) |
| Per-account risk controls | Limits account-by-account. | Different mandates for different accounts. | [Risk management](risk-management/) |
| Drawdown and profit targets | Pause behavior based on account performance. | Hard boundaries on how much damage or overtrading the workflow can do. | [Risk management](risk-management/) |
| Trade-count and exposure limits | Restricts how much the system can open. | Prevents runaway activity and concentration in one symbol or account. | [Risk management](risk-management/) |
| Automatic risk pause | Pauses sessions when a breach occurs. | An independent safety layer above the AI decision itself. | [Risk management](risk-management/) |

### Review and improvement functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Trade journal | Records trade-level context and outcomes. | Review whether a trade was disciplined or improvised. | [Journal & analytics](journal-and-analytics/) |
| Session journal | Records behavior over a broader run. | See whether the operating model is working as a whole. | [Journal & analytics](journal-and-analytics/) |
| Analytics | Computes P/L, win rate, and similar metrics. | Evaluate whether changes actually improved the workflow. | [Journal & analytics](journal-and-analytics/) |
| Dashboard | Cross-account performance, recent trades, global state. | Understand the whole environment without opening every session. | [Workspace & monitoring](workspace-and-monitoring/) |
| Session cohorts | Compare grouped sessions side-by-side. | Test which configuration or style is working better. | [Workspace & monitoring](workspace-and-monitoring/) |
| Conversations view | Raw AI conversations across sessions. | Inspect the model's actual responses, not only the summary. | [Workspace & monitoring](workspace-and-monitoring/) |
| Session timeline | What happened in each trading cycle. | Audit and explain the AI workflow. | [Session trades and timeline](trading-cycle/entities/session-trades-and-timeline/) |
| Decision rendering | Analysis, trade ideas, and actions in a readable format. | Understand what the AI concluded, not just what the market did afterward. | [Trading cycle: overview](trading-cycle/overview/) |

### Platform and support functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Windows installation and activation | Installs and licenses the desktop app. | A working Cortiq environment on the machine that operates it. | [Installation & activation](installation-and-activation/) |
| Home workspace | Active sessions, quick actions, first-run progress. | A practical starting point every time you open the app. | [Workspace & monitoring](workspace-and-monitoring/) |
| MT5 integration | Connects Cortiq to the local terminal. | Turns AI decisions into actual broker-side execution. | [MetaTrader 5 integration](mt5-integration/) |
| Provider health | Tracks volume, success rate, response speed, retries, errors. | Diagnose whether provider instability is affecting results. | [Workspace & monitoring](workspace-and-monitoring/) |
| Feature-level provider overrides | Specific functions can use a different provider than the session default. | One session default plus a different provider for a special workflow. | [AI providers](ai-providers/) |
| Automated performance reports | Scheduled summary reports through Telegram. | Monitor performance without opening the desktop. | [Execution modes & notifications](execution-modes-and-notifications/) |
| Public releases | Distributes the current public installer. | One place to get updates. | [Licensing & support](licensing-and-support/) |
| Public issues and discussions | Public support and feedback channels. | Report bugs, ask usage questions, request improvements. | [Licensing & support](licensing-and-support/) |

## What to read next

1. [Playbook design guide](trading-cycle/playbook-design/) — once you know what to configure, this raises the quality of your playbook writing.
2. [Data package design guide](trading-cycle/data-package-design/) — same for data packages.
3. [Sessions & AutoScan](sessions-and-autoscan/) — where most of the table above comes together at runtime.

## Related

- [Feature overview](feature-overview/)
- [Documentation map](documentation-map/)
- [App navigation guide](app-navigation-guide/)
- [Glossary](glossary/)
