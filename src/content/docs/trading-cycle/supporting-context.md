---
title: Supporting Context
description: What additional information can be attached to a session to support better AI decisions.
---

Supporting context is the extra information Cortiq can give the AI on top of the current market payload.

This is where many users can improve decision quality without simply adding more candles or more indicators.

## The Main Idea

Not all useful trading information changes at the same speed.

- Raw candles and prices change every cycle.
- Strategy rules change only when you edit them.
- Instrument behavior may change slowly over weeks.
- News and macro sentiment may matter for a few hours or days.
- Pre-session analysis may stay useful until a major move or refresh trigger happens.

Cortiq separates those layers so you can decide what should be fresh, what should be stable, and what should only be attached when it truly helps.

## Types Of Supporting Information

### Session Instructions

Use session instructions for operator guidance such as:

- symbols to avoid around certain events
- special broker behavior to keep in mind
- desk-specific execution cautions
- strategy scope reminders that do not belong inside a playbook

### Preparation Packages

Use a preparation package when you want the AI to begin the cycle with already prepared analysis rather than rediscovering it each time.

Good examples:

- higher-timeframe structure
- regime classification
- directional skew from slower charts
- key levels prepared before active execution starts

### Instrument Profiles

Use an instrument profile for long-lived context about how an instrument tends to behave.

Good examples:

- range character and volatility behavior
- session tendencies such as London or New York behavior
- recurring structural habits of the instrument
- notes that help interpret today's chart in light of longer-term behavior

### Sentiment Reports

Use a sentiment report for external context that is not visible in the chart alone.

Good examples:

- recent headlines
- institutional bias and forecast direction
- known event risk ahead
- positioning or macro pressure

### Trade Ideas

Use trade ideas when you want Cortiq to track a specific thesis separately from the reusable playbooks.

Good examples:

- a specific breakout level you are waiting on
- a pullback setup tied to a current structure
- an idea that should expire if conditions do not develop in time

## What Belongs Where

| Information Type | Best Home |
| --- | --- |
| Live factual market payload | Data package |
| Reusable setup logic | Playbook |
| One active thesis | Trade idea |
| Slower-moving prepared analysis | Preparation package |
| Long-lived instrument behavior | Instrument profile |
| Macro and headline context | Sentiment report |
| Operator notes or exceptions | Session instructions |

## Common Mistakes To Avoid

- putting one-off trade ideas into a reusable playbook
- storing short-term directional calls inside the instrument profile
- leaving an old sentiment report attached after its relevance is gone
- adding too many support layers without a clear role for each one
- confusing more information with better information

## Best Practice

The best support stack is usually not the biggest one. It is the cleanest one.

Add a support layer only when it improves judgment in a way the existing data package and playbooks do not already cover.