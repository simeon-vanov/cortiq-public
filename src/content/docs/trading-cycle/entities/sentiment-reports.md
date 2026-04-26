---
title: Sentiment reports
description: The sentiment report entity — short-lived external context (headlines, macro pressure, event risk, positioning) the AI can use alongside the technical setup.
sidebar:
  order: 70
---

This is the entity reference for sentiment reports. By the end you'll know what to put in one, when to refresh it, and where it sits relative to other support layers.

## What this is

Sentiment reports provide short-lived external context the chart alone can't carry — recent headlines, institutional or analyst bias, macro and event risk, positioning or flow context. Each report has an expiry window so the operator knows when it's getting stale.

The chart can't tell the whole story when the market is reacting to events, policy language, or other macro drivers. Sentiment reports give Cortiq a separate place to hold that context without polluting playbooks or instrument profiles.

## How it fits into Cortiq

Sentiment reports attach to sessions as support context. They age fast — replace or detach them when the underlying narrative changes, often within hours or a few days.

For how this layer compares to others, see [Supporting context](../supporting-context/).

## How to use it

Use a sentiment report when:

- The symbol is especially sensitive to macro events.
- Headline risk matters for the session window.
- You want external context to support or challenge the technical setup.

Sentiment should *guide* confidence and caution. It should not override the trading framework on its own — playbook rules still apply.

## Reference

### Compare to other support layers

| Layer | Half-life | Best for |
| --- | --- | --- |
| Sentiment report | Hours to a few days | News, macro, positioning, event risk. |
| Preparation package | Hours to days | Cached analysis. |
| Instrument profile | Weeks to months | Persistent symbol behavior. |

## What to read next

1. [Supporting context](../supporting-context/) — the broader support-layer model.
2. [Preparation packages](preparation-packages/) — for cached analysis that ages slower.
3. [Instrument profiles](instrument-profiles/) — for persistent behavior context.

## Related

- [Sessions](sessions/)
- [Trade ideas](trade-ideas/)
- [Trading cycle: overview](../overview/)
- [Glossary](../../glossary/)
