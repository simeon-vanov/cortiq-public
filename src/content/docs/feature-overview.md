---
title: Feature overview
description: A concise summary of every major Cortiq capability — playbooks, sessions, risk, backtesting, bring-your-own AI, research, skills, journals, reviews, and the agent surface.
sidebar:
  order: 30
---

This page is the at-a-glance map of Cortiq's product surface. Read it once before going deeper, or skim it later to find the right page for a specific capability.

## What this is

Cortiq's feature set is wide because the platform handles a full operating loop, not a single step. The major features fall into five groups: *strategy and context* (playbooks, data packages, preparation, skills), *execution* (sessions, MT5, providers, risk, execution modes), *validation* (backtesting), *monitoring and review* (workspace screens, journals, session reviews, system messages), and *agent surface* (research, MCP, Copilot, permissions).

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
| Data packages | Controls what market data, indicators, screenshots, account state, and context the AI receives. | Tighter scope produces more consistent decisions and prevents noisy prompts. |
| Preparation layers | Reusable context through instrument profiles, preparation packages, and sentiment reports. | The AI operates with structured background instead of rediscovering it every cycle. |
| Skills | Reusable Markdown instruction templates injected into generation flows. | Encode a house style once and apply it across preparation, research, and reviews. |
| Custom indicators | Uses MT5 indicator data, including custom indicators, in the analysis pipeline. | Feed tailored market context into your sessions. |
| Trade ideas | Captures standalone theses outside the reusable playbook library. | Track one-off opportunities without polluting your strategy framework. |

### Execution

| Feature | What it does | Why it matters |
| --- | --- | --- |
| Trading sessions | Runs a repeatable workflow on an MT5 account for a single symbol, with a chosen provider, time window, and risk settings. | Sessions turn a strategy into an executable operating unit. |
| MetaTrader 5 integration | Connects Cortiq to MT5 on the same machine for prices, account state, orders, and position management. | The execution bridge between AI decisions and actual trades. |
| Bring-your-own AI providers | Connects ChatGPT, Gemini, Claude, OpenRouter / OpenAI-compatible endpoints, and local models over API, ACP, CLI, or External MCP transports. | You use the provider and transport you already pay for; there is no managed Cortiq AI. |
| Execution modes | Runs each session virtual, live, or under external-MCP control. | Move from rehearsal to real orders inside the same operating model. |
| Risk management | Applies dual-layer global and per-account limits on drawdown, profit, trade counts, exposure, and loss streaks, with an emergency-stop breaker. | Risk rules stay active even when the AI wants to trade more aggressively. |
| Notifications | Trade and management events delivered through Windows toasts, X, or Telegram. | Stay informed without watching the desktop app all day. |
| Feature-level provider overrides | Specific product functions can use a different provider than the session default. | One provider may be better for a supporting workflow than for live decisions. |

### Validation

| Feature | What it does | Why it matters |
| --- | --- | --- |
| Backtesting | Replays a session or playbook against historical M1 data, cycle by cycle. | Test a configuration against the past before risking capital — and it's the only path that runs without a license. |

### Monitoring and review

| Feature | What it does | Why it matters |
| --- | --- | --- |
| Home workspace | Active sessions, quick actions, and a first-run checklist. | One screen to orient yourself when opening Cortiq. |
| Dashboard | Cross-account performance, recent trades, and global risk visibility. | Easier to monitor the environment than checking sessions one-by-one. |
| Session cohorts | Compare grouped sessions side-by-side. | Decide whether one configuration outperforms another over time. |
| Conversations | The raw AI conversations across selected sessions. | Inspect model behavior and reasoning traces directly. |
| Provider health monitoring | Tracks success rate, response time, retries, and provider errors. | Decide whether provider reliability is hurting the workflow. |
| Trade journal and analytics | Trade and session journals plus P/L, win rate, best/worst days. | Track whether a strategy is improving or drifting. |
| Session reviews | One-click AI review of a finished run, producing scored suggestions and durable instrument lessons. | Turns each run into a learning loop instead of a one-off result. |
| System messages | In-app notification inbox with actionable permission cards. | Approve agent actions and read platform alerts in one place. |

### Agent surface

| Feature | What it does | Why it matters |
| --- | --- | --- |
| Research | A single-instrument idea lab with workspaces, runs, artifacts, and opt-in edge-discovery guardrails. | Explore and stress-test ideas on one market before they become playbooks. |
| MCP server and agent control | Exposes Cortiq tools to MCP-compatible AI clients, and runs external-MCP sessions. | Drive analysis and trading through agents like Claude Desktop, not only the internal loop. |
| Cortiq Copilot | An in-app Copilot dock (`Ctrl+K`) that authors entities behind the approval gate. | Build playbooks, packages, and sessions by asking, without leaving the app. |
| Agent permissions | An approval and permission model with an always-on trade gate plus capability grants. | The AI can act, but you stay the final authority on trades and sensitive actions. |

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

1. Turn a trading idea into a structured operating framework using playbooks, data packages, skills, and sessions.
2. Give the AI better context through preparation, instrument profiles, sentiment, and trade ideas.
3. Validate a configuration against history with backtesting before risking capital.
4. Execute or simulate that workflow through MT5 with clear operating controls and platform-level risk rules.
5. Review and improve the workflow with journals, analytics, and one-click session reviews that store durable lessons.
6. Extend the system with research, the MCP surface, Copilot, and a permission model that keeps you in control.

## What to read next

1. [Capability reference](/cortiq-public/capability-reference/) — the practical, function-by-function view of what each major feature does for you.
2. [Getting started](/cortiq-public/getting-started/) — orientation for evaluators.
3. [Sessions](/cortiq-public/sessions/) — the runtime that ties most of the tables above together.
4. [Backtesting](/cortiq-public/backtesting/) — the license-free way to validate a session before going live.
5. [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/) — for external-agent control.

## Related

- [Documentation map](/cortiq-public/documentation-map/)
- [App navigation guide](/cortiq-public/app-navigation-guide/)
- [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/)
- [Research](/cortiq-public/research/)
- [Session reviews](/cortiq-public/session-review/)
- [Glossary](/cortiq-public/glossary/)
