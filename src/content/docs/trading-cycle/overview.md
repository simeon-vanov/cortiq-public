---
title: Trading Cycle Overview
description: How a Cortiq trading cycle is assembled around the session and why the support layers matter.
---

The easiest way to understand Cortiq is to think in terms of one session running one repeatable trading cycle.

That cycle is not just an AI prompt. It is a controlled operating loop built from:

- a session
- one or more playbooks
- one data package
- optional support layers such as preparation, instrument profile, and sentiment
- the live MT5 account state
- the current open trades and trade history

## The Core Loop

At a customer level, the cycle works like this:

`Session Context -> Market Data Gather -> Prompt Build -> AI Decision -> Trade Execution or Management -> Logging and Review`

Each pass through that loop is one trading cycle.

## Why The Session Sits In The Middle

The session is the operating container for the cycle.

It decides:

- which MT5 account is used
- which symbol or symbol-selection method is active
- which AI provider and integration mode are used
- which playbooks must be evaluated
- which data package defines the market payload
- which support layers should be attached
- when the session is allowed to run

That is why the trading cycle is best explained from the session outward rather than from the AI inward.

## How The Pieces Fit Together

| Layer | Role In The Cycle | Typical Question It Answers |
| --- | --- | --- |
| Session | Operating container | What is this workflow allowed to do? |
| Playbooks | Strategy rules | What setups are valid? |
| Data package | Live market payload | What information does the AI see every cycle? |
| Trade ideas | Specific theses | What special opportunities are being tracked right now? |
| Preparation package | Cached analysis | What slower-moving structure should already be known? |
| Instrument profile | Long-lived market behavior | How does this instrument typically behave? |
| Sentiment report | News and macro context | What external pressure or event risk matters right now? |
| Session trades and timeline | Execution record | What happened, and why? |

## What Supporting Information Can Be Added

Many users understand playbooks and data packages quickly, but the support layers are where Cortiq becomes more disciplined.

You can add:

- session instructions for desk-specific rules or cautions
- preparation outputs for higher-timeframe or pre-session analysis
- an instrument profile for persistent symbol behavior
- a sentiment report for macro and news context
- trade ideas for specific discretionary theses that should be watched separately from general playbooks

These layers help the AI work with more structure and less improvisation.

## Where Customers Usually Need More Detail

The two areas that most strongly affect documentation quality inside a real Cortiq setup are:

- how the playbook sections are written
- how the data package is scoped, especially when screenshots are involved

Use these guides next:

- [Playbook Design Guide](playbook-design/)
- [Data Package Design Guide](data-package-design/)

## Why This Matters For Real Use

Without a structured cycle, AI trading usually breaks in one of two ways:

- the AI has too little structure and improvises too much
- the AI sees too much noise and loses decision quality

Cortiq's trading-cycle model is designed to control both problems.

## Best Reading Order

1. [Session Architecture](../trading-cycle/session-architecture/)
2. [Supporting Context](../trading-cycle/supporting-context/)
3. [Playbook Design Guide](playbook-design/)
4. [Data Package Design Guide](data-package-design/)
5. The entity pages in this section, starting with [Sessions](../trading-cycle/entities/sessions/)