---
title: First 30 Minutes in Cortiq
description: A guided path from installation to your first safe virtual session.
---

This page is for new customers who want a practical, low-risk first run.

The goal is not to optimize everything in 30 minutes. The goal is to reach a clean first virtual session with the major pieces working correctly.

## What You Will Accomplish

By the end of this walkthrough, you should have:

- Cortiq installed and activated
- MetaTrader 5 connected on the same machine
- one AI provider configured
- one simple playbook created
- one focused data package selected
- one virtual session ready to run

## Before You Start

Have these ready:

- a Windows machine with Cortiq installed
- a valid activation key
- MetaTrader 5 installed on the same machine
- access to at least one supported AI provider
- a plan to stay in virtual mode for this first run

## Minute 0 To 5: Install And Activate

1. Download the current Cortiq release from the public releases page.
2. Install the MSIX package on the machine that will run Cortiq.
3. Open the app and complete license activation.

If anything fails at this step, stop and check [Installation & Activation](installation-and-activation/) before moving on.

## Minute 5 To 10: Confirm MetaTrader 5 Access

1. Open MetaTrader 5 and make sure the correct terminal and account are running.
2. In Cortiq, confirm the MT5 account you want to use is configured correctly.
3. If you have multiple accounts, double-check that you are looking at the intended one.

Your goal here is simple: do not start building a session until you are sure Cortiq is pointing at the correct MT5 environment.

Read [MetaTrader 5 Integration](mt5-integration/) if you need more detail.

## Minute 10 To 15: Configure One AI Provider

1. Choose one provider only for the first run.
2. Decide whether browser mode or API mode is the simpler path for your setup.
3. Verify that the provider can respond successfully before you continue.

For a first run, simplicity beats flexibility. You can add more providers or fallback behavior later.

Read [AI Providers](ai-providers/) if you are unsure which mode to choose.

## Minute 15 To 20: Create A Narrow Strategy Setup

For your first session, keep the design narrow.

Create:

- one simple playbook
- one focused data package
- one fixed symbol

Good first-run characteristics:

- one symbol rather than AutoScan
- one or two important timeframes rather than a broad stack
- a clear setup and invalidation rule rather than a complex multi-setup system

Read [Playbooks & Data Packages](playbooks-and-data/) if you need a refresher.

## Minute 20 To 25: Create The First Session

Create one session with these defaults in mind:

- fixed symbol
- one MT5 account
- one AI provider
- your simple playbook
- your focused data package
- virtual mode enabled
- conservative risk settings still configured even though the session is virtual

Why virtual mode first:

- you validate workflow before capital is involved
- you learn the session and journal behavior faster
- you reduce setup stress while still seeing the system operate

Read [Sessions & AutoScan](sessions-and-autoscan/) and [Risk Management](risk-management/) if needed.

## Minute 25 To 30: Run And Review

1. Start the session in virtual mode.
2. Let it complete one or more cycles.
3. Review the session output, decision rendering, and journal data.
4. Look for clarity, not perfection.

The first question is not "Did it make money immediately?"

The first question is "Did the workflow behave in a way I can understand and trust enough to improve?"

## What Good First-Run Success Looks Like

Your first successful run should give you confidence in these basics:

- Cortiq can reach MT5 correctly
- Cortiq can reach the chosen AI provider correctly
- your playbook is understandable enough for the AI to use
- your data package is focused enough to produce readable output
- your session can run, log, and be reviewed without confusion

## What Not To Do In The First 30 Minutes

- do not go live immediately
- do not use multiple providers at once unless you truly need to
- do not start with a broad multi-symbol system
- do not skip risk settings just because the first run is virtual
- do not judge the whole platform from one isolated trade result

## What To Do Next

After the first virtual session works, the usual next step is:

1. improve the playbook and data package based on the journal
2. run more virtual sessions
3. add support layers only when they clearly improve the workflow
4. move to live execution only after the operating model is stable

## Related Pages

- [Installation & Activation](installation-and-activation/)
- [MetaTrader 5 Integration](mt5-integration/)
- [AI Providers](ai-providers/)
- [Playbooks & Data Packages](playbooks-and-data/)
- [Sessions & AutoScan](sessions-and-autoscan/)
- [Risk Management](risk-management/)
- [Journal & Analytics](journal-and-analytics/)