---
status: current
title: Getting started
description: Who Cortiq is for, what you need before installing, and the recommended first-day path from evaluation to your first virtual session.
sidebar:
  order: 50
---

This page is the orientation step for prospective Cortiq operators. By the end you'll know whether Cortiq fits your workflow, what you need before installing, and the order in which to make the first day's decisions.

:::tip
Run your first session in virtual mode to inspect the workflow without sending broker orders. AI-provider usage still applies; one virtual run does not validate a strategy.
:::

## What this is

Cortiq connects instrument research, saved knowledge, historical replay, and trading through MetaTrader 5. Define reusable rules in playbooks, permitted inputs in data access policies, and limits in risk settings. Then choose Manual execution or authorize an Autonomous session.

Keep the inputs, selected rule versions, decisions, and trades together so you can inspect what happened. Autonomous assessments retain market understanding and opportunities; Manual sessions keep order decisions with you. The session Decision Log records decisions even when no trade occurs, while Journal shows recorded trades.

Reading this page makes the rest of the Start Here section actionable. After it, you can install with confidence and run a virtual session inside thirty minutes.

## Who this is for

Cortiq fits when you want to:

- Run trading logic through defined playbooks instead of ad-hoc prompts.
- Operate on Windows with MetaTrader 5 installed locally.
- Use one or more AI providers as part of a repeatable process — not a one-off chat session.
- Control execution with explicit session settings and risk rules.
- Review outcomes with journals, analytics, and session history.

Cortiq isn't the right tool when you trade on a non-MT5 broker, when your machine is not Windows, or when you want a fully unattended bot with no human in the loop — Cortiq always keeps you as the operator, not the algorithm.

## How it fits into Cortiq

Getting started sits at the front of the Start Here track. It precedes installation and the first hands-on walkthrough.

| Page | What it gives you |
| --- | --- |
| Getting started *(this page)* | Decision: is Cortiq for you, and what should you configure first. |
| [Installation & activation](/cortiq-public/installation-and-activation/) | The Windows install and license-key flow. |
| [First 30 minutes in Cortiq](/cortiq-public/first-30-minutes/) | A guided path from a fresh install to a running virtual session. |

## Prerequisites

Confirm these before installing:

- 64-bit Windows 10 or Windows 11.
- MetaTrader 5 installed on the same machine, for live trading.
- A Cortiq activation key — a one-time €199 license that activates up to two machines. See [Licensing & support](/cortiq-public/licensing-and-support/) for what it includes and the 14-day refund.
- A way to reach at least one supported AI provider — an API key, a local model endpoint, or a supported local agent (ACP) you can authenticate.
- A clear answer to whether your first run is virtual or live (the section below explains why this matters).

## Recommended first-day path

1. Install Cortiq and activate your license on the machine that will run it.
2. Connect your MT5 account and confirm the terminal is reachable.
3. Configure one AI provider and verify it responds successfully.
4. Create a playbook with a narrow scope — one symbol, one setup — instead of a broad strategy.
5. Start a virtual session before enabling live execution.
6. Review the journal and analytics output before scaling the strategy.

If you want this as a guided checklist with screenshots, read [First 30 minutes in Cortiq](/cortiq-public/first-30-minutes/).

## Reference

The highest-impact early decisions, and the criterion that picks each one:

| Decision | Why it matters | Default |
| --- | --- | --- |
| Live vs virtual first | Determines whether your first cycles affect the market or only your internal review. | Virtual until the playbook produces consistent journals over a few sessions. |
| Which AI transport | API uses a metered key; supported ACP uses your authenticated local agent and provider allowance; a local model runs on your own hardware. | API for minimum setup friction; supported ACP when your configured provider plan permits it. |
| Conservative vs aggressive risk limits | Sets how much freedom the session has before risk pauses or stops it. | Conservative — you can always relax limits after a green journal. |

## What to read next

1. [Capability reference](/cortiq-public/capability-reference/) — practical summary of what each major function does, before you start configuring.
2. [Installation & activation](/cortiq-public/installation-and-activation/) — the install and license-activation flow.
3. [First 30 minutes in Cortiq](/cortiq-public/first-30-minutes/) — step-by-step path to your first virtual session.
4. [MetaTrader 5 integration](/cortiq-public/mt5-integration/) and [AI providers](/cortiq-public/ai-providers/) — read before any live execution.

## Related

- [App navigation guide](/cortiq-public/app-navigation-guide/)
- [Feature overview](/cortiq-public/feature-overview/)
- [Playbooks & data access policies](/cortiq-public/playbooks-and-data/)
- [Risk management](/cortiq-public/risk-management/)
- [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/)
- [Glossary](/cortiq-public/glossary/)
