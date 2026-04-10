---
title: Getting Started
description: Who Cortiq is for, what you need before installing it, and the recommended first-day path.
---

## Who Cortiq Is For

Cortiq is designed for traders and operators who want a structured AI-assisted workflow around MetaTrader 5 rather than a loose collection of prompts, scripts, and disconnected tools.

It is a fit when you want to:

- Run trading logic through defined playbooks instead of ad hoc prompts
- Operate on Windows with MetaTrader 5 installed locally
- Use one or more AI providers as part of a repeatable trading process
- Control execution with explicit session settings and risk rules
- Review trade outcomes with journals, analytics, and session history

## Prerequisites

Before installing Cortiq, make sure you have the following:

- Windows 10 or Windows 11
- MetaTrader 5 installed on the same machine for live trading
- A Cortiq activation key
- Access to at least one supported AI provider or browser-based provider account
- A clear plan for whether your first run should be virtual or live

## Recommended First-Day Path

1. Install Cortiq and activate the license on the machine that will run it.
2. Connect your MT5 account and confirm the terminal is reachable.
3. Configure one AI provider and verify it can respond successfully.
4. Create a simple playbook with a narrow scope instead of a broad strategy.
5. Start a virtual session before enabling live execution.
6. Review the journal and analytics output before scaling the strategy.

If you want this as a guided operator checklist instead of a summary, read [First 30 Minutes in Cortiq](first-30-minutes/).

## What To Configure Early

The highest-leverage early decisions are usually these:

| Decision | Why It Matters |
| --- | --- |
| Live vs virtual first | Controls whether your first tests affect the market or only your internal review process |
| Single symbol vs AutoScan | Determines whether the AI focuses on one instrument or selects among candidates |
| Local tool or CLI route vs API route | Affects setup effort, traceability, and how the provider is reached from the desktop app |
| Conservative vs aggressive risk limits | Determines how much freedom the session has before it is paused or blocked |

## What To Read Next

- Read [Capability Reference](capability-reference/) if you want a practical overview of what each major function is for before you start configuring.
- Read [Installation & Activation](installation-and-activation/) when you are ready to install.
- Read [First 30 Minutes in Cortiq](first-30-minutes/) if you want a step-by-step path to your first virtual session.
- Read [MetaTrader 5 Integration](mt5-integration/) before attempting live execution.
- Read [AI Providers](ai-providers/) before choosing your provider mode.
- Read [Playbooks & Data Packages](playbooks-and-data/) before building your first serious session.
- Read [Workspace and Monitoring](workspace-and-monitoring/) once the first session is running so the Home, Dashboard, Journal, and review screens make sense.