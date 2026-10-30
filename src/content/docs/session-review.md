---
status: current
title: Session review
description: Choose saved session or backtest evidence, review it in Copilot, and inspect coverage before publishing an assessment.
sidebar:
  order: 100
---

Review a fixed selection of saved session or backtest activity in a dedicated Copilot chat. Check the evidence and coverage, then save a draft or publish your assessment.

## What this is

A review keeps its selected evidence and cutoff. New activity doesn't silently enlarge it. You can revisit the conversation, ask follow-up questions, and retain earlier reviews when you choose another scope.

Preparing a review is local. **Start review** sends the first AI request. Opening or resuming an existing review doesn't send a request.

## How it fits into Cortiq

The assessment explains recorded decisions and outcomes. Supported Observations connect to the instrument's Knowledge; suggested improvements remain proposals for you to investigate.

A published review doesn't edit a playbook, change trading rules, create a Learning or Edge, or inject lessons into later sessions.

## Before you begin

- Save session activity or backtest progress to review.
- Configure and authenticate **Setup** → **AI Providers** → **Review**. Review uses that configuration and the model's verified **Max** reasoning effort.
- Check your provider's billing or subscription allowance before starting or sending a follow-up message.
- For a backtest, pause or finish the run. Both Manual and Autonomous runs support review while paused. Keep replay at the captured position.

A Manual run needs no AI cycles. Choose closed trades or dates when there are no completed cycles.

## How to use it

### Choose and prepare the scope

1. Open the session's **Reviews** tab or the backtest's **Review** tab.
2. Choose **Review scope**: **Latest cycles**, **Completed trades**, or **Date range**. Manual runs offer completed trades and dates without requiring AI cycles.
3. For cycles or trades, set **Count** from 1–100; the default is 100. For dates, enter **From** and **To** using the timezone shown beside the fields. Dates include the complete matching selection without the count limit.
4. For a session, optionally choose **Run** instead of **All runs**. A backtest already identifies its replay run.
5. Select **Prepare review**, or **Prepare new review** when a selection is already saved. Check the selected items, cutoff, and limitations. **Selection previews · navigation only** doesn't count as evidence delivered to Copilot. No AI request has been sent yet.

An active session can be reviewed through its saved cutoff. In-flight cycles are excluded. Selecting a new scope creates another review and preserves the previous one.

Dates use your configured Cortiq timezone. If a local time doesn't exist or occurs twice during a clock change, choose another time. The review doesn't guess which occurrence you intended.

### Start and discuss the review

1. Check **Ready to start** and select **Start review** when the prepared scope is correct.
2. Follow the dedicated Copilot conversation. Ask about a decision, trade, report, or limitation in the selected evidence.
3. Inspect the saved evidence and coverage before accepting a conclusion. Copilot can read additional saved detail within the review's scope.
4. Ask Copilot to save a draft when you want to retain work before publication.
5. Ask Copilot to publish when the assessment and its limitations are ready.

The review reads saved evidence. It doesn't collect new broker candles, advance replay, or start another report. Historical preparation, Sentiment reports, Learning inputs, and skill content appear when they were retained with the original activity. Missing historical content stays a stated gap.

### Reopen an existing review

1. Choose the selection under **Saved reviews**, then select **Open Copilot**.
2. Check the scope and saved progress before sending another message.
3. If the conversation was removed, select **Resume review** to attach a new conversation. Resume itself sends no request.

Select **Refresh status** to reload saved progress. While a turn is active, **Cancel review** stops that exact turn and retains its saved draft and results. **Review stopped** or **Review interrupted** doesn't start another request; open the chat before deciding what to send next.

Saved reviewed-item declarations survive loss of the provider's working context. Copilot can reread saved content when needed; previous review progress doesn't establish that every body is still in its current context.

Previously saved claims remain available. To add or change a finding, improvement, or Observation candidate, Copilot must have the cited evidence in its current review context again. An unchanged saved claim doesn't require rereading solely because the context was lost.

### Check coverage and published Observations

Read the selected-item, delivered-evidence, reviewed-item, and gap information together. **Unread** counts selected items whose required evidence hasn't been fully delivered and confirmed. **Not reviewed** counts selected items without a saved reviewed declaration. Neither count means the evidence remains in Copilot's current context.

**Complete** requires the host's evidence and coverage checks; a model's claim of completeness isn't enough. A useful assessment can remain **Partial**.

The **artifacts**, **shared bodies**, and **usages** counts describe historical sources, distinct saved content, and where that content was used. They aren't counts of independent evidence or model requests. Expand **Draft** or inspect **Published review** to read saved work; backtest publications also offer **Saved backtest statistics**.

An unknown historical record identity and missing content are different limitations. Retain both disclosures when they apply. Neither an execution price alone nor an AI recollection proves a market Observation.

Open an admitted Observation to inspect its instrument and supporting proof. Repeated captures of the same event aren't independent evidence. Discuss proposed rule changes and save them through the relevant editor.

## Verify the review

Reopen the review and confirm that its scope, cutoff, saved conversation, and draft or publication remain available. Inspect the saved coverage and limitations with the assessment.

Published reviews retain their own identity. An older backtest review remains distinguishable after a newer assessment becomes the run's current result.

The global **Reviews** page lists saved session and backtest selections. **Open review** returns to the exact selection; **View saved assessment** displays its published result. Older session review versions remain listed separately. Opening the page doesn't request a review.

## Continue an older review attempt

Older stage-based attempts retain their saved results and recovery controls. If **Retry review** reports that the previous request has no saved response, retrying can send another paid request. **Repair invalid response** explicitly requests a replacement for one saved invalid stage. Opening the result or restarting Cortiq doesn't resend it.

Historical reviews, notes, attention flags, and lessons remain readable. Historical lessons don't become new session instructions.

## What to read next

1. [Instrument Hub](/cortiq-public/instrument-hub/) — inspect admitted Observations and reviewed Learnings for the market.
2. [Research](/cortiq-public/research/) — measure comparable occurrences before generalizing from one run.
3. [Backtesting](/cortiq-public/backtesting/) — test a proposed execution change on historical data.

## Screenshots

Screenshots use sample data. Connection states and amounts are illustrative.

![Backtest Review tab with scope and Prepare review action](/cortiq-public/images/screenshots/session-review__backtest-workspace.png)

*Prepare the saved evidence before starting a review. No model review was requested for this image.*

![Saved review list with symbol filter and version selector](/cortiq-public/images/screenshots/session-review__panel.png)

*This demo has no saved review versions yet. The page shows where saved versions appear.*

## Related

- [Journal and analytics](/cortiq-public/journal-and-analytics/)
- [AI providers](/cortiq-public/ai-providers/)
- [Cortiq Copilot](/cortiq-public/cortiq-copilot/)
- [Sessions](/cortiq-public/sessions/)
