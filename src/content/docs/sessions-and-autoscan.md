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

## Where To Find This In The App

The runtime screens tied to this page are:

- `Library` -> `Sessions` for creating, starting, pausing, and reviewing sessions
- `Tools` -> `Symbol Scanner` for scan-first symbol discovery workflows

If you are trying to launch an actual trading workflow, `Library` -> `Sessions` is the main screen to learn first.

## Session Types

| Session Type | Purpose |
| --- | --- |
| Autonomous | Cortiq runs the internal AI trading loop directly |
| External MCP | An external AI agent controls the session through the MCP layer |

For most public users, Autonomous sessions are the main operating model.

External MCP sessions are the advanced operating model. They do not run the internal autonomous workflow engine. The external agent is responsible for deciding when to gather data, when to evaluate trades, and when to execute or manage positions.

## Session Lifecycle

Sessions move through distinct operating states such as idle, running, paused, risk-paused, time-paused, stopped, completed, or failed.

The important operator distinction is this:

- A manually paused session stays paused until you resume it.
- A risk-paused or time-paused session can resume automatically when conditions allow.

## The Trading Cycle

At a high level, each session cycle follows this pattern:

`Data Gather -> Prompt Build -> AI Call -> Response Parse -> Decision Execute -> Log`

That is the core loop that keeps the strategy process consistent rather than improvisational.

If you want the detailed breakdown of what the session contributes to that loop, read [Trading Cycle Overview](trading-cycle/overview/) and [Session Architecture](trading-cycle/session-architecture/).

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

## What Sessions Can Do For You

Sessions are useful because they let you turn a configuration into an operating system.

With sessions, you can:

- run one repeatable setup without rebuilding it every day
- keep different strategies separated from each other
- operate different symbols, accounts, and provider combinations cleanly
- pause or resume a workflow without losing the whole structure
- compare one session design against another over time

## Why Sessions Matter Commercially

Sessions are one of the strongest product concepts in Cortiq because they make the product operable.

Instead of reassembling the whole stack every day, the user creates a session template once and then runs, reviews, and iterates on it.

## If You Want An External Agent To Control Cortiq

Use an `External MCP` session when you want an MCP-compatible client to drive Cortiq through tool calls.

That mode is best when you want:

- A desktop AI client such as Claude Desktop to control the session directly
- Manual control over when the agent gathers data and executes
- A separation between Cortiq's execution and the external agent's reasoning loop

Read [MCP and Agent Integration](mcp-and-agent-integration/) for the full setup and operating flow.

## Related Pages

- [Playbooks & Data Packages](playbooks-and-data/)
- [Trading Cycle Overview](trading-cycle/overview/)
- [Sessions](trading-cycle/entities/sessions/)
- [Capability Reference](capability-reference/)
- [MCP and Agent Integration](mcp-and-agent-integration/)
- [Risk Management](risk-management/)
- [Execution Modes & Notifications](execution-modes-and-notifications/)