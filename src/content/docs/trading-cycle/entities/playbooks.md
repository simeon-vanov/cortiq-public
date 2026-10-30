---
status: current
title: Playbooks
description: The playbook entity — the structured strategy document that defines setup, entry, risk, management, and invalidation logic the AI follows on every cycle.
sidebar:
  order: 30
---

This reference explains a playbook's strategy fields, structured risk settings, schedule, and context requirements.

## What this is

The playbook is the strategy layer in Cortiq. It encodes the rules the AI must follow on every cycle — setup, entry, invalidation, risk, and management — in a structured document the AI can apply consistently and you can review later.

Playbooks live under `Preparation` → `My Playbooks`. A single playbook can drive multiple sessions; a single session can stack multiple playbooks at different priorities.

## How it fits into Cortiq

Playbooks pair with data access policies: the playbook says *what to look for*; the data access policy says *what to look at*. Both are referenced by sessions. For the design guide, read [Playbook design guide](/cortiq-public/trading-cycle/playbook-design/).

## How to use it

A pinned playbook version supplies operating rules to continuous assessment. Cortiq evaluates the fields together; the sections describe different responsibilities rather than a stepped execution pipeline:

- **Market bias, primary/entry timeframes** — set the reasoning frame.
- **Setup conditions** — describe the market context a valid setup needs.
- **Entry conditions** — gate whether to act.
- **Risk rules** — frame the trade.
- **Trade-management rules** — drive post-entry behavior.
- **Invalidation conditions** — let the AI walk away.

Keep setup conditions broader than entry conditions. Keep risk rules separate from management rules. Always define invalidation if the setup can lose its logic.

## Reference

### Playbook sections

| Section | Job |
| --- | --- |
| Market bias | Strategy hint: trend, mean reversion, breakout, range, news-driven. |
| Primary timeframe | Where broader structure is judged. |
| Entry timeframe | Where the trigger appears. |
| Setup conditions | What the market must look like before the setup is real. |
| Entry conditions | What must happen before the AI is allowed to act. |
| Risk rules | Stop placement, take-profit logic, reward-to-risk thresholds, sizing boundaries. |
| Trade-management rules | Trailing, partials, break-even, hold-or-reduce. |
| Invalidation conditions | When the setup is no longer trustworthy. |
| Instrument preferences and entry windows | Identifies fit; pinned entry days, windows, and close offsets also govern execution eligibility. |

### Structured risk and context

| Setting | Meaning |
| --- | --- |
| `Risk Multiplier (% of base risk)` | Scales base sizing risk. 100 means base risk, 25 means one quarter, and 200 means double; blank uses base risk. Global and account limits still apply. |
| `Minimum reward-to-risk` | Optional positive lower bound; blank lets the AI choose for each setup. |
| `Maximum reward-to-risk` | Optional upper bound; it must be at least the minimum when both are set. |
| Preparation, sentiment, and profile requirements | Each is `Off`, `Optional`, or `Required`. The strongest requirement across enabled playbooks applies to the session. Required reports must have usable coverage and validity. |
| Generation skills | Separate instructions for generating the corresponding context artifacts, included in their input review. |
| Default data access policy | Proposed execution inputs for new setup; the actual selected policy is checked. |

Free-text risk rules explain stop, target, and management reasoning. Structured numeric settings provide execution bounds; prose does not replace those controls.

The pinned version owns active days, entry windows, and automatic-close offsets in your configured local time zone. A closed entry window suppresses new entries for that playbook while the session continues managing exposure. The session's `End Date` separately limits its lifetime.

### What a playbook should not be

Saving a playbook creates a version. Sessions and backtests pin the selected version rather than silently adopting later edits. Review the execution policy and compatibility findings before saving; **Save as draft** preserves unfinished work without establishing launch readiness.

A playbook is not a catch-all idea list, a macro-news summary, or a one-off active thesis. Those belong in trade ideas or sentiment reports.

## What to read next

1. [Playbook design guide](/cortiq-public/trading-cycle/playbook-design/) — the section-by-section authoring guide.
2. [Data access policies](/cortiq-public/trading-cycle/entities/data-packages/) — the natural pair to a playbook.
3. [Trade ideas](/cortiq-public/trading-cycle/entities/trade-ideas/) — for opportunities that shouldn't become playbooks.

## Related

- [Playbooks & data access policies](/cortiq-public/playbooks-and-data/)
- [Sessions](/cortiq-public/trading-cycle/entities/sessions/)
- [Sessions](/cortiq-public/sessions/)
- [Glossary](/cortiq-public/glossary/)
