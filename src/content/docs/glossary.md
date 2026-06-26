---
title: Glossary
description: Alphabetical definitions of Cortiq's core platform vocabulary, with links to the page that explains each term in depth.
sidebar:
  order: 90
---

This page defines the terms you'll see across the rest of the documentation. Each entry links to the page where the concept is explained in depth, so other pages can reference vocabulary without redefining it. Entries are alphabetical.

## Terms

**ACP** — Agent Client Protocol. A transport where Cortiq drives a local agent (for example `claude-agent-acp` or `codex-acp`) over JSON-RPC instead of calling a REST API. The agent runs under your own local subscription. See [AI Providers](/cortiq-public/ai-providers/).

**Agent permission / capability grant** — A persisted grant that lets the agent take a specific class of non-trade action (for example a web action) without prompting each time. Granted once from an actionable System Message, then auto-allowed. Trade execution is never covered by a capability grant — it stays on its own approval gate. See [Agent permissions](/cortiq-public/agent-permissions/).

**Autonomous session** — A session whose trading loop is driven by Cortiq's internal workflow engine. The default mode for most users. See [Sessions](/cortiq-public/sessions/).

**Backtest** — A historical M1 replay of a session or playbook against past market data. Backtesting is the only license-free path in Cortiq. See [Backtesting](/cortiq-public/backtesting/).

**Copilot** — The in-app Copilot dock, opened with `Ctrl+K`. It authors and edits entities (playbooks, profiles, preparation notes, and more) on your behalf, behind the same approval gate as the agent. See [Cortiq Copilot](/cortiq-public/cortiq-copilot/).

**Data package** — The configurable bundle of market data, indicator values, screenshots, account state, and supporting context that Cortiq sends to the AI on each cycle. See [Playbooks & Data Packages](/cortiq-public/playbooks-and-data/).

**Day start time** — The user-configured local time at which Cortiq's daily P/L and trade-count counters reset. Set in risk settings, not in the OS clock. See [Risk Management](/cortiq-public/risk-management/).

**External MCP** — A transport where an outside MCP-compatible client (for example Claude Desktop) drives the session loop by calling Cortiq's MCP tools and posting a decision back. Cortiq itself never calls an LLM in this mode. See [MCP and Agent Integration](/cortiq-public/mcp-and-agent-integration/).

**External MCP session** — A session whose trading loop is driven by an external MCP client via the `External MCP` transport. The internal workflow engine is not running. See [MCP and Agent Integration](/cortiq-public/mcp-and-agent-integration/).

**Instrument profile** — A reusable per-symbol context document (typical session, common ranges, behavioral notes). See [Trading Cycle: Instrument Profiles](/cortiq-public/trading-cycle/entities/instrument-profiles/).

**Integration mode** — How Cortiq reaches the provider: `API`, `ACP`, `CLI`, or `External MCP`. Each provider supports one or more. See [AI Providers](/cortiq-public/ai-providers/).

**Lesson** — A durable, instrument-scoped takeaway produced by a Session Review and carried forward into later sessions on that instrument. See [Session Review](/cortiq-public/session-review/).

**Local model** — A self-hosted, OpenAI-compatible model served locally through Ollama or LM Studio. Reached over the `API` transport against a local endpoint. See [AI Providers](/cortiq-public/ai-providers/).

**MT5 bridge** — The ZeroMQ connection between Cortiq and a running MetaTrader 5 terminal on the same machine. See [MetaTrader 5 Integration](/cortiq-public/mt5-integration/).

**OpenRouter** — An OpenAI-compatible provider Cortiq reaches over the `API` transport; the endpoint can be repointed at any other OpenAI-compatible service. See [AI Providers](/cortiq-public/ai-providers/).

**Playbook** — A reusable strategy definition: the rules, filters, and operating logic the AI follows during a session. See [Playbooks & Data Packages](/cortiq-public/playbooks-and-data/).

**Preparation package** — A reusable context layer (for example, a daily bias note) that supplements the data package on every cycle. See [Trading Cycle: Preparation Packages](/cortiq-public/trading-cycle/entities/preparation-packages/).

**Provider** — An AI service Cortiq talks to: ChatGPT (OpenAI), Gemini (Google), Claude (Anthropic), OpenRouter / OpenAI-compatible, or a local model. You bring your own. See [AI Providers](/cortiq-public/ai-providers/).

**Research workspace** — A single-instrument idea lab. Each workspace is scoped to one symbol and holds research runs and their artifacts; output can seed a playbook, instrument profile, or preparation notes. See [Research](/cortiq-public/research/).

**Risk limit (global)** — A risk rule that applies across all MT5 accounts combined: total daily drawdown, total weekly drawdown, total daily trades. See [Risk Management](/cortiq-public/risk-management/).

**Risk limit (per-account)** — A risk rule that applies to one MT5 account only. Independent of other accounts. See [Risk Management](/cortiq-public/risk-management/).

**Sentiment report** — A reusable context document summarizing market positioning or news sentiment, attached to a session for richer AI context. See [Trading Cycle: Sentiment Reports](/cortiq-public/trading-cycle/entities/sentiment-reports/).

**Session** — A trading session. The smallest unit of repeatable Cortiq operation: an MT5 account, one symbol, a provider, a time window, and risk settings, executed against a playbook. Each session is locked to a single instrument. See [Sessions](/cortiq-public/sessions/).

**Session Review** — A one-click AI review of a finished session that scores what happened and produces suggestions plus durable instrument lessons. See [Session Review](/cortiq-public/session-review/).

**Skill** — A reusable Markdown instruction template you write once and inject into generation flows. See [Skills](/cortiq-public/skills/).

**System Message** — An in-app notification in the System Messages inbox. Some are informational; some are actionable permission cards used to grant a capability. See [System messages](/cortiq-public/system-messages/).

**Trade idea** — A standalone trade thesis captured outside the playbook library, useful for one-off opportunities. See [Trading Cycle: Trade Ideas](/cortiq-public/trading-cycle/entities/trade-ideas/).

**Virtual mode** — A session mode that runs forward on live data but holds back the order instead of sending it to MT5. Useful for evaluation, rehearsal, and challenge environments. Distinct from a [Backtest](/cortiq-public/backtesting/), which replays history. See [Execution Modes & Notifications](/cortiq-public/execution-modes-and-notifications/).

## Related

- [Documentation Map](/cortiq-public/documentation-map/)
- [App Navigation Guide](/cortiq-public/app-navigation-guide/)
- [Capability Reference](/cortiq-public/capability-reference/)
