---
status: current
title: Activity
description: Cortiq's in-app notification inbox — background, trade, risk, health, and permission events with severity-gated toasts and actionable permission cards.
sidebar:
  order: 110
---

Activity is the inbox inside the Cortiq app where background processes, trades, risk events, MT5 health, and permission requests post durable, click-through notifications. It is in-app only — separate from the Windows toasts and X / Telegram posts that broadcast your trades. This page covers what lands there, how toasts are gated, and how permission requests become actionable cards.

## What this is

Background services in Cortiq generate events all the time: an artifact finished generating, a session got risk-paused, the MT5 feed dropped, an agent needs a capability. Activity collects those into one persisted, filterable list with an unread badge.

Each message is durable — it stays in the inbox until you read or clear it — and most carry a deep link to the artifact or page they're about. Higher-severity events also pop a toast so you notice them in the moment; routine ones land quietly with an unread count.

Open it from **Activity** in the sidebar's `Library` section. The route is `/system-messages`.

## How it fits into Cortiq

Cortiq has three notification surfaces; this is one of them.

| Surface | Where it goes | What it carries |
| --- | --- | --- |
| Activity | In-app inbox (`/system-messages`) | Background, trade, risk, health, and permission events. |
| Windows toasts | Desktop notification center | Trade events and trade-approval prompts. |
| X / Telegram | External channels | Public or private broadcast of trade events. |

Activity is the only one of the three that is fully in-app and the only one that carries permission and background-process events. See [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) for the external channels.

## How to use it

### Read and filter the inbox

The inbox lists messages newest-first. Filter by **All**, **Unread**, or a category (`ArtifactGeneration`, `Risk`, `Health`, `Trade`, `Permission`). Click a row to mark it read and jump to its linked page. Each row has a delete control; the toolbar offers **mark all read** and **clear all**.

### The unread badge

The `Activity` sidebar entry carries an unread-count badge. It updates as messages arrive and as you read them, so the count reflects what's actually waiting.

### Toast gating

Not every message interrupts you. Severity decides:

- **Warning** and **Error** messages toast automatically.
- **Info** and **Success** messages land silently in the inbox with an unread badge.

A few key events override this to toast a success — for example, a finished preparation package — but the default keeps routine activity quiet.

### Actionable permission cards

Most messages are informational. Applicable mutation approvals and residual provider permission requests can appear as actionable cards. Read the requested action and its scope before allowing or denying it. The provider's configured permission mode and the tool's own mutation policy decide when a request is raised; ordinary web access does not always prompt.

The [Copilot](/cortiq-public/cortiq-copilot/) dock and Activity can show the same pending request. Resolve it through one surface. A provider grant and a Cortiq mutation approval have different scopes; allowing one does not grant every future action. See [Agent permissions](/cortiq-public/agent-permissions/).

:::note
Permission cards are the only actionable message type. Every other category is an informational, click-through row.
:::

## Reference

### Categories

The inbox also includes **Price alerts**. A fired session price target is saved durably here, independently of trade-notification toggles; Cortiq attempts a Windows toast after saving it. See [Charting](/cortiq-public/charting/).

| Category | Example events |
| --- | --- |
| `ArtifactGeneration` | A preparation package finished generating, or generation failed. |
| `Risk` | A session was risk-paused after hitting a limit. |
| `Health` | The MT5 broker feed went down or was restored; a scheduled report was generated. |
| `Trade` | A trade opened, closed, failed, had SL/TP moved, was partially closed, or an approval was proposed, rejected, or expired. |
| `Permission` | An agent capability request — the only actionable type. |

### Severities

| Severity | Toasts by default |
| --- | --- |
| `Info` | No |
| `Success` | No (some key events override to toast) |
| `Warning` | Yes |
| `Error` | Yes |

### What it does not do

- An in-app message does not guarantee a Windows notification or an external-channel post. Price alerts have their own best-effort Windows delivery path.
- It does not emit session-lifecycle messages (started, stopped, failed). Those surface on the session and dashboard.
- It has no per-category mute; gating is by severity and emitter only.

## What to read next

1. [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) — the external channels that broadcast trade events.
2. [Agent permissions](/cortiq-public/agent-permissions/) — what the actionable permission cards grant and how to manage them.
3. [Cortiq Copilot](/cortiq-public/cortiq-copilot/) — the assistant whose actions and requests surface here.

## Related

- [Risk management](/cortiq-public/risk-management/)
- [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/)
- [Journal & analytics](/cortiq-public/journal-and-analytics/)
- [Glossary](/cortiq-public/glossary/)
