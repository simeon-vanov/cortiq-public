---
title: Glossary
description: Definitions of Cortiq's core platform vocabulary, with links to the page that explains each term in depth.
sidebar:
  order: 90
---

This page defines the terms you'll see across the rest of the documentation. Each entry links to the page where the concept is explained in depth, so other pages can reference vocabulary without redefining it.

## Core concepts

**Session** — A trading session. The smallest unit of repeatable Cortiq operation: an MT5 account, a symbol set, a provider, a time window, and risk settings, executed against a playbook. See [Sessions & AutoScan](sessions-and-autoscan/).

**Autonomous session** — A session whose trading loop is driven by Cortiq's internal workflow engine. The default mode for most users. See [Sessions & AutoScan](sessions-and-autoscan/).

**External MCP session** — A session whose trading loop is driven by an external MCP-compatible AI client (for example, Claude Desktop) via tool calls into the Cortiq MCP server. The internal workflow engine is not running. See [MCP and Agent Integration](mcp-and-agent-integration/).

**Playbook** — A reusable strategy definition: the rules, filters, and operating logic the AI follows during a session. See [Playbooks & Data Packages](playbooks-and-data/).

**Data package** — The configurable bundle of market data, indicator values, screenshots, account state, and supporting context that Cortiq sends to the AI on each cycle. See [Playbooks & Data Packages](playbooks-and-data/).

**Trade idea** — A standalone trade thesis captured outside the playbook library, useful for one-off opportunities. See [Trading Cycle: Trade Ideas](trading-cycle/entities/trade-ideas/).

**Preparation package** — A reusable context layer (for example, a daily bias note) that supplements the data package on every cycle. See [Trading Cycle: Preparation Packages](trading-cycle/entities/preparation-packages/).

**Sentiment report** — A reusable context document summarizing market positioning or news sentiment, attached to a session for richer AI context. See [Trading Cycle: Sentiment Reports](trading-cycle/entities/sentiment-reports/).

**Instrument profile** — A reusable per-symbol context document (typical session, common ranges, behavioral notes). See [Trading Cycle: Instrument Profiles](trading-cycle/entities/instrument-profiles/).

**AutoScan** — The Cortiq feature that lets the AI choose among candidate symbols rather than committing to a hard-coded symbol per cycle. See [Sessions & AutoScan](sessions-and-autoscan/).

**Virtual mode** — A session mode that simulates orders without sending them to MT5. Useful for evaluation, rehearsal, and challenge environments. See [Execution Modes & Notifications](execution-modes-and-notifications/).

## Integration concepts

**Provider** — An AI service Cortiq talks to: ChatGPT, Grok, Gemini, or Claude. See [AI Providers](ai-providers/).

**Integration mode** — How Cortiq reaches the provider: *browser* (Playwright-driven) or *API* (REST). Each provider supports one or both. See [AI Providers](ai-providers/).

**MT5 bridge** — The ZeroMQ connection between Cortiq and a running MetaTrader 5 terminal on the same machine. See [MetaTrader 5 Integration](mt5-integration/).

## Risk concepts

**Risk limit (global)** — A risk rule that applies across all MT5 accounts combined: total daily drawdown, total weekly drawdown, total daily trades. See [Risk Management](risk-management/).

**Risk limit (per-account)** — A risk rule that applies to one MT5 account only. Independent of other accounts. See [Risk Management](risk-management/).

**Day start time** — The user-configured local time at which Cortiq's daily P/L and trade-count counters reset. Set in risk settings, not in OS clock. See [Risk Management](risk-management/).

## Related

- [Documentation Map](documentation-map/)
- [App Navigation Guide](app-navigation-guide/)
- [Capability Reference](capability-reference/)
