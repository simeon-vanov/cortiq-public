---
title: Risk Management
description: The dual-layer risk controls that sit above Cortiq trade execution.
---

## Why Risk Management Is A First-Class Feature

Cortiq is not designed around the assumption that a good AI response is enough. It is designed around the assumption that every trading system needs an independent control layer above execution.

That control layer is built into the product.

## Dual-Layer Risk Architecture

Cortiq applies risk in two scopes:

| Layer | Scope | Purpose |
| --- | --- | --- |
| Global risk | All connected accounts combined | Protects the total operating environment |
| Per-account risk | Each MT5 account individually | Protects account-specific mandates and limits |

## Controls Supported By The Platform

The risk system can enforce limits such as:

- Maximum daily drawdown
- Maximum weekly drawdown
- Daily or weekly profit targets
- Maximum daily trade count
- Maximum total open trades
- Maximum trades per symbol
- Maximum symbol exposure percentage
- Default risk per trade percentage
- Stop-on-loss-streak behavior
- Inclusion of manual trades in risk calculations

## What Happens On A Breach

### Global breach

If global limits are breached, Cortiq can pause all relevant sessions and cancel pending activity across the environment.

### Per-account breach

If an account-specific limit is breached, Cortiq can isolate the pause to the affected account while other accounts continue under their own limits.

## What This Can Do For You

Risk controls help the user:

- stop one bad period from turning into uncontrolled account damage
- separate strategy freedom from platform safety limits
- manage different account mandates without mixing them together
- keep the AI inside a risk framework even when market conditions deteriorate

## Why This Matters In Practice

The product value here is not just that limits exist. It is that they remain active before and during execution, which means the AI is not the only decision-maker in the system.

## Recommended Operating Approach

1. Set conservative limits before the first live trade.
2. Keep global limits tighter than your emotional tolerance, not looser.
3. Use per-account rules when different accounts serve different mandates.
4. Review breaches and journals rather than simply widening limits.

## Important Clarification

Risk management is a safeguard, not a guarantee. It can reduce the chance of uncontrolled behavior, but it does not remove trading risk.

## Related Pages

- [Sessions & AutoScan](sessions-and-autoscan/)
- [Execution Modes & Notifications](execution-modes-and-notifications/)
- [Capability Reference](capability-reference/)
- [Journal & Analytics](journal-and-analytics/)