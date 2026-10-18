---
status: current
title: Sessions
description: Create a single-instrument session, choose Manual or Autonomous, and understand model selection, data checks, and session states.
sidebar:
  order: 40
---

A session is the workspace for trading one instrument on one MT5 account. Choose who makes decisions, select any strategy and supporting context, then start and monitor the session.

## What this is

Every session has one concrete symbol. To work on another instrument, create another session. Each session keeps its own trades, recorded runs, decisions, and reviews. Editable chart drawings are shared by their saved account and instrument context.

Cortiq offers two session types: `Autonomous` and `Manual`. New sessions default to `Autonomous`. The type is fixed after creation, and cloning preserves it.

`Virtual Mode` is a separate execution choice. It simulates orders against the current market feed. A non-virtual session sends orders to MT5. Both require a valid license to start.

## How it fits into Cortiq

| Choice | What runs |
| --- | --- |
| Autonomous | Cortiq's decision engine plans, evaluates opportunities, and manages exposure within the session's authority and risk limits. |
| Manual | You trade from the chart, with Copilot available when requested. No general autonomous session cycle runs. |
| Manual with External MCP client | An outside client uses Cortiq's data and permissioned trade tools. Cortiq does not run a decision cycle for that client. |

External MCP is a connection choice for a Manual session, rather than a third session type. See [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/).

Manual sessions can also host explicitly enabled automated trade ideas. Each idea has its own approved mandate and lifecycle; enabling one does not turn the session into an Autonomous session. See [Trade ideas](/cortiq-public/trading-cycle/entities/trade-ideas/).

## How to use it

### Create a session

Before starting, configure an MT5 account and activate your license. For an Autonomous session, also configure an available AI provider and model under `Setup` → `AI Providers`.

1. Open `Library` → `Sessions` and select `New Session`.
2. Enter a name, choose the MT5 account, and select one instrument.
3. Choose `Autonomous` or `Manual`.
4. Optionally attach playbooks and a Data Access Policy. For Autonomous sessions, optionally select preparation, sentiment, and instrument profile packages for the chosen instrument.
5. For Autonomous, choose an available `AI Model`. For Manual, enable `External MCP client` only when an outside client will control the session.
6. Turn on `Virtual Mode` if you want simulated orders. It is off by default.
7. Review trade approval, concurrent-trade limits, and the applicable risk settings, then create the session.
8. Select `Start` and confirm that the status becomes `Running`.

Playbooks and policies are optional in both session types. When attached rules depend on particular inputs, their compatibility and actual availability still have to pass the launch checks.

### Choose a model for an Autonomous session

The `AI Model` picker selects a provider, connection, and exact model together. The Trading Cycle setting supplies the default for a new session.

Cortiq saves that full selection when you create the session. It remains fixed for routine decisions, initial planning, replanning, and recovery. Changing global provider settings does not replace the model of an existing session, and a clone preserves its saved selection.

Older sessions without a saved model display `Legacy default (see AI Providers)`. They retain their legacy settings behavior. See [AI providers](/cortiq-public/ai-providers/).

### Resolve input checks before starting

A playbook's execution policy limits the market evidence the AI can retrieve. Cortiq checks the selected rules, policy, exact playbook version, indicator bindings, and required supporting reports together.

If the selected playbooks share a saved policy, session setup offers that policy. You can choose an override. If their saved policies differ, select the policy this session will use.

A blocked start leaves the session stopped and shows the required correction. Open the playbook to review compatibility findings. During operation, `Input checks and data requests` explains required inputs, available evidence, and the next step. A compatible policy does not prove that a trading signal exists.

Preparation reports are generated under their own recipe and policy. Execution checks the resulting report's instrument, timing, certification, and expiry when the rules require it; it does not automatically recollect the preparation recipe's raw history.

### Understand trading windows

Autonomous entry days, entry windows, and automatic-close offsets belong to the pinned playbook version. Times follow your configured local time zone.

When a playbook's entry window closes, the session stays `Running`. New planning and entries for that playbook wait for eligibility to return; existing exposure can still be managed. A session's `End Date` is a separate lifetime boundary that can complete the session.

### Monitor and stop a session

Open the session to read its live chart, trades, decisions, recorded runs, settings, alerts, and reviews. Use `Manual Order` to reveal the chart's order ticket. The [charting guide](/cortiq-public/charting/) explains drawings, indicators, and decision markers.

Stopping offers a choice about closing session-owned trades. Keeping trades open does not close them at the broker. Check remaining exposure after stopping, especially if you expected Cortiq to continue managing it.

`Review session` and `Update review` are explicit actions on the `Reviews` tab, including while a session is running. They assess completed saved evidence; stopping a session does not automatically request a review. See [Session review](/cortiq-public/session-review/).

## Reference

### Session states

| State | Meaning | What happens next |
| --- | --- | --- |
| `Created` | Saved, not yet started. | Select `Start`. |
| `Running` | The session is active. | The selected operating type controls its behavior. |
| `RiskPaused` | A risk condition paused the session. | Cortiq attempts to resume when the condition clears and start checks permit it. |
| `Paused` | Explicitly paused. | Resume explicitly. |
| `Stopped` | Stopped by you or app shutdown. | Start a new run explicitly. |
| `Completed` | Its lifetime has ended. | It does not resume automatically. |
| `Failed` | A failure ended the active run. | Inspect the error; enabled auto-restart uses its separate backoff schedule. |
| `TimePaused` | A historical schedule state. | Current playbook windows do not write this state. |

Starting again preserves earlier recorded runs. An enabled automatic restart remains visible as `Failed` while waiting, with the attempt and remaining time on the detail page.

### Approval boundaries

For Autonomous sessions, `Trade approval` has three choices: inherit the global default, require approval before opening, or full auto. The opening approval setting does not suspend authorized management of an existing position.

Manual order submission does not use that Autonomous pending-trade approval workflow. Copilot and external tools have separate permission and execution checks; Manual mode does not bypass them. See [Agent permissions](/cortiq-public/agent-permissions/).

## What to read next

1. [Discretionary trading](/cortiq-public/discretionary-trading/) — trade from a Manual session's chart.
2. [Playbooks & data policies](/cortiq-public/playbooks-and-data/) — configure rules and their evidence limits.
3. [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) — virtual orders, broker execution, and alerts.
4. [Session review](/cortiq-public/session-review/) — assess saved decisions and outcomes.

## Related

- [AI providers](/cortiq-public/ai-providers/)
- [Risk management](/cortiq-public/risk-management/)
- [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/)
- [Trading cycle: session architecture](/cortiq-public/trading-cycle/session-architecture/)
