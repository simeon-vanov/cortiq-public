---
title: Playbooks and Data Packages
description: How Cortiq uses playbooks and data packages to control strategy and AI context.
---

## Why These Two Concepts Matter

Playbooks and data packages are two of the most important Cortiq concepts.

- Playbooks define what the AI is supposed to look for and how it should reason about the setup.
- Data packages define what information the AI is allowed to see while making that decision.

Together they turn Cortiq into a controlled operating environment instead of an open-ended prompt playground.

## Playbooks

A playbook is the strategy layer.

Typical playbook content includes:

- Market conditions the setup requires
- Entry logic and filters
- Invalidations and no-trade conditions
- Exit or management expectations
- Priority relative to other linked playbooks

The important public takeaway is simple: Cortiq executes inside the framework you define. It does not replace the need for a trading plan.

## Data Packages

A data package controls what the session gathers and sends to the AI.

This can include:

- Historical candles across one or more timeframes
- Technical indicators
- Chart screenshots
- Economic calendar context
- Account information
- Risk settings and performance context
- Trade history
- Cross-reference symbols

This matters because the quality of AI decisions depends heavily on both signal quality and prompt discipline.

## Indicators And Custom Inputs

Cortiq can incorporate indicator data from MT5, including custom indicator workflows where the MT5 environment exposes them correctly.

That allows advanced users to make the AI decision layer aware of the same signal stack they already use manually.

## Good Operating Practice

Use these principles when building your first serious playbook set:

1. Start with narrow playbooks rather than vague multi-market logic.
2. Keep the data package focused on what the strategy truly needs.
3. Add symbols, indicators, and screenshots only when they improve decisions.
4. Review journals and session output before widening the scope.

## What This Feature Solves

Without playbooks and data packages, AI trading workflows often fail for one of two reasons:

- The AI has too little structure and improvises too much.
- The AI has too much noisy context and loses signal quality.

Cortiq uses playbooks and data packages to reduce both problems.

## Related Pages

- [Feature Overview](feature-overview/)
- [Sessions & AutoScan](sessions-and-autoscan/)
- [Journal & Analytics](journal-and-analytics/)