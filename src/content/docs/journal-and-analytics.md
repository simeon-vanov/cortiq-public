---
status: current
title: Journal & analytics
description: How Cortiq records trade reasoning, session behavior, and performance metrics — and the review loop that turns the data into better playbooks.
sidebar:
  order: 80
---

This page covers the review surface of Cortiq: trade journals, session journals, analytics, cohort comparison, and the raw conversations view. By the end you'll know which screen answers which review question and the loop that ties them together.

## What this is

Cortiq is not only about opening trades — it's also about understanding what happened and whether the workflow is improving. The review surface is built around that understanding.

Three journal types capture different scopes:

- **Trade journal** — one trade, with entry, management, exit, and the AI's reasoning attached.
- **Session journal** — one session over a broader window, with cycle-by-cycle behavior.
- **Run journal** — one start-to-stop run, useful for comparing executions of the same configuration.

Analytics computes the metrics on top of those journals; cohorts let you compare sessions side-by-side; conversations gives you the raw AI dialogue when the rendered journal isn't enough. Explicit reviews assess saved decisions, capture supported Observations, and propose improvements. They do not automatically inject lessons into later sessions.

## How it fits into Cortiq

```mermaid
flowchart LR
  T(Closed trade) --> S[(Session trades<br/>store)]
  C(AI conversation) --> S
  S --> J(Journal page)
  S --> A(Analytics page)
```

*Saved trades and AI activity support journal, analytics, and review views. The desktop does not offer scheduled Telegram reports.*

The review surface lives across five screens:

- `Library` → `Journal` — trade journal and session journal.
- `Library` → `Dashboard` — performance and risk overview.
- `Library` → `Session Reviews` — saved review versions and links to each session's review controls.
- the existing `/cohorts` screen — side-by-side session comparison.
- the existing `/conversations` screen — raw AI conversations across sessions.

## How to use it

### Establish a review rhythm

Don't open the journal only when something goes wrong. The loop that produces compounding improvement looks like this:

1. Make one strategy change (playbook section, data access policy input, or risk limit).
2. Run the updated logic in a controlled scope — one symbol, one session.
3. Review the session journal end-to-end, not only the trade list.
4. Check whether the metric you intended to move actually moved.
5. Adjust before changing anything else.

Changing two things at once turns the review into guesswork.

### Read the right journal for the question

| Question | Journal to read |
| --- | --- |
| Did this single trade follow the playbook? | Trade journal. |
| Did this session stay disciplined over the day? | Session journal. |
| Did the AI's reasoning change after I edited the playbook? | Conversations view + session journal. |
| How does this run compare to last week's? | Run journal + analytics. |
| Which configuration is winning across multiple sessions? | Cohorts. |
| What should I change for the next run on this symbol? | Session review. |

### Compare configurations with cohorts

Open the existing `/cohorts` route or a contextual cohort link and group sessions you want to compare. Cohorts is not a current sidebar entry. Cohorts work best when the sessions actually match on most variables — same symbol, same provider, same risk profile — and differ only on the lever you're testing. Comparing two sessions that differ on five variables tells you nothing.

### Review saved evidence explicitly

Select **Review in Copilot** to open the session's **Reviews** tab. Choose **Latest cycles**, **Completed trades**, or **Date range**, then select **Prepare review**. Check the frozen scope before **Start review** sends the first Copilot request. Active sessions are reviewable through their saved cutoff; in-flight cycles are excluded.

Read the assessment and coverage in the dedicated conversation. Save a draft or publish with its limitations. Open admitted Observations to inspect their proof, and save proposed rule changes through the relevant editor.

Historical lessons remain read-only and are no longer injected into later trading prompts. See [Session review](/cortiq-public/session-review/) for reopening a review, coverage, billing, and older attempt recovery.

### Compare existing groups

Cohort and conversation screens remain available through their existing routes or contextual links, although they are not entries in the current main sidebar. The [navigation guide](/cortiq-public/app-navigation-guide/) maps the current visible screens.

## Reference

### Metrics computed by the analytics layer

| Metric | What it tells you |
| --- | --- |
| Daily P/L | Today's net profit or loss across the configured scope. |
| Weekly P/L | The current week's net result. |
| Total P/L | Cumulative across all included sessions. |
| Win rate | Percentage of trades that closed in profit. |
| Best and worst day | The single days with the highest gain and loss. |
| Best and worst trade | Outlier trades on either side. |
| Average win / average loss | The expected size of each side; the ratio matters more than either number alone. |
| Total trade count | Activity volume; useful for spotting overtrading. |

### Journal scopes

| Scope | Records | Useful for |
| --- | --- | --- |
| Trade | One trade's entry, management, exit, and AI reasoning. | Single-decision review. |
| Session | Every cycle in a session window. | Strategy-level review. |
| Run | One start-to-stop execution. | Comparing executions of the same configuration. |

## Common questions

**My win rate dropped after a playbook change — should I roll back?**
Not yet. Open the session journal and check whether losing trades are losing for the same reason. A higher loss rate on disciplined trades means the playbook now passes on setups the old version took — that may be the desired change. A higher loss rate on improvised trades means the playbook lost structure.

**Cohort comparison shows two sessions are very different — what's it actually telling me?**
Cohorts surface differences; they don't explain them. Use cohorts to find the gap, then open the session journals on both sides to read the cycles where the divergence appeared.

**How long is journal data kept?**
For the lifetime of the local Cortiq install. Journals live in the local SQLite database; they don't expire. Back up `cortiq.db` with the rest of your machine if you want offsite history.

## What to read next

1. [Session review](/cortiq-public/session-review/) — explicit assessment, Observations, coverage, and proposed improvements.
2. [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) — the screens that surface the journal data.
3. [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) — Windows trade notifications, Activity, and price alerts.
4. [Playbook design guide](/cortiq-public/trading-cycle/playbook-design/) — the iteration that the journal-driven loop should produce.

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Journal listing recorded trades grouped by session](/cortiq-public/images/screenshots/workspace-and-monitoring__journal.png)

*Journal contains recorded trades; inspect the session Decision Log for decisions that produced no trade.*

![Dashboard analytics for the selected demo account and date range](/cortiq-public/images/screenshots/journal-and-analytics__analytics.png)

*Illustrative demo statistics, not trading results from a customer account.*

## Related

- [Sessions](/cortiq-public/sessions/)
- [Risk management](/cortiq-public/risk-management/)
- [Capability reference](/cortiq-public/capability-reference/)
- [Glossary](/cortiq-public/glossary/)
