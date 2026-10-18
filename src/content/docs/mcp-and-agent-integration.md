---
status: current
title: MCP and agent integration
description: Connect an external MCP client to Cortiq for local data, authoring, research, and permissioned Manual-session trading.
sidebar:
  order: 10
  badge: Advanced
---

An external MCP client can inspect Cortiq data, author configurations, and control a Manual session through tools. This guide explains the local connection, approval configuration, and the boundaries between external control and Autonomous sessions.

## What this is

Cortiq's MCP server runs as a local process over `stdio`. Your client starts it and calls the tools it advertises. The server shares the desktop app's SQLite database, so both must point to the same file.

The external client owns its model, conversation, and analysis cadence. Data returned by tools can be sent to that client's model provider. Cortiq generation and research tools can also call their configured providers; using a local MCP connection does not make every operation local or free.

`External MCP client` is a connection option for a `Manual` session. Starting it permits session operations but does not start Cortiq's general autonomous decision cycle or keep the outside agent running between requests.

## How it fits into Cortiq

| Workflow | Who requests the next decision? |
| --- | --- |
| Autonomous session | Cortiq's internal decision engine. |
| Manual session with in-app Copilot | You ask Copilot or submit an order from the chart. |
| Manual session with External MCP | Your external client calls data and trade tools when instructed. |

Use an Autonomous session when you want Cortiq to own the ongoing decision loop. An external client does not inherit an automatic wait-for-trigger loop by starting a Manual session.

## How to use it

### Before connecting

- Install Cortiq and open it so its local database is initialized.
- Keep the desktop app open when using desktop approval cards or host-owned trading features.
- Configure the MT5 account, instrument, risk limits, and license before starting an MT5-bound session.
- Create a Data Access Policy if you want to collect market context through `execute_data_access_policy`.
- Decide whether the server should expose only reads or allow mutations with approval.

Manual sessions can exist without a policy, but `execute_data_access_policy` needs a policy assigned to the session. Historical practice through backtesting also requires a valid license.

### Register the local server

Use your client's MCP configuration controls to register the bundled executable under Cortiq's installation directory, in `mcp-server\Cortiq.McpServer.exe`.

For a JSON-based client, this example enables Cortiq's generic approval filter. Replace both example paths with the executable and database you actually use:

```json
{
  "mcpServers": {
    "cortiq": {
      "command": "C:\\Path\\To\\Cortiq\\mcp-server\\Cortiq.McpServer.exe",
      "env": {
        "CORTIQ_DB_PATH": "C:\\Path\\To\\cortiq.db",
        "CORTIQ_MCP_REQUIRE_APPROVAL": "1"
      }
    }
  }
}
```

The standard desktop database is under `%LOCALAPPDATA%\Cortiq.BlazorApp\Cortiq.BlazorApp\Data\cortiq.db`. Use the database belonging to the installation you opened. `CORTIQ_DB_PATH` overrides discovery; it should not point at a new empty database.

Each client has its own configuration format. Register the same command and environment using that client's supported MCP setup, then reconnect it and confirm that Cortiq's tools are listed.

For an inspection-only connection, also set `CORTIQ_MCP_READ_ONLY` to `1`. The server then filters mutation tools. This is stronger than a prompt asking the agent not to make changes.

### Verify the connection with reads

Ask the client:

```text
List my Cortiq MT5 accounts, sessions, and Data Access Policies.
Summarize what is configured. Do not create or change anything,
start a session, generate a report, or place a trade.
```

Confirm that the accounts and sessions match the desktop. If they do not, correct the executable or database path before allowing mutations.

### Create a virtual Manual session

With a mutation-enabled connection:

1. List accounts and policies, and choose the intended account and one concrete symbol.
2. Use `create_external_session` with a name, that symbol, the account, the chosen `dataAccessPolicyId`, and `isVirtualMode: true`.
3. Inspect the created session and confirm `Manual`, `ExternalMcp`, and virtual execution.
4. Use `start_session` and confirm that it is `Running`.
5. Call `execute_data_access_policy` for that session and symbol to collect market context.
6. Ask for an analysis or plan. Authorize a simulated trade separately if you want one.

`create_external_session` creates the Manual session with an External MCP connection. It does not start trading automatically. Its historical parameter name `symbols` accepts one instrument.

Use `execute_trade` to open an authorized trade and `execute_trade_action` for supported management actions. Keep the session, account, symbol, ownership, license, and risk boundaries in place; an agent's explanation does not bypass execution validation.

## Reference

### Approval configuration matters

The generic MCP approval filter is enabled by `CORTIQ_MCP_REQUIRE_APPROVAL=1`. Cortiq's in-app ACP connection sets this automatically. An independently configured external server needs that setting if you want the same generic approval cards.

With the filter enabled, tools marked as requiring approval wait for your decision in the desktop. Rejection, expiry, or an error denies the call. Do not assume every external real order has an approval card when running a server without this setting.

Approval applies to more than trades. The marked tools include trade execution, durable playbook creation/update/deletion, and certain settings, knowledge, and cycle-control operations. Other authoring tools can persist changes without a card. Read each offered tool's description and request only the changes you intend.

Some features have additional host-owned boundaries regardless of the generic setting. Enabling an automated trade idea requires its specific mandate approval; an external client cannot approve that mandate itself.

Manual sessions do not use the Autonomous session's pending-opening approval workflow. That distinction does not remove an enabled MCP approval gate, feature approval, or risk check. See [Agent permissions](/cortiq-public/agent-permissions/).

### Tool families

The advertised tools depend on the connection's scope. Use the client's tool descriptions for current parameters and availability.

| Family | Examples of supported work |
| --- | --- |
| Sessions | Inspect, create, start, stop, and manage sessions; create a Manual External MCP session. |
| Data Access Policies | Author policies, validate compatibility, and collect permitted market context. |
| Playbooks | Read and author strategy rules and their execution policy; link playbooks to sessions. |
| Trades | Inspect trades, request openings, and perform permitted management actions. |
| Trade ideas | Create disabled automation drafts, inspect them, and request host-reviewed enablement. |
| Preparation and profiles | Manage recipes and generate saved outputs; supported historical generation uses its own cutoff checks. |
| Sentiment | Manage packages and generate current reports from verified provider web research. |
| Research and knowledge | Run supported research workflows, inspect evidence, and use explicit knowledge review tools. |
| Chart tools and price alerts | Annotate a matching mounted chart, or manage a live session's one-shot price alerts. |
| Accounts, symbols, risk, and history | Inspect configured accounts, symbol details, risk settings, saved trades, and statistics. |

Authoring follows the same compatibility rules as the app. A generated policy is a proposal until saved through the validated authoring path. Saving a draft does not establish launch readiness, and current source availability does not prove historical availability.

Historical sentiment generation is unavailable. A backdated request cannot use today's web research as evidence for a past session. Preparation and profile history have different generation contracts; do not treat all supporting artifacts as interchangeable.

### Scoped connections

Read-only Research, a manual backtest Copilot, and the standalone Chart workspace have restricted tool surfaces. A chart or historical context does not grant live-trading authority. Missing tools in those contexts can be intentional restrictions.

A chart drawing request needs a matching mounted chart. It is not a way to queue annotations for an unrelated session. Price alerts notify on fresh live Bid data while their owning session is Running; they never authorize an order.

## Troubleshooting

**The app and the agent show different sessions.**
Check `CORTIQ_DB_PATH` and the server executable. Both processes must use the same database.

**A Manual session is Running but nothing happens.**
That is expected without an external request or separately enabled trade-idea automation. The outside client owns its next action; no Autonomous session cycle runs.

**Data collection reports that no policy is assigned.**
Assign a Data Access Policy to the session, then retry `execute_data_access_policy`. Creating a Manual session does not invent one.

**An approval request expires.**
Keep the desktop app open and resolve its current request. A timed-out call does not authorize the next attempt; inspect the result before retrying.

## What to read next

1. [Sessions](/cortiq-public/sessions/) — compare Manual and Autonomous operation.
2. [Agent permissions](/cortiq-public/agent-permissions/) — distinguish provider permission requests from Cortiq authority.
3. [Cortiq Copilot](/cortiq-public/cortiq-copilot/) — use the in-app assistant instead of an outside client.
4. [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) — virtual execution and one-shot alerts.

## Related

- [Playbooks & data policies](/cortiq-public/playbooks-and-data/)
- [AI providers](/cortiq-public/ai-providers/)
- [Activity](/cortiq-public/system-messages/)
- [Risk management](/cortiq-public/risk-management/)
