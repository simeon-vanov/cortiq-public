---
title: First 30 minutes in Cortiq
description: A guided 30-minute path from a fresh activation to a clean first virtual session, with checkpoints for MT5, providers, playbook, and risk settings.
sidebar:
  order: 70
---

This page takes you from a freshly activated Cortiq install to a running virtual session in roughly thirty minutes. By the end you'll have a session that's actually trading on a chart — without sending real orders.

:::caution
Stay in virtual mode for this entire walkthrough. The goal is to verify that the workflow behaves correctly end-to-end, not to make money on the first day. Live execution comes after several green virtual sessions.
:::

## What this is

The first thirty minutes are an integration test of your setup, not a strategy test. The walkthrough hits each external dependency once — MT5 bridge, AI provider, playbook, data package, session, journal — so any broken link surfaces fast and in isolation.

The strategy you build here is intentionally narrow: one symbol, one or two timeframes, one clear setup and invalidation rule. A simple playbook produces a readable journal, which is the only thing you actually need on day one.

## How it fits into Cortiq

| You are here | Comes before | Comes after |
| --- | --- | --- |
| First 30 minutes *(this page)* | [Installation & activation](installation-and-activation/) | Iteration in [Sessions & AutoScan](sessions-and-autoscan/) and [Playbooks & data packages](playbooks-and-data/) |

By the end of this walkthrough you'll have:

- Cortiq installed and activated.
- MetaTrader 5 connected on the same machine.
- One AI provider configured and responding.
- One simple playbook and a focused data package.
- One virtual session running and producing journal output.

## How to use it

### Minute 0–5 — Install and activate

1. Download the current Cortiq release from [GitHub Releases](https://github.com/simeon-vanov/cortiq-public/releases/latest).
2. Install the MSIX package on the machine that will run Cortiq.
3. Open the app and complete license activation in `Settings` → `License`.

If activation fails, stop and resolve it before moving on — see [Installation & activation](installation-and-activation/).

### Minute 5–10 — Confirm MetaTrader 5 access

1. Open MetaTrader 5 and confirm the correct terminal and account are running.
2. Attach the `ZmqFacade` Expert Advisor to a chart with algorithmic trading allowed.
3. In Cortiq, open `Settings` → `MT5 Accounts` and confirm the right account is configured.
4. Watch the topbar MT5 health indicator turn green.

If the indicator stays red, see [MetaTrader 5 integration](mt5-integration/) before continuing.

### Minute 10–15 — Configure one AI provider

1. Pick one provider for the first run — ChatGPT, Grok, Gemini, or Claude.
2. Choose browser mode if you already pay for the provider's web product; choose API mode if you want minimum setup friction with an API key.
3. Verify the provider responds successfully through `Settings` → `AI Providers`.

Simplicity beats flexibility on day one. You can add a fallback provider later. See [AI providers](ai-providers/) if the choice isn't obvious.

### Minute 15–20 — Create a narrow strategy setup

Build the smallest playbook and data package that still expresses your idea:

- One symbol (no AutoScan).
- One or two important timeframes (not a stack of six).
- One setup rule, one invalidation rule.

A narrow scope produces journals you can actually read. See [Playbooks & data packages](playbooks-and-data/) for a refresher.

### Minute 20–25 — Create the first session

Create one session with these defaults:

- Fixed symbol mode.
- One MT5 account.
- The provider you configured above.
- Your simple playbook.
- Your focused data package.
- Virtual mode enabled.
- Conservative risk settings — yes, even though the session is virtual.

Conservative risk settings on a virtual session matter because you're rehearsing the live operating model. The first time you flip to live, the risk pause behavior must already feel familiar.

### Minute 25–30 — Run and review

1. Start the session.
2. Let it complete one or more cycles.
3. Open the journal and read the AI's reasoning, the decision, and the simulated outcome.
4. Look for clarity, not perfection.

The first question is *did this workflow behave in a way I can understand and trust enough to improve?* — not *did it make money?*

## Reference

### What good first-run success looks like

| Signal | What it tells you |
| --- | --- |
| Topbar MT5 indicator stays green | Bridge is healthy. |
| `Provider Health` shows successful responses | AI provider is configured correctly. |
| Journal entries are readable | Playbook and data package are sensible. |
| Risk panel shows the configured limits | Risk validators are wired up. |
| Session moves through `Running` cleanly | Operating loop is intact. |

### What to avoid in the first 30 minutes

- Going live immediately.
- Using multiple providers when one suffices.
- Starting with a broad multi-symbol AutoScan setup.
- Skipping risk settings because the first run is virtual.
- Judging the platform from one isolated trade result.

## What to read next

1. [Sessions & AutoScan](sessions-and-autoscan/) — the next layer of session configuration once the basic loop is green.
2. [Playbook design guide](trading-cycle/playbook-design/) — raises the quality of your second playbook.
3. [Journal & analytics](journal-and-analytics/) — what to look for once you have several sessions to compare.
4. [Risk management](risk-management/) — before any live execution.

## Related

- [Installation & activation](installation-and-activation/)
- [MetaTrader 5 integration](mt5-integration/)
- [AI providers](ai-providers/)
- [Playbooks & data packages](playbooks-and-data/)
- [Glossary](glossary/)
