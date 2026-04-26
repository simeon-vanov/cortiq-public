---
title: Cortiq Documentation
description: Official documentation for Cortiq — the Windows desktop platform pairing MetaTrader 5 execution with AI-driven trading decisions and risk control.
---

Cortiq is a Windows desktop trading platform that pairs MetaTrader 5 execution with AI decision-making and platform-level risk controls. These docs take you from evaluation through installation to daily operation.

:::danger
Trading risk exists in all markets. Cortiq is a trading tool, not a profit guarantee. Use conservative risk limits, test in virtual mode first, and review your own regulatory obligations before deploying live capital.
:::

## What this is

Cortiq runs one repeatable operating loop on your Windows machine. It gathers market context from MetaTrader 5, asks an AI provider for a decision under a structured playbook, validates that decision against your risk limits, executes on MT5, and journals every cycle for later review.

You stay in control of the strategy. Playbooks define the rules the AI must follow. Data packages define the context it sees. Risk limits define what trades it can take. Cortiq orchestrates the loop and keeps the boundaries you set hard.

These docs cover the full surface: what Cortiq is, how to install it, the screens you work in day-to-day, and how to design playbooks, run sessions, and audit results.

## How it fits into Cortiq

Every Cortiq feature is a component of one operating loop. The same loop runs whether you trade one symbol or twenty, on one account or several, against any of the supported AI providers.

```mermaid
flowchart LR
  A[Session config<br/>+ playbook] --> B(Gather market data<br/>via MT5)
  B --> C(Build prompt<br/>with data package)
  C --> D[AI provider]
  D --> E(Parse decision)
  E --> F{Risk approved?}
  F -->|yes| G(Execute on MT5)
  F -->|no| H[Reject + log]
  G --> I(Journal + analytics)
  H --> I
  I -.next cycle.-> B
```

*Cortiq's per-cycle loop: configured input becomes a structured prompt, the AI returns a decision, risk filters approve or reject, and journals capture every cycle.*

## Reference

| Area | What Cortiq does |
| --- | --- |
| Decision support | Sends structured market context to AI providers and receives trading decisions back in a controlled format. |
| Trade execution | Connects to a local MetaTrader 5 terminal to place, modify, and close trades. |
| Strategy control | Encodes your logic in playbooks and data packages so the AI executes inside the framework you define. |
| Risk control | Applies global and per-account risk limits before and during every trade. |
| Operations | Tracks sessions, journals, notifications, and account activity in one desktop workspace. |

:::note
This site shares its repository with Cortiq's GitHub Releases, Issues, and Discussions — keeping docs, the Windows installer, bug reports, and usage questions in one public place.
:::

## What to read next

1. [Getting started](getting-started/) — orientation if you're evaluating Cortiq, including who it's for and what the first day looks like.
2. [App navigation guide](app-navigation-guide/) — maps every doc to the matching sidebar entry and screen in the desktop app.
3. [Capability reference](capability-reference/) — plain-English summary of what each major function does for you.
4. [Installation & activation](installation-and-activation/) — the Windows install and license activation flow.
5. [First 30 minutes in Cortiq](first-30-minutes/) — guided walkthrough from install to your first safe virtual session.
6. [MetaTrader 5 integration](mt5-integration/) and [AI providers](ai-providers/) — read these before your first live setup.
7. [Playbooks & data packages](playbooks-and-data/), [Sessions & AutoScan](sessions-and-autoscan/), and [Risk management](risk-management/) — the building blocks of your operating model.
8. [Workspace & monitoring](workspace-and-monitoring/) — the day-to-day screens, dashboards, and review tools.

## Related

- [Documentation map](documentation-map/)
- [Feature overview](feature-overview/)
- [Glossary](glossary/)
- [Licensing & support](licensing-and-support/)
- [FAQ](faq/)
