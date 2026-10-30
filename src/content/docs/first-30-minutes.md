---
status: current
title: First 30 minutes in Cortiq
description: A guided 30-minute path from a fresh activation to a clean first virtual session, with checkpoints for MT5, providers, playbook, and risk settings.
sidebar:
  order: 70
---

This page takes you from a freshly activated Cortiq install to a running virtual session in roughly thirty minutes. By the end you'll have a configured virtual session whose decisions and recorded inputs you can inspect. A valid setup does not guarantee a trade during the walkthrough.

:::caution
Stay in virtual mode for this entire walkthrough. The goal is to verify that the workflow behaves correctly end-to-end, not to make money on the first day. Live execution comes after several green virtual sessions.
:::

## What this is

The first thirty minutes are an integration test of your setup, not a strategy test. The walkthrough hits each external dependency once — MT5 bridge, AI provider, playbook, data access policy, session, journal — so any broken link surfaces fast and in isolation.

The strategy you build here is intentionally narrow: one symbol, one or two timeframes, one clear setup and invalidation rule. Use a focused playbook so you can inspect the recorded inputs and decisions on day one.

## How it fits into Cortiq

| You are here | Comes before | Comes after |
| --- | --- | --- |
| First 30 minutes *(this page)* | [Installation & activation](/cortiq-public/installation-and-activation/) | Iteration in [Sessions](/cortiq-public/sessions/) and [Playbooks & data access policies](/cortiq-public/playbooks-and-data/) |

By the end of this walkthrough you'll have:

- Cortiq installed and activated.
- MetaTrader 5 connected on the same machine.
- One AI provider configured and responding.
- One simple playbook and a focused data access policy.
- One virtual session running with decisions and recorded inputs you can inspect.

## How to use it

### Minute 0–5 — Install and activate

1. Download the current Cortiq release from [GitHub Releases](https://github.com/simeon-vanov/cortiq-public/releases/latest).
2. Run `Cortiq-win-Setup.exe` on the machine that will run Cortiq. Verify that Windows identifies **Decode The Trade Ltd** as the publisher. If SmartScreen still shows a protection screen, choose **More info → Run anyway** only after the publisher matches.
3. Open the app and complete license activation in `Setup` → `License`.

If activation fails, stop and resolve it before moving on — see [Installation & activation](/cortiq-public/installation-and-activation/).

### Minute 5–10 — Confirm MetaTrader 5 access

1. Open MetaTrader 5 and confirm the correct terminal and account are running.
2. Attach the `ZmqFacade` Expert Advisor to a chart with algorithmic trading allowed.
3. In Cortiq, open `Setup` → `MT5 Accounts` and confirm the right account is configured.
4. Watch the topbar MT5 health indicator turn green.

If the indicator stays red, see [MetaTrader 5 integration](/cortiq-public/mt5-integration/) before continuing.

### Minute 10–15 — Configure one AI provider

1. Pick one provider for the first run — ChatGPT, Gemini, Claude, an OpenAI-compatible endpoint, or a local model.
2. Choose a transport: the API (a metered key, least setup), supported ACP (using your authenticated local agent and provider allowance), or a local model on your own hardware.
3. Confirm the provider's readiness badge is green in `Setup` → `AI Providers` — a session won't start a provider reported as unavailable.

Select both provider and supported transport explicitly. Fix an unavailable route before continuing; Cortiq does not silently substitute another provider. See [AI providers](/cortiq-public/ai-providers/) if the choice isn't obvious.

### Minute 15–20 — Create a narrow strategy setup

Build a focused playbook and data policy for your idea. Use the playbook's execution-policy generation and compatibility review, then save the reviewed configuration:

- One symbol — the single instrument this session will trade.
- One or two important timeframes (not a stack of six).
- One setup rule, one invalidation rule.

A narrow scope keeps the recorded inputs and decisions readable. See [Playbooks & data access policies](/cortiq-public/playbooks-and-data/) for a refresher.

### Minute 20–25 — Create the first session

Open **Tools** → **Risk Management** first. Review the applied global and account limits, then select **Confirm current limits reviewed**. Home's setup checklist tracks that acknowledgement separately from configuring MT5 and an AI provider.

Create one session with these defaults:

- One symbol.
- One MT5 account.
- Autonomous session type for this walkthrough; use the Manual guide if you want to place orders yourself.
- The provider you configured above.
- Your simple playbook.
- Your focused data access policy.
- Virtual mode enabled.
- Conservative risk settings — yes, even though the session is virtual.

Conservative risk settings on a virtual session matter because you're rehearsing the live operating model. The first time you flip to live, the risk pause behavior must already feel familiar.

### Minute 25–30 — Run and review

1. Start the session.
2. Let the Autonomous session complete an assessment. A valid assessment can leave the session waiting without entering a trade.
3. Open the session's **Decision Log** and inspect the AI's reasoning and recorded decisions. Open **Journal** to inspect trades once the session has recorded one.
4. Look for clarity, not perfection.

The first question is *did this workflow behave in a way I can understand and trust enough to improve?* — not *did it make money?*

## Reference

### What good first-run success looks like

| Signal | What it tells you |
| --- | --- |
| Topbar MT5 indicator stays green | Bridge is healthy. |
| `Provider Health` shows successful responses | AI provider is responding to Cortiq. |
| Decision Log records are readable | You can inspect the session's inputs and decisions, even before a trade occurs. |
| Risk panel shows the configured limits | Risk validators are wired up. |
| Session moves through `Running` cleanly | Operating loop is intact. |

### What to avoid in the first 30 minutes

- Going live immediately.
- Using multiple providers when one suffices.
- Skipping risk settings because the first run is virtual.
- Judging the platform from one isolated trade result.

## What to read next

1. [Sessions](/cortiq-public/sessions/) — the next layer of session configuration once the basic loop is green.
2. [Playbook design guide](/cortiq-public/trading-cycle/playbook-design/) — raises the quality of your second playbook.
3. [Journal & analytics](/cortiq-public/journal-and-analytics/) — what to look for once you have several sessions to compare.
4. [Risk management](/cortiq-public/risk-management/) — before any live execution.

## Screenshots

This development capture uses isolated demo data. Complete each setup requirement in your own installation.

![Home setup checklist showing license, MT5, provider, and risk-review readiness](/cortiq-public/images/screenshots/workspace-and-monitoring__home.png)

*The example has only license activation complete. Connection setup and risk acknowledgement are separate requirements.*

## Related

- [Installation & activation](/cortiq-public/installation-and-activation/)
- [MetaTrader 5 integration](/cortiq-public/mt5-integration/)
- [AI providers](/cortiq-public/ai-providers/)
- [Playbooks & data access policies](/cortiq-public/playbooks-and-data/)
- [Glossary](/cortiq-public/glossary/)
