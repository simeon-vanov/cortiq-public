---
title: Sessions and AutoScan
description: How Cortiq sessions work and how symbol selection can be automated.
---

## What A Session Is

A session is the operational container that tells Cortiq how to trade.

It combines:

- An MT5 account
- An AI provider
- An integration mode
- One or more playbooks
- A data package
- A symbol selection method
- A time window and active days
- Risk and execution settings

In practice, a session is the unit you start, stop, review, and improve.

## Session Types

| Session Type | Purpose |
| --- | --- |
| Autonomous | Cortiq runs the internal AI trading loop directly |
| External MCP | An external AI agent controls the session through the MCP layer |

For most public users, Autonomous sessions are the main operating model.

## Session Lifecycle

Sessions move through distinct operating states such as idle, running, paused, risk-paused, time-paused, stopped, completed, or failed.

The important operator distinction is this:

- A manually paused session stays paused until you resume it.
- A risk-paused or time-paused session can resume automatically when conditions allow.

## The Trading Cycle

At a high level, each session cycle follows this pattern:

`Data Gather -> Prompt Build -> AI Call -> Response Parse -> Decision Execute -> Log`

That is the core loop that keeps the strategy process consistent rather than improvisational.

## AutoScan

AutoScan is the symbol selection mode where Cortiq lets the AI review multiple candidate instruments and pick the strongest current opportunity.

This is useful when:

- You trade a watchlist rather than one fixed instrument
- You want the AI to decide where conditions are strongest
- You want rescan behavior after time passes or after a trade closes

## What Users Can Configure Per Session

| Setting Area | Examples |
| --- | --- |
| Market scope | Fixed symbols, wildcard behavior, or AutoScan candidate lists |
| Time control | Trading hours, active weekdays, close-before-end rules |
| Provider control | Provider choice, browser or API mode, fallback provider |
| Strategy control | Playbook set, playbook priority, instructions |
| Execution control | Live or virtual behavior, copy trading targets, parallel trade page limits |

## Why Sessions Matter Commercially

Sessions are one of the strongest product concepts in Cortiq because they make the product operable.

Instead of reassembling the whole stack every day, the user creates a session template once and then runs, reviews, and iterates on it.

## Related Pages

- [Playbooks & Data Packages](playbooks-and-data/)
- [Risk Management](risk-management/)
- [Execution Modes & Notifications](execution-modes-and-notifications/)