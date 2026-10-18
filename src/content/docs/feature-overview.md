---
status: current
title: Feature overview
description: A map of Cortiq capabilities, from instrument research and reviewed knowledge to data policies, historical replay, sessions, and review.
sidebar:
  order: 30
---

This page is the at-a-glance map of Cortiq's product surface. Read it once before going deeper, or skim it later to find the right page for a specific capability.

## What this is

Cortiq's feature set is wide because the platform handles a full operating loop, not a single step. The major features fall into five groups: *strategy and context* (playbooks, data access policies, preparation, skills), *execution* (sessions, MT5, providers, risk, execution modes), *validation* (backtesting), *monitoring and review* (workspace screens, journals, session reviews, system messages), and *agent surface* (research, MCP, Copilot, permissions).

Use this page as a fast index into the rest of the site. The Reference table below names every major capability with one sentence of "what it does" and one sentence of "why it matters", and links to the page that explains it in depth.

## How it fits into Cortiq

Different readers come to this page with different needs:

- *Evaluating Cortiq* — read this top-to-bottom, then [Getting started](/cortiq-public/getting-started/).
- *Already installed* — skim the table, then jump to the page for the feature you're configuring.
- *Comparing scope* — use the "What Cortiq is and isn't" section below to set realistic expectations.

:::note
You bring your own AI. Cortiq connects to providers you already pay for — there is no managed Cortiq AI. Each session is locked to one instrument; Cortiq has no symbol scanner and no multi-symbol baskets.
:::

## Reference

### Strategy and context

| Feature | What it does | Why it matters |
| --- | --- | --- |
| Playbook management | Defines the rules, filters, and operating logic the AI must follow. | You keep control of the trading framework instead of delegating it to a black box. |
| Data access policies | Sets allowed timeframes, candle limits, and exact indicator bindings. | Align required inputs with the playbook and check actual data delivery. |
| Preparation layers | Reusable context through instrument profiles, preparation packages, and sentiment reports. | The AI operates with structured background instead of rediscovering it every cycle. |
| Skills | Reusable Markdown instructions explicitly attached to supported flows. | Apply a chosen method to generation, analysis, or authoring. |
| Indicator catalogue | Calculates supported built-in indicators in Cortiq from broker candles. | Select exact supported definitions and parameters for charting and execution. |
| Trade ideas | Captures standalone theses outside the reusable playbook library. | Track one-off opportunities without polluting your strategy framework. |

### Execution

| Feature | What it does | Why it matters |
| --- | --- | --- |
| Trading sessions | Runs a repeatable workflow on an MT5 account for a single symbol, with a chosen provider, time window, and risk settings. | Sessions turn a strategy into an executable operating unit. |
| Discretionary trading | Manual sessions run no AI decision loop — you place the orders from the session's chart, with position size calculated from your stop and a risk percentage. | Trade the market yourself while keeping the preparation, risk limits, journal, and review. |
| Charting | A candlestick chart in every session, backtest, journal entry, and piece of recorded evidence, with timeframes, drawing tools, Cortiq-calculated indicators, and trade and decision markers. | See what happened and where each order or decision landed, without leaving the app. |
| MetaTrader 5 integration | Connects Cortiq to MT5 on the same machine for prices, account state, orders, and position management. | The execution bridge between AI decisions and actual trades. |
| Bring-your-own AI providers | Uses explicitly selected API or supported ACP connections. | Keep provider, model, transport, and billing under your control. |
| Execution modes | Chooses virtual simulation or broker execution separately from Manual/Autonomous decision-making. | Rehearse the configured workflow before authorizing real orders. |
| Risk management | Applies dual-layer global and per-account limits on drawdown, profit, trade counts, exposure, and loss streaks, with an emergency-stop breaker. | Risk rules stay active even when the AI wants to trade more aggressively. |
| Notifications | Dispatches supported events through configured channels and records Activity and session price alerts. | Inspect delivery boundaries and durable in-app events. |
| Feature-level provider overrides | Specific product functions can use a different provider than the session default. | One provider may be better for a supporting workflow than for live decisions. |

### Validation

| Feature | What it does | Why it matters |
| --- | --- | --- |
| Backtesting | Configures standalone manual or autonomous historical replay with frozen risk settings, instructions, coverage checks, and saved recovery. | Inspect execution and simulation limits before evaluating a setup. |

### Monitoring and review

| Feature | What it does | Why it matters |
| --- | --- | --- |
| Home workspace | Active sessions, quick actions, and a first-run checklist. | One screen to orient yourself when opening Cortiq. |
| Dashboard | Cross-account performance, recent trades, and global risk visibility. | Easier to monitor the environment than checking sessions one-by-one. |
| Session cohorts | Compare grouped sessions side-by-side. | Decide whether one configuration outperforms another over time. |
| Conversations | The raw AI conversations across selected sessions. | Inspect model behavior and reasoning traces directly. |
| Provider health monitoring | Tracks success rate, response time, retries, and provider errors. | Decide whether provider reliability is hurting the workflow. |
| Trade journal and analytics | Trade and session journals plus P/L, win rate, best/worst days. | Track whether a strategy is improving or drifting. |
| Session reviews | Explicitly assesses saved session or backtest evidence and captures supported Observations and proposed improvements. | Check decision quality and coverage without automatically changing rules. |
| Activity | In-app notification inbox with actionable permission cards. | Approve agent actions and read platform alerts in one place. |

### Agent surface

| Feature | What it does | Why it matters |
| --- | --- | --- |
| Research | Starts from an instrument Hub, measures distinct questions over managed data, and retains answers and analysis revisions. | Review scope, distributions, missing outcomes, and conclusions before saving knowledge. |
| MCP server and agent control | Exposes scoped tools to external clients in Manual-session contexts. | Use direct tools with explicit permissions and host execution checks. |
| Cortiq Copilot | An in-app assistant (`Ctrl+K`) with page-specific context and tools. | Analyse results, prepare drafts, and use permitted actions under their own save and approval rules. |
| Agent permissions | Separates provider access, Cortiq mutation approvals, and trading authority. | Understand which layer authorizes each action. |

### What Cortiq is and isn't

Set expectations correctly.

Cortiq **is**:

- An AI system for mastering a single market — each session is locked to one instrument.
- A backtester: it replays sessions and playbooks against historical M1 data.
- A bring-your-own-AI platform across multiple providers and transports.

Cortiq **is not**:

- A guaranteed profit engine.
- A multi-symbol scanner or basket trader.
- A managed or cloud-hosted AI service.
- A mobile trading app.
- A broker integration layer beyond MetaTrader 5.

### What you can actually do

In practical terms, the platform supports six jobs:

1. Turn a trading idea into a structured operating framework using playbooks, data access policies, skills, and sessions.
2. Give the AI better context through preparation, instrument profiles, sentiment, and trade ideas.
3. Validate a configuration against history with backtesting before risking capital.
4. Execute or simulate that workflow through MT5 with clear operating controls and platform-level risk rules.
5. Review and improve the workflow with journals, analytics, and explicit reviews that retain evidence and proposed improvements.
6. Extend the system with research, the MCP surface, Copilot, and a permission model that keeps you in control.

## What to read next

1. [Capability reference](/cortiq-public/capability-reference/) — the practical, function-by-function view of what each major feature does for you.
2. [Getting started](/cortiq-public/getting-started/) — orientation for evaluators.
3. [Sessions](/cortiq-public/sessions/) — the runtime that ties most of the tables above together.
4. [Backtesting](/cortiq-public/backtesting/) — validate a session, or your own execution, against history before going live.
5. [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/) — for external-agent control.

## Related

- [Documentation map](/cortiq-public/documentation-map/)
- [App navigation guide](/cortiq-public/app-navigation-guide/)
- [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/)
- [Research](/cortiq-public/research/)
- [Session reviews](/cortiq-public/session-review/)
- [Glossary](/cortiq-public/glossary/)
