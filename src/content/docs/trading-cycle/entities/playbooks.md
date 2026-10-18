---
status: current
title: Playbooks
description: The playbook entity — the structured strategy document that defines setup, entry, risk, management, and invalidation logic the AI follows on every cycle.
sidebar:
  order: 30
---

This is the entity reference for playbooks. By the end you'll know what a playbook contains, how each section behaves at runtime, and what separates a clean playbook from a vague one.

## What this is

The playbook is the strategy layer in Cortiq. It encodes the rules the AI must follow on every cycle — setup, entry, invalidation, risk, and management — in a structured document the AI can apply consistently and you can review later.

Playbooks live under `Preparation` → `My Playbooks`. A single playbook can drive multiple sessions; a single session can stack multiple playbooks at different priorities.

## How it fits into Cortiq

Playbooks pair with data access policies: the playbook says *what to look for*; the data access policy says *what to look at*. Both are referenced by sessions. For the design guide, read [Playbook design guide](/cortiq-public/trading-cycle/playbook-design/).

## How to use it

A pinned playbook version supplies operating rules to planning and decisions. Each section contributes to a different phase:

- **Market bias, primary/entry timeframes** — set the reasoning frame.
- **Setup conditions** — gate whether to evaluate at all.
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
