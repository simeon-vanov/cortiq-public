---
status: current
title: Instrument Hub
description: Organize one market's Learnings, Playbooks, source evidence, research, and trading history.
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
| **Knowledge** | Browse Observations, Learnings and Playbooks, or gather observations separately. |
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

## Use Learnings and Playbooks

**Learnings** save conclusions about measured market behavior. **Playbooks** contain the trading rules you develop and test. **Observations** keeps the facts behind your research and reviews visible alongside them; you can browse each view independently.

Research questions and trials remain supporting evidence. A Learning may stay useful without becoming a Playbook, and a Playbook may start independently.

### Observations are facts to investigate

Open **Knowledge** → **Observations** to browse all saved facts for the instrument, including review and research observations already linked to a Learning. Filter by source, check each row's processing status, and open its evidence details. Linked observations stay visible after processing.

**Gather observations** searches prepared data separately; **Research similar observations** starts a study from a selected event. Processing and cleanup actions continue to use the existing work queue rather than the full browse list.

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

A saved Playbook version keeps links to the exact Learning conclusions used to draft it. Sources show **Current**, **Changed** or **Unavailable**. Changing a Learning does not rewrite old Playbook rules or silently refresh their sources; changed or missing evidence cannot support a current validation claim.

### Draft a Playbook from a Learning

1. Open a **Current** Learning and select **Draft Playbook**.
2. Develop the rules in the recoverable editor. A Playbook may use one or several current conclusions from the same instrument; only source links are retained.
3. Save a numbered **Draft** version before starting strategy research.
4. Open the Playbook and select the saved version you want to inspect or test.

To start independently, select **New Playbook**. Saving a strategy and validating it are separate actions.

### Test the selected saved version

**Backtest this version** opens replay setup for those exact rules. Review its input policy and risk settings before starting. Later edits stay on another version; they cannot change what the saved run tested.

**Research this strategy** compares declared execution candidates using qualified Learning evidence, costs and statistical safeguards. Changed selected rules become a new saved version before untouched Validation is revealed. The result stays with that exact version and policy. **Publish validation** is a separate action that rechecks the source and proof.

For a Current full-population Topic Learning, research uses the complete archived population. The current workflow supports one original managed input and one successfully built current execution file. It must preserve original prices, account, timeframe and verified causal inputs; rebuild the selected file if causal or prefix checks are missing. A selection of chart examples cannot substitute for that population.

Validation needs later, previously untouched data beyond the original exposed period and required embargo. Splitting already studied history does not create independent Validation. Overlapping execution windows cannot qualify under the current independent-path protocol. Missing original evidence, unverified inputs or failed qualification block the workflow. See [Research continuation](/cortiq-public/research/#continue-the-investigation).

Playbook evidence separates mechanical-policy Validation, replay results and session references. Read combined-context and current-Learning replay labels; a multi-Playbook run does not establish each component's profit. Missing trade attribution stays unknown. Mechanical policy validation does not certify discretionary AI behavior or future returns.

## Read mastery and playbook maturity

The mastery count equals the number of matching playbooks you have set to **Production**. Research volume, Learning count, and trading activity do not raise it. The header displays up to five filled stars and states the Production-playbook count.

Each saved Playbook version uses these stages:

| Stage | Meaning |
| --- | --- |
| **Draft** | A playbook still being developed. |
| **Backtested** | A version you have marked as having backtest evidence. |
| **Sessions** | A playbook you have marked as having session evidence. |
| **Production** | A playbook you have deliberately promoted for use. |

Set stage on the selected current version's detail page. Saving changes starts a new Draft version; earlier evidence remains on the version tested. Evidence does not automatically change stage, and Production is an operator designation rather than a performance guarantee.

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

Screenshots use sample data. Connection states and amounts are illustrative.

![My Instruments list with the demo markets](/cortiq-public/images/screenshots/instrument-hub__list.png)

*Open one instrument to inspect its knowledge and research.*

![Learning detail with linked observation chart and event list](/cortiq-public/images/screenshots/instrument-hub__instance-events.png)

*This preliminary demo record shows linked evidence; it does not validate a trading strategy.*

## Related

- [Session review](/cortiq-public/session-review/)
- [Charting](/cortiq-public/charting/)
- [Sessions](/cortiq-public/sessions/)
- [Glossary](/cortiq-public/glossary/)
