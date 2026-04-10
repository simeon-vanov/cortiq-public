---
title: Session Architecture
description: Why the session is the root of the Cortiq trading cycle and what it controls.
---

In Cortiq, the session is the root of the trading architecture.

If you understand the session correctly, the rest of the trading-cycle entities make sense much faster.

## What A Session Controls

A session controls four things at the same time:

1. Trading scope
2. Strategy scope
3. Execution scope
4. Support context

That means one session can define a very different operating model from another, even when both use the same broker terminal.

## Session As The Customer-Facing Architecture Unit

When a customer creates or edits a session, they are really assembling a trading system from reusable parts.

| Session Area | What The User Chooses |
| --- | --- |
| Broker and market scope | MT5 account, fixed symbol or AutoScan behavior |
| AI routing | Provider, integration mode, and fallback behavior |
| Strategy | Playbooks and their priority |
| Data | Data package and indicator scope |
| Support context | Preparation package, instrument profile, sentiment report, and instructions |
| Operating window | Active days, hours, and close-before-end behavior |
| Execution mode | Live, virtual, copy-trading behavior, and notifications |

## Why The Session Matters More Than A Single Prompt

The session is not just a saved configuration form.

It is the thing that makes the trading cycle repeatable.

Instead of rebuilding the whole environment every time, the user creates a session once and then:

- starts it
- pauses it
- reviews it
- improves it
- duplicates it into a new operating template

## The Session-Centered Trading Cycle

At runtime, the session sits in the center of the loop.

`Session -> Data Gather -> Prompt Build -> AI Decision -> Execution -> Timeline`

That is why customers should think of sessions as operating containers, not just presets.

## What The Session Can Add For Support

Support in this context means any information the AI can use beyond raw current candles.

The session can add:

- playbooks for rule-based setup logic
- trade ideas for specific active theses
- instructions for operator guidance
- preparation outputs for slower-moving structure
- an instrument profile for symbol behavior
- a sentiment report for macro and headline context

## Practical Example

Two sessions can trade the same symbol and still behave very differently.

Example:

- Session A uses a narrow London breakout playbook, a lean data package, and no support layers.
- Session B uses a swing-oriented playbook stack, a broader multi-timeframe data package, a preparation package, an instrument profile, and a fresh sentiment report.

Even on the same symbol, those are not the same operating system.

## Next Step

Read [Supporting Context](../trading-cycle/supporting-context/) to see what types of information can be attached to a session and when each one is useful.