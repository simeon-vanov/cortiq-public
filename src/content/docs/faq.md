---
title: FAQ
description: Fast answers to common Cortiq questions about installation, virtual mode, MT5 support, multi-account setups, MCP, licensing, and where to ask for help.
sidebar:
  order: 20
---

This page collects fast answers to the most common questions about Cortiq. Use it before opening a deeper page when you only need one answer; follow the link in each answer when you need the full context.

## What this is

The FAQ is intentionally short. Each entry answers one question in two or three sentences and points to the page that explains the underlying concept. If a question isn't here, the most likely deeper home is one of the pages linked under [Related](#related).

## Common questions

### Is Cortiq a cloud trading platform?

No. Cortiq is a Windows desktop product that runs locally and integrates with MetaTrader 5 on the same machine. See [MetaTrader 5 integration](mt5-integration/).

### Does Cortiq support brokers outside MetaTrader 5?

No. The supported execution path is MetaTrader 5. Brokers that offer MT5 will work; non-MT5 environments are not supported.

### Is virtual trading the same as backtesting?

No. Virtual trading simulates trades on current live data without sending them to MT5. It's not a historical backtester — Cortiq doesn't include one. See [Execution modes & notifications](execution-modes-and-notifications/).

### Can I start with one AI provider and switch later?

Yes. Each session stores its own provider and integration mode, so different sessions can use different setups. See [AI providers](ai-providers/).

### Can I use Claude Desktop or another MCP agent with Cortiq?

Yes — in advanced setups. The Cortiq MCP server lets an MCP-compatible client control External MCP sessions through tool calls. That's a different operating mode from the autonomous session loop. See [MCP and agent integration](mcp-and-agent-integration/).

### Should I go live immediately after installation?

No. The recommended path is install, verify MT5 and AI connectivity, create a narrow playbook, and run virtual sessions first. See [First 30 minutes in Cortiq](first-30-minutes/).

### Does Cortiq guarantee profitable trading?

No. Cortiq is an execution and decision-support platform with risk controls, not a guarantee of performance. Trading risk exists in every market.

### Can Cortiq manage multiple accounts?

Yes. Cortiq supports multi-account MT5 setups, but each account needs correct configuration and non-conflicting ZeroMQ ports. See the multi-account section of [MetaTrader 5 integration](mt5-integration/).

### What's the difference between browser mode and API mode?

Browser mode automates a logged-in provider window using Playwright. API mode hits the provider's REST API directly. Browser mode reuses an existing subscription; API mode adds traceability and fallback at the cost of per-call billing. See [AI providers](ai-providers/).

### What happens when a risk limit is hit?

The session transitions to `RiskPaused` and resumes automatically when the breach condition clears. Don't manually unpause; stop the session if you want to override. See [Risk management](risk-management/).

### Where should I ask questions about workflow or setup?

Use [GitHub Discussions](https://github.com/simeon-vanov/cortiq-public/discussions) for public questions and shared workflows.

### Where should I report bugs?

Use [GitHub Issues](https://github.com/simeon-vanov/cortiq-public/issues/new/choose) when you can describe a reproducible product problem clearly.

### Where should I ask about license problems?

Email `support@cortiq.trade` rather than public issues if the case involves license keys, payment data, or other sensitive details. See [Licensing & support](licensing-and-support/).

## What to read next

1. [Getting started](getting-started/) — orientation if you're evaluating.
2. [First 30 minutes in Cortiq](first-30-minutes/) — guided first run.
3. [Documentation map](documentation-map/) — when you don't know where to start.

## Related

- [Installation & activation](installation-and-activation/)
- [Licensing & support](licensing-and-support/)
- [Glossary](glossary/)
