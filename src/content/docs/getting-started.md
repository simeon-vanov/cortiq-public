---
title: Getting started
description: Who Cortiq is for, what you need before installing, and the recommended first-day path from evaluation to your first virtual session.
sidebar:
  order: 50
---

This page is the orientation step for prospective Cortiq operators. By the end you'll know whether Cortiq fits your workflow, what you need before installing, and the order in which to make the first day's decisions.

:::tip
Plan your first session in virtual mode. It validates your playbook against today's live market without sending orders to MT5, and it costs nothing to discard.
:::

## What this is

Cortiq is a structured AI-assisted trading workflow around MetaTrader 5. The platform is opinionated: it expects you to define your strategy in playbooks, your inputs in data packages, and your guardrails in risk limits — and then it runs the loop on your behalf.

If you've been stitching together AI prompts, scripts, and chat windows, Cortiq replaces that with one repeatable surface: every cycle uses the same playbook, sees a controlled context, runs through risk validation, and ends in a journal entry. That structure is what makes results comparable across sessions.

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
| [Installation & activation](installation-and-activation/) | The Windows install and license-key flow. |
| [First 30 minutes in Cortiq](first-30-minutes/) | A guided path from a fresh install to a running virtual session. |

## Prerequisites

Confirm these before installing:

- Windows 10 or Windows 11.
- MetaTrader 5 installed on the same machine, for live trading.
- A Cortiq activation key.
- Access to at least one supported AI provider — either an API key or a logged-in browser account.
- A clear answer to whether your first run is virtual or live (the section below explains why this matters).

## Recommended first-day path

1. Install Cortiq and activate your license on the machine that will run it.
2. Connect your MT5 account and confirm the terminal is reachable.
3. Configure one AI provider and verify it responds successfully.
4. Create a playbook with a narrow scope — one symbol, one setup — instead of a broad strategy.
5. Start a virtual session before enabling live execution.
6. Review the journal and analytics output before scaling the strategy.

If you want this as a guided checklist with screenshots, read [First 30 minutes in Cortiq](first-30-minutes/).

## Reference

The four highest-leverage early decisions, and the criterion that picks each one:

| Decision | Why it matters | Default |
| --- | --- | --- |
| Live vs virtual first | Determines whether your first cycles affect the market or only your internal review. | Virtual until the playbook produces consistent journals over a few sessions. |
| Single symbol vs AutoScan | Single keeps the AI focused; AutoScan lets it choose among candidates per cycle. | Single, until the playbook is stable. |
| Browser mode vs API mode | Browser mode automates a logged-in provider window; API mode uses REST and an API key. | Browser if you already pay for the provider's web product; API if you want minimum setup friction. |
| Conservative vs aggressive risk limits | Sets how much freedom the session has before risk pauses or stops it. | Conservative — you can always relax limits after a green journal. |

## What to read next

1. [Capability reference](capability-reference/) — practical summary of what each major function does, before you start configuring.
2. [Installation & activation](installation-and-activation/) — the install and license-activation flow.
3. [First 30 minutes in Cortiq](first-30-minutes/) — step-by-step path to your first virtual session.
4. [MetaTrader 5 integration](mt5-integration/) and [AI providers](ai-providers/) — read before any live execution.

## Related

- [App navigation guide](app-navigation-guide/)
- [Feature overview](feature-overview/)
- [Playbooks & data packages](playbooks-and-data/)
- [Risk management](risk-management/)
- [Workspace & monitoring](workspace-and-monitoring/)
- [Glossary](glossary/)
