---
status: current
title: FAQ
description: Answers about research, backtesting, review, providers, licensing, and agent permissions, with links to current workflows.
sidebar:
  order: 20
---

This page collects fast answers to the most common questions about Cortiq. Use it before opening a deeper page when you only need one answer; follow the link in each answer when you need the full context.

## What this is

The FAQ is intentionally short. Each entry answers one question in two or three sentences and points to the page that explains the underlying concept. If a question isn't here, the most likely deeper home is one of the pages linked under [Related](#related).

## Common questions

### Is Cortiq a cloud trading platform?

No. Cortiq is a Windows desktop product that runs locally and integrates with MetaTrader 5 on the same machine. See [MetaTrader 5 integration](/cortiq-public/mt5-integration/).

### Does Cortiq support brokers outside MetaTrader 5?

No. The supported execution path is MetaTrader 5. Brokers that offer MT5 will work; non-MT5 environments are not supported.

### Is virtual trading the same as backtesting?

No — they are two distinct things, and Cortiq has both. Virtual trading runs a session forward on current live data but holds back the order, so the agent reasons against today's market without sending anything to MT5. Backtesting replays historical M1 data so a session or playbook runs against the past. See [Backtesting](/cortiq-public/backtesting/) and [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/).

### Which AI providers can Cortiq use?

ChatGPT (OpenAI), Gemini (Google), Claude (Anthropic), OpenRouter or another OpenAI-compatible endpoint, and a local model (Ollama / LM Studio). You bring your own AI. See [AI providers](/cortiq-public/ai-providers/).

### How does Cortiq reach the AI provider?

Internal AI calls use an explicit `API` or supported `ACP` route. External MCP is a separate Manual-session tool integration. CLI and automatic provider substitution are not supported by the active router. See [AI providers](/cortiq-public/ai-providers/).

### Can I start with one AI provider and switch later?

Yes. Each session stores its own provider and transport, so different sessions can use different setups. See [AI providers](/cortiq-public/ai-providers/).

### Can I use Claude Desktop or another MCP agent with Cortiq?

Yes. An external MCP client can call tools in a Manual-session context. It does not run an autonomous waiting cycle. Configure its permissions explicitly. See [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/).

### Does the AI place trades on its own?

It depends on the authority you configure. A Manual session has no general automatic cycle, but requested agent actions and separately enabled automated trade ideas can act under their own permissions or mandate. An Autonomous session executes inside its session authority and risk limits. Copilot and external MCP use separate permission layers; external MCP approval cards depend on server configuration. See [Sessions](/cortiq-public/sessions/) and [Agent permissions](/cortiq-public/agent-permissions/).

### Where do I start research?

Open **Knowledge** → **My Instruments**, choose a market, prepare its **Data**, then select **Research a topic**. Read the measured answers and limitations before explicitly saving a reviewed Learning. Research completion does not automatically create an Edge or playbook. See [Research](/cortiq-public/research/).

### What is a skill?

A skill is a reusable Markdown instruction template you write once and inject into generation flows, so the same framing applies across runs without retyping it. See [Skills](/cortiq-public/skills/).

### Should I go live immediately after installation?

No. The recommended path is install, verify MT5 and AI connectivity, create a narrow playbook, and run a backtest or virtual session first. See [First 30 minutes in Cortiq](/cortiq-public/first-30-minutes/).

### Does Cortiq guarantee profitable trading?

No. Cortiq is an execution and decision-support platform with risk controls, not a guarantee of performance. Trading risk exists in every market.

### Can Cortiq manage multiple accounts?

Yes. Cortiq supports multi-account MT5 setups, but each account needs correct configuration and non-conflicting ZeroMQ ports. Each session is still locked to a single instrument. See the multi-account section of [MetaTrader 5 integration](/cortiq-public/mt5-integration/).

### What happens when a risk limit is hit?

The session transitions to `RiskPaused` and resumes automatically when the breach condition clears. Don't manually unpause; stop the session if you want to override. See [Risk management](/cortiq-public/risk-management/).

### How does the license work — is it a subscription?

No. €199 buys a one-time license with all future Cortiq desktop updates included. One key activates up to two machines, and there's a 14-day refund. Broker fees, AI-provider usage, and unrelated products or services are not included. See [Licensing & support](/cortiq-public/licensing-and-support/).

### Can I run Cortiq without a license?

Viewing and preparation remain accessible, but starting sessions, backtests, research runs, and managed data-file builds requires a valid license. See [Licensing & support](/cortiq-public/licensing-and-support/).

### Where should I ask questions about workflow or setup?

Use [GitHub Discussions](https://github.com/simeon-vanov/cortiq-public/discussions) for public questions and shared workflows.

If you have setup questions or get stuck, email `support@cortiq.trade`. We can hop on a call to help. If we can't get setup working, we'll refund your purchase.

### Where should I report bugs?

Use [GitHub Issues](https://github.com/simeon-vanov/cortiq-public/issues/new/choose) when you can describe a reproducible product problem clearly.

### Where should I ask about license problems?

Email `support@cortiq.trade` rather than public issues if the case involves license keys, payment data, or other sensitive details. See [Licensing & support](/cortiq-public/licensing-and-support/).

### Does a completed study automatically become knowledge?

No. Execution, interpretation, review, and publication are separate. A Learning preserves a reviewed conclusion and its measured scope; it does not certify an executable Edge. See [Instrument Hub](/cortiq-public/instrument-hub/).

### Does review change my strategy automatically?

No. Prepare a fixed evidence scope, start its review explicitly, and inspect the assessment and coverage before publishing. Discuss proposed changes and save them through the relevant editor. Automatic lesson injection is retired. See [Session review](/cortiq-public/session-review/).

## What to read next

1. [Getting started](/cortiq-public/getting-started/) — orientation if you're evaluating.
2. [First 30 minutes in Cortiq](/cortiq-public/first-30-minutes/) — guided first run.
3. [Documentation map](/cortiq-public/documentation-map/) — when you don't know where to start.

## Related

- [Installation & activation](/cortiq-public/installation-and-activation/)
- [Licensing & support](/cortiq-public/licensing-and-support/)
- [Glossary](/cortiq-public/glossary/)
