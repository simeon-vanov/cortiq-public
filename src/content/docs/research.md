---
title: Research
description: Investigate one market with managed data files, measured research questions, saved results, and explicitly reviewed Learnings.
status: current
sidebar:
  order: 10
---

Use research to investigate how one market behaves, inspect the historical evidence, and decide what to save as a Learning. This guide takes you from a prepared dataset to reviewed findings.

## What this is

Research turns a question into observable setup rules, finds comparable historical occurrences, and measures what happens afterward. Cortiq keeps your original intent alongside the questions derived from it. Measurements and AI explanations are saved separately, so an explanation failure doesn't erase completed measurements.

A study describes the selected instrument, files, dates, and setup. It doesn't place trades. Mixed responses, a narrow sample, or no consistent response are useful findings when their scope and limitations are clear.

## How it fits into Cortiq

Start from the market's [Instrument Hub](/cortiq-public/instrument-hub/). Its `Data` tab holds reusable research datasets; its `Knowledge` tab starts research and holds saved Observations and Learnings. The research-run count opens `All research` for that instrument. Select a run to reopen its results.

Research establishes what happened around a defined condition. [Backtesting](/cortiq-public/backtesting/) evaluates a playbook through historical trading decisions. A saved Learning supplies evidence for further work; it doesn't establish an executable Edge or authorize a session.

## Before you begin

- Configure the `Research & Knowledge` route in [AI Providers](/cortiq-public/ai-providers/).
- Connect an [MT5 account](/cortiq-public/mt5-integration/) with history for the instrument and period you need to build a dataset.
- Verify your license before building files or launching research.
- Prepare at least one built managed data file for the instrument, with the columns and dates your question needs.

## Prepare a managed data file

A managed file is a reusable dataset definition and its built Parquet data. Reuse a suitable built file across studies; rebuild it when its definition, script, or required coverage changes.

1. Open the instrument's `Data` tab and select `Create your first file`, or edit an existing file.
2. Set its name, timeframe, MT5 account, and history period.
3. Choose candle columns and any Cortiq indicators. For custom columns, describe the calculation, source columns, when the value becomes available, and required earlier history.
4. Select `Generate script with AI`, or use the default template for base and indicator columns. Custom calculations need a script that implements them. Save the file.
5. Select `Build parquet`. Inspect the build message, preview rows, and coverage before starting research. Use the data viewer when the first rows aren't enough to check a column.

Cortiq computes selected indicator columns locally. The build script consumes those values; it must not recalculate the indicators. Build checks also test whether a custom value depends on later candles. A column name or plausible preview alone doesn't establish that it was available at setup time.

Saving changes marks the file `NeedsBuild`. A failed rebuild preserves the previous valid build, but it doesn't make the edited definition ready. Rebuild successfully before using the changed file. To correct empty or incorrect columns, open `Edit` and use `Fix script with AI` with a concrete description of the problem.

## Start research

### Choose the starting point

On the instrument's `Knowledge` tab, choose the action that matches your goal:

| Action | Use it when |
| --- | --- |
| `Research a topic` | You have a behavior, condition, or market period to investigate. |
| `Gather observations` | You want to find factual occurrences in the selected history, with an optional research focus. |
| `Research similar observations` | You want to build a study from one saved Observation. |
| `Gather evidence` | You want more comparable evidence for a saved Learning. |

An Observation or Learning supplies context. It doesn't count as a completed study or remove the need for measured evidence.

### Set the scope

1. Select the data files to read and choose a `Primary data file` from that selection. Topic research preserves each selected file's own timeframe; selecting several files doesn't merge their rows into one timeframe.
2. Review `From` and `To`. Defaults use the builds' saved coverage. When files overlap, the default is their common period. Disjoint coverage produces a wider span and a warning; narrow it when your question requires a shared period.
3. Set `Number of questions`, from **1 to 20**. The default is **five** unless you've changed the preference. This is a target for distinct questions and a maximum, with an explanation for any shortfall. Several response horizons for one setup aren't separate questions.
4. Enter a concrete `Research intent`, or the optional focus for gathering observations. For example: “Study H1 closes above the previous day's high. Compare subsequent movement over four and twelve bars, including differences by breakout size.”
5. If your question compares market sessions, review the saved session definitions. Select `Add a market-session breakdown` when you want that comparison explicitly. Session times use each market's named time zone and follow its daylight-saving changes.
6. Optionally add a title, then select `Start`.

Launch checks every selected file's instrument, current build, readable data, and requested coverage. A rejection identifies the file and required correction. Missing inputs or a period with no available data remain explicit; Cortiq doesn't fill missing candles or invent a response.

For help choosing a study, use `Suggest next research` in Copilot. A recommendation separates `Prepare research file` from `Start research`. Selecting an action puts an editable request in the composer; review and send it to proceed. Preparing a file doesn't authorize a research run.

### Build on an earlier study

For Topic research, `Build on previous research` adds saved studies as context without changing the selected data files. Review the earlier questions, results, and limitations before starting.

Under `Advanced research settings`, `Reuse an earlier setup method` selects a saved script that finds matching candles. Exact reuse requires compatible setup rules, data, dates, and retained checks. Cortiq executes and checks the method again; otherwise it authors a new method. Earlier evidence doesn't become new evidence through reuse.

## Follow progress and recover interrupted work

The question plan separates the target, planned questions, answered questions, unavailable questions, failures, and pending work. A measured question isn't counted as answered until its AI answer passes validation. Each question has a separate AI context, and successful saved answers survive a failure in another question. A final synthesis combines the available answers.

For Topic and Gather research, use the action that matches the work you want to preserve:

| Action | Effect |
| --- | --- |
| `Pause` | Stops at a safe stage boundary. A current provider response can finish and save first. |
| `Continue` | Resumes the same saved study with its original intent, question target, period, frozen inputs, and completed stages. An unfinished provider response can need another call. |
| `Re-run` | Creates a new study. Review its scope and question target before starting. |
| `Retry explanation` | Requests another AI explanation of retained measurements without repeating the measurements. |
| `Fix & continue` / `Retry failed checks` | Uses the saved failure and the recovery action offered for that stage. |

After reopening Cortiq, interrupted Topic and Gather runs wait in `Paused` for `Continue`. Startup doesn't automatically restart AI calls. Closing the app stops local execution; continuing later uses the retained checkpoints.

## Read the saved results

Completed Topic studies open on `Results`; other execution states open on `Research questions`. Your original intent remains visible across the five views:

| View | What to inspect |
| --- | --- |
| `Results` | Saved numeric outcomes, response distributions, optional AI interpretation, limitations, and the review decision. |
| `Research questions` | One question at a time, its setup-selection rules, measured response, horizon choices, and comparison with other questions. |
| `Saved Knowledge` | Copilot Learning drafts and links to Learnings explicitly saved from this study. |
| `Research map` | Re-run ancestry, cited earlier studies, later follow-ups, and associated Learning drafts or saved Learnings. |
| `Method & audit` | Frozen scope, prompts, coverage, retained setup-finder scripts, and technical diagnostics. |

### Understand the numbers

Read the setup, horizon, units, and available count before interpreting a chart.

- **Closing change** measures the final close in the chosen horizon relative to the setup close. The middle half describes the distribution of those endpoint changes.
- **Upward and downward travel** measure the highest high and lowest low during the following bars. They describe movement within the window, rather than its final close.
- **Setup ATR** scales movement by volatility at the setup. Missing or invalid normalization remains unavailable; it isn't inferred from later candles.
- **Reach counts** show how often movement reaches a stated distance, including windows that reach both sides. They don't establish which side came first.
- **Observed-bar horizons** count available market bars across validated recurring closures. They aren't always the same as elapsed clock time.

Newer price-path studies also retain movement before each first extreme and the limits imposed by candle-level ordering. Any displayed reward/risk potential describes historical paths. It isn't trade expectancy, an assumed entry, or proof that a target beats a stop.

Statistics use the complete eligible measured population. Browsable examples are a bounded selection, and missing outcome windows stay separate from measured responses. Counts across questions can overlap; adding them doesn't produce a count of independent trades. Review categorical groups and time-period variation alongside the pooled result.

Distributions retain extreme values in labeled tails. A small number of examples or a concentrated central chart doesn't establish that unusual outcomes are absent. Older studies retain their saved measurements and show unavailable fields where newer evidence wasn't recorded.

### Separate execution from review

`Completed` means execution finished. A run can retain technical or explanation issues, and the Hub can show `Completed with issues`. Read each question's coverage and errors before treating the original request as answered.

A completed Topic study with measured findings has a separate review state. Choose one of the actions under `What's next`:

- `Draft a Learning with Copilot` to prepare a conclusion for explicit review and saving.
- `Start follow-up research` to launch a new study that references this one.
- `Keep as research` to record that decision without publishing Knowledge. `Reopen review` makes it actionable again.

Opening Copilot or cancelling a follow-up dialog doesn't resolve the review. Saving a Learning, starting a referenced successor study, or choosing `Keep as research` does.

## Continue the investigation

Use `Discuss with AI` to inspect a saved finding with Copilot. Ask about its setup, missing outcomes, variation, or what the evidence supports testing next.

To add supported response windows to the same frozen population, use `Continue measuring saved setups` in `Research questions`, or ask Copilot for an analysis revision. Revisions remain saved alongside the original analysis. They're exploratory because the earlier outcomes have already been seen; they don't repeat discovery or create a Learning.

To change the question, files, or period, use `Start follow-up research`. The dialog initially selects the source study's files and primary file when available. Review those selections and dates; unavailable files require explicit replacements. Referencing a study doesn't turn an overlapping test into independent validation.

## Save a Learning

Topic completion retains research evidence without automatically publishing Observations or a Learning. A Learning is a reviewed, plain-language conclusion backed by the saved measurements.

1. Select `Draft a Learning with Copilot` and discuss the practical takeaway.
2. Open `Saved Knowledge` and inspect the draft wording, citations, measurements, scope, and limitations. Edit or reject it if the evidence doesn't support the claim.
3. Select `Save Learning` when the draft is eligible and represents the conclusion you want to retain.
4. Open the saved Learning and its evidence from the resulting link.

There is no fixed occurrence minimum for Learning review. Sample size, unavailable responses, overlapping evidence, and complete-population analysis determine how narrow the statement needs to be. Mixed directions or no consistent response can support a Learning; failed analysis or a proposed expectation cannot substitute for one.

Saving rechecks the draft and its primary evidence. Exploratory analysis revisions don't replace that primary publication evidence. A saved Learning still needs separate downstream qualification before it can support an executable trading policy.

## Verify the outcome

Reopen the run from the instrument's research log. Confirm that the saved questions, measurements, limitations, and review decision match the work you completed. A saved Learning appears under `Saved Knowledge` and opens with its evidence; an unsaved draft remains a proposal.

## Common questions

**Why does a built file need rebuilding before launch?**
An edited definition or script no longer matches the published build, required custom columns need current build checks, or the requested dates exceed its coverage. Follow the file-specific launch message, rebuild, and inspect the preview.

**Why are measurements visible but the explanation failed?**
Measurement and interpretation are separate stages. Read the saved numbers and limitations, then use `Retry explanation` for another provider request. Successful question answers remain saved.

**Can research trade on my account?**
No. Research has a read-only tool surface. Generated data and setup-finder scripts run in a network-denied sandbox; the host supplies the historical data.

## What to read next

1. [Instrument Hub](/cortiq-public/instrument-hub/) — find your datasets, research history, and saved Knowledge for one market.
2. [Backtesting](/cortiq-public/backtesting/) — evaluate a playbook through historical execution.
3. [Playbooks & data](/cortiq-public/playbooks-and-data/) — understand the rules and data a trading session uses.

## Related

- [AI Providers](/cortiq-public/ai-providers/)
- [MT5 integration](/cortiq-public/mt5-integration/)
- [Session review](/cortiq-public/session-review/)
- [Glossary](/cortiq-public/glossary/)
