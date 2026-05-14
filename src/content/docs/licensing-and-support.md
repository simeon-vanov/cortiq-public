---
title: Licensing & support
description: How Cortiq licensing works, where to get help, and which support routes are public versus private — the practical guide to staying operational.
sidebar:
  order: 10
---

This page covers how the Cortiq license model works and where to go when you need help. By the end you'll know how to activate, where to file bugs, and which routes are public versus private.

## What this is

Cortiq's license is machine-bound and tied to your local Windows install. After purchase, you activate the key inside the app, and the platform verifies validity and expiration against the Cortiq licensing service.

Public support runs through the Cortiq GitHub repository. Account-specific or license-sensitive issues go through direct email — do not post sensitive details in public issues.

## How it fits into Cortiq

| Surface | Where | Use it for |
| --- | --- | --- |
| License activation | `Settings` → `License` (in the app) | Activate, check status, re-activate. |
| Bug reports | GitHub Issues | Reproducible bugs and feature requests. |
| Usage questions | GitHub Discussions | How-to and workflow questions. |
| Installer | GitHub Releases | Current public Windows MSIX. |
| Sensitive issues | `support@cortiq.trade` | Activation, account, payment, security. |

## How to use it

### Activate or re-activate

Open `Settings` → `License` in the desktop app. Paste your `CRTQ-XXXX-XXXX-XXXX-XXXX` key and confirm. The activation is bound to this machine; treat moves to a different machine as a separate activation event unless support confirms otherwise.

For first-install activation, see [Installation & activation](installation-and-activation/).

### Open a bug or feature request

Use [GitHub Issues](https://github.com/simeon-vanov/cortiq-public/issues/new/choose) for anything reproducible. A good bug report includes the Cortiq version, what you did, what you expected, and what actually happened. Include screenshots when the UI matters.

Do not post license keys, account identifiers, or payment details in public issues.

### Ask a usage question

Use [GitHub Discussions](https://github.com/simeon-vanov/cortiq-public/discussions) for how-to questions, workflow patterns, or open-ended product feedback. Discussions are also where the community shares playbook design and configuration tips.

### Contact support privately

Email `support@cortiq.trade` for:

- Activation issues that require account access.
- License continuity, renewals, or transfers.
- Security disclosures.
- Anything that involves personal or payment-sensitive data.

## Reference

### Public support channels

| Channel | URL | Use it for |
| --- | --- | --- |
| Issues | https://github.com/simeon-vanov/cortiq-public/issues/new/choose | Reproducible bugs and feature requests. |
| Discussions | https://github.com/simeon-vanov/cortiq-public/discussions | Questions, workflow ideas, community conversation. |
| Releases | https://github.com/simeon-vanov/cortiq-public/releases/latest | Current public installer and release notes. |
| Email | support@cortiq.trade | Activation or account-specific help. |

### What not to post in public issues

- License keys.
- Personal payment data.
- Security vulnerabilities.
- Sensitive account identifiers.

## Common questions

**My license is expiring — what do I need to do?**
If your license is time-based, expect expiration tracking and renewal handling. Don't wait until a live-trading day to confirm license status — the time to renew is the day before, not the day of.

**I want to move Cortiq to a new machine.**
Email support before uninstalling. License transfers may or may not be self-service depending on your specific policy.

**Where do I find release notes?**
On the [Releases](https://github.com/simeon-vanov/cortiq-public/releases/latest) page. Each release has a notes section describing what changed.

## What to read next

1. [Installation & activation](installation-and-activation/) — first-install activation flow.
2. [FAQ](faq/) — fast answers to common evaluation, setup, and operational questions.
3. [First 30 minutes in Cortiq](first-30-minutes/) — what to do after activation.

## Related

- [Documentation map](documentation-map/)
- [Glossary](glossary/)
