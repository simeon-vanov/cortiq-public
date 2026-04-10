---
title: MCP and Agent Integration
description: How to connect an MCP-compatible AI client to Cortiq and operate External MCP sessions.
---

## What This Feature Is

The Cortiq MCP server is the advanced integration layer that exposes Cortiq tools to an MCP-compatible AI client.

In practical terms, it lets an external agent use Cortiq as an execution and market-data system instead of relying only on Cortiq's internal autonomous trading loop.

This is the mode to use when you want an agent such as Claude Desktop to:

- Inspect sessions, accounts, trades, and risk settings
- Gather fresh market data on demand
- Create and control `External MCP` sessions
- Execute and manage trades through Cortiq's MT5 integration

## Who This Is For

This is an advanced-user workflow.

It is a good fit when you want:

- An MCP-compatible desktop AI client to drive the trading workflow
- Fine-grained control over when analysis happens and when trading happens
- A local tool layer that gives the agent structured access to Cortiq data and execution

If you want the simpler product path, use normal autonomous sessions instead.

## Best Use Cases

This mode is best when you want:

- an external AI client to drive the workflow directly
- explicit control over when analysis happens and when trading is allowed
- tool-based inspection of accounts, sessions, and risk before execution
- a local agent workflow that treats Cortiq as the execution and data layer

## How It Fits Into Cortiq

| Mode | Who Controls The Trading Loop | Best For |
| --- | --- | --- |
| Autonomous session | Cortiq's internal workflow engine | Most users who want a built-in automated operating loop |
| External MCP session | An external MCP-compatible AI client | Advanced users who want agent-driven control through tool calls |

The critical difference is that `External MCP` sessions do not run the internal autonomous workflow engine. The external agent must decide what to do next and call the appropriate tools.

## Important Requirements

Before using an agent with the Cortiq MCP server, make sure the following are true:

- Cortiq is installed on the local machine
- The Cortiq desktop app has created or can access its local database
- MetaTrader 5 is installed and configured if you intend to trade live
- At least one MT5 account is configured in Cortiq
- A data package exists for any session that needs market data gathering
- Risk settings are configured in Cortiq before live execution
- The MAUI desktop app is running when you expect live trading actions to execute through the normal application environment

## How The MCP Server Connects

The MCP server uses `stdio` transport. Your AI client starts the server as a local process and then calls tools over that connection.

The server shares the same SQLite database as the Cortiq desktop application, so this is a local-machine integration model rather than a cloud API model.

## Example Client Setup

One common example is Claude Desktop.

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

## The Core Agent Workflow

The most useful mental model is this:

1. The external agent connects to the Cortiq MCP server.
2. The agent discovers available accounts, sessions, and data packages.
3. The agent creates or updates an `External MCP` session.
4. The agent starts the session.
5. The agent gathers market data with the session's data package.
6. The agent decides whether to trade.
7. The agent executes or manages trades through Cortiq tools.

## Key Tools In The External Workflow

| Tool | What It Is Used For |
| --- | --- |
| `list_sessions` | Inspect existing sessions and their states |
| `get_session` | Inspect one session in detail |
| `create_external_session` | Create an `External MCP` session for agent-driven control |
| `update_session` | Assign or change configuration such as data package, symbols, and account |
| `start_session` | Move the session to `Running` so trade execution tools can be used |
| `execute_data_package` | Collect candles, indicators, and related market context for a symbol |
| `execute_trade` | Open a trade using Cortiq's execution and risk validation path |
| `execute_trade_action` | Close, partially close, modify SL or TP, or cancel orders |
| `get_risk_settings` | Inspect global risk rules before trading |
| `get_account_risk_settings` | Inspect per-account risk rules before trading |
| `list_mt5_accounts` | Discover configured accounts |
| `list_data_packages` | Discover data packages available for session use |
| `get_cortiq_documentation` | Pull built-in documentation topics directly through MCP |

## Minimal External Session Flow

### 1. Discover the prerequisites

Typical first asks to the agent are:

- List MT5 accounts
- List data packages
- Show current risk settings
- List existing sessions

### 2. Create the external session

The important entry point is `create_external_session`.

That creates an `External MCP` session, which means:

- No internal workflow engine is started for analysis or trading
- No autonomous playbook loop is running on your behalf
- The external agent remains responsible for orchestration

### 3. Start the session

Use `start_session` before expecting trade execution tools to work.

For external sessions, starting the session enables the trading state. It does not turn on a hidden autonomous loop.

### 4. Gather market data

Use `execute_data_package` to collect the session's configured data payload for a specific symbol.

This is the usual point where the external agent reads candles, indicators, and other context and then makes a trading decision.

### 5. Execute or manage the trade

If the agent decides to trade:

- Use `execute_trade` to open the position
- Use `execute_trade_action` later for `CLOSE`, `PARTIAL_CLOSE`, `MODIFY_SL`, `MODIFY_TP`, or `CANCEL`

## Example Read-Only Prompt

This is the safest first test:

```text
Use the Cortiq MCP server to list my MT5 accounts, list my data packages, and inspect my sessions. Then gather fresh EURUSD data for the correct session and summarize the market context only. Do not place any trades.
```

## Example Virtual Session Prompt

Use virtual mode before attempting live trading:

```text
Create an External MCP session named 'EURUSD Virtual Agent', use my default MT5 account, assign the correct data package, enable virtual mode, start the session, gather fresh EURUSD data, and give me a trade plan with entry, stop loss, take profit, and reasoning. Do not place a live trade.
```

## Example Controlled Live Prompt

Only use this after you have already verified MT5 connectivity, risk settings, and virtual-mode behavior:

```text
Use the Cortiq MCP server to review my account risk settings, gather fresh EURUSD data for the running external session, and only if the setup is valid under existing risk limits, execute one trade with a clear stop loss, take profit, and reasoning. Then report back exactly what was executed.
```

## Best Practices

1. Start with read-only tool usage first.
2. Use virtual mode before live mode.
3. Keep risk limits configured in Cortiq, not only in the agent prompt.
4. Use `execute_data_package` before asking the agent to make a trade decision.
5. Confirm the session is `Running` before using execution tools.
6. Use clear prompts that explicitly say whether trading is allowed or not.

## Limitations And Boundaries

- The MCP server is a local integration layer, not a public cloud API.
- `External MCP` sessions skip Cortiq's internal autonomous workflow engine.
- The external agent must manage its own analysis cadence and decision logic.
- Live trading still depends on the Cortiq application environment and MT5 connectivity being healthy.
- A session without a valid data package cannot gather market data until one is assigned.

## When To Use This Instead Of Autonomous Sessions

Choose MCP and agent control when you want a specific external AI client to drive the workflow directly.

Choose autonomous sessions when you want Cortiq itself to run the repeated analysis and execution loop internally.

## What This Can Do For You

Used correctly, MCP integration can help you:

- keep your preferred external agent while still using Cortiq for execution and safety controls
- separate orchestration logic from the Cortiq desktop application
- create more deliberate, tool-driven workflows for advanced trading operations

## Related Pages

- [AI Providers](ai-providers/)
- [Sessions & AutoScan](sessions-and-autoscan/)
- [Risk Management](risk-management/)
- [MetaTrader 5 Integration](mt5-integration/)