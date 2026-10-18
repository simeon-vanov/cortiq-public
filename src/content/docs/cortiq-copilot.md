---
title: Cortiq Copilot
description: Use the in-app assistant with page-bound context, saved conversations, research evidence, and explicit action approvals.
status: current
sidebar:
  order: 20
---

Copilot helps you inspect evidence, prepare changes, and work with Cortiq tools from a conversation inside the desktop app. Start from the relevant page so the chat has the right instrument, entity, or session context.

## What this is

Copilot is an assistant you direct. It reads Cortiq data, explains results, and uses the tools available in the current context. It can help prepare playbooks, data policies, preparation, profiles, sentiment, and research. Available actions vary by page and authority.

Conversations retain their originating context. Opening a different page doesn't silently turn a research chat into a trading chat or replace one instrument with another.

## How it fits into Cortiq

The dock works inside Cortiq without an external MCP client. Choose its provider, connection mode, model, and default thinking effort under `Settings` → `Copilot`. Provider credentials and connection setup live under `Setup` → `AI Providers`.

Copilot doesn't run an autonomous trading loop. [Sessions](/cortiq-public/sessions/) own trading lifecycles and execution authority. The standalone chart gives Copilot market-inspection and annotation tools without creating a session or allowing trades.

## Before you begin

- Configure and authenticate a connection in [AI Providers](/cortiq-public/ai-providers/).
- Select that provider and `API` or `Subscription` under `Settings` → `Copilot`, then save the model settings.
- Review [Agent permissions](/cortiq-public/agent-permissions/) for the local provider's `Auto` or `Review` mode.
- Open the instrument, saved entity, session, backtest, or chart you want to discuss.

## Use the dock

1. Select the Copilot toggle or press **Ctrl+K**.
2. Check the chat's context chip before sending your request.
3. Describe the task and the result you want. Attach a relevant [skill](/cortiq-public/skills/) explicitly if its instructions should apply.
4. Inspect the answer, evidence cards, and any proposed action. Approve or save the specific change when required.
5. Open the resulting entity or run to verify its saved state.

Use the composer model and thinking-effort selector to choose settings for subsequent turns. A change doesn't alter an active request. Skills apply through explicit attachment; Copilot doesn't choose instructions from your entire skill library on its own.

### Keep the chat on the right context

When you navigate away from a started chat's context, Copilot names the current page and the chat's original context. The composer waits for your choice:

- `Start a new chat here` creates a fresh conversation for the visible page.
- `Keep current chat` keeps the original scope and shows a warning. The context chip links back to its origin.

An empty chat follows navigation automatically. A page action such as discussing a research result can start a fresh chat for that result. Wait for the active reply to finish, or stop it, before switching through a page action.

Knowledge detail and review pages for the same saved entry share its context. A different entry or research study has its own context. Keep the original chat when continuing that discussion; start a new one when the task belongs to another entity.

### Inspect progress and stop a response

Each turn has an activity disclosure with its phase, elapsed time, tool steps, safe result summaries, and outcomes. `Waiting for AI`, `Thinking`, and `Writing response` describe observed activity; they don't expose private reasoning.

Use `Stop` to cancel an active response. Completed tool results remain in the saved turn. Stopping doesn't undo changes that already completed, so inspect the resulting entity before retrying a mutation.

Saved conversations restore their messages and recorded activity. A provider reconnection restores bounded earlier context rather than guaranteeing every old detail is in the next request. Reopening a chat also doesn't recreate every inline chart or mounted-chart annotation; return to the source evidence when needed.

## Work with research evidence

From an instrument or research page, Copilot can inspect the current instrument's managed data files, saved questions, measured results, and analysis revisions. Research context stays bound to that instrument.

Use these requests for different outcomes:

- **Choose a study:** select `Suggest next research`. The recommendation explains its question, rationale, evidence, limitations, and data needs.
- **Prepare data:** select `Prepare research file`, review the inserted composer request, and send it. File preparation includes checking the build and preview; it doesn't authorize starting a study.
- **Run the study:** use the run-ready `Start research` proposal after the files are verified. Selecting the action inserts an editable request; send it to proceed.
- **Discuss a result:** ask what its saved measurements establish, where outcomes are unavailable, and what to test next.
- **Measure another window:** request a supported analysis revision on the frozen population. The revision remains exploratory and doesn't replace the original finding.
- **Draft a Learning:** request a practical conclusion, then inspect its wording and cited evidence under `Saved Knowledge`. Select `Save Learning` explicitly to publish it.

A recommendation, draft, completed run, and saved Learning are separate outcomes. See [Research](/cortiq-public/research/) for the full workflow and measurement limitations.

## Inspect charts and saved trading data

On a mounted chart, ask Copilot to inspect the instrument and timeframe in its context, request historical candles for a named period, or annotate a level or zone. Chart annotations explain an idea; they don't place an order or establish a validated strategy.

The standalone chart remains an analytical workspace without trade execution even when Copilot draws on it. To discuss a particular session or historical backtest, open that source first and start a chat there. Tools and execution boundaries differ between those contexts.

For saved trading history, ask for a concrete period and comparison, such as “Compare my closed-trade results by day this week.” Copilot can use recorded trade analytics and inline charts where those tools are available. Check the included accounts, time range, and source before interpreting a total.

## Review changes and approvals

Copilot actions don't all share one approval rule. Some validated operations run directly, some require an action card, and some produce an unsaved editor proposal or a feature-specific draft. Playbook management, trade actions, session controls, settings changes, observation deletion, and Learning maintenance include protected operations.

When a card asks for approval, review its actual scope before accepting. Denial, cancellation, or expiry denies that gated action. A saved capability grant doesn't approve a trade or publish Knowledge.

The local provider's `Auto` mode removes routine provider prompts for enabled local access; it isn't a web-only setting or a folder sandbox. `Review` exposes provider permission requests subject to existing grants and the request policy. Cortiq's risk, validation, and execution-authority checks apply in both modes. See [Agent permissions](/cortiq-public/agent-permissions/) for the distinct boundaries.

## Verify the outcome

Open the created or updated entity, saved research result, or execution record. Confirm that its values and status match your request. An assistant message saying “done,” a rendered proposal, or an accepted approval card doesn't replace that saved result.

If a turn fails, inspect its visible failure and completed activity before retrying. For a rejected or unavailable model, refresh the available models and verify the selected provider connection. For an unavailable research input, correct the selected file or dates rather than treating missing evidence as a finding.

## What to read next

1. [Agent permissions](/cortiq-public/agent-permissions/) — distinguish provider access, action approvals, and execution authority.
2. [Research](/cortiq-public/research/) — prepare inputs, inspect measured findings, and save a Learning.
3. [AI Providers](/cortiq-public/ai-providers/) — configure the connection used by Copilot.

## Related

- [Instrument Hub](/cortiq-public/instrument-hub/)
- [Skills](/cortiq-public/skills/)
- [Backtesting](/cortiq-public/backtesting/)
- [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/)
- [Activity](/cortiq-public/system-messages/)
