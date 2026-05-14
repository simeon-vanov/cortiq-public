---
title: Feature overview
description: A concise summary of every major Cortiq capability — playbooks, sessions, risk, multi-provider AI, journals, notifications, and the supporting layers around them.
sidebar:
  order: 30
---

This page is the at-a-glance map of Cortiq's product surface. Read it once before going deeper, or skim it later to find the right page for a specific capability.

## What this is

Cortiq's feature set is wide because the platform handles a full operating loop, not a single step. The major features fall into four groups: *strategy definition* (playbooks, data packages, supporting layers), *execution* (sessions, MT5, providers, risk), *monitoring* (workspace screens, conversations, provider health), and *review* (journals, cohorts, reports).

Use this page as a fast index into the rest of the site. The Reference table below names every major capability with one sentence of "what it does" and one sentence of "why it matters", and links to the page that explains it in depth.

## How it fits into Cortiq

Different readers come to this page with different needs:

- *Evaluating Cortiq* — read this top-to-bottom, then [Getting started](getting-started/).
- *Already installed* — skim the table, then jump to the page for the feature you're configuring.
- *Comparing scope* — use the "What Cortiq is not" section below to set realistic expectations.

## Reference

### Capability matrix

| Feature | What it does | Why it matters |
| --- | --- | --- |
| Playbook management | Defines the rules, filters, and operating logic the AI must follow. | You keep control of the trading framework instead of delegating it to a black box. |
| Trading sessions | Runs a repeatable workflow on an MT5 account with selected symbols, provider, time window, and risk settings. | Sessions turn a strategy into an executable operating unit. |
| MetaTrader 5 integration | Connects Cortiq to MT5 on the same machine for prices, account state, orders, and position management. | The execution bridge between AI decisions and actual trades. |
| Multi-AI provider support | Supports ChatGPT, Grok, Gemini, and Claude in browser and API modes where available. | You pick the provider and mode that fits your workflow, cost model, and reliability needs. |
| MCP server and agent control | Exposes Cortiq tools to MCP-compatible AI clients for external session control. | Advanced users drive analysis and trading through agents like Claude Desktop, not just the internal loop. |
| Risk management | Applies global and per-account limits on drawdown, profit, trade counts, exposure, and loss streaks. | Risk rules stay active even when the AI wants to trade more aggressively. |
| Data packages | Controls what market data, indicators, screenshots, account state, and context the AI receives. | Tighter scope produces more consistent decisions and prevents noisy prompts. |
| Preparation layers | Reusable context through instrument profiles, preparation packages, and sentiment reports. | The AI operates with structured background instead of rediscovering it every cycle. |
| Symbol Scanner and AutoScan | The AI reviews candidate symbols and picks where the best setup is currently forming. | Useful when you don't want to hard-code one symbol per decision cycle. |
| Trade ideas | Captures standalone theses outside the reusable playbook library. | Track one-off opportunities without polluting your strategy framework. |
| Home workspace | Active sessions, quick actions, and a first-run checklist. | One screen to orient yourself when opening Cortiq. |
| Dashboard | Cross-account performance, recent trades, and global risk visibility. | Easier to monitor the environment than checking sessions one-by-one. |
| Session cohorts | Compare grouped sessions side-by-side. | Decide whether one configuration outperforms another over time. |
| Conversations | The raw AI conversations across selected sessions. | Inspect model behavior and reasoning traces directly. |
| Trade journal and analytics | Trade and session journals plus P/L, win rate, best/worst days. | Track whether a strategy is improving or drifting. |
| Virtual trading | Simulates trades without sending orders to MT5. | Useful for evaluation, rehearsal, or prop-firm challenge environments. |
| Copy trading | Replicates master-account trades to follower accounts. | Scale one session across multiple accounts. |
| Notifications | Trade and management events delivered through Windows toasts, X, or Telegram. | Stay informed without watching the desktop app all day. |
| Provider health monitoring | Tracks success rate, response time, retries, and provider errors. | Decide whether provider reliability is hurting the workflow. |
| Feature-level provider overrides | Specific product functions can use a different provider than the session default. | One provider may be better for scanning, journaling, or a supporting workflow. |
| Automated performance reports | Scheduled summary reports delivered through Telegram. | Review system behavior without opening the app every time. |
| Custom indicators | Uses MT5 indicator data, including custom indicators, in the analysis pipeline. | Feed tailored market context into your sessions. |
| Session timeline | Renders what happened in each cycle: analysis, trade ideas, execution, management actions. | Makes the AI workflow auditable. |
| Conversation chat in API mode | Persists structured conversation history when the session uses direct API integrations. | Deeper traceability and cleaner AI context management. |

### What Cortiq is not

Set expectations correctly: Cortiq is not any of the following.

- A guaranteed profit engine.
- A historical backtesting platform.
- A cloud-hosted trading service.
- A mobile trading app.
- A universal broker integration layer beyond MetaTrader 5.

### What you can actually do

In practical terms, the platform supports five jobs:

1. Turn a trading idea into a structured operating framework using playbooks, data packages, and sessions.
2. Give the AI better context through preparation, instrument profiles, sentiment, and trade ideas.
3. Execute or simulate that workflow through MT5 with clear operating controls.
4. Protect the workflow with platform-level risk rules and pause behavior.
5. Review, improve, and scale the workflow with journals, analytics, notifications, and copy-trading.

## What to read next

1. [Capability reference](capability-reference/) — the practical, function-by-function view of what each major feature does for you.
2. [Getting started](getting-started/) — orientation for evaluators.
3. [Sessions & AutoScan](sessions-and-autoscan/) — the runtime that ties most of the table above together.
4. [MCP and agent integration](mcp-and-agent-integration/) — for external-agent control.

## Related

- [Documentation map](documentation-map/)
- [App navigation guide](app-navigation-guide/)
- [Workspace & monitoring](workspace-and-monitoring/)
- [Glossary](glossary/)
