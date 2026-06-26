---
title: FAQ
description: Fast answers to common Cortiq questions about installation, virtual vs backtesting, AI providers, licensing, the agent approval gate, research, and skills.
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

No — they are two distinct things, and Cortiq has both. Virtual trading runs a session forward on current live data but holds back the order, so the agent reasons against today's market without sending anything to MT5. Backtesting replays historical M1 data so a session or playbook runs against the past. See [Backtesting](backtesting/) and [Execution modes & notifications](execution-modes-and-notifications/).

### Which AI providers can Cortiq use?

ChatGPT (OpenAI), Gemini (Google), Claude (Anthropic), OpenRouter or another OpenAI-compatible endpoint, and a local model (Ollama / LM Studio). You bring your own AI. See [AI providers](ai-providers/).

### How does Cortiq reach the AI provider?

Through one of four transports: `API` (the provider's REST API), `ACP` (a local agent over JSON-RPC, such as `claude-agent-acp` or `codex-acp`), `CLI` (a local command-line tool), or `External MCP` (an outside MCP client posts the decision back). See [AI providers](ai-providers/).

### Can I start with one AI provider and switch later?

Yes. Each session stores its own provider and transport, so different sessions can use different setups. See [AI providers](ai-providers/).

### Can I use Claude Desktop or another MCP agent with Cortiq?

Yes — in advanced setups. The Cortiq MCP server lets an MCP-compatible client drive an `External MCP` session through tool calls. That's a different operating mode from the autonomous session loop. See [MCP and agent integration](mcp-and-agent-integration/).

### Does the AI place trades on its own?

No. Every trade passes through an approval gate before it reaches MetaTrader 5. The agent proposes; you approve. The trade gate is always on, separate from the capability grants that govern other agent actions. See [Agent permissions](agent-permissions/).

### What is the Research workspace for?

Research is a single-instrument idea lab. You create a workspace for one symbol, run AI research over MT5 candle data, and the output can seed a playbook, instrument profile, or preparation notes. Edge-discovery guardrails are opt-in. See [Research](research/).

### What is a skill?

A skill is a reusable Markdown instruction template you write once and inject into generation flows, so the same framing applies across runs without retyping it. See [Skills](skills/).

### Should I go live immediately after installation?

No. The recommended path is install, verify MT5 and AI connectivity, create a narrow playbook, and run a backtest or virtual session first. See [First 30 minutes in Cortiq](first-30-minutes/).

### Does Cortiq guarantee profitable trading?

No. Cortiq is an execution and decision-support platform with risk controls, not a guarantee of performance. Trading risk exists in every market.

### Can Cortiq manage multiple accounts?

Yes. Cortiq supports multi-account MT5 setups, but each account needs correct configuration and non-conflicting ZeroMQ ports. Each session is still locked to a single instrument. See the multi-account section of [MetaTrader 5 integration](mt5-integration/).

### What happens when a risk limit is hit?

The session transitions to `RiskPaused` and resumes automatically when the breach condition clears. Don't manually unpause; stop the session if you want to override. See [Risk management](risk-management/).

### How does the license work — is it a subscription?

No. €199 buys a one-time license with lifetime v1.x updates. One key activates up to two machines, and there's a 14-day refund. See [Licensing & support](licensing-and-support/).

### Can I run Cortiq without a license?

You can install, design playbooks, and run backtests with no license. Any session bound to MetaTrader 5 — live, virtual, or broker-demo — needs a valid license. See [Licensing & support](licensing-and-support/).

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
