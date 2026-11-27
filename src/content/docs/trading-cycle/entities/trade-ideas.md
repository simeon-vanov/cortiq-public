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

### Ideas created by autonomous sessions

An autonomous session can create an idea once the setup from a pinned playbook is established. The idea waits for its remaining entry conditions and follows its own invalidation or expiry. For example, a trend pullback idea records the trend evidence at creation and watches for the pullback and confirmation.

When an exact price or candle close invalidates the setup, Cortiq can keep the idea active until that condition occurs. Time-limited setups can still expire at an explicit deadline. A submitted Limit or Stop order also has a finite broker expiry.

The session's **Ideas** view groups recorded ideas by trading day. The idea detail shows the selected playbook version, the recorded setup and pending conditions, and links to available decisions and trades. The session can look for another setup when the active ideas end or an independent discovery condition is met. [Sessions](/cortiq-public/sessions/#follow-autonomous-trade-ideas)

### Automated trade ideas

Where the runtime supports automated ideas, a Manual session can host one under its own reviewed mandate. A saved thesis alone does not enable automatic execution.

Select **Suggest trade ideas** in Copilot to request up to three setups for the session's instrument, or ask for multiple ideas in chat. Copilot shows each supported setup on its own card. Review the direction, entry, stop, target, and risk, then select **Open** to inspect the plan or **Save as draft** to keep that idea disabled in Trade Ideas.

For a new idea, Copilot uses the timeframe you specify or defaults to the open session chart. If the entry depends on candles and the chart timeframe is unavailable, Copilot asks which timeframe to use. It also asks when an unclear entry or confirmation rule would change when the idea can trade.

When you or Copilot enter exact prices, Cortiq checks the broker's stop and freeze distances, tick size, and spread-adjusted reward/risk against the effective limits. The proposal or planner shows conflicts while you can still edit the draft. An idea with a confirmed price conflict stays in draft until you resolve it. For setups that depend on a future fill, Cortiq identifies the checks that have to wait for that price.

With an idea open on the session chart, select **Plan** to show its price levels. The labels identify the trigger, pending order, stop, target, cancellation, and zone bounds when the plan defines them.

Give a pending order a **Bid invalidation level**, an automatic cancellation rule, or an explicit choice under **Cancel unfilled order**. The Bid rule is strict below the level for a long idea and strict above it for a short idea. If you choose the cancellation rule in the idea, Cortiq must bind that rule before submitting the order. Choose **At expiry only** when expiry is the intended cancellation condition.

For a standalone Stop or Limit, set **Placement** to **After enablement and execution checks** to authorize one order with a fixed stop and target and either a Bid cancellation level or expiry-only cancellation. Cortiq checks the current quote, broker rules, permissions, and risk before placement. Choose **After AI confirms the thesis** for an entry that requires judgment or an Entry skill.

Open **Skills** on the idea to attach your own analysis method. Choose **Entry**, **Management**, or **Both**. The review shows the attachments before enablement. Cortiq supplies the relevant skill to the AI when that phase requires an assessment. [Skills](/cortiq-public/skills/)

Review the concrete plan, source account and instrument, entry/management constraints, expiry, and proposed changes before approving and enabling it. Invalid or incomplete mandate rules keep approval disabled. This authority is separate from the general Autonomous session loop and from a one-time operator order.

To prepare an idea before the open, save and review it in the Manual session. If the broker confirms a future opening, the saved monitoring window starts then. A one-hour idea for a 10:20 opening expires at 11:20. The review shows both timestamps. Cortiq can arm the setup before the open and wait for qualifying market evidence. If the broker hasn't confirmed a future opening, the window starts on save.

Cortiq rechecks current broker rules, the executable price, and account risk before order submission. An idea can qualify at creation and be withheld later if these inputs change.

For Market, Limit, and Stop entries, **Entry risk tolerance** limits how much the projected stop-loss amount can rise when the quote changes. If the order was sized to risk $100, a 10% tolerance allows up to $110 when the approved risk limits have room. A native pending order keeps its approved price and type. The current quote must meet the broker's placement rules. The setup, stop, target, and any approved entry zone or price threshold must still qualify. [Risk management](/cortiq-public/risk-management/)

When an entry is blocked, the Trade Idea card shows the reason from the execution check. Select **View full assessment** to read the AI's analysis. For a first-candle entry, the idea becomes **Missed** when its entry window ends without a trade.

If the host rejects an assessment, open **Decision Details** for the recorded reason. When an entry fails the scheduled-opening quote check, the reason includes the approved opening, the quote receipt time, and the broker tick time when available.

A risk-policy mismatch during order admission shows the captured and revalidated policy revisions in **Decision Details**. If the broker account snapshot expires during admission, the refusal identifies the expired snapshot.

For a position or pending order created by a Manual-session Trade Idea, use **View trade idea** in its journal to open the owning automation. Each idea assesses its own positions and orders for management. Session-wide and account-wide limits still apply to new entries.

The approval shows **Close at expiry** and **Close after confirmed fill** separately. The first controls whether expiry closes an open position. An approved holding-time close starts at the confirmed fill, and Cortiq monitors it automatically.

For a first-candle instruction or a pending order that follows a candle-close instruction, Cortiq uses candles that close after enablement and any saved broker opening. If an instruction-led pending order has no active entry trigger or reassessment watch, Cortiq can check again after a new candle closes on the selected timeframe, up to the idea's expiry.

For a discretionary market idea that calls for candle-close reviews, Cortiq checks each completed candle on the approved timeframe after enablement and any saved broker opening. The checks continue after a Wait until an entry candidate is armed or the idea expires. If several candles close before the AI can review them, the next assessment includes those closes together.

If an instruction depends on earlier decisions, the AI checks the idea's saved decisions and candle-close timestamps for the current approval and session run. An instruction can require two Waits on different M5 closes before considering an entry. A review that covers several closes supplies one decision. The idea keeps waiting when it can't verify a required decision.

An armed market idea keeps watching its approved candle-close threshold through expiry, even if price passes the proposed stop or target while it waits. An explicit invalidation can still end the idea. A qualifying close can submit one order if the live bracket and risk checks pass.

If a market idea is waiting for an entry plan, a fresh candle close strictly beyond its approved threshold prompts another assessment before expiry. Any later entry still requires an armed setup and must meet your minimum reward/risk.

When a setup requires a price touch followed by a separate candle confirmation, the confirming candle must open after the touch. A bearish retest of a swing high must close below that high. A bullish retest of a swing low must close above that low.

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
