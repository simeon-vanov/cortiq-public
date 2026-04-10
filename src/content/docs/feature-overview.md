---
title: Feature Overview
description: A concise explanation of the main Cortiq product capabilities.
---

This page explains the major product features at a glance. The goal is to make the full Cortiq feature set understandable before you go deeper into setup and configuration.

If you want a more practical customer view of what each major function can do for you, read [Capability Reference](capability-reference/).

## Core Features

| Feature | What It Does | Why It Matters |
| --- | --- | --- |
| Playbook Management | Lets you define the strategy rules, filters, and operating logic that the AI should follow | The user keeps control over the trading framework rather than delegating everything to a black box |
| Trading Sessions | Runs a repeatable trading workflow on a selected MT5 account with selected symbols, provider, time window, and risk settings | Sessions turn a strategy into an executable operating unit |
| MetaTrader 5 Integration | Connects Cortiq to MT5 on the same machine for prices, account data, orders, and position management | This is the execution bridge between AI decisions and actual trading activity |
| Multi-AI Provider Support | Supports ChatGPT, Grok, Gemini, and Claude, with browser and API integration modes where available | You can choose the provider and integration mode that fits your workflow, cost model, and reliability preferences |
| MCP Server and Agent Control | Exposes Cortiq tools to MCP-compatible AI clients for advanced external session control | Lets advanced users drive analysis and trading through agents such as Claude Desktop instead of only through the internal autonomous loop |
| Risk Management | Applies global and per-account limits around drawdown, profit targets, trade counts, exposure, and loss streaks | Risk controls remain active even when the AI wants to trade more aggressively |
| Data Packages | Controls what market data, indicator data, screenshots, account state, and supporting context the AI receives | Better scope control produces more consistent decisions and prevents noisy prompts |
| Symbol Scanner and AutoScan | Lets the AI review candidate symbols and choose where the best setup is currently forming | Useful for users who do not want to hard-code a single symbol list per decision cycle |
| Trade Journal and Analytics | Generates trade and session journals plus performance metrics such as P/L, win rate, and best or worst days | Helps users evaluate whether a strategy is improving or drifting |
| Virtual Trading | Simulates trades without sending orders to MT5 | Useful for evaluation, rehearsal, or challenge environments that restrict expert advisors |
| Copy Trading | Replicates master account trades to selected follower accounts | Helps operators scale a single session across multiple accounts |
| Notifications | Sends trade and management events through Windows notifications, X, or Telegram | Keeps the operator informed without staring at the desktop application all day |
| Custom Indicators | Uses MT5 indicator data, including custom indicators, as part of the analysis pipeline | Lets advanced users feed more tailored market context into their sessions |
| Session Timeline and Decision Rendering | Shows what happened in each trading cycle, including analysis, trade ideas, execution, and management actions | Makes the AI workflow more auditable and easier to review |
| Conversation Chat in API Mode | Persists structured conversation history when the session is using direct API integrations | Useful when users need deeper traceability and cleaner AI context management |

## What Cortiq Is Not

To keep expectations realistic, Cortiq should not be described as the following:

- A guaranteed profit engine
- A historical backtesting platform
- A cloud-hosted trading service
- A mobile trading app
- A universal broker integration layer beyond MetaTrader 5

## What You Can Actually Do With Cortiq

In practical terms, Cortiq lets a user do five big jobs:

1. Turn a trading idea into a structured operating framework using playbooks, data packages, and sessions.
2. Give the AI better context using support layers such as preparation, instrument profiles, sentiment, and trade ideas.
3. Execute or simulate that workflow through MT5 with clear operating controls.
4. Protect the workflow with platform-level risk rules and pause behavior.
5. Review, improve, and scale the workflow with journals, analytics, notifications, and copy-trading support.

## Best Way To Read The Rest Of The Docs

If you already know you need the product summary, continue with [Getting Started](getting-started/).

If you already know you need the operating details, jump to [Sessions & AutoScan](sessions-and-autoscan/), [Risk Management](risk-management/), and [Execution Modes & Notifications](execution-modes-and-notifications/).

If you want an external AI client to control Cortiq directly, read [MCP and Agent Integration](mcp-and-agent-integration/).