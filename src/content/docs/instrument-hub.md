---
status: current
title: Instrument Hub
description: Organize one market's data, research, observations, Learnings, validated Edges, playbooks, and trading history.
sidebar:
  order: 10
---

The Instrument Hub brings one market's data, research, knowledge, and trading history together. Start here to investigate a market, review its evidence, or decide which work needs attention.

## What this is

Open **My Instruments** and select a market. The list includes instruments with saved work. To start a market with no history, select **Add instrument** and choose its broker symbol.

Each Hub groups work for that instrument: research runs, playbooks, sessions, backtests, preparation, profiles, sentiment, and knowledge. Research starts from this Hub; the former standalone Research list redirects to Instruments.

## How it fits into Cortiq

The Hub connects research to trading without treating a research finding as an executable strategy.

| Tab | Use it to |
| --- | --- |
| **Overview** | Read the market's current summary, review activity and playbook maturity, and open supporting context. |
| **Knowledge** | Review Observations, Learnings, Hypotheses, Edges, and Playbooks. |
| **Data** | Build and manage the historical data files used by research. |

Select **Research a topic** to create a saved study draft, or the research-run count to open the instrument's research history. See [Research](/cortiq-public/research/) for launch settings, data requirements, saved answers, and continuation.

## Start with one market

1. Open **My Instruments** and select or add your instrument.
2. Open **Data** and prepare the dataset for the period and timeframe you want to study.
3. Select **Research a topic** and describe the behavior or question you want measured.
4. Review **Intent**, **Scope**, and **Questions** in the saved draft. Check measurements in Copilot, then select **Review study** → **Approve and start research**.
5. Open the saved results and inspect their sample, measurements, examples, and limitations.
6. Review a proposed Learning before saving it into **Knowledge**.

Verify the result by opening the saved Learning and following its source research and evidence. A completed study and a saved Learning are separate outcomes.

## Understand the knowledge stages

| Stage | What it represents | What it does next |
| --- | --- | --- |
| **Observation** | A particular market event, with its recognition time and supporting evidence. | Seeds research into comparable events or attaches to an existing Learning. |
| **Learning** | A saved conclusion about measured behavior under stated conditions. | Informs later analysis and, when eligible, further execution research. |
| **Hypothesis** | A testable execution family created by the qualified reaction workflow. | Compares declared execution variants against historical evidence. |
| **Edge** | A specific execution policy promoted after its required validation passes. | Supplies a validated policy for playbook creation. |
| **Playbook** | The operating rules used by a trading session. | Runs in historical replay or a forward session under its data and risk settings. |

These stages do not advance because an AI writes a persuasive explanation. Measurements, source eligibility, explicit review, and the relevant validation gates control the transitions.

### Observations are facts to investigate

Open **Knowledge** → **Observations** to inspect events awaiting processing or research. **Gather observations** searches prepared data; **Research similar observations** starts a study from a selected event.

**Process observations** checks whether each fact matches an existing Learning's setup and context. A matching outcome can agree or disagree with that Learning. Facts without a suitable match remain available for research; processing does not turn one event into a new Learning.

An outcome marked pending or unavailable is not a measured failure. Keep that distinction when reading counts or comparing evidence.

### Learnings preserve conclusions and limitations

A Learning states what the measured evidence supports. It can describe mixed behavior or no consistent response. There is no fixed occurrence minimum: read the sample size, missing outcomes, dependence, period, and limitations before deciding what the conclusion supports.

| Label | Meaning |
| --- | --- |
| **Current** | A saved conclusion is available for its recorded evidence and scope. |
| **Needs more data** | The conclusion needs further evidence or analysis before reuse. |
| **Preliminary research** | An older or incomplete record has no valid saved conclusion; it remains accessible outside the Learning count. |

The analysed sample and evidence awaiting analysis are shown separately. New evidence does not become part of the conclusion until it has been analysed.

Open a Learning to review its statement, measurements, source, and examples. Use **Gather evidence** for more comparable occurrences, **Review observations** to inspect membership, or **Ask Copilot to improve** to discuss its definition. Current Learnings use conclusion readiness rather than the former Confirmed/Rejected verdict buttons.

**Current** describes a research conclusion. It does not grant permission to trade or certify a profitable strategy.

### Check the evidence behind a claim

Expand an example to inspect its candles and timestamped events. Read contrary examples alongside supporting ones. For Topic research, statistics use the measured population even when the page retains only a bounded set of chart examples.

Where price-path measurements exist, distinguish closing returns from movement reached during the window. A median excursion is not a tested entry or exit rule. See [Research results](/cortiq-public/research/) for the measurement vocabulary.

Changing a Learning's definition or evidence can invalidate its downstream work. Affected Hypotheses show **Source Learning changed**, and affected Edges require revalidation before they can create playbooks.

### Hypotheses and Edges require a separate workflow

An eligible Learning can enter a reaction workflow that declares the measurement, execution rules, costs, and statistical safeguards. Cortiq creates the Hypothesis inside that workflow; there is no independent free-form Hypothesis or Edge creation path.

Discovery compares the declared variants. A selected policy then requires its untouched validation evidence. **Promote validated policy** is a separate explicit action after validation, rather than an automatic result of a favorable research summary.

For a **Current** full-population Topic Learning, **Investigate trading idea** continues from the complete archived population. The current workflow supports one original managed input and one successfully built current execution file. That file must preserve the original account, timeframe, historical prices, and verified causal inputs. Rebuild the selected execution file if its causal or prefix checks are missing; the completed original study stays frozen. Signals must reproduce all original setups, and a full-bar setup can enter only at a proven later open. A selection of chart examples cannot substitute.

Validation needs later, previously untouched data beyond the original exposed period and the required embargo. Splitting the already studied history does not create independent validation. Overlapping execution windows cannot qualify under the current independent-path protocol. Missing original evidence, unverified inputs, or failed qualification block the workflow.

The workflow determines eligibility; **Promote validated policy** remains a separate action that rechecks the source and validation. These instructions describe the current development desktop workflow, not installed-release or live-provider acceptance. See [Research continuation](/cortiq-public/research/#continue-the-investigation).

## Read mastery and playbook maturity

The mastery count equals the number of matching playbooks you have set to **Production**. Research volume, Learning count, and trading activity do not raise it. The header displays up to five filled stars and states the Production-playbook count.

The separate playbook pipeline uses these stages:

| Stage | Meaning |
| --- | --- |
| **Draft / Hypothesis** | A playbook still being developed. |
| **Backtested** | A playbook you have marked as having historical validation. |
| **Sessions** | A playbook you have marked as having session evidence. |
| **Production** | A playbook you have deliberately promoted for use. |

Set maturity on the playbook's detail page. Evidence does not automatically change its stage, and Production maturity is an operator designation rather than a performance guarantee.

## Group broker aliases

Use **Alternative symbols** on **Overview** to group names such as `GOLD` and `XAUUSD` under one canonical instrument.

The list collapses the group into one market, and the Hub aggregates its existing artifacts. Historical records keep their original symbol names. Confirm that aliases identify the same market before grouping them.

## Common questions

### Why does research finish without creating a Learning?

Run execution, interpretation, review, and publication are separate steps. Open the results, check unanswered questions or errors, and review a Learning proposal explicitly. Processing Observations alone does not create one.

### Why is an older Learning outside the active count?

Records without a valid saved conclusion remain under **Preliminary research**. Open the record and gather or review its evidence rather than relying on a historical verdict.

### Does a high mastery rating prove the market is safe to trade?

The rating counts your Production playbooks. It does not measure future returns, risk, or statistical confidence.

## What to read next

1. [Research](/cortiq-public/research/) — prepare data, run a study, and interpret its saved findings.
2. [Backtesting](/cortiq-public/backtesting/) — test execution rules against historical prices.
3. [Playbooks and data access policies](/cortiq-public/playbooks-and-data/) — configure the rules and inputs a session uses.

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![My Instruments list with the demo markets](/cortiq-public/images/screenshots/instrument-hub__list.png)

*Open one instrument to inspect its knowledge and research.*

![Instrument overview with knowledge and activity summaries](/cortiq-public/images/screenshots/instrument-hub__detail.png)

*Demo overview values describe saved work, not a statistical trading guarantee.*

![Instrument Knowledge tab with Active Learnings and saved research drafts](/cortiq-public/images/screenshots/instrument-hub__knowledge-ledger.png)

*Conclusion readiness and execution readiness have separate meanings.*

![Learning detail with linked observation chart and event list](/cortiq-public/images/screenshots/instrument-hub__instance-events.png)

*This preliminary demo record shows linked evidence; it is not a validated execution Edge.*

## Related

- [Session review](/cortiq-public/session-review/)
- [Charting](/cortiq-public/charting/)
- [Sessions](/cortiq-public/sessions/)
- [Glossary](/cortiq-public/glossary/)
