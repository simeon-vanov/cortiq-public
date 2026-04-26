---
title: Workspace & monitoring
description: A tour of the day-to-day Cortiq screens — Home, Dashboard, Sessions, Trade Ideas, Journal, Conversations, and Provider Health — and the rhythm to use them in.
sidebar:
  order: 70
---

This page is a tour of the screens you'll spend most of your time in once Cortiq is set up. By the end you'll know which screen answers which question and the daily rhythm that ties them together.

## What this is

After installation and the first session, you stop thinking in terms of *features* and start thinking in terms of *screens*. The workspace is the daily operating surface: where you start sessions, watch them run, review what happened, and decide what to change next.

Cortiq groups these screens under `Library` in the sidebar, with one diagnostic screen under `Tools`. Each one answers a specific operational question — *what's running right now?*, *did today go well?*, *why did the AI take that trade?*, *is the provider healthy?* — and the answer lives on exactly one screen.

This page introduces each screen and recommends a daily rhythm. The deeper "why" of each entity (sessions, journals, trade ideas) lives on its own dedicated page.

## How it fits into Cortiq

| Screen | Question it answers | Lifecycle phase |
| --- | --- | --- |
| `Home` | What's running right now, and what should I do next? | Orientation |
| `Dashboard` | Is the platform healthy across all my accounts? | Monitoring |
| `Sessions` | What is each running session doing right now? | Active operation |
| `Trade Ideas` | Which standalone theses are open and what's their status? | Active operation |
| `Journal` | Why did this trade or session behave that way? | Review |
| `Session Cohorts` | Which configuration is outperforming the others? | Review |
| `Conversations` | What is the AI actually saying across sessions? | Review / debug |
| `Provider Health` | Is the AI provider reliable today? | Diagnostics |

## How to use it

### Home

`Home` is the daily landing screen. It shows the count of running sessions, today's P/L at a glance, quick actions to create a session or open risk management, and a getting-started checklist while the app is still new.

Use Home to orient before opening any detail screen.

![Home screen with at least one running session and the first-run checklist still visible](/images/screenshots/workspace-and-monitoring__home.png)
<!-- SCREENSHOT-NEEDED: workspace-and-monitoring__home.png – Home screen with at least one running session and the first-run checklist still visible. Mask balances -->

### Dashboard

`Dashboard` is the broader operating view across every account Cortiq is connected to. It shows cross-account P/L, recent trades, and global risk status.

Open Dashboard when you want the business-level view of the platform — not "what is this session doing", but "is the whole environment behaving".

![Dashboard with cross-account P/L chart, recent trades, and risk widgets](/images/screenshots/workspace-and-monitoring__dashboard.png)
<!-- SCREENSHOT-NEEDED: workspace-and-monitoring__dashboard.png – Dashboard with cross-account P/L chart, recent trades list, and risk widgets visible. Mask balances and account numbers -->

### Sessions

`Sessions` is where you control runtime state. The list view shows every session with its current state (`Running`, `Paused`, `RiskPaused`, `Stopped`, `Completed`); the detail view drills into one session's live execution feed and AI conversation.

You start, pause, resume, and stop sessions from here. You also use this screen to follow a single session through its cycle when something looks off.

![Sessions list page with a mix of Running, Paused, and Stopped sessions](/images/screenshots/workspace-and-monitoring__sessions-list.png)
<!-- SCREENSHOT-NEEDED: workspace-and-monitoring__sessions-list.png – Sessions page with a mix of Running, Paused, and Stopped sessions -->

![Session detail page with live execution view and AI conversation panel open](/images/screenshots/workspace-and-monitoring__session-detail.png)
<!-- SCREENSHOT-NEEDED: workspace-and-monitoring__session-detail.png – Session detail page with live execution view and AI conversation panel open. Mask account, broker name -->

### Trade Ideas

`Trade Ideas` is for standalone theses that don't belong in the reusable playbook library. Use it when you want Cortiq to follow a specific opportunity without pretending it's part of your core strategy framework.

You can filter ideas by status (active, executed, closed, invalidated, expired, unassigned) and create a session directly from an active idea.

![Trade Ideas page with several ideas at different statuses](/images/screenshots/workspace-and-monitoring__trade-ideas.png)
<!-- SCREENSHOT-NEEDED: workspace-and-monitoring__trade-ideas.png – Trade Ideas page with 3+ ideas at different statuses -->

### Journal

`Journal` is the main review surface. It splits into two views:

- `AI Journal` — session-level review, including the AI-generated narrative for each cycle.
- `Trade Journal` — per-trade deep dive, with the conversation that produced the entry attached.

Use Journal when you need to understand *why* a session or trade behaved the way it did, not just whether it won or lost.

![Journal page with a closed-trade entry and AI-generated journal text](/images/screenshots/workspace-and-monitoring__journal.png)
<!-- SCREENSHOT-NEEDED: workspace-and-monitoring__journal.png – Journal page with a closed-trade entry and AI-generated journal text. Mask account -->

### Session Cohorts

`Session Cohorts` groups sessions into a comparison set. It's the right screen when more than one serious session is running and you need to decide what deserves more capital or more refinement — relative performance, not isolated anecdotes.

There's no dedicated screenshot for this page in the current pass; the comparison view evolves quickly and is documented under [Journal & analytics](journal-and-analytics/).

### Conversations

`Conversations` is the raw cross-session AI dialogue view. Use it to follow what the model is saying across multiple sessions in parallel, compare reasoning between sessions, and inspect the prompt and response directly instead of the summarized journal text.

System messages can be hidden or shown — keep them hidden for daily review, show them when something looks wrong.

![Conversations panel showing one full prompt+response cycle](/images/screenshots/workspace-and-monitoring__conversations.png)
<!-- SCREENSHOT-NEEDED: workspace-and-monitoring__conversations.png – Conversations panel showing one full prompt+response cycle -->

### Provider Health

`Provider Health` is the AI-provider diagnostics screen under `Tools`. It shows request volume, success rate, average and p95 response time, retry counts, and recent errors per provider.

Open this screen to answer one specific question: *is the strategy underperforming, or is the provider route unhealthy?*

![Provider Health view with success rate, response times, recent errors per provider](/images/screenshots/workspace-and-monitoring__provider-health.png)
<!-- SCREENSHOT-NEEDED: workspace-and-monitoring__provider-health.png – Provider Health view with success rate, response times, recent errors per provider -->

### NowTradingBar

The NowTradingBar runs along the bottom of the app whenever a session is active. It shows the live cycle's session name, symbol, current phase, and most recent decision — without leaving whatever screen you're on.

![NowTradingBar with active session metrics during a live cycle](/images/screenshots/workspace-and-monitoring__now-trading-bar.png)
<!-- SCREENSHOT-NEEDED: workspace-and-monitoring__now-trading-bar.png – Bottom NowTradingBar with active session metrics during a live cycle. Mask account, broker -->

## Reference

Operational features that live in `Settings` but shape what you see in the workspace:

| Path | What it controls |
| --- | --- |
| `Settings` → `AI Providers` | Per-feature provider overrides used during sessions. |
| `Settings` → `Notifications` | Delivery channels: Windows Toast, X, Telegram. |
| `Settings` → `Reports` | Scheduled performance reports sent to your channels. |

## Common questions

**A daily flow that works:**

1. Open `Home` to orient.
2. Open `Dashboard` to inspect the broader environment.
3. Open `Sessions` to control active runs.
4. Use `Journal`, `Session Cohorts`, and `Conversations` to review.
5. Check `Provider Health` when AI responsiveness or reliability looks off.

**Where do I start a session?**
From `Sessions` (the list view) or from an active idea on `Trade Ideas`. Both routes open the same session-create dialog.

**Why is one session showing `RiskPaused`?**
A risk validator triggered. Open the session detail and check the risk panel — it shows the breach condition. The session resumes automatically when the breach clears.

## What to read next

1. [App navigation guide](app-navigation-guide/) — maps these screens to the actual sidebar entries in the desktop app.
2. [Sessions & AutoScan](sessions-and-autoscan/) — what's behind the Sessions screen.
3. [Journal & analytics](journal-and-analytics/) — what's behind the Journal and Cohorts screens.
4. [AI providers](ai-providers/) — what's behind Provider Health.

## Related

- [Execution modes & notifications](execution-modes-and-notifications/)
- [Risk management](risk-management/)
- [Trading cycle: overview](trading-cycle/overview/)
- [Glossary](glossary/)
