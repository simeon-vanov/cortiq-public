---
title: MCP and agent integration
description: How to connect an MCP-compatible AI client to Cortiq, configure External MCP sessions, and drive the trading loop from an external agent.
sidebar:
  order: 20
  badge: Advanced
---

This page covers Cortiq's MCP server — the integration layer that lets an external AI client (like Claude Desktop) drive Cortiq's session, market-data, and execution tools directly. By the end you'll know when to use it, how to wire it up, and what tools are available.

:::caution
External MCP sessions skip Cortiq's internal autonomous workflow engine. The external agent is the only thing driving analysis, decisions, and trades. Risk validators still run, but the entire orchestration responsibility lives in the agent's prompt — not in a Cortiq playbook loop.
:::

:::note
A deeper version of this page is coming in the next docs release with full tool reference, recipe gallery, and troubleshooting. The content below is the current operational guide; expand it once Spec 2 lands.
:::

## What this is

The Cortiq MCP server exposes Cortiq's tools to an MCP-compatible AI client. In practical terms, it lets an external agent use Cortiq as an execution and market-data system instead of relying only on Cortiq's internal autonomous trading loop.

Use this mode when you want an agent such as Claude Desktop to:

- Inspect sessions, accounts, trades, and risk settings.
- Gather fresh market data on demand.
- Create and control `External MCP` sessions.
- Execute and manage trades through Cortiq's MT5 integration.

This is an advanced workflow. If you want the simpler product path, use [autonomous sessions](sessions-and-autoscan/) instead.

## How it fits into Cortiq

| Mode | Who controls the trading loop | Best for |
| --- | --- | --- |
| Autonomous session | Cortiq's internal workflow engine | Most users who want a built-in automated operating loop. |
| External MCP session | An external MCP-compatible AI client | Advanced users who want agent-driven control through tool calls. |

The critical difference is that `External MCP` sessions do not run the internal autonomous workflow engine. The external agent must decide what to do next and call the appropriate tools.

## Who this is for

Use MCP integration when you want:

- An MCP-compatible desktop AI client to drive the trading workflow.
- Fine-grained control over when analysis happens and when trading happens.
- A local tool layer that gives the agent structured access to Cortiq data and execution.
- Tool-based inspection of accounts, sessions, and risk before execution.

## How to use it

### Prerequisites

Before connecting an agent to the Cortiq MCP server, confirm:

- Cortiq is installed on the local machine.
- The Cortiq desktop app has created or can access its local database.
- MetaTrader 5 is installed and configured if you intend to trade live.
- At least one MT5 account is configured in Cortiq.
- A data package exists for any session that needs market-data gathering.
- Risk settings are configured in Cortiq before live execution.
- The MAUI desktop app is running when you expect live trading actions to execute through the normal application environment.

### How the MCP server connects

The MCP server uses `stdio` transport. Your AI client starts the server as a local process and calls tools over that connection.

The server shares the same SQLite database as the Cortiq desktop application — this is a local-machine integration model, not a cloud API.

### Example client setup — Claude Desktop

On Windows, the Claude Desktop config file is usually:

```text
%APPDATA%\Claude\claude_desktop_config.json
```

Example configuration using a compiled Cortiq MCP server executable:

```json
{
  "mcpServers": {
    "cortiq": {
      "command": "C:\\Path\\To\\Cortiq.McpServer.exe"
    }
  }
}
```

Example configuration using `dotnet run` for a source-based setup:

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

If automatic database discovery fails, set `CORTIQ_DB_PATH` explicitly:

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

### Core agent workflow

1. The external agent connects to the Cortiq MCP server.
2. The agent discovers available accounts, sessions, and data packages.
3. The agent creates or updates an `External MCP` session.
4. The agent starts the session.
5. The agent gathers market data with the session's data package.
6. The agent decides whether to trade.
7. The agent executes or manages trades through Cortiq tools.

### Minimal external session flow

#### 1. Discover prerequisites

Typical first asks:

- List MT5 accounts.
- List data packages.
- Show current risk settings.
- List existing sessions.

#### 2. Create the external session

`create_external_session` is the important entry point. It produces an `External MCP` session, which means:

- No internal workflow engine starts for analysis or trading.
- No autonomous playbook loop runs on your behalf.
- The external agent owns orchestration.

#### 3. Start the session

Use `start_session` before expecting trade-execution tools to work. Starting the session enables the trading state — it does not turn on a hidden autonomous loop.

#### 4. Gather market data

Use `execute_data_package` to collect the session's configured payload for a specific symbol. This is the point where the external agent reads candles, indicators, and other context, then makes a decision.

#### 5. Execute or manage the trade

- Use `execute_trade` to open a position.
- Use `execute_trade_action` later for `CLOSE`, `PARTIAL_CLOSE`, `MODIFY_SL`, `MODIFY_TP`, or `CANCEL`.

### Example prompts

**Read-only — safe first test:**

```text
Use the Cortiq MCP server to list my MT5 accounts, list my data packages, and inspect my sessions. Then gather fresh EURUSD data for the correct session and summarize the market context only. Do not place any trades.
```

**Virtual session — before any live attempt:**

```text
Create an External MCP session named 'EURUSD Virtual Agent', use my default MT5 account, assign the correct data package, enable virtual mode, start the session, gather fresh EURUSD data, and give me a trade plan with entry, stop loss, take profit, and reasoning. Do not place a live trade.
```

**Controlled live — only after the virtual flow is proven:**

```text
Use the Cortiq MCP server to review my account risk settings, gather fresh EURUSD data for the running external session, and only if the setup is valid under existing risk limits, execute one trade with a clear stop loss, take profit, and reasoning. Then report back exactly what was executed.
```

## Reference

### Key tools in the external workflow

| Tool | What it does |
| --- | --- |
| `list_sessions` | Inspect existing sessions and their states. |
| `get_session` | Inspect one session in detail. |
| `create_external_session` | Create an `External MCP` session for agent-driven control. |
| `update_session` | Assign or change configuration such as data package, symbols, and account. |
| `start_session` | Move the session to `Running` so trade-execution tools can be used. |
| `execute_data_package` | Collect candles, indicators, and related market context for a symbol. |
| `execute_trade` | Open a trade using Cortiq's execution and risk-validation path. |
| `execute_trade_action` | Close, partially close, modify SL/TP, or cancel orders. |
| `get_risk_settings` | Inspect global risk rules before trading. |
| `get_account_risk_settings` | Inspect per-account risk rules before trading. |
| `list_mt5_accounts` | Discover configured accounts. |
| `list_data_packages` | Discover data packages available for session use. |
| `get_cortiq_documentation` | Pull built-in documentation topics through MCP. |

### Best practices

1. Start with read-only tool usage first.
2. Use virtual mode before live mode.
3. Keep risk limits configured in Cortiq, not only in the agent prompt.
4. Use `execute_data_package` before asking the agent to make a trade decision.
5. Confirm the session is `Running` before using execution tools.
6. Use clear prompts that explicitly say whether trading is allowed or not.

### Limitations and boundaries

- The MCP server is a local integration layer, not a public cloud API.
- External MCP sessions skip Cortiq's internal autonomous workflow engine.
- The external agent owns its own analysis cadence and decision logic.
- Live trading still depends on the Cortiq application environment and MT5 connectivity being healthy.
- A session without a valid data package cannot gather market data until one is assigned.

## What to read next

1. [Sessions & AutoScan](sessions-and-autoscan/) — for the autonomous-session alternative if MCP is more than you need.
2. [Risk management](risk-management/) — risk validators run for both autonomous and external sessions.
3. [MetaTrader 5 integration](mt5-integration/) — the bridge that every execute tool ultimately uses.

## Related

- [AI providers](ai-providers/)
- [Workspace & monitoring](workspace-and-monitoring/)
- [Trading cycle: overview](trading-cycle/overview/)
- [Glossary](glossary/)
