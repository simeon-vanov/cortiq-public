---
status: current
title: Playbook design guide
description: Write clear strategy rules, structured risk limits, entry schedules, and context requirements for a pinned Cortiq playbook.
sidebar:
  order: 40
---

This page is the practical guide to writing playbooks the AI can follow and you can review later. By the end you'll know what each section is for, what cleanly separated sections look like, and the failure modes that produce vague or contradictory playbooks.

## What this is

A playbook is a structured document, not a paragraph. The main idea is simple: each section has one job. When sections are mixed, the AI gets a blurred strategy. When sections are clean, the AI gets a disciplined operating framework you can audit.

Use instrument fit, setup, entry, and management as an authoring checklist. Continuous assessment considers the rule fields together; these sections are not four executable runtime stages.

## How it fits into Cortiq

A playbook is referenced by sessions. The same playbook can run on multiple sessions; a single session can stack multiple playbooks at different priorities. The playbook itself doesn't care about the symbol or account — those come from the session.

For the conceptual overview, see [Playbooks & data access policies](/cortiq-public/playbooks-and-data/). This page focuses on writing them well.

## How to use it

### Write each section for one job

The cleanest playbooks follow this flow: describe the context, describe the trigger, describe the risk box, describe the management plan, describe the invalidation path. Five distinct jobs, five distinct sections.

#### Name and description

Make the playbook understandable to a human reviewer first. Good naming makes later journal review noticeably faster.

#### Market bias

Classify the strategy style: trend following, mean reversion, breakout, range, news-driven. This isn't where you explain the strategy — it's where you tell the AI what reasoning frame to apply.

#### Primary timeframe

Where the broader structural read happens. Trend, structure, regime — judged on this chart.

#### Entry timeframe

Where the actual trigger appears. Tighter than the primary timeframe in almost every case.

#### Setup conditions

The section for *market context*. Use it for directional alignment, structure location, trend quality, volatility conditions, higher-timeframe agreement.

Good setup conditions answer: *what must be true before we even care about an entry?*

#### Entry conditions

The section for *timing*. Use it for trigger candles, retests, confirmation behavior, level reactions, final filters.

Good entry conditions answer: *what must happen before the AI is allowed to act?*

#### Risk rules

How the trade is protected: stop-loss logic, take-profit logic, minimum reward-to-risk, no-trade conditions tied to risk.

Good risk rules tell the AI how to avoid low-quality trade framing, not only where to place the stop.

Set numeric sizing and reward-to-risk bounds in `Risk settings` as well. Prose explains the strategy; structured fields supply values Cortiq checks during execution. They don't override global or account risk controls.

#### Trade-management rules

What happens after entry: trailing rules, break-even rules, partial exits, hold-or-reduce conditions. Keep this separate from risk rules so the AI distinguishes pre-entry discipline from post-entry management.

#### Invalidation conditions

When the whole idea should be abandoned. One of the most valuable sections in a professional playbook — it gives the AI permission to stop forcing a setup that's no longer valid.

#### Preferred symbols and sessions

Express where the strategy fits. Preferred-session descriptions are guidance. The pinned playbook's active days, entry window, and automatic-close offsets are separate execution settings in `Schedule`.

When an entry window closes, Cortiq suppresses new entries for that playbook while the Running session continues managing existing exposure. Configure close offsets when the strategy requires its exposure closed before the period ends. The session's `End Date` remains a separate lifetime boundary.

### Choose context requirements and generation skills

In `Context`, choose `Off`, `Optional`, or `Required` separately for preparation, sentiment, and instrument profiles. The session uses the strongest requirement across its enabled playbooks. `Required` needs a usable report with the correct coverage and validity; `Optional` permits absence.

Choose a generation skill for each artifact when you need a specific recipe. These skills guide artifact generation and participate in input review; they don't become extra executable stages in the trading loop.

## Review the execution policy

The execution policy supplies editable access limits for assessment, entry, and management. **Generate execution policy with AI** creates a proposal; **Use this draft** copies it into the form. **Validate execution compatibility** checks the current rules and policy before **Save Playbook**.

Material edits invalidate the matching review. **Save as draft** retains unfinished work and its findings; it does not authorize execution. Configure exact supported indicator versions and parameters, and clarify ambiguous periods or freshness limits.

Preparation skills define generation recipes. Do not copy every recipe lookback into execution requirements: execution consumes the valid report when the trading rules require it. See [Playbooks and policies](/cortiq-public/playbooks-and-data/) for repair and shared-policy behavior.

## Reference

### Section purposes at a glance

| Section | Main job |
| --- | --- |
| Name and description | Identify the strategy clearly. |
| Market bias | Tell the AI what style of setup this is. |
| Primary timeframe | Define where broader structure is judged. |
| Entry timeframe | Define where the trigger must appear. |
| Setup conditions | Describe what the market must look like. |
| Entry conditions | Describe what must happen before execution. |
| Risk rules | Define stop, target, and risk boundaries. |
| Trade-management rules | Define what to do after entry. |
| Invalidation conditions | Define when the setup is no longer valid. |
| Preferred symbols and sessions | Express where the playbook fits best. |

### Structured settings

| Setting | Meaning |
| --- | --- |
| `Risk Multiplier (% of base risk)` | Scales base risk: 100 uses base risk, 25 uses one quarter, and 200 uses double. Blank uses base risk. Other risk limits still apply. |
| `Minimum reward-to-risk` | Optional lower bound. Blank lets the AI choose for each setup; positive values below 1R are allowed. |
| `Maximum reward-to-risk` | Optional upper bound, at least the minimum when both are set. Blank sets no playbook ceiling. |
| `Schedule` | User-local entry days, windows, and automatic-close offsets captured in the pinned version. |
| Context requirements | `Off` disables that requirement; `Optional` allows missing context; `Required` needs a usable artifact. |
| Generation skills | Instructions used to generate the corresponding preparation, sentiment, or profile artifact. |

### Common mistakes

- Putting entry logic into setup conditions.
- Mixing risk rules with management rules.
- Writing invalidation as an afterthought, or not at all.
- Writing vague playbooks that sound intelligent but can't be reviewed objectively.
- Making one playbook responsible for too many different market types.

## What to read next

1. [Data access policy design guide](/cortiq-public/trading-cycle/data-package-design/) — disciplined payload design, the natural pair to a tight playbook.
2. [Playbooks](/cortiq-public/trading-cycle/entities/playbooks/) — the entity reference for the playbook object.
3. [Trading cycle: overview](/cortiq-public/trading-cycle/overview/) — where the playbook sits inside the broader cycle.

## Related

- [Playbooks & data access policies](/cortiq-public/playbooks-and-data/)
- [Sessions](/cortiq-public/sessions/)
- [Capability reference](/cortiq-public/capability-reference/)
- [Glossary](/cortiq-public/glossary/)
