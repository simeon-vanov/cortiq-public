---
status: current
title: Installation & activation
description: Buy a Cortiq license, run the Windows installer past the SmartScreen notice, and activate your key — plus how license enforcement and auto-updates work.
sidebar:
  order: 60
---

This page takes you from buying a license to a running, activated Cortiq install. By the end you'll have the desktop app open and ready for [First 30 minutes in Cortiq](/cortiq-public/first-30-minutes/).

## What this is

Cortiq is a one-time purchase: **€199**, with all future Cortiq desktop updates included and no Cortiq subscription. One key activates up to **two machines**. Purchases are processed by Stripe and the key is emailed to you instantly. If Cortiq isn't for you, there's a **14-day refund**. Broker fees and AI-provider usage remain yours; unrelated products or services may be sold separately.

The app is distributed as a Windows installer — `Cortiq-win-Setup.exe` — through GitHub Releases. The installer is signed by **Decode The Trade Ltd**. Windows SmartScreen may still show a protection screen while a new release builds reputation; verify the publisher before continuing. Activation happens inside the app: you install once and paste your key once.

## How it fits into Cortiq

| Step | Where | Outcome |
| --- | --- | --- |
| 1. Buy a license | [cortiq.trade pricing](https://cortiq.trade/#pricing) | A `CRTQ-XXXX-XXXX-XXXX-XXXX` key emailed to you. |
| 2. Download the installer | [GitHub Releases](https://github.com/simeon-vanov/cortiq-public/releases/latest) | `Cortiq-win-Setup.exe` on disk. |
| 3. Run the installer | `Cortiq-win-Setup.exe` (click past SmartScreen) | Cortiq appears in the Start menu. |
| 4. Activate | `Setup` → `License` inside the app | License state is active. |

After activation, the rest of first-day setup happens in `Setup` → `MT5 Accounts`, `Setup` → `AI Providers`, and `Library` → `Sessions`.

## How to use it

### 1. Buy a license

Buy from the pricing section at [cortiq.trade](https://cortiq.trade/#pricing). Checkout runs through Stripe; the `CRTQ-XXXX-XXXX-XXXX-XXXX` key arrives by email straight after payment. The same key activates up to two machines, so you don't need a second purchase for a laptop and a desktop.

### 2. Download the installer

The current public build lives in GitHub Releases:

- Latest release page: https://github.com/simeon-vanov/cortiq-public/releases/latest
- Direct download: https://github.com/simeon-vanov/cortiq-public/releases/latest/download/Cortiq-win-Setup.exe

Download `Cortiq-win-Setup.exe` to the Windows machine that will run Cortiq. Install it on the same machine as your MetaTrader 5 terminal if you intend to trade live.

### 3. Run the installer

Double-click `Cortiq-win-Setup.exe`. Confirm that Windows shows **Decode The Trade Ltd** as the verified publisher. SmartScreen may still show a protection screen while a new release builds reputation; if the publisher matches, choose **More info → Run anyway** to continue. The installer is per-user and needs no admin rights; it installs in a couple of clicks and adds a Start-menu shortcut.

Check the [release page](https://github.com/simeon-vanov/cortiq-public/releases/latest) for the version, release notes, and download assets. Verify the installer's publisher before running it.

<!-- SCREENSHOT-NEEDED: installation-and-activation__smartscreen.png – Windows SmartScreen protection notice for the signed Cortiq-win-Setup.exe, showing Decode The Trade Ltd and the Run anyway button (OS dialog, captured manually) -->

Cortiq now appears in the Start menu.

### 4. Open Cortiq and activate

Launch the app and open `Setup` → `License`. Paste the key from your purchase email — Cortiq validates it against the licensing backend and records the activation on this machine. There's an optional email field that supports the multi-machine activation.

When the License page shows the activation as active, you're done. Cortiq stores the state locally.

### 5. Move on to first-day setup

The next pages to read:

- [MetaTrader 5 integration](/cortiq-public/mt5-integration/) — connect Cortiq to your MT5 terminal.
- [AI providers](/cortiq-public/ai-providers/) — configure at least one provider.
- [First 30 minutes in Cortiq](/cortiq-public/first-30-minutes/) — guided walkthrough to a virtual session.

## How license enforcement works

Cortiq checks your license locally and re-verifies it against the backend periodically. The re-verification is **fail-open with a 14-day grace window**: if the backend is briefly unreachable, an otherwise-valid license keeps working as long as it was successfully verified within the last 14 days. After 14 days with no successful re-verify, sessions are blocked until verification succeeds again.

A valid license is required to **start any MT5-bound session** — including virtual and broker-demo sessions. Starting backtests, research runs, and managed data-file builds also requires a valid license. When the license is effectively invalid, Cortiq shows a non-dismissible red banner.

:::note
Prop-firm evaluation accounts run on the broker's demo server. They still need a valid license to start a session. Backtests also require a valid license.
:::

## How updates work

Cortiq checks the public release feed and downloads available updates in the background. A staged update waits for you to select `Update to <version>` in the top bar. Applying it restarts Cortiq and requires a safe window with no active session or open trade. Downloading an update does not apply it automatically.

## Reference

| Field | Where | Notes |
| --- | --- | --- |
| Price | [cortiq.trade pricing](https://cortiq.trade/#pricing) | €199 one-time; all future Cortiq desktop updates; 14-day refund. |
| Machines per key | `Setup` → `License` | One key activates up to two machines. |
| Key format | `CRTQ-XXXX-XXXX-XXXX-XXXX` | Four groups; activated on first launch. |
| License page | `Setup` → `License` | Shows current state and the activation form. |
| Installer | `releases/latest/download/Cortiq-win-Setup.exe` | Velopack installer; always the current build. |
| Enforcement | — | Fail-open re-verify, 14-day grace; sessions, backtests, research starts, and data-file builds are licensed. |

## Common questions

**How many machines can I run on one key?**

Up to two. Activate the second machine the same way — paste the key in `Setup` → `License`.

**Activation fails — what's wrong?**

Check, in order:

- The key was copied exactly as issued (no leading or trailing whitespace).
- The machine has internet access for license verification.
- The release you installed is current.
- You haven't already activated two machines on this key.

If none of those resolve it, continue to [Licensing & support](/cortiq-public/licensing-and-support/).

**Can I get a refund?**

Yes. Email `support@cortiq.trade` within 14 days of purchase, or use the [online withdrawal form](https://cortiq.trade/legal/withdrawal/). See [Licensing & support](/cortiq-public/licensing-and-support/).

**Does Cortiq need to be installed alongside MT5?**

Yes, on the same Windows machine, if you intend to trade live. The MT5 bridge uses local ZeroMQ and assumes both processes share the same OS.

## What to read next

1. [First 30 minutes in Cortiq](/cortiq-public/first-30-minutes/) — your next stop after activation.
2. [MetaTrader 5 integration](/cortiq-public/mt5-integration/) — wire in MT5 before any trading.
3. [AI providers](/cortiq-public/ai-providers/) — configure at least one provider.

## Related

- [Getting started](/cortiq-public/getting-started/)
- [Licensing & support](/cortiq-public/licensing-and-support/)
- [FAQ](/cortiq-public/faq/)
