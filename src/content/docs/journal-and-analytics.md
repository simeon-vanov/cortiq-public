---
title: Journal and Analytics
description: How Cortiq records performance, trade reasoning, and review data.
---

## Why Review Matters

Cortiq is not only about opening trades. It is also about understanding what happened, why it happened, and whether the strategy is improving.

That is where journals and analytics become part of the product value.

## Journal Types

| Journal Type | Scope | Typical Use |
| --- | --- | --- |
| Trade journal | Single trade | Review entry, management, exit, and lessons learned |
| Session journal | Entire session | Evaluate the behavior of a strategy run over a broader window |
| Run journal | One start-to-stop run | Compare one execution run against another |

## What The Analytics Layer Covers

Cortiq computes operational metrics such as:

- Daily P/L
- Weekly P/L
- Total P/L
- Win rate
- Best and worst day
- Best and worst trade
- Average win and average loss
- Total trade count

These are the metrics that help users distinguish a repeatable process from a temporary streak.

## Commercial Value Of This Feature

For a serious product, execution alone is not enough. Users need review loops.

Journals and analytics help with:

- Validating whether a playbook is behaving as intended
- Identifying drift in an AI-driven workflow
- Comparing virtual and live performance patterns
- Deciding what to refine next

## Best Practice

After every meaningful strategy change:

1. Run the updated logic in a controlled scope.
2. Review the session journal, not only the trade list.
3. Check whether the win rate and P/L changed for the right reasons.
4. Adjust playbooks or risk settings before scaling again.

## Related Pages

- [Playbooks & Data Packages](playbooks-and-data/)
- [Sessions & AutoScan](sessions-and-autoscan/)
- [Risk Management](risk-management/)