---
status: current
title: Glossary
description: Definitions of Cortiq's research, knowledge, policy, replay, review, provider, and session vocabulary.
sidebar:
  order: 90
---

Use these definitions when a screen or guide introduces an unfamiliar term. Follow each link for the workflow and its limits.

## Terms

**ACP** — Agent Client Protocol: Cortiq communicates with a configured, authenticated local agent over a structured protocol. Provider plans and limits still apply. See [AI providers](/cortiq-public/ai-providers/).

**Activity** — The persisted in-app inbox for background events, approvals, and price notifications. Previously called System Messages; the route remains `/system-messages`. See [Activity](/cortiq-public/system-messages/).

**Autonomous session** — A session driven by Cortiq's internal AI planning and execution workflow. The default type for a new session. See [Sessions](/cortiq-public/sessions/).

**Backtest** — A saved historical replay with simulated positions, using either manual execution or autonomous AI decisions. Starting one requires a valid license. See [Backtesting](/cortiq-public/backtesting/).

**Candidate / research question** — A frozen, measurable condition or distinct aspect of a Topic study. Its measured answer is separate from final synthesis and Learning publication. See [Research](/cortiq-public/research/).

**Conclusion readiness** — A Learning's Current or Needs more data state. Records without a valid conclusion remain Preliminary research. This is not an execution authorization. See [Instrument Hub](/cortiq-public/instrument-hub/).

**Copilot** — The in-app assistant opened with **Ctrl+K**. It uses the current screen's context and available tools to analyse or edit work under the applicable permissions. See [Cortiq Copilot](/cortiq-public/cortiq-copilot/).

**Data access policy** — Reusable limits on the market inputs the AI may request, including timeframe roles, candle counts, and exact indicator bindings. Older records and URLs use Data package. See [Data access policies](/cortiq-public/trading-cycle/entities/data-packages/).

**Day start time** — The configured local reset time for daily risk counters. See [Risk management](/cortiq-public/risk-management/).

**Edge** — A specific execution policy promoted through the required validation workflow, with costs, evidence, and source identity. A descriptive Learning is not an Edge. See [Instrument Hub](/cortiq-public/instrument-hub/).

**External MCP** — An outside MCP client calling Cortiq tools in a Manual-session context. It is not an autonomous model transport or an internal waiting decision loop. See [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/).

**Gather observations** — Research that collects comparable market events for processing or further study. It does not automatically turn unmatched events into Learnings. See [Research](/cortiq-public/research/).

**Hypothesis** — A testable execution family created from eligible Learning evidence inside the closed reaction workflow. See [Instrument Hub](/cortiq-public/instrument-hub/).

**Instrument Hub** — One market's workspace for Overview, Knowledge, Data, research history, and trading artifacts. Open it from **Knowledge** → **My Instruments**. See [Instrument Hub](/cortiq-public/instrument-hub/).

**Instrument profile** — Reusable context about an instrument's behavior and characteristics. See [Instrument profiles](/cortiq-public/trading-cycle/entities/instrument-profiles/).

**Knowledge ledger** — Instrument-scoped records of Observations, Learnings, workflow-created Hypotheses, and validated Edges, with evidence and provenance. See [Instrument Hub](/cortiq-public/instrument-hub/).

**Learning** — A saved conclusion backed by measured evidence, including its scope and limitations. Mixed results are valid conclusions; no fixed sample count makes a conclusion tradable. See [Instrument Hub](/cortiq-public/instrument-hub/).

**Lesson** — A historical review artifact. Automatic lesson production and injection into later trading prompts are retired. See [Session review](/cortiq-public/session-review/).

**Local model** — A model served through a configured local/private OpenAI-compatible API endpoint. Live web research is not supported for Local Model. See [AI providers](/cortiq-public/ai-providers/).

**Managed data file** — A reusable, built historical dataset for an instrument and timeframe, with selected columns and indicators. Manage files on the Hub's Data tab. See [Research](/cortiq-public/research/).

**Manual session** — A session without the general autonomous AI cycle. Operator actions, explicitly requested agent actions, and separately enabled trade-idea mandates have distinct authority. See [Discretionary trading](/cortiq-public/discretionary-trading/).

**Mastery rating** — The count of Production-maturity playbooks for an instrument. It is an operator designation, not a forecast or statistical score. See [Instrument Hub](/cortiq-public/instrument-hub/).

**MT5 bridge** — The local connection to an account's configured MetaTrader 5 terminal for prices, account information, and supported execution. See [MT5 integration](/cortiq-public/mt5-integration/).

**Playbook** — Reusable strategy rules, with pinned versions and an execution data policy where selected. See [Playbooks and data access policies](/cortiq-public/playbooks-and-data/).

**Preparation package** — An analysis recipe. Generating it saves a report run with an effective time, input evidence, and expiry. See [Preparation packages](/cortiq-public/trading-cycle/entities/preparation-packages/).

**Provider route** — The explicit provider, supported transport, model, and effort selected for a feature. Internal model calls use API or ACP and do not silently switch providers. See [AI providers](/cortiq-public/ai-providers/).

**Research revision** — A saved additional analysis of a study's evidence. Exploratory revisions do not replace the frozen primary study. See [Research](/cortiq-public/research/).

**Research workspace** — The instrument-scoped storage behind research runs. Start research from the Instrument Hub; there is no separate workspace-creation step. See [Research](/cortiq-public/research/).

**Risk limit** — A global or per-account constraint checked independently of AI prose. Backtests capture replay-supported risk settings for their own run. See [Risk management](/cortiq-public/risk-management/).

**Sentiment report** — Time-limited current external context generated from observed provider web research, with sources and provenance. Historical generation is unsupported. See [Sentiment reports](/cortiq-public/trading-cycle/entities/sentiment-reports/).

**Session** — An operating context for one MT5 account and one required instrument, with a fixed Manual or Autonomous type. See [Sessions](/cortiq-public/sessions/).

**Session review** — An explicitly requested assessment of saved evidence, supported Observations, and proposed improvements. It does not edit rules or publish Learnings automatically. See [Session review](/cortiq-public/session-review/).

**Skill** — A reusable instruction template used by supported generation flows or Copilot. Skills do not bypass input, risk, or permission checks. See [Skills](/cortiq-public/skills/).

**Topic research** — A study that turns an instrument-scoped question into distinct measurable questions, saved answers, and a final explanation. See [Research](/cortiq-public/research/).

**Trade idea** — A specific thesis with its own lifecycle. Automated ideas require a separately reviewed and enabled mandate. See [Trade ideas](/cortiq-public/trading-cycle/entities/trade-ideas/).

**Virtual mode** — Forward execution on current data with simulated positions. A backtest instead replays historical data. Both require a valid license. See [Execution modes and notifications](/cortiq-public/execution-modes-and-notifications/).

## Related

- [Documentation map](/cortiq-public/documentation-map/)
- [App navigation guide](/cortiq-public/app-navigation-guide/)
- [Capability reference](/cortiq-public/capability-reference/)
