---
status: current
title: Trade ideas
description: The trade idea entity — single-purpose theses Cortiq can monitor alongside reusable playbooks, with optional expiry and per-idea status tracking.
sidebar:
  order: 40
---

This is the entity reference for trade ideas. By the end you'll know when to capture a trade idea instead of a playbook and what each field on the idea is for.

## What this is

Trade ideas track specific opportunities being watched right now. They're inherently single-use: a breakout level you're waiting on, a pullback setup tied to current structure, a discretionary thesis that should expire if it doesn't develop in time.

Not every opportunity should become a reusable playbook. Some setups are specific to a short window or current structure — that's the role of trade ideas.

A trade idea typically includes a name, an optional symbol target, the thesis description, execution or invalidation conditions, an enabled/disabled state, and optional expiry timing.

## How it fits into Cortiq

Trade ideas are configured in their dedicated screen or contextual session/Copilot workflow, with statuses such as active, executed, closed, invalidated, expired, and unassigned. The existing Trade Ideas route is not an entry in the current main sidebar.

## How to use it

Capture trade ideas when:

- You spot one breakout level you want monitored.
- You're waiting on a retracement setup tied to current structure.
- A thesis should expire if conditions don't develop in time.

Don't use trade ideas as a replacement for your core playbook library. If the logic is reusable and central to your workflow, it belongs in a playbook.

## Reference

### Automated trade ideas

Where the runtime supports automated ideas, a Manual session can host one under its own reviewed mandate. A saved thesis alone does not enable automatic execution.

Select **Suggest trade ideas** in Copilot to request up to three setups for the session's instrument, or ask for multiple ideas in chat. Copilot shows each supported setup on its own card. Review the direction, entry, stop, target, and risk, then select **Open** to inspect the plan or **Save as draft** to keep that idea disabled in Trade Ideas.

When you or Copilot enter exact prices, Cortiq checks the broker's stop and freeze distances, tick size, and spread-adjusted reward/risk against the effective limits. The proposal or planner shows conflicts while you can still edit the draft. An idea with a confirmed price conflict stays in draft until you resolve it. For setups that depend on a future fill, Cortiq identifies the checks that have to wait for that price.

With an idea open on the session chart, select **Plan** to show its price levels. The labels identify the trigger, pending order, stop, target, cancellation, and zone bounds when the plan defines them.

For a standalone Stop or Limit, set **Placement** to **After enablement and execution checks** to authorize one order with a fixed stop, target, and cancellation price. Cortiq checks the current quote, broker rules, permissions, and risk before placement. It uses the saved cancellation price and expiry while the order is unfilled. For an entry that requires a thesis judgment or an Entry skill, choose **After AI confirms the thesis**.

Open **Skills** on the idea to attach your own analysis method. Choose **Entry**, **Management**, or **Both**. The review shows the attachments before enablement. Cortiq supplies the relevant skill to the AI when that phase requires an assessment. [Skills](/cortiq-public/skills/)

Review the concrete plan, source account and instrument, entry/management constraints, expiry, and proposed changes before approving and enabling it. Invalid or incomplete mandate rules keep approval disabled. This authority is separate from the general Autonomous session loop and from a one-time operator order.

Cortiq rechecks current broker rules, the executable price, and account risk before order submission. An idea can qualify at creation and be withheld later if these inputs change.

When an entry is blocked, the Trade Idea card shows the reason from the execution check. Select **View full assessment** to read the AI's analysis. For a first-candle entry, the idea becomes **Missed** when its entry window ends without a trade.

For a pending order that follows an instruction with a candle-close trigger, Cortiq uses the time you enabled the idea to assess post-enablement conditions. If the idea is still monitoring and has no active entry trigger or reassessment watch, Cortiq can check again after a new candle closes on the selected timeframe, up to the idea's expiry.

Check the idea's current lifecycle and approval status after edits. Copilot draft preparation does not grant permission to enable it. See [Agent permissions](/cortiq-public/agent-permissions/) for the approval boundaries.

### Position sizing

New drafts start at 100% of base risk. Set **Risk multiplier (% of base risk)** to size smaller or larger. With a base risk of 1% of account balance, a multiplier of 25 targets 0.25% and a multiplier of 200 targets 2%. The planner shows a cash estimate using the current base.

An approved multiplier follows future changes to base risk. Changing the multiplier on the idea requires approval of a new revision. Existing fixed-risk approvals continue to use their saved amount or percentage. To change an existing fixed-percentage idea, edit its sizing mode and review the new revision.

The final size also depends on available risk, exposure, the stop, and broker lot limits. Cortiq withholds an entry if the broker's minimum lot would exceed the allowed risk or if the multiplier has no positive base risk. [Risk management](/cortiq-public/risk-management/)

### When to use what

| Need | Use |
| --- | --- |
| Reusable rule-based setup | Playbook |
| Single live thesis with an expiry | Trade idea |
| Macro/headline context | Sentiment report |
| Pre-session prepared analysis | Preparation package |

## What to read next

1. [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/) — the Trade Ideas screen.
2. [Playbooks](/cortiq-public/trading-cycle/entities/playbooks/) — for opportunities that should become permanent rules.
3. [Sentiment reports](/cortiq-public/trading-cycle/entities/sentiment-reports/) — for macro context layered into a session.

## Screenshots

Screenshots use sample data. Connection states and amounts are illustrative.

![Trade Idea list with thesis fields and saved idea controls](/cortiq-public/images/screenshots/workspace-and-monitoring__trade-ideas.png)

*Saving a thesis does not grant execution authority; an automated Manual-session idea needs its own reviewed mandate.*

## Related

- [Sessions](/cortiq-public/trading-cycle/entities/sessions/)
- [Trading cycle: overview](/cortiq-public/trading-cycle/overview/)
- [Supporting context](/cortiq-public/trading-cycle/supporting-context/)
- [Glossary](/cortiq-public/glossary/)
