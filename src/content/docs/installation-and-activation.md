---
title: Installation and Activation
description: The practical Windows download, install, and license activation flow for Cortiq.
---

## Installation Flow

The Cortiq onboarding path is intentionally simple:

1. Purchase or receive an activation key.
2. Download the latest public Windows release.
3. Install the desktop application on the target machine.
4. Open Cortiq and activate the license.

## Download Source

Public builds are distributed through GitHub Releases in the Cortiq public repository.

- Latest release page: https://github.com/simeon-vanov/cortiq-public/releases/latest
- Direct MSIX download: https://github.com/simeon-vanov/cortiq-public/releases/latest/download/Cortiq.msix

## Activation Model

Cortiq uses a machine-bound activation model.

- Each license key is activated on a specific machine.
- The application verifies the key against the Cortiq licensing backend.
- License validity and expiration are checked as part of the activation and verification flow.

That model is designed for a desktop trading product that runs locally and interacts with a local MT5 terminal.

## Step-By-Step Setup

### 1. Install the Windows package

Download the current MSIX build from the latest public release and install it on the Windows machine that will run Cortiq.

### 2. Open the desktop application

Start Cortiq after installation and navigate to the licensing or activation area.

### 3. Paste the activation key

Use the key delivered to the checkout email address or provided by the Cortiq team.

### 4. Complete activation

Once the backend validates the key and the current machine identity, Cortiq stores the activation state locally and continues with normal use.

## Practical Notes

- Install Cortiq on the same machine where MetaTrader 5 will run if you intend to trade live.
- Keep the purchase email available during installation so the activation key is easy to copy.
- If you move to a different machine later, treat that as a separate activation event unless support confirms otherwise.

## If Activation Fails

Check these first:

- The key was copied exactly as issued
- The machine has internet access for license verification
- You are using the correct email and release build
- The key has not expired or already been consumed under a different policy

If those checks do not resolve the problem, continue to [Licensing & Support](licensing-and-support/).