---
status: current
title: AI providers
description: Configure API or subscription connections and choose models for trading, Copilot, Review, research, and preparation.
sidebar:
  order: 20
---

Cortiq uses your own AI accounts. Configure the connection first, then choose the provider and model for trading, research, preparation, review, and Copilot.

## What this is

A model selection includes three parts: the provider, the connection type, and the model. Cortiq uses the selected combination and reports a failure when it cannot run. It does not switch to another provider to hide the failure.

The current connections are `API` and `Subscription`. Subscription connects to a locally installed, authenticated Codex or Claude agent through ACP. Legacy CLI and browser selections are not supported routes for current AI workflows.

An external MCP client is a different workflow: your outside client calls Cortiq tools. Cortiq does not invoke that client as an AI provider. See [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/).

## How it fits into Cortiq

| Provider | API | Subscription |
| --- | --- | --- |
| ChatGPT / OpenAI | Your OpenAI API key. | Your authenticated Codex connection. |
| Claude | Your Anthropic API key. | Your authenticated Claude connection. |
| Gemini | Your Google API key. | Unavailable. |
| OpenRouter / compatible endpoint | Your key and compatible endpoint. | Unavailable. |
| Local Model | A local OpenAI-compatible endpoint. | Unavailable. |

API usage is billed to the selected API account or credits. Subscription use follows your provider's plan, usage limits, and access. A subscription connection does not guarantee unlimited usage or access to every model.

## How to use it

### Configure an API connection

1. Open `Setup` → `AI Providers`.
2. Select the provider and choose `API`.
3. Enter its key and, when required, endpoint.
4. Choose a model or retain the provider default where offered.
5. Select `Save API Settings`, then verify the connection.

Use `Local Model` for a service running on your computer or private network. OpenRouter's custom endpoint accepts public HTTPS services; it does not replace the Local Model connection for local addresses.

### Configure a subscription connection

1. Open the ChatGPT or Claude provider and choose `Subscription`.
2. Use the connection setup controls to install or repair the supported local runtime when required.
3. Authenticate directly with the provider using `Re-authenticate`.
4. Load the available models and select a `Subscription model`.
5. Save the selection and verify the connection.

Model discovery reads the installed runtime's advertised choices without asking it to generate an answer. Connection verification separately checks that the selected model can respond on your account. Discovery alone does not establish access.

An unavailable saved model remains visible as a problem. Refreshing the model list does not silently choose a replacement. Changing the model in a separate Codex or Claude application does not change Cortiq's saved selection.

### Maintain the local connection

| Action | Purpose |
| --- | --- |
| `Check setup` | Inspect the installed supported packages. |
| `Repair connection` | Restore a missing or incompatible connection. |
| `Update packages` | Update within the runtime versions Cortiq supports. |
| `Re-authenticate` | Sign in again with the provider. |

These actions are explicit. Starting a session, running a cycle, or automatic restart does not update global provider packages.

### Choose the AI for each workflow

Under `Workflow AI Settings`, select the provider, integration mode, optional model override, and thinking effort for each workflow, then select `Save AI Settings`.

The workflows include Journal, Review, Preparation, Sentiment, Instrument Profile, Research & Knowledge, Trading Cycle, and Backtesting. Copilot's default model and effort are also available under `Settings` → `Copilot`.

`Use one AI for all workflows` applies the provider and connection together. It leaves individual model and thinking-effort selections unchanged, so review those fields after applying it.

### Understand where a model selection is saved

| Work | Model selection |
| --- | --- |
| New Autonomous session | Starts from the Trading Cycle default; you choose the full route during creation. |
| Existing Autonomous session | Keeps its saved provider, connection, and exact model for decisions, planning, replanning, and recovery. |
| Copilot conversation | Keeps its own provider, connection, and model; the dock's model picker changes that conversation's selection. Dedicated Review conversations use the Review configuration. |
| Supporting workflow | Uses the workflow's configured selection and applicable provider default. |
| Session or backtest review | Uses the independent Review configuration, with verified maximum effort. |

Changing a global default does not replace the model saved on an existing Autonomous session. Cloning preserves its selection. Older sessions without a saved model display `Legacy default (see AI Providers)` and retain their legacy fallback to Trading Cycle settings.

Changing a Copilot conversation's model starts isolated provider context while carrying bounded prior exchanges for continuity. If its saved selection becomes unavailable, sending fails until you correct it; Cortiq does not silently substitute another route.

Dedicated Review conversations keep the Review provider, model, maximum effort, and saved-evidence tools. Ordinary Copilot model and effort controls don't override that review scope.

## Reference

### Review uses Max effort

The `Review` workflow has its own provider, connection, and model. Thinking effort is fixed at `Max`, independent of routine Journal, Trading Cycle, and Backtesting effort.

Cortiq requires the selected model's verified highest native reasoning setting before sending review evidence. Unsupported models, missing capabilities, or a lower acknowledgement stop the request with a settings error.

Without a dedicated Review selection, existing session/backtest review settings provide the compatibility fallback. Configure Review explicitly when you want an independent model. Preparing a scope, reading a saved result, and opening or resuming its chat don't send a generation request. **Start review** and accepted follow-up messages can use provider allowance. See [Session review](/cortiq-public/session-review/).

### Sentiment requires live web research

Sentiment generation first gathers current web evidence through the selected provider, then writes the report from that evidence. A report requires completed search activity, an observed query, and observed source URLs.

| Connection | Verified sentiment research path |
| --- | --- |
| OpenAI API or ChatGPT Subscription | Supported. |
| Claude API or Subscription | Supported. |
| Gemini API | Supported. |
| OpenRouter API | Supported. |
| Local Model | No verified live-search adapter. |

Research charges and limits belong to the selected provider account. Cortiq does not require a separate search-service key for these supported paths. If research fails, the report is not saved and another provider is not used automatically.

Backdated sentiment generation is unavailable. Today's web results cannot stand in for historical evidence. See [Sentiment reports](/cortiq-public/trading-cycle/entities/sentiment-reports/).

### Failures stay on the selected connection

Transient failures can retry on the same connection. An authentication problem, exhausted quota, unsupported selection, or unavailable model needs attention on that connection; there is no automatic failover provider.

Use the readiness result in AI Providers and `Tools` → `Provider Health` to inspect connection problems. An unavailable provider can block Autonomous session start. Manual order entry does not require an AI model.

## Common questions

**Does a local model support every workflow?**
No. General API compatibility does not establish every capability. Sentiment needs verified web research, and Review needs verified maximum-effort support.

**Why does refreshing models not repair my selection?**
Refreshing only discovers choices. Select and save an available model, then verify the connection.

**Can a workflow use a different model from Copilot?**
Yes. Workflow settings, saved Autonomous session models, and individual Copilot conversation selections have separate owners.

## What to read next

1. [Sessions](/cortiq-public/sessions/) — choose the model saved on an Autonomous session.
2. [Cortiq Copilot](/cortiq-public/cortiq-copilot/) — use a conversation's model and tools.
3. [Session review](/cortiq-public/session-review/) — prepare a scope, review it in Copilot, and inspect coverage.
4. [Agent permissions](/cortiq-public/agent-permissions/) — configure provider permission requests and Cortiq approvals.

## Related

- [Sentiment reports](/cortiq-public/trading-cycle/entities/sentiment-reports/)
- [Research](/cortiq-public/research/)
- [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/)
- [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/)
