---
title: Data access policies
description: Reference for policy timeframes, indicator bindings, context settings, compatibility findings, and runtime input status.
status: current
sidebar:
  order: 20
---

A data access policy defines the market inputs Cortiq is allowed to use. This reference describes its settings, shared-policy behaviour, and the distinction between configuration compatibility and available evidence.

## What this is

Policies contain timeframe and history limits, exact Cortiq indicator selections, context inclusion settings, and an optional token budget. The desktop lists them under `Tools` → `Data Access Policies`.

Older pages and links call these objects data packages. A policy is reusable configuration; it isn't a saved market-data file or a preparation report.

## How it fits into Cortiq

A playbook supplies strategy rules and can save a default execution policy. Session and backtest setup select the actual policy used for execution. Start and Resume check that policy against the selected playbook versions, including deliberate overrides.

Preparation packages use their own data policies for generation. Execution checks the resulting report when required; it doesn't inherit the report producer's raw candle and indicator lookbacks. See [Supporting context](/cortiq-public/trading-cycle/supporting-context/).

## How to inspect a policy

1. Open `Tools` → `Data Access Policies`.
2. Select a saved policy to see its timeframes, indicators, context settings, and session usage.
3. Select `Edit` to change it, `Duplicate` for an independent copy, `Preview Tokens` for size estimates, or `Test Data` to inspect a live payload.

For a playbook's effective policy, open its `Execution policy` card and expand `View full policy configuration`. Detail view shows saved setup; the editor can contain an unsaved draft. Follow the [design guide](/cortiq-public/trading-cycle/data-package-design/) to author and validate changes.

## Reference

### Identity and sharing

| Setting or relationship | Meaning |
| --- | --- |
| `Name` and `Description` | Identify the policy and explain its intended input scope. Duplicate names can appear with IDs in selection lists. |
| Saved default | A playbook's proposed execution policy for new setup. Shared defaults can be inherited; conflicting defaults require an explicit choice. |
| Override | A deliberate alternative selected for a run. Compatibility checks use this actual policy, rather than the playbook's default. |
| Shared policy | One saved policy can serve several playbooks and sessions. Editing it is checked against affected current playbooks and exact session/backtest selections. |
| Duplicate | A separate policy you can edit and select independently. Duplicating doesn't switch existing consumers to it. |

A generated or Copilot-repaired policy remains an editor proposal until saved. Saving from a playbook updates the selected saved policy in place, or creates a policy when none is selected. Incompatible shared-policy changes can't bypass validation through `Save as draft`.

### Candle windows

| Setting | Meaning |
| --- | --- |
| `TF` / `Timeframe` | An allowed candle timeframe. The session or replay remains locked to its instrument. |
| `Candle Count` | The configured history size. Requirements must also fit supported collection limits and evidence budgets. |
| `Tier` | Exactly one timeframe must be `Primary`; the others are `Secondary`. Primary supplies scheduling context. Every permitted timeframe contributes its configured rolling numeric history to autonomous assessments. |
| `Include Screenshot` | An optional visual-context setting in forms and workflows that expose it. It doesn't supply required numeric evidence. |
| `Legacy feed health timeframe` | A feed-recovery fallback. It doesn't schedule analysis or trigger AI cycles. |

Runtime checks evaluate complete closed windows at the decision cutoff. A configured history size doesn't prove that the source returned enough usable candles. Forming candles don't satisfy a closed-candle requirement.

Continuing assessments receive the full configured history even when no new candle has closed. The `Initial`, `Stream`, and `Analysis` choices retained in `Test Data` are preview vocabulary, not the current autonomous delivery contract.

### Indicator selections

Cortiq calculates its built-in indicators locally from MT5 OHLCV data. The policy doesn't read arbitrary terminal custom-indicator buffers.

| Selection | Meaning |
| --- | --- |
| Exact indicator version | The published calculation selected from Cortiq's catalogue. Existing selections don't automatically move to a newer version. |
| `Timeframe` | The policy timeframe used for its source candles. |
| `Parameters` | The calculation settings, such as an explicitly chosen period. These affect history and warm-up requirements. |
| `Outputs` | The named values the policy makes available. At least one output must be selected. |
| `Requirement` | `Required` inputs must be usable for the relevant decision; `Optional` failures remain warnings. |
| `Allow provisional values` | Permits provisional output where supported. It doesn't satisfy a rule requiring confirmed values. |

A binding identifies version, timeframe, parameters, outputs, requirement, and finality together. A similarly named indicator or a different output isn't a substitute. Missing history and a failed latest calculation remain visible; Cortiq doesn't present an older confirmed value as a successful latest result.

Open `Tools` → `Indicators` for calculation explanations, lookback and warm-up needs, parameters, outputs, and usage guidance. Indicator-specific trading guidance and prompt presentation are shared settings for that exact version. Changing them affects all referencing policies' future prompts without changing the raw calculations or chart series.

### Additional context and budget

| Setting | Meaning |
| --- | --- |
| `Account Info` | Permits account context such as balance, equity, and margin where the workflow supplies it. |
| `Risk Metrics` | Permits risk context. Replay values describe the simulation rather than reconstructed historical account state. |
| `Economic News` | Permits calendar context, with a days-ahead horizon and importance filter. It doesn't generate a historical sentiment report. |
| `Trade History` | Permits recent trade context, with a configured count. Verified empty history is distinct from failed delivery. |
| `Max Token Budget` | An optional estimated input bound. It doesn't guarantee a final provider bill or permit required evidence to be discarded. |

Inclusion settings grant access. A strategy requiring that context still needs verified causal delivery. Missing or unverified required context isn't made available by switching its flag on.

### Compatibility findings

`Validate execution compatibility` checks the current playbook rules and policy. `Validate compatibility with connected playbooks` checks a policy edit's consumers. Explicit validation requests a fresh review; merely opening a saved card reads matching stored findings.

| Finding | Meaning |
| --- | --- |
| `Missing configuration` | The rules require an input the policy doesn't cover. |
| `Needs clarification` | A required choice, identity, or timing condition couldn't be established from the rules. |
| `Validation issue` | A review attempt failed or returned unusable output. Compatibility hasn't been confirmed. |
| Covered requirements | Configuration covers the reviewed dependency. This doesn't prove current delivery. |

`Generate execution policy with AI` proposes concrete settings with findings. `Use this draft` copies them into the editor; `Save Playbook` persists the reviewed pair. `Fix with AI` proposes repairs to the unsaved rules and policy. Material edits require another matching review.

Normal playbook saves require a complete compatible review. `Save as draft` retains unfinished authoring. At Start, Resume, and runtime, confirmed missing requirements or invalid configuration block; clarification and incomplete-review warnings remain visible without being treated as proof of compatibility.

### Runtime input states

Runtime evidence appears in `Input checks and data requests`, separately from the configuration review.

| State | Meaning |
| --- | --- |
| `Needs setup` | Configuration or an evidence budget prevents the required input scope. |
| `Needs review` | The current rules and policy lack a matching confirmed review. |
| `Required input missing` | A required input isn't available with usable evidence at the checked cutoff. |
| `Evidence too old` | Supplied evidence doesn't meet the required timing or validity window. |
| `Inputs available` | Required inputs passed the checks for the applicable decision role. |
| `Waiting for signal` | Inputs are available and checked evidence shows an entry condition remains unmet. |

Assessment, entry, and management can require different inputs. Missing required entry evidence blocks new entries; management needs its own valid evidence. Protective exposure controls remain available. A blocked replay pauses at its saved cutoff and records the reason.

Preparation admission checks the report's instrument, analysis type, effective time, producer certification, and expiry. The preparation package's generation review and input certification remain separate from execution compatibility.

## What to read next

1. [Data access policy design guide](/cortiq-public/trading-cycle/data-package-design/) — create and validate a policy.
2. [Playbooks](/cortiq-public/trading-cycle/entities/playbooks/) — understand the strategy object that uses it.
3. [Backtesting](/cortiq-public/backtesting/) — inspect historical coverage and replay input blockers.

## Related

- [Playbooks & data access policies](/cortiq-public/playbooks-and-data/)
- [Preparation packages](/cortiq-public/trading-cycle/entities/preparation-packages/)
- [Sessions](/cortiq-public/sessions/)
- [Glossary](/cortiq-public/glossary/)
