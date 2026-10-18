---
status: current
title: Capability reference
description: A practical, function-by-function guide to what each major Cortiq capability does for you and where to read more.
sidebar:
  order: 40
---

This page answers one question in plain English: *what can each major Cortiq function actually do for me?* Use it as a product map — pick the function that matches your need and follow the link to the page that explains it in depth.

## What this is

Cortiq has dozens of named capabilities split across strategy, supporting context, sessions, execution, validation, risk, review, the agent surface, and platform. Reading every detail page in advance is the wrong move. Instead, scan this page, find the rows that map to what you're trying to do, and follow the links from there.

The Reference section is the page. Each row is one function, what it does, what it does *for you*, and where to read more.

## How it fits into Cortiq

Two reading modes work well:

- *Evaluating* — read every section, then start with [Getting started](/cortiq-public/getting-started/) and [Sessions](/cortiq-public/sessions/).
- *Already running Cortiq* — search this page for the function you're configuring, then jump straight to the linked page.

If you want a higher-altitude view first, [Feature overview](/cortiq-public/feature-overview/) is shorter and grouped differently.

## Reference

### Strategy functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Playbooks | Defines setup, entry, invalidation, risk, and management logic. | Turns a strategy into a repeatable rule system instead of a loose prompt. | [Playbooks & data access policies](/cortiq-public/playbooks-and-data/) |
| Playbook sections | Splits strategy logic into clean fields: setup, entry, risk, management, invalidation. | Makes playbooks the AI can follow and you can review later. | [Playbook design guide](/cortiq-public/trading-cycle/playbook-design/) |
| Playbook priority | Orders multiple playbooks inside one session. | Decides which setup logic wins when more than one idea is in play. | [Playbooks](/cortiq-public/trading-cycle/entities/playbooks/) |
| Data access policies | Defines allowed inputs and exact indicator bindings. | Check that execution rules have usable data. | [Data access policies](/cortiq-public/trading-cycle/entities/data-packages/) |
| Screenshot-enabled timeframes | Adds chart images to selected timeframes. | Gives the AI visual confirmation when chart structure matters. | [Data access policy design guide](/cortiq-public/trading-cycle/data-package-design/) |
| Indicator inputs | Uses supported Cortiq-calculated indicator definitions. | Reuse exact versions and parameters in charting and policies. | [Playbooks and policies](/cortiq-public/playbooks-and-data/) |
| Trade ideas | Tracks specific active theses. | Monitor one-off opportunities without making them permanent playbooks. | [Trade ideas](/cortiq-public/trading-cycle/entities/trade-ideas/) |
| Skills | Reusable Markdown instructions explicitly selected or attached. | Apply the intended method in supported generation or authoring contexts. | [Skills](/cortiq-public/skills/) |

### Supporting context functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Session instructions | Adds operator notes and constraints. | Captures desk rules and guidance that travel with the session. | [Supporting context](/cortiq-public/trading-cycle/supporting-context/) |
| Preparation packages | Generates reusable prepared analysis. | The AI sees broader market structure without rediscovering it every cycle. | [Preparation packages](/cortiq-public/trading-cycle/entities/preparation-packages/) |
| Instrument profiles | Stores long-lived per-symbol behavior context. | The AI knows what's typical or unusual for a market over time. | [Instrument profiles](/cortiq-public/trading-cycle/entities/instrument-profiles/) |
| Sentiment reports | Adds macro and news context. | Lets external pressure support or challenge the technical setup. | [Sentiment reports](/cortiq-public/trading-cycle/entities/sentiment-reports/) |
| Support-layer stacking | Combines preparation, profile, sentiment, and trade ideas with live data. | A cleaner reasoning environment for the AI. | [Trading cycle: overview](/cortiq-public/trading-cycle/overview/) |

### Session functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Sessions | Creates the operating container for a strategy. | Turns a configuration into something you can run, pause, review, and improve. | [Sessions](/cortiq-public/sessions/) |
| Active days and time windows | Controls when a session may trade. | Keeps a strategy inside the hours and days that fit its design. | [Sessions](/cortiq-public/trading-cycle/entities/sessions/) |
| Single-instrument sessions | Locks each session to one instrument. | Clean specialization around one market, so results stay comparable over time. | [Sessions](/cortiq-public/sessions/) |
| Provider selection | Picks which AI provider runs the session. | Match cost, reliability, and operating style to your workflow. | [AI providers](/cortiq-public/ai-providers/) |
| Explicit provider route | Selects provider, API/ACP transport, model, and effort. | Configuration errors stay visible instead of silently switching providers. | [AI providers](/cortiq-public/ai-providers/) |
| Provider transport | Uses API or supported ACP for internal model calls. | Match the configured account and connection to the feature. | [AI providers](/cortiq-public/ai-providers/) |
| External MCP tools | Lets an outside client act in a Manual-session context. | Separate client-driven tool actions from the autonomous loop. | [MCP integration](/cortiq-public/mcp-and-agent-integration/) |

### Execution functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Live trading | Sends real orders through MT5. | Move from simulation to real execution inside the same operating model. | [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) |
| Virtual trading | Simulates the trade lifecycle without sending real orders. | Test and build trust before using live capital. | [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) |
| Account selection | Binds a session to one configured MT5 account and instrument. | Keep execution and evidence scoped to the intended broker connection. | [MT5 integration](/cortiq-public/mt5-integration/) |
| Trade management | Modifies, partially closes, or closes positions. | The AI is responsible for handling — not only entering — trades. | [Session trades and timeline](/cortiq-public/trading-cycle/entities/session-trades-and-timeline/) |
| Notifications | Pushes trade events to selected channels. | Stay informed without watching the desktop continuously. | [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) |

### Validation functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Backtesting | Runs standalone manual or autonomous historical replay. | Inspect simulated execution, coverage, saved risk, instructions, and results. | [Backtesting](/cortiq-public/backtesting/) |
| Saved replay recovery | Restores supported checkpoints into Paused for explicit continuation. | Resume known saved work after interruption and inspect recovery limits. | [Backtesting](/cortiq-public/backtesting/) |

### Risk and protection functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Global risk controls | Limits across the full environment. | Protect the whole operating environment, not one account. | [Risk management](/cortiq-public/risk-management/) |
| Per-account risk controls | Limits account-by-account. | Different mandates for different accounts. | [Risk management](/cortiq-public/risk-management/) |
| Drawdown and profit targets | Pause behavior based on account performance. | Hard boundaries on how much damage or overtrading the workflow can do. | [Risk management](/cortiq-public/risk-management/) |
| Trade-count and exposure limits | Restricts how much the system can open. | Prevents runaway activity and concentration in one symbol or account. | [Risk management](/cortiq-public/risk-management/) |
| Automatic risk pause | Pauses sessions when a breach occurs. | An independent safety layer above the AI decision itself. | [Risk management](/cortiq-public/risk-management/) |
| Emergency-stop breaker | Halts all trading activity immediately on demand or on a hard breach. | A single switch to stop the whole environment when something looks wrong. | [Risk management](/cortiq-public/risk-management/) |

### Review and improvement functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Trade journal | Records trade-level context and outcomes. | Review whether a trade was disciplined or improvised. | [Journal & analytics](/cortiq-public/journal-and-analytics/) |
| Session journal | Records behavior over a broader run. | See whether the operating model is working as a whole. | [Journal & analytics](/cortiq-public/journal-and-analytics/) |
| Analytics | Computes P/L, win rate, and similar metrics. | Evaluate whether changes actually improved the workflow. | [Journal & analytics](/cortiq-public/journal-and-analytics/) |
| Dashboard | Cross-account performance, recent trades, global state. | Understand the whole environment without opening every session. | [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) |
| Session cohorts | Compare grouped sessions side-by-side. | Test which configuration or style is working better. | [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) |
| Conversations view | Raw AI conversations across sessions. | Inspect the model's actual responses, not only the summary. | [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) |
| Session timeline | What happened in each trading cycle. | Audit and explain the AI workflow. | [Session trades and timeline](/cortiq-public/trading-cycle/entities/session-trades-and-timeline/) |
| Decision rendering | Analysis, trade ideas, and actions in a readable format. | Understand what the AI concluded, not only what the market did afterward. | [Trading cycle: overview](/cortiq-public/trading-cycle/overview/) |
| Session reviews | Explicitly reviews saved evidence, including during an active session. | Inspect assessment, Observations, proposed changes, and the reviewed cutoff. | [Session review](/cortiq-public/session-review/) |
| Activity | In-app notification inbox with actionable cards. | Read platform alerts and approve agent actions in one place. | [Activity](/cortiq-public/system-messages/) |

### Agent and research functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Topic research | Measures distinct questions and saves independent answers and final interpretation. | Inspect evidence and explicitly save reviewed Learnings. | [Research](/cortiq-public/research/) |
| Execution-policy validation | Requires eligible evidence and a separate closed validation workflow before Edge promotion. | Keep descriptive findings separate from tested execution authority. | [Instrument Hub](/cortiq-public/instrument-hub/) |
| MCP server | Exposes Cortiq tools to MCP-compatible clients. | Drive analysis and trading from an external agent. | [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/) |
| Cortiq Copilot | An in-app assistant (`Ctrl+K`) with page-specific tools. | Prepare drafts and use permitted actions with the applicable save and approval rules. | [Cortiq Copilot](/cortiq-public/cortiq-copilot/) |
| Agent permissions | Separates provider permission mode, mutation approvals, and execution checks. | Understand the authority granted for each action. | [Agent permissions](/cortiq-public/agent-permissions/) |

### Platform and support functions

| Function | What it does | What it does for you | Read more |
| --- | --- | --- | --- |
| Windows installation and activation | Installs and licenses the desktop app. | A working Cortiq environment on the machine that operates it. | [Installation & activation](/cortiq-public/installation-and-activation/) |
| Home workspace | Active sessions, quick actions, first-run progress. | A practical starting point every time you open the app. | [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) |
| MT5 integration | Connects Cortiq to the local terminal. | Turns AI decisions into actual broker-side execution. | [MetaTrader 5 integration](/cortiq-public/mt5-integration/) |
| Provider health | Tracks volume, success rate, response speed, retries, errors. | Diagnose whether provider instability is affecting results. | [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) |
| Feature-level provider overrides | Specific functions can use a different provider than the session default. | One session default plus a different provider for a special workflow. | [AI providers](/cortiq-public/ai-providers/) |
| Price notifications | Saves session targets and monitors fresh Bid while Running. | Read activations in Activity; a Windows toast is also attempted. | [Charting](/cortiq-public/charting/) |
| Public releases | Distributes the current public installer. | One place to get updates. | [Licensing & support](/cortiq-public/licensing-and-support/) |
| Public issues and discussions | Public support and feedback channels. | Report bugs, ask usage questions, request improvements. | [Licensing & support](/cortiq-public/licensing-and-support/) |

## What to read next

1. [Playbook design guide](/cortiq-public/trading-cycle/playbook-design/) — once you know what to configure, this raises the quality of your playbook writing.
2. [Data access policy design guide](/cortiq-public/trading-cycle/data-package-design/) — same for data access policies.
3. [Sessions](/cortiq-public/sessions/) — where most of the tables above come together at runtime.
4. [Backtesting](/cortiq-public/backtesting/) — validate a configuration against history before going live.

## Related

- [Feature overview](/cortiq-public/feature-overview/)
- [Documentation map](/cortiq-public/documentation-map/)
- [App navigation guide](/cortiq-public/app-navigation-guide/)
- [Research](/cortiq-public/research/)
- [Cortiq Copilot](/cortiq-public/cortiq-copilot/)
- [Glossary](/cortiq-public/glossary/)
