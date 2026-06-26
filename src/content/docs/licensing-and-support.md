---
title: Licensing & support
description: How the Cortiq one-time license works — two machines, lifetime v1.x updates, 14-day refund — plus where to file bugs and get help.
sidebar:
  order: 10
---

This page covers how the Cortiq license works and where to go when you need help. By the end you'll know what the license includes, how activation and re-verification behave, and which support routes are public versus private.

## What this is

Cortiq is a one-time purchase. **€199 buys a permanent license with lifetime updates across the v1.x line.** One key activates up to **two machines** — for example a desktop and a laptop. There is no subscription and no per-machine renewal.

The license controls whether the app can start live sessions, not whether the app runs. You can install, explore, design playbooks, and run [backtests](/cortiq-public/backtesting/) without a valid license. Any session that binds to MetaTrader 5 — including virtual and broker-demo sessions — requires a valid license.

Public support runs through the Cortiq GitHub repository. Account-specific or license-sensitive issues go through direct email — never post sensitive details in a public issue.

## How it fits into Cortiq

| Surface | Where | Use it for |
| --- | --- | --- |
| License activation | `Settings` → `License` (in the app) | Activate, check status, re-activate. |
| Purchase | [`cortiq.trade/#pricing`](https://cortiq.trade/#pricing) | Buy a key; it arrives by email. |
| Bug reports | GitHub Issues | Reproducible bugs and feature requests. |
| Usage questions | GitHub Discussions | How-to and workflow questions. |
| Installer | GitHub Releases | Current public Windows installer (`Cortiq-win-Setup.exe`). |
| Sensitive issues | `support@cortiq.trade` | Activation, account, payment, security. |

## How to use it

### Buy and activate

Purchase at [`cortiq.trade/#pricing`](https://cortiq.trade/#pricing). Checkout runs through Stripe, and your `CRTQ-XXXX-XXXX-XXXX-XXXX` key is emailed to you immediately.

Open `Settings` → `License` in the desktop app, paste the key, and confirm. The key activates on first launch and can be activated on a second machine — two activations total.

For the full first-install walkthrough, see [Installation & activation](/cortiq-public/installation-and-activation/).

### Understand the license gate

Cortiq checks license validity two ways: a local check on the stored record, and a periodic re-verify against the licensing backend.

The re-verify is **fail-open with a 14-day grace window**. If the backend is temporarily unreachable, an otherwise-valid license keeps working for 14 days since its last successful verification. After 14 days without a successful re-verify, the license is treated as invalid and live sessions are blocked.

:::caution
Only [backtests](/cortiq-public/backtesting/) run without a valid license. Every session that binds to MetaTrader 5 — live, virtual, or on a broker-demo server — requires one. The broker-demo exemption was removed on 2026-06-25 because prop-firm accounts run on demo servers and slipped through.
:::

When the license is effectively invalid, the app shows a **non-dismissible red banner** until you re-activate or connectivity restores a valid verification. The banner copy is static; it carries no operator or AI text.

### Get a refund

Cortiq offers a **14-day refund**. If Cortiq isn't a fit within 14 days of purchase, email `support@cortiq.trade` and the Stripe payment is refunded.

### Open a bug or feature request

Use [GitHub Issues](https://github.com/simeon-vanov/cortiq-public/issues/new/choose) for anything reproducible. A good bug report includes the Cortiq version, what you did, what you expected, and what actually happened. Include screenshots when the UI matters.

Do not post license keys, account identifiers, or payment details in public issues.

### Ask a usage question

Use [GitHub Discussions](https://github.com/simeon-vanov/cortiq-public/discussions) for how-to questions, workflow patterns, or open-ended product feedback. Discussions are also where the community shares playbook design and configuration tips.

### Contact support privately

Email `support@cortiq.trade` for:

- Activation issues that require account access.
- Refund requests within the 14-day window.
- Moving the license between machines.
- Security disclosures.
- Anything that involves personal or payment-sensitive data.

## Reference

### What the license includes

| Item | Detail |
| --- | --- |
| Price | €199, one time. |
| Updates | Lifetime updates across the v1.x line. |
| Machines | One key, up to two activations. |
| Refund | 14 days from purchase, via Stripe. |
| Key shape | `CRTQ-XXXX-XXXX-XXXX-XXXX`. |
| Grace window | 14 days fail-open between successful re-verifications. |
| License-free path | Backtests only. |

### Public support channels

| Channel | URL | Use it for |
| --- | --- | --- |
| Issues | https://github.com/simeon-vanov/cortiq-public/issues/new/choose | Reproducible bugs and feature requests. |
| Discussions | https://github.com/simeon-vanov/cortiq-public/discussions | Questions, workflow ideas, community conversation. |
| Releases | https://github.com/simeon-vanov/cortiq-public/releases/latest | Current public installer and release notes. |
| Email | support@cortiq.trade | Activation, refund, or account-specific help. |

### What not to post in public issues

- License keys.
- Personal payment data.
- Security vulnerabilities.
- Sensitive account identifiers.

## Common questions

**Can I run Cortiq on two machines?**
Yes. One key activates up to two machines. Activate on each from `Settings` → `License`.

**My red banner won't go away.**
The license is effectively invalid — either not activated, or more than 14 days since the last successful backend verification. Re-activate from `Settings` → `License`. If activation succeeds and the banner persists, email support.

**Can I run a session if the licensing backend is down?**
Yes, within the 14-day grace window since your last successful verification. Backtests never need a valid license.

**I want a refund.**
Email `support@cortiq.trade` within 14 days of purchase. The Stripe charge is refunded.

**Where do I find release notes?**
On the [Releases](https://github.com/simeon-vanov/cortiq-public/releases/latest) page. Each release has a notes section describing what changed.

## What to read next

1. [Installation & activation](/cortiq-public/installation-and-activation/) — first-install activation flow.
2. [Backtesting](/cortiq-public/backtesting/) — the one path that needs no license.
3. [FAQ](/cortiq-public/faq/) — fast answers to common evaluation, setup, and operational questions.

## Related

- [Documentation map](/cortiq-public/documentation-map/)
- [Glossary](/cortiq-public/glossary/)
