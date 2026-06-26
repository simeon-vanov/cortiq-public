---
title: MCP and agent integration
description: Run Cortiq as an MCP server so Claude Desktop, Claude Code, or Codex can drive sessions, analysis, and trades through Cortiq's tool surface.
sidebar:
  order: 10
  badge: Advanced
---

Cortiq ships an MCP server that exposes its sessions, market data, entity authoring, and trade execution as tools an external AI client can call. This page covers when to use it, how to wire up a client like Claude Desktop, the tool families on offer, and the single approval gate that stands between an agent and a real order.

:::caution
`External MCP` sessions skip Cortiq's internal autonomous workflow engine. The external agent is the only thing driving analysis, decisions, and trades. Risk validators still run, but the orchestration lives entirely in the agent's prompt — not in a Cortiq playbook loop.
:::

## What this is

The Cortiq MCP server lets an MCP-compatible AI client use Cortiq as an execution and market-data system. Instead of relying on Cortiq's built-in trading loop, an external agent reads Cortiq data, gathers fresh market context, authors entities, and places trades through tool calls.

The server runs as a local process over `stdio`. Your client starts it and shares the same local SQLite database as the Cortiq desktop app. This is a local-machine integration model, not a cloud API — nothing leaves your machine except the calls your AI client already makes to its own provider.

Use this mode when you want an agent such as Claude Desktop, Claude Code, or Codex to drive the workflow directly: inspect sessions and trades, gather data on demand, run `External MCP` sessions, and execute or manage positions through Cortiq's MT5 path.

## Who this is for

Use MCP integration when you want:

- An MCP-compatible AI client to drive the trading workflow through tool calls.
- Fine-grained control over when analysis happens and when trading happens.
- Tool-based inspection of accounts, sessions, risk, and statistics before any execution.
- An agent that authors Cortiq entities (playbooks, data packages, preparation, research) for you.

If you want the simpler product path, use [autonomous sessions](sessions/) instead — Cortiq's own engine runs the loop and you don't connect an external client.

## How it fits into Cortiq

| Mode | Who controls the loop | Best for |
| --- | --- | --- |
| Autonomous session | Cortiq's internal workflow engine | Most users who want a built-in operating loop. |
| `External MCP` session | An external MCP-compatible AI client | Advanced users who want agent-driven control through tool calls. |

The difference that matters: an `External MCP` session does not run the internal workflow engine. The external agent decides what to do next and calls the right tools. Cortiq still validates risk and still gates trade execution.

## How to use it

### Prerequisites

Before connecting an agent to the Cortiq MCP server, confirm:

- Cortiq is installed and its local database exists.
- The Cortiq desktop app is running when you expect live trading actions to execute.
- MetaTrader 5 is installed and at least one MT5 account is configured in Cortiq, if you intend to trade.
- A data package exists for any session that needs market-data gathering.
- Risk settings are configured before any live execution.
- A valid license is active — any MT5-bound session start requires it. Backtests are the only license-free path.

### How the server connects

The MCP server uses `stdio` transport. Your AI client starts the server as a local process and calls tools over that connection. The server reads and writes the same SQLite database as the desktop app, so an agent's changes appear in the app immediately and approvals round-trip back to the dock.

### Configure Claude Desktop

On Windows, the Claude Desktop config file is usually at:

```text
%APPDATA%\Claude\claude_desktop_config.json
```

Point it at a compiled Cortiq MCP server executable:

```json
{
  "mcpServers": {
    "cortiq": {
      "command": "C:\\Path\\To\\Cortiq.McpServer.exe"
    }
  }
}
```

Or run it from source with `dotnet run`:

```json
{
  "mcpServers": {
    "cortiq": {
      "command": "dotnet",
      "args": [
        "run",
        "--project",
        "C:\\Path\\To\\Cortiq.McpServer"
      ]
    }
  }
}
```

If automatic database discovery fails, set `CORTIQ_DB_PATH` explicitly so the server and the app share one database:

```json
{
  "mcpServers": {
    "cortiq": {
      "command": "C:\\Path\\To\\Cortiq.McpServer.exe",
      "env": {
        "CORTIQ_DB_PATH": "C:\\Path\\To\\cortiq.db"
      }
    }
  }
}
```

### Configure Claude Code or Codex

Claude Code and Codex read MCP servers from their own configuration (Claude Code's `.mcp.json` / `~/.claude.json`, Codex's config). Register the same `cortiq` server entry — command, args, and the optional `CORTIQ_DB_PATH` env — using each tool's MCP configuration mechanism. The launch command is identical; only the file that holds it differs.

### Core agent workflow

1. The agent connects to the Cortiq MCP server.
2. It discovers accounts, sessions, and data packages.
3. It creates or updates an `External MCP` session with `create_external_session`.
4. It starts the session with `start_session`.
5. It gathers market data with the session's data package.
6. It decides whether to trade.
7. It executes or manages trades — and you approve each real order.

### Example prompts

**Read-only — a safe first test:**

```text
Use the Cortiq MCP server to list my MT5 accounts, list my data packages, and inspect my sessions. Then gather fresh EURUSD data for the right session and summarize the market context only. Do not place any trades.
```

**Virtual session — before any live attempt:**

```text
Create an External MCP session named 'EURUSD Virtual Agent', use my default MT5 account, assign the right data package, enable virtual mode, start the session, gather fresh EURUSD data, and give me a trade plan with entry, stop loss, take profit, and reasoning. Do not place a live trade.
```

**Controlled live — only after the virtual flow is proven:**

```text
Use the Cortiq MCP server to review my account risk settings, gather fresh EURUSD data for the running external session, and only if the setup is valid under existing risk limits, execute one trade with a clear stop loss, take profit, and reasoning. Then report exactly what was executed.
```

## The approval gate

Cortiq runs the MCP server in a **trusted-Cortiq** posture: a tool runs with no approval prompt unless it explicitly opts in. In the gated configuration used for in-app agent sessions, **only `execute_trade` and `execute_trade_action` require explicit approval** — opening, modifying, partially closing, or closing a real position. Every other tool, including the create / update / delete tools that author entities, runs without a card.

When a gated trade tool is called, Cortiq surfaces an approval — in the [Copilot](cortiq-copilot/) dock, as a Windows toast, and as an actionable row in the [System Messages](system-messages/) inbox. The trade body runs only on an explicit approve; reject, expiry, or error denies the call. Trade execution sits on its own gate and is never widened by any other permission grant.

:::danger
Live trading sends real orders to MT5. An agent can request a trade, but you approve every real order. Verify your risk settings before starting a non-virtual session.
:::

## Tool families

The server exposes roughly 130 tools. They group into families — you rarely need to know individual names because the tool descriptions document every parameter. The families:

| Family | What the agent can do |
| --- | --- |
| Sessions | List, inspect, create, update, start, stop, and delete sessions; `create_external_session` for agent-driven control. |
| Data packages | List, create, update, delete, and execute data packages to gather candles, indicators, and context for a symbol. |
| Playbooks | List, read, create, update, delete playbooks; link and unlink them to a session. |
| Trade execution | `execute_trade` to open; `execute_trade_action` to close, partial-close, modify SL/TP, or cancel. **These are the only gated tools.** |
| Trade management & history | Inspect active trades, trade details, trade actions, cycle logs, and recent trades with reasoning. |
| Trade ideas | Create, list, read, update, invalidate, and delete trade ideas. |
| Backtests | List backtests and their trades and cycles; read a backtest and per-cycle detail. |
| Skills | List, load, create, update, and delete reusable agent skills. |
| Preparation | Create and list preparation packages; generate, execute, and write preparation outputs, including backdated (`as-of`) generation. |
| Sentiment | Create and list sentiment reports / packages; generate and refresh sentiment, including backdated runs. |
| Instrument profiles | Create, read, update, delete, and regenerate instrument profiles for a symbol. |
| Research | Drive research-workspace runs and read their outputs. |
| Candles & indicators | Fetch candles and ranged candles; list, search, and compute indicators. |
| News | Read the economic calendar, today's news, and upcoming events. |
| Risk | Read and update global and per-account risk settings; calculate lot size. |
| Statistics | Read the dashboard summary and per-session trade statistics. |
| Symbols & accounts | List symbols and presets, check symbol existence, read symbol info, manage MT5 accounts, read account info. |
| Web | `web_search` and `web_fetch` for cross-asset context, behind SSRF protection. |
| Documentation | `get_cortiq_documentation` pulls built-in docs topics through MCP. |

Backdating note: preparation, sentiment, and profile generation accept an `as-of` date so an agent can build artifacts dated to a past point for backtest alignment. Cortiq enforces no-lookahead on a best-effort basis; verify dates when backdating.

### Best practices

1. Start with read-only tool usage.
2. Use virtual mode before live mode.
3. Keep risk limits configured in Cortiq, not only in the agent prompt.
4. Gather data with `execute_data_package` before asking for a trade decision.
5. Confirm the session is `Running` before using execution tools.
6. Write prompts that state explicitly whether trading is allowed.

### Limitations and boundaries

- The MCP server is a local integration layer, not a public cloud API.
- `External MCP` sessions skip the internal autonomous workflow engine.
- The external agent owns its own analysis cadence and decision logic.
- Live trading depends on the Cortiq app and MT5 connectivity being healthy.
- A session without a valid data package cannot gather market data until one is assigned.

## What to read next

1. [Cortiq Copilot](cortiq-copilot/) — the in-app assistant that uses the same tools and the same approval gate, without an external client.
2. [Agent permissions](agent-permissions/) — the full permission model: the trade gate, the filesystem sandbox, and capability grants.
3. [Sessions](sessions/) — the autonomous-session alternative if MCP is more than you need.

## Related

- [AI providers](ai-providers/)
- [System messages](system-messages/)
- [Risk management](risk-management/)
- [Trading cycle: overview](trading-cycle/overview/)
- [Glossary](glossary/)
