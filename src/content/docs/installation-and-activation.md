---
title: Installation & activation
description: Where to download Cortiq, how to install the MSIX package, and how to activate your license key on the machine that will run it.
sidebar:
  order: 60
---

This page walks you through the four steps from buying a license to a running, activated Cortiq install. By the end you'll have the desktop app open and ready for [First 30 minutes in Cortiq](first-30-minutes/).

## What this is

Cortiq is distributed as a signed Windows MSIX package through GitHub Releases. Activation happens inside the app: you install once, paste your key once, and Cortiq binds the license to the machine.

The model is intentional. Cortiq is a local desktop product that talks to a local MT5 terminal, so the license is machine-bound rather than account-bound. If you move to a different machine, treat it as a separate activation.

## How it fits into Cortiq

| Step | Where | Outcome |
| --- | --- | --- |
| 1. Buy or receive a key | Checkout email or Cortiq team | You hold a `CRTQ-XXXX-XXXX-XXXX-XXXX` key. |
| 2. Download the MSIX | [GitHub Releases](https://github.com/simeon-vanov/cortiq-public/releases/latest) | `Cortiq.msix` on disk. |
| 3. Install the package | Windows MSIX installer | Cortiq appears in the Start menu. |
| 4. Activate | `Settings` → `License` inside the app | License state is `Active`. |

After activation, the rest of first-day setup happens in `Settings` → `MT5 Accounts`, `Settings` → `AI Providers`, and `Library` → `Sessions`.

## How to use it

### 1. Download the MSIX

The current public build lives in GitHub Releases:

- Latest release page: https://github.com/simeon-vanov/cortiq-public/releases/latest
- Direct MSIX link: https://github.com/simeon-vanov/cortiq-public/releases/latest/download/Cortiq.msix

Download the `.msix` file to the Windows machine that will run Cortiq. Install it on the same machine as your MetaTrader 5 terminal if you intend to trade live.

### 2. Install the package

Double-click the MSIX. Windows shows the standard signed-package install dialog. Confirm and let the install complete.

![Windows MSIX installer mid-install showing Cortiq.msix](/images/screenshots/installation-and-activation__msix-installer.png)
<!-- SCREENSHOT-NEEDED: installation-and-activation__msix-installer.png – Windows MSIX installer mid-install showing Cortiq.msix -->

Cortiq now appears in the Start menu.

### 3. Open Cortiq and activate

Launch the app. On a fresh install you'll land on `Settings` → `License`. Paste the key from your purchase email — Cortiq validates it against the licensing backend and binds the activation to this machine.

![Cortiq license-activation dialog with a placeholder CRTQ key](/images/screenshots/installation-and-activation__activation-dialog.png)
<!-- SCREENSHOT-NEEDED: installation-and-activation__activation-dialog.png – Cortiq's license-activation dialog with a placeholder key visible (CRTQ-XXXX-XXXX-XXXX-XXXX). Use a fake key only -->

When the dialog reports `Active`, activation is complete and Cortiq stores the state locally.

### 4. Move on to first-day setup

The next pages to read:

- [MetaTrader 5 integration](mt5-integration/) — connect Cortiq to your MT5 terminal.
- [AI providers](ai-providers/) — configure at least one provider.
- [First 30 minutes in Cortiq](first-30-minutes/) — guided walkthrough to a virtual session.

## Reference

| Field | Where | Notes |
| --- | --- | --- |
| Key format | `CRTQ-XXXX-XXXX-XXXX-XXXX` | 16 hex chars in four groups; case-insensitive. |
| License page | `Settings` → `License` | Shows current state, expiration, and re-activation form. |
| MSIX URL | `releases/latest/download/Cortiq.msix` | Always points at the current public build. |

## Common questions

**Activation fails — what's wrong?**

Check, in order:

- The key was copied exactly as issued (no leading or trailing whitespace).
- The machine has internet access for license verification.
- The release you installed is current.
- The key hasn't expired or been consumed under a different policy.

If none of those resolve it, continue to [Licensing & support](licensing-and-support/).

**I'm changing machines — what happens to my license?**

Treat the move as a separate activation event. Contact support unless your specific license policy allows self-service transfers — there's no automatic deactivation when you uninstall on the old machine.

**Does Cortiq need to be installed alongside MT5?**

Yes, on the same Windows machine, if you intend to trade live. The MT5 bridge uses local ZeroMQ and assumes both processes share the same OS.

## What to read next

1. [First 30 minutes in Cortiq](first-30-minutes/) — your next stop after activation.
2. [MetaTrader 5 integration](mt5-integration/) — wire in MT5 before any trading.
3. [AI providers](ai-providers/) — configure at least one provider.

## Related

- [Getting started](getting-started/)
- [Licensing & support](licensing-and-support/)
- [FAQ](faq/)
