---
title: Session Entity
description: What a session is, what it contains, and why it is the root entity of the Cortiq trading cycle.
---

The session is the main entity in the Cortiq trading cycle.

If you want to understand how a customer actually operates Cortiq, start here.

## What A Session Contains

A session combines:

- one MT5 account
- one primary AI provider
- one integration mode
- one symbol or an AutoScan method
- one data package
- one or more playbooks
- optional trade ideas
- optional support layers such as preparation, instrument profile, and sentiment
- a time window, active days, and execution settings

## What A Session Is For

The session is the unit a customer can actually run and review.

It is the practical bridge between strategy design and live operation.

## Why It Matters

Without sessions, the user would have to reassemble the whole workflow manually every time.

Sessions turn Cortiq into something operational and repeatable.

## What Other Entities Connect To It

- [Data Packages](../entities/data-packages/)
- [Playbooks](../entities/playbooks/)
- [Trade Ideas](../entities/trade-ideas/)
- [Preparation Packages](../entities/preparation-packages/)
- [Instrument Profiles](../entities/instrument-profiles/)
- [Sentiment Reports](../entities/sentiment-reports/)
- [Session Trades and Timeline](../entities/session-trades-and-timeline/)

## Best Mental Model

Think of the session as a trading desk template that can be started, paused, improved, duplicated, and reviewed.