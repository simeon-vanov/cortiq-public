---
title: Workspace and Monitoring
description: What the main day-to-day Cortiq screens are for after setup is complete.
---

## Why This Page Matters

Once Cortiq is installed and configured, most users stop thinking in terms of entities and start thinking in terms of screens.

This page explains the parts of the desktop workspace that help you operate, monitor, compare, and review what the platform is doing.

## Where To Find These Screens In The App

Most of this page maps to the `Library` section of the sidebar, plus one diagnostic screen in `Tools`:

- `Library` -> `Home`
- `Library` -> `Dashboard`
- `Library` -> `Trade Ideas`
- `Library` -> `Journal`
- `Library` -> `Session Cohorts`
- `Library` -> `Conversations`
- `Tools` -> `Provider Health`

## Home

`Home` is the daily landing screen.

It is useful for:

- seeing how many sessions are currently running
- checking today’s P/L at a glance
- jumping into quick actions such as creating a session or opening risk management
- following a simple getting-started checklist when the app is still new to you

This screen helps the user orient quickly before deciding which detailed page to open next.

## Dashboard

`Dashboard` is the broader operating view.

It is useful for:

- monitoring trading performance across the environment
- seeing global risk information across all connected accounts
- checking recent trades without opening each session separately
- understanding whether the platform is behaving well at the account level, not just at the individual-session level

Use this when you need the business view of the system rather than the single-session view.

## Trade Ideas

`Trade Ideas` is where you capture standalone research and active theses that should be tracked outside the reusable playbook library.

It is useful for:

- recording one-off opportunities you do not want to turn into permanent strategy logic
- filtering ideas by status such as active, executed, closed, invalidated, expired, or unassigned
- reviewing the thesis, metadata, status message, and eventual outcome of an idea
- selecting active ideas and creating a session from them

This is the right screen when you want Cortiq to follow a specific idea without pretending it is part of your core strategy framework.

## Journal

`Journal` is the main review surface.

It covers both:

- `AI Journal` for session-level review
- `Trade Journal` for trade-specific deep dives

Use it when you want to understand why a session or trade behaved the way it did, not just whether it won or lost.

## Session Cohorts

`Session Cohorts` lets you compare sessions side by side.

It is useful for:

- grouping sessions into a meaningful comparison set
- comparing metrics across multiple related sessions in one view
- spotting whether one configuration, market, or workflow style is outperforming another
- making review decisions based on relative performance instead of isolated anecdotes

This becomes especially valuable when you have more than one serious session running and need to decide what deserves more capital or more refinement.

## Conversations

`Conversations` is the raw cross-session conversation view.

It is useful for:

- following AI conversations across multiple sessions in parallel
- comparing how different sessions are reasoning at the same time
- showing or hiding system messages when deeper debugging is needed
- reviewing conversation states, message counts, and provider behavior in a more direct form than the rendered journal summary

Use this when you want to inspect the model’s actual dialogue and prompts rather than only the summarized output.

## Provider Health

`Provider Health` is the AI-provider diagnostics screen.

It is useful for:

- checking request volume in a chosen time period
- monitoring success rate, average response time, p95 response time, and retries
- comparing reliability and speed across providers
- reviewing recent provider errors when the workflow feels unstable or delayed

This screen helps answer an important operational question: is the strategy underperforming, or is the provider route unhealthy?

## Related Settings Features

Some operational features live in `Settings` rather than `Library`, but they still matter for the daily workspace:

- `Settings` -> `AI Providers` includes feature-level provider overrides
- `Settings` -> `Notifications` controls delivery channels such as Telegram and X
- `Settings` -> `Reports` schedules automated performance reports

Those settings influence what you later see and review inside the main workspace screens.

## A Good Daily Flow

Many users operate Cortiq in a rhythm like this:

1. Open `Home` to orient quickly.
2. Use `Dashboard` to inspect the broader environment.
3. Open `Sessions` for active runtime control.
4. Use `Journal`, `Session Cohorts`, and `Conversations` to review what happened.
5. Check `Provider Health` when AI responsiveness or reliability looks suspicious.

That is the difference between having features and having an operable platform.

## Related Pages

- [App Navigation Guide](app-navigation-guide/)
- [Sessions & AutoScan](sessions-and-autoscan/)
- [Execution Modes & Notifications](execution-modes-and-notifications/)
- [Journal & Analytics](journal-and-analytics/)
- [AI Providers](ai-providers/)