---
status: current
title: Activity
description: Cortiq's in-app notification inbox — background, trade, risk, health, and permission events with severity-gated toasts and actionable permission cards.
sidebar:
  order: 110
---

Activity is the inbox inside the Cortiq app where background processes, trades, risk events, MT5 health, and permission requests post durable, click-through notifications. It is separate from Windows trade notifications and one-shot chart price alerts. This page covers what lands there, how toasts are gated, and how permission requests become actionable cards.

## What this is

Background services in Cortiq generate events all the time: an artifact finished generating, a session got risk-paused, the MT5 feed dropped, an agent needs a capability. Activity collects those into one persisted, filterable list with an unread badge.

Each message stays in the inbox until you delete it or select **Clear all**. Reading marks it read without deleting it. Most messages link to their artifact or page. Higher-severity events also pop a toast so you notice them in the moment; routine ones land quietly with an unread count.

Open it from **Activity** in the sidebar's `Library` section. The route is `/system-messages`.

## How it fits into Cortiq

Activity keeps the saved event record. Windows notifications provide a separate delivery surface.

| Surface | Where it goes | What it carries |
| --- | --- | --- |
| Activity | In-app inbox (`/system-messages`) | Background, trade, risk, health, and permission events. |
| Windows toasts | Desktop notification center | Trade events and trade-approval prompts. |
| Chart price alerts | Activity, followed by a best-effort Windows notification | A saved session Bid target was touched or crossed. |

Activity also carries background-process and permission events. X and Telegram are not available desktop channels. See [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) for Windows Push and independent price alerts.

## How to use it

### Read and filter the inbox

The inbox lists messages newest-first. The **Filter** menu offers **All**, **Unread**, **Artifact generation**, **Risk**, **Health**, **Trade**, and **Price alerts**. Permission and research notices can appear in the inbox without dedicated filter options. Click a row to mark it read and jump to its linked page. Each row has a delete control; the toolbar offers **Mark all read** and **Clear all**.

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
| `Health` | The MT5 bridge or broker feed became unavailable or recovered. |
| `Trade` | A trade opened, closed, failed, had SL/TP moved, was partially closed, or an approval was proposed, rejected, or expired. |
| `Permission` | A provider permission request or protected-action approval card. |
| `Research` | Research progress, completion, or attention notices. |
| `Alert` | A saved session price alert fired. |

### Severities

| Severity | Toasts by default |
| --- | --- |
| `Info` | No |
| `Success` | No (some key events override to toast) |
| `Warning` | Yes |
| `Error` | Yes |

### What it does not do

- An in-app message does not guarantee a Windows notification. Price alerts have their own best-effort Windows delivery path.
- It does not emit session-lifecycle messages (started, stopped, failed). Those surface on the session and dashboard.
- It has no per-category mute; gating is by severity and emitter only.

## What to read next

1. [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) — Windows trade notifications and independent chart price alerts.
2. [Agent permissions](/cortiq-public/agent-permissions/) — what the actionable permission cards grant and how to manage them.
3. [Cortiq Copilot](/cortiq-public/cortiq-copilot/) — the assistant whose actions and requests surface here.

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Activity inbox with risk, artifact, and health notices](/cortiq-public/images/screenshots/system-messages__inbox.png)

*Synthetic notices illustrate the inbox. Marking a notice read is separate from deleting it.*

## Related

- [Risk management](/cortiq-public/risk-management/)
- [Workspace & monitoring](/cortiq-public/workspace-and-monitoring/)
- [Journal & analytics](/cortiq-public/journal-and-analytics/)
- [Glossary](/cortiq-public/glossary/)
