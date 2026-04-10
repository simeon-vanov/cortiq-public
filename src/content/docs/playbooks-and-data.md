---
title: Playbooks and Data Packages
description: How Cortiq uses playbooks and data packages to control strategy and AI context.
---

## Why These Two Concepts Matter

Playbooks and data packages are two of the most important Cortiq concepts.

- Playbooks define what the AI is supposed to look for and how it should reason about the setup.
- Data packages define what information the AI is allowed to see while making that decision.

Together they turn Cortiq into a controlled operating environment instead of an open-ended prompt playground.

## Where To Find This In The App

The related UI areas are split across the sidebar:

- `Playbooks` -> `My Playbooks` for strategy design
- `Tools` -> `Data Packages` for AI payload design
- `Tools` -> `Indicators` for indicator definitions and supporting signal inputs
- `Preparation` -> `Instrument Profiles`, `Prep Packages`, and `Sentiment` for reusable supporting context

## Playbooks

A playbook is the strategy layer.

Typical playbook content includes:

- Market conditions the setup requires
- Entry logic and filters
- Invalidations and no-trade conditions
- Exit or management expectations
- Priority relative to other linked playbooks

The important public takeaway is simple: Cortiq executes inside the framework you define. It does not replace the need for a trading plan.

### What Each Playbook Section Is For

Customers usually get better results when they think of a playbook as a structured document rather than one big paragraph.

| Section | What It Is Used For |
| --- | --- |
| Market bias | Gives the AI the broad strategy type or directional context, such as trend following or mean reversion |
| Primary timeframe | Tells the AI where the main structural reading should happen |
| Entry timeframe | Tells the AI where the actual trigger should be confirmed |
| Setup conditions | Defines what the market must look like before the setup is considered valid |
| Entry conditions | Defines what must happen before the trade is allowed to trigger |
| Risk rules | Defines stop placement, target logic, risk boundaries, or minimum reward-to-risk requirements |
| Trade-management rules | Defines what the AI should do after entry, such as trailing, scaling out, or moving to break-even |
| Invalidation conditions | Defines when the idea is no longer valid and should be ignored |
| Preferred symbols and sessions | Helps the user keep a playbook aligned with the markets and trading windows where it makes the most sense |

Read [Playbook Design Guide](trading-cycle/playbook-design/) for a professional breakdown of each section.

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

### How Screenshots Work In Data Packages

Screenshots are optional chart images captured for selected timeframes in the data package.

They are useful when:

- chart structure matters more than raw numbers alone
- the user wants the AI to visually confirm levels, patterns, or trend shape
- a setup depends on something that is easier to interpret visually than in a table of candles

They should be used selectively because they add payload weight and are most valuable when visual context truly improves the decision.

Read [Data Package Design Guide](trading-cycle/data-package-design/) for a detailed explanation of timeframes, screenshots, tiers, and payload discipline.

If you want the deeper customer-facing reference pages, read [Data Packages](trading-cycle/entities/data-packages/), [Playbooks](trading-cycle/entities/playbooks/), and [Supporting Context](trading-cycle/supporting-context/).

## Indicators And Custom Inputs

Cortiq can incorporate indicator data from MT5, including custom indicator workflows where the MT5 environment exposes them correctly.

That allows advanced users to make the AI decision layer aware of the same signal stack they already use manually.

## What These Functions Can Do For You

Used well, this part of Cortiq helps you:

- stop relying on vague prompts and loose AI instructions
- keep the AI focused on the signals and structure that actually matter to your strategy
- separate reusable strategy logic from one-off active trading ideas
- improve consistency by deciding in advance what the AI can see and how it should reason

## Good Operating Practice

Use these principles when building your first serious playbook set:

1. Start with narrow playbooks rather than vague multi-market logic.
2. Keep the data package focused on what the strategy truly needs.
3. Add symbols, indicators, and screenshots only when they improve decisions.
4. Review journals and session output before widening the scope.

## Professional Design Advice

The most common quality difference between weak and strong Cortiq setups is not the AI provider. It is documentation quality inside the configuration.

Professional setups usually have:

- playbooks where each section has one clear job
- data packages where each timeframe and indicator has a reason to exist
- screenshots only where visual confirmation adds real value
- enough structure that the AI can stay disciplined without becoming overloaded

## What This Feature Solves

Without playbooks and data packages, AI trading workflows often fail for one of two reasons:

- The AI has too little structure and improvises too much.
- The AI has too much noisy context and loses signal quality.

Cortiq uses playbooks and data packages to reduce both problems.

## Related Pages

- [Feature Overview](feature-overview/)
- [Sessions & AutoScan](sessions-and-autoscan/)
- [Trading Cycle Overview](trading-cycle/overview/)
- [Playbook Design Guide](trading-cycle/playbook-design/)
- [Data Package Design Guide](trading-cycle/data-package-design/)
- [Capability Reference](capability-reference/)
- [Journal & Analytics](journal-and-analytics/)