---
title: Playbooks & data access policies
description: Understand how playbook rules, data access policies, and verified inputs work together in Cortiq sessions and backtests.
status: current
sidebar:
  order: 30
---

Playbooks define the rules Cortiq applies to a trading decision. Data access policies define the market inputs it can use. This page explains how those choices fit together and what compatibility checks establish.

## What this is

A **playbook** describes setup, entry, invalidation, risk, and management rules. Its saved default execution policy supplies the data scope for those rules.

A **data access policy** defines allowed timeframes, candle-history limits, exact indicator selections, and additional context such as calendar, account, risk, and trade-history inputs. You manage reusable policies under `Tools` → `Data Access Policies`.

Older documentation calls these objects data packages. The current application uses `Data Access Policies`; the links to the older documentation pages remain available.

The distinction matters when you investigate a decision. A rule can be clear while its required data is missing. A policy can permit the right data while the current source fails to deliver it. Cortiq checks configuration and actual inputs separately.

## How it fits into Cortiq

| Item | Its role | Where you work on it |
| --- | --- | --- |
| Playbook | Defines the trading rules and required supporting outputs. | `Preparation` → `My Playbooks` |
| Execution policy | Defines access to the inputs used for assessment, entry, and management. | The playbook's `Execution policy` card, or `Tools` → `Data Access Policies` |
| Indicator selection | Identifies the calculation, version, timeframe, parameters, and outputs. | The policy's `Indicators` section |
| Preparation package | Defines how a preparation report is generated, with its own policy and recipe. | The `Preparation` page |
| Session or backtest | Applies the selected playbooks and actual effective policy to current or replay evidence. | [Sessions](/cortiq-public/sessions/) or [Backtesting](/cortiq-public/backtesting/) |

A saved policy can serve several playbooks and sessions. New session and backtest setup can inherit the selected playbooks' shared saved default. Conflicting defaults require an explicit selection; backtests label deliberate overrides. Existing runs retain their selected playbook versions.

## How to use it

### Author the rules and execution policy together

1. Open or create a playbook in `My Playbooks`.
2. Write the strategy rules and identify the inputs they actually require.
3. Select a saved default data access policy, or use `Generate execution policy with AI` in the `Execution policy` card.
4. Inspect the proposed candle windows, indicator selections, and findings.
5. Select `Use this draft` to copy a generated proposal into the form.
6. Select `Validate execution compatibility`, resolve confirmed configuration gaps, and save the playbook.

A generated policy is a proposal. `Use this draft` doesn't save it. `Save Playbook` persists the reviewed rules and policy together. If you're editing a selected saved policy, the save updates that policy rather than creating another same-name policy.

Generation needs precise strategy choices. For example, a rule that uses `ATR(14)` on M15 identifies an indicator, period, and timeframe. A rule that only says “use ATR” leaves the period unresolved; policy generation doesn't choose it for you.

`Fix with AI` opens or continues Copilot work on the editor draft. Review the changes before saving. `Save as draft` retains unfinished work and its findings; it doesn't establish execution readiness.

### Read compatibility and runtime status separately

`Validate execution compatibility` checks the rules against the selected policy. Opening a playbook reads a matching saved result without starting a new AI review. Explicit validation requests a fresh review and can use provider allowance.

The card groups missing configuration, clarification questions, and validation failures. Expand `View full policy configuration` to inspect exact candle counts and indicator settings. A failed or incomplete AI review doesn't prove compatibility and doesn't mean the strategy itself is wrong.

Start and Resume check the actual effective policy against the selected playbook versions. Confirmed missing required inputs and invalid configuration block launch. Clarifications and incomplete reviews remain visible warnings. During execution, Cortiq checks the delivered data again at the current live or replay time.

`Inputs available` describes checked inputs. `Waiting for signal` additionally requires evidence that an entry condition remains unmet. Neither status promises that a trade will occur or be profitable.

### Use Cortiq indicators

Cortiq calculates built-in indicators from MT5 OHLCV candles. It doesn't import arbitrary custom indicator buffers from your MT5 terminal.

Select an exact catalogue version and configure its timeframe, parameters, outputs, `Required` or `Optional` status, and whether provisional values are allowed. Saved selections don't automatically switch to a newer version.

Open `Tools` → `Indicators` to inspect an indicator's explanation, calculation requirements, outputs, and trading guidance. Prompt-presentation settings belong to that exact version and affect every policy referencing it. They change how values reach the AI, rather than the underlying calculation or chart series.

### Keep preparation generation separate

A preparation package has its own recipe and data policy. Its generation review checks the analysis prompts, custom instructions, and linked skills against those generation inputs.

Execution consumes the resulting report when the playbook requires it. Cortiq checks the report's instrument, analysis type, effective time, certified inputs, and expiry. It doesn't automatically copy every raw input used to create the report into the execution policy.

For example, using an H4 preparation bias doesn't alone require H4 execution candles. A trading rule that directly evaluates H4 candles does require those candles in the execution policy. See [Supporting context](/cortiq-public/trading-cycle/supporting-context/) for report selection and validity.

## Understand missing inputs

A policy setting grants access; it doesn't prove successful delivery. Required candles need complete closed history at the decision cutoff. Required indicators need the exact calculation and usable output. Required reports need valid coverage and expiry. Calendar, account, history, and risk inputs also need verified delivery when the rules require them.

Missing entry inputs block new-entry decisions. Management has its own input requirements; available entry data doesn't automatically permit AI management. Protective exposure controls remain available. A blocked replay pauses with a reason and saved checkpoint rather than advancing past the missing evidence.

Inspect `Input checks and data requests` in the decision or session evidence for the required input, what arrived, and the next action. Correct the policy when access is insufficient; correct the source or report coverage when delivery is missing.

## What to read next

1. [Playbook design guide](/cortiq-public/trading-cycle/playbook-design/) — write rules that identify their required evidence.
2. [Data access policy design guide](/cortiq-public/trading-cycle/data-package-design/) — choose and validate the input scope.
3. [Data access policies](/cortiq-public/trading-cycle/entities/data-packages/) — look up policy fields and status meanings.

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Playbook editor with identity and strategy sections](/cortiq-public/images/screenshots/playbooks-and-data__playbook-editor.png)

*The sections organize authored rules; they are not four sequential runtime calls.*

![Data Access Policies list with saved reusable policies](/cortiq-public/images/screenshots/playbooks-and-data__policy-list.png)

*Select and review the policy appropriate to the workflow inputs.*

## Related

- [Backtesting](/cortiq-public/backtesting/)
- [Sessions](/cortiq-public/sessions/)
- [Supporting context](/cortiq-public/trading-cycle/supporting-context/)
- [Glossary](/cortiq-public/glossary/)
