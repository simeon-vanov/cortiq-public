---
title: Data access policy design guide
description: Choose candle windows, exact Cortiq indicators, and context permissions, then validate a policy against the playbook that uses it.
status: current
sidebar:
  order: 50
---

Design a data access policy around the decisions your playbook makes. This guide shows how to choose its inputs, generate a draft, and check both configuration and delivered evidence.

## What this is

A data access policy sets the allowed market-data scope: timeframes, history limits, exact indicator selections, and additional context. It doesn't define the trading strategy or establish that current data has arrived.

Start with the playbook's assessment, entry, and management needs. Add enough evidence for each role, then keep optional context within the available budget. Extra inputs don't repair an unspecified strategy rule.

## How it fits into Cortiq

The playbook's `Execution policy` card lets you review and edit the rules and policy together. `Tools` → `Data Access Policies` manages reusable saved policies independently.

Preparation generation uses a separate policy and recipe. Its output can become an execution input, but its raw research lookbacks don't automatically become execution requirements. See [Playbooks & data access policies](/cortiq-public/playbooks-and-data/) for the distinction.

## Before you begin

- Write the playbook rules you want to support, including indicator parameters and required report types.
- Configure an AI connection for explicit compatibility reviews or AI policy generation.
- Connect the default MT5 account if you want to inspect a live payload with `Test Data`.
- Identify other playbooks or runs using a saved policy before editing it. Use a separate policy when you want an independent experiment.

## How to use it

### 1. Identify each required input

For every rule, identify the timeframe, history, calculation, and decision role it needs.

| Rule dependency | What the policy needs to cover |
| --- | --- |
| Closed-candle structure | The named timeframe and sufficient completed candles. |
| An indicator condition | The exact indicator version, parameters, timeframe, outputs, and confirmation requirement. |
| A preparation conclusion | The required report type and valid report coverage; its generation inputs stay with the preparation package. |
| Calendar, account, risk, or trade-history context | The corresponding inclusion setting and verified runtime delivery. |

Keep genuine strategy choices in the rules. Specify a required indicator period or explicit freshness duration where the strategy depends on one. Don't treat the AI's proposed value as an answer to an unresolved choice.

### 2. Create or generate the policy

To generate a policy from the playbook:

1. Open the playbook editor's `Execution policy` card.
2. Select `Generate execution policy with AI`.
3. Inspect the proposal and its compatibility findings.
4. Select `Use this draft` to place it in the editable form.
5. Adjust the policy and rules, then select `Validate execution compatibility`.
6. Select `Save Playbook` to persist the reviewed pair.

Generation resolves concrete candle and indicator requirements against Cortiq's catalogue. It leaves unsupported inputs and ambiguous strategy choices as findings. Selecting `Use this draft` doesn't persist the proposal.

To start independently, open `Tools` → `Data Access Policies` and select `New Data Access Policy` or `From Template`. Name the policy, configure its inputs, and create it. A standalone policy without connected playbooks uses configuration checks; it doesn't need an AI model merely to save.

### 3. Choose timeframes and history

Set exactly one timeframe to `Primary` and the others to `Secondary`. Give each timeframe a reason to exist: structural context, setup evidence, or entry confirmation.

Set `Candle Count` to cover both the rule's lookback and the indicator's calculation requirements. Indicator details show lookback and warm-up needs; parameter choices can change those needs. A larger number isn't useful if the strategy never uses that history.

Every autonomous assessment receives the configured rolling numeric history for every permitted timeframe, including unchanged history when no new candle has closed. `Primary` supplies scheduling context; `Secondary` does not mean that timeframe disappears from continuing assessments. Accepted watches and runtime conditions govern meaningful wakes. `Legacy feed health timeframe` is a feed-recovery fallback.

Required history beyond the supported collection limit or evidence budget is a configuration issue. Current compatibility checks reject requirements beyond the collector's 500-candle ceiling. Increasing a policy field doesn't create unavailable history or bypass that boundary.

### 4. Bind exact Cortiq indicators

1. Add the indicator's timeframe to the policy.
2. Select `Add indicator`.
3. Find the calculation in the catalogue and inspect its purpose and outputs.
4. Set the timeframe and parameters.
5. Choose the outputs the rules use.
6. Select `Required` or `Optional`, and choose whether to `Allow provisional values`.
7. Select `Add indicator` or `Save indicator` in the dialog.

Use `Required` for an input the rule cannot evaluate without. A failed required calculation blocks that use; an optional failure remains a visible warning. Provisional values describe a calculation that can still change, so they don't satisfy a rule requiring confirmed closed-candle evidence.

Cortiq computes these values from MT5 candles using its built-in catalogue. Arbitrary custom MT5 indicator buffers aren't policy inputs. Stored selections retain the exact version, parameters, and outputs instead of automatically adopting a later version.

Indicator details also hold shared AI presentation settings, such as inline values, a separate indicator section, duplicate removal, and trading guidance. Changing those settings affects every policy using that exact version. It doesn't change raw calculations, chart values, or research data.

### 5. Choose context and budget

Enable account, risk, economic news, and trade-history inputs when the rules need them. Set the relevant news horizon, importance filter, or history count. An enabled flag permits collection; runtime checks still need evidence that the requested context was delivered.

Set a token budget when you need an additional input bound. Required data cannot be silently removed to make a decision fit. If required evidence exceeds the allowed packet size, Cortiq reports `Needs setup`; reduce unnecessary context or revise the required scope.

Some policy forms expose per-timeframe screenshot settings. Treat screenshots as optional visual context in workflows that support them. They don't replace required candle or indicator evidence or import the terminal's custom indicator calculations.

### 6. Validate and inspect the result

Select `Validate execution compatibility` in the playbook, or `Validate compatibility with connected playbooks` in the policy editor. Inspect missing configuration, unresolved rules, and validation failures separately.

A saved shared-policy edit is checked against connected current playbooks and selected immutable versions in sessions and backtests. Saving a draft doesn't bypass an incompatible shared-policy change. If the changes are for an experiment, duplicate the policy and deliberately select that copy.

Use `Fix with AI` for proposed editor repairs. Its changes remain unsaved until you save the playbook. Material manual edits invalidate the old review, so validate the final rules and policy together.

## Verify the policy

Reopen the saved playbook's `Execution policy` card. Check that it shows the intended saved policy and matching review, then expand `View full policy configuration` for counts, versions, parameters, outputs, and limits. Opening the card doesn't start another AI review.

For a collection check, open the saved policy and select `Test Data`. Choose a message tier and symbol, then select `Run Test`. The dialog displays the live payload or an explicit error using the default MT5 account. `Preview Tokens` estimates size; neither action proves historical coverage or validates a trade signal.

`Initial`, `Stream`, and `Analysis` in `Test Data` describe that collection preview. They don't describe the current autonomous assessment's rolling-history delivery.

When a session or backtest runs, inspect `Input checks and data requests` for what actually arrived at its cutoff. Successful configuration review and successful current delivery are separate checks. Required report coverage and expiry still apply, especially in historical replay.

## What to read next

1. [Data access policies](/cortiq-public/trading-cycle/entities/data-packages/) — field and status reference.
2. [Playbook design guide](/cortiq-public/trading-cycle/playbook-design/) — define rules and evidence requirements.
3. [Backtesting](/cortiq-public/backtesting/) — test the selected policy over a historical period.

## Related

- [Playbooks & data access policies](/cortiq-public/playbooks-and-data/)
- [Supporting context](/cortiq-public/trading-cycle/supporting-context/)
- [MetaTrader 5 integration](/cortiq-public/mt5-integration/)
- [Glossary](/cortiq-public/glossary/)
