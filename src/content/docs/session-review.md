---
title: Session review
description: A one-click AI review of a finished session that produces scored, apply-able suggestions and durable instrument-scoped lessons auto-injected into the next session on that symbol.
sidebar:
  order: 100
  badge: New
---

A session review is a one-click AI pass over a session that has finished trading. It produces two things: scored suggestions you can apply to your artifacts, and durable lessons that fold back into the next session on that instrument. By the end of this page you'll know what each channel does, how the learning loop closes, and where to trigger and read a review.

## What this is

When a session ends, you can ask Cortiq to review it. The review runs an isolated AI pass seeded with the session's trade statistics, the recent trades and their AI reasoning, a price-path movement digest of what the market actually printed, a sample of cycles where the AI chose not to act, any prior reviews of the same session, and the lessons already active for the instrument.

It returns two output channels that map onto the trading cycle's authority hierarchy:

- **Suggestions** are the command layer. Each is a scored, evidence-backed proposed change to a playbook, data package, skill, instrument profile, or preparation. They are human-in-loop — nothing changes until you apply one.
- **Lessons** are the reference layer. They are durable, instrument-scoped observations that auto-inject into the *next* session on the same symbol. They tilt the AI's conviction and flag known pitfalls; they never add rules the playbook does not authorize.

The split is deliberate. Suggestions need your approval before anything changes. Lessons inform without gating.

## How it fits into Cortiq

The review is what closes the loop between one session and the next on the same instrument. A session trades, you review it, lessons distilled from that review ride into the next session on that symbol automatically.

| Channel | Layer | Authority | Effect |
| --- | --- | --- | --- |
| Suggestions | Command | Human-in-loop | Apply / Discuss / Dismiss a scored change to an artifact. |
| Lessons | Reference | Auto-fold | Injected into the next session on the same symbol as advisory context. |

Lessons are **instrument-scoped**, not session-scoped — they are shared across every session on that symbol. They are injected into each trading cycle prompt as a fenced `<operator_reviewed_lessons>` block marked as advisory. The injection is failure-isolated: if fetching lessons faults, the block is omitted and the cycle runs without it.

:::note
Lessons sit at the reference layer of the authority hierarchy, alongside the instrument profile. They tilt conviction; they cannot gate entry or impose rules the playbook and session instructions do not authorize.
:::

## How to use it

### 1. Trigger a review on a finished session

Open the session's analysis page and select **Review session**. The review runs as an isolated AI call over the completed session and persists as a new review version — re-reviewing the same session adds a version rather than overwriting the prior one.

### 2. Read the suggestions

Each suggestion renders as a card: an artifact-type badge, a score indicator, an evidence summary, and an action row.

![Session review panel showing scored suggestion cards with Apply, Discuss, and Dismiss actions](/cortiq-public/images/screenshots/session-review__panel.png)

Work each card with one of three actions:

- **Apply** routes the Copilot to the editor surface for that artifact, where the proposed change is made through the normal editing path.
- **Discuss** hands the suggestion text to the Copilot as a conversation seed so you can talk it through before deciding.
- **Dismiss** removes the card without persisting any change.

### 3. Let the lessons fold back

Lessons are written automatically when the review is saved. New lessons are deduplicated against the instrument's active lessons before persisting, so the loop does not accumulate redundant advice across repeated reviews. Expired lessons are prunable.

From then on, every new session on that symbol injects the active lessons into its cycle prompts. You don't apply lessons — they fold back on their own.

:::tip
Visit `/reviews` and filter by instrument to see the lessons the loop currently knows for a symbol. The active-lessons header shows exactly what the AI will carry into the next session on that instrument.
:::

### 4. Browse all reviews

`/reviews` lists every session review across instruments. Filter by symbol to narrow the list, and read the active-lessons header to see the current state of the learning loop for that instrument.

## Reference

### The two channels

| Channel | Persisted as | Scope | Lifecycle |
| --- | --- | --- | --- |
| Suggestion | Part of the review version | Per session | Apply, Discuss, or Dismiss — no auto-effect. |
| Lesson | Standalone, instrument-scoped | Per symbol | Auto-injected into future cycles; deduplicated; prunable on expiry. |

### What seeds the review

| Input | Provides |
| --- | --- |
| Trade statistics | Outcome summary for the session. |
| Recent trades with reasoning | What the AI did and why. |
| Movement digest | Ground-truth price path (trend / range / reversal), independent of the AI's own outputs. |
| Did-nothing cycles | A sample of cycles where the AI chose not to act. |
| Prior reviews | Version context for a re-review. |
| Active lessons | What the loop already knows, to avoid duplicate advice. |

## Common questions

**Does applying a suggestion change my artifact automatically?**
No. Apply routes you into the editor surface for that artifact through the Copilot. You stay in the loop; the review never edits an artifact on its own.

**Can a lesson force the AI to take or skip a trade?**
No. Lessons are reference-layer advisory context. They tilt conviction and flag pitfalls, but they cannot gate entry or add rules the playbook does not authorize.

**Why did a lesson I expected not appear in the next session?**
Lessons are instrument-scoped. They inject only into sessions on the same symbol, and only while active — an expired or deduplicated lesson is not carried forward.

## What to read next

1. [Journal & analytics](/cortiq-public/journal-and-analytics/) — the trade record a review reads from.
2. [Sessions](/cortiq-public/sessions/) — the next session on the symbol, where lessons fold back.
3. [Research](/cortiq-public/research/) — the other improvement loop, for deeper instrument work.

## Related

- [Playbooks & data](/cortiq-public/playbooks-and-data/)
- [Skills](/cortiq-public/skills/)
- [Risk management](/cortiq-public/risk-management/)
- [Glossary](/cortiq-public/glossary/)
