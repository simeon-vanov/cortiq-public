---
title: Capability Reference
description: A practical customer guide to what each major Cortiq function can do and when to use it.
---

This page is written for customers who want a plain-English answer to a simple question:

What can each major Cortiq function actually do for me?

Use it as a product map, not as an engineering reference.

## Strategy Functions

| Function | What It Does | What It Can Do For You | Read More |
| --- | --- | --- | --- |
| Playbooks | Define setup, entry, invalidation, risk, and management logic | Turn a strategy into a repeatable rule system instead of a loose prompt | [Playbooks & Data Packages](playbooks-and-data/) |
| Playbook sections | Split strategy logic into clean fields such as setup, entry, risk, management, and invalidation | Help you write playbooks the AI can follow and you can review later | [Playbook Design Guide](trading-cycle/playbook-design/) |
| Playbook priority | Orders multiple playbooks inside one session | Lets you decide which setup logic should win when more than one idea is in play | [Playbooks](trading-cycle/entities/playbooks/) |
| Data packages | Define what data the AI receives | Keep the AI focused on the exact information your strategy needs | [Data Packages](trading-cycle/entities/data-packages/) |
| Screenshot-enabled timeframes | Add chart images to selected data-package timeframes | Give the AI visual confirmation where chart structure matters more than raw numbers alone | [Data Package Design Guide](trading-cycle/data-package-design/) |
| Indicator inputs | Add MT5 indicator values to the decision payload | Bring your technical signal stack into the AI workflow | [Playbooks & Data Packages](playbooks-and-data/) |
| Trade ideas | Track specific active theses | Let Cortiq monitor one-off opportunities without turning them into permanent playbooks | [Trade Ideas](trading-cycle/entities/trade-ideas/) |

## Supporting Context Functions

| Function | What It Does | What It Can Do For You | Read More |
| --- | --- | --- | --- |
| Session instructions | Add operator notes and constraints | Capture desk rules, cautions, and practical guidance that should travel with the session | [Supporting Context](trading-cycle/supporting-context/) |
| Preparation packages | Generate reusable prepared analysis | Give the AI broader market structure without forcing it to rediscover that structure every cycle | [Preparation Packages](trading-cycle/entities/preparation-packages/) |
| Instrument profiles | Store long-lived symbol behavior context | Help the AI understand what is typical or unusual for a market over time | [Instrument Profiles](trading-cycle/entities/instrument-profiles/) |
| Sentiment reports | Add macro and news context | Let external market pressure support or challenge the technical setup | [Sentiment Reports](trading-cycle/entities/sentiment-reports/) |
| Support-layer stacking | Combine preparation, profile, sentiment, and trade ideas with live data | Build a cleaner and more disciplined reasoning environment for the AI | [Trading Cycle Overview](trading-cycle/overview/) |

## Session Functions

| Function | What It Does | What It Can Do For You | Read More |
| --- | --- | --- | --- |
| Sessions | Create the operating container for a strategy | Turn a configuration into something you can run, pause, review, and improve | [Sessions & AutoScan](sessions-and-autoscan/) |
| Active days and time windows | Control when a session may trade | Keep a strategy inside the market hours and days that fit its design | [Sessions](trading-cycle/entities/sessions/) |
| Fixed-symbol mode | Keep a session focused on one instrument | Useful when you want clean specialization around one market | [Sessions & AutoScan](sessions-and-autoscan/) |
| AutoScan | Let the AI choose among candidate instruments | Useful when you want the system to look for the strongest current opportunity instead of waiting on one fixed symbol | [Sessions & AutoScan](sessions-and-autoscan/) |
| Provider selection | Choose which AI provider runs the session | Match the workflow to your preferred cost, reliability, and operating style | [AI Providers](ai-providers/) |
| Fallback provider | Configure a secondary AI provider | Keep the session more resilient when the primary provider is unavailable | [AI Providers](ai-providers/) |
| Browser vs API mode | Choose how the AI provider is integrated | Balance convenience, traceability, and account setup requirements | [AI Providers](ai-providers/) |
| External MCP sessions | Let an external agent control Cortiq | Useful for advanced users who want a separate AI client to drive the workflow | [MCP and Agent Integration](mcp-and-agent-integration/) |

## Execution Functions

| Function | What It Does | What It Can Do For You | Read More |
| --- | --- | --- | --- |
| Live trading | Sends real orders through MT5 | Move from simulation to real market execution inside the same operating model | [Execution Modes & Notifications](execution-modes-and-notifications/) |
| Virtual trading | Simulates the trade lifecycle without placing real orders | Test and build trust before using live capital | [Execution Modes & Notifications](execution-modes-and-notifications/) |
| Copy trading | Replicate a master workflow to follower accounts | Scale one decision engine across multiple accounts | [Execution Modes & Notifications](execution-modes-and-notifications/) |
| Trade management | Modify, partially close, or close positions | Keep the AI responsible not only for entries but also for active position handling | [Session Trades and Timeline](trading-cycle/entities/session-trades-and-timeline/) |
| Notifications | Push important trade events to selected channels | Stay informed without watching the desktop continuously | [Execution Modes & Notifications](execution-modes-and-notifications/) |

## Risk And Protection Functions

| Function | What It Does | What It Can Do For You | Read More |
| --- | --- | --- | --- |
| Global risk controls | Apply limits across the full environment | Protect the overall operating environment rather than only one account | [Risk Management](risk-management/) |
| Per-account risk controls | Apply limits account by account | Support different mandates for different accounts | [Risk Management](risk-management/) |
| Drawdown and profit targets | Pause behavior based on account performance | Put hard boundaries around how much damage or overtrading the workflow can do | [Risk Management](risk-management/) |
| Trade-count and exposure limits | Restrict how much the system can open | Prevent runaway activity and concentration in one symbol or account | [Risk Management](risk-management/) |
| Automatic risk pause | Pause sessions when a breach occurs | Add an independent safety layer above the AI decision itself | [Risk Management](risk-management/) |

## Review And Improvement Functions

| Function | What It Does | What It Can Do For You | Read More |
| --- | --- | --- | --- |
| Trade journal | Record trade-level context and outcomes | Help you review whether one trade was disciplined or improvised | [Journal and Analytics](journal-and-analytics/) |
| Session journal | Record behavior over a broader run | Help you see whether the operating model is working as a whole | [Journal and Analytics](journal-and-analytics/) |
| Analytics | Compute performance metrics such as P/L and win rate | Help you evaluate whether changes actually improved the workflow | [Journal and Analytics](journal-and-analytics/) |
| Dashboard | Show cross-account performance, recent trades, and global operating state | Help you understand the whole environment without opening every session individually | [Workspace and Monitoring](workspace-and-monitoring/) |
| Session cohorts | Compare grouped sessions side by side | Help you test which configuration or style is working better | [Workspace and Monitoring](workspace-and-monitoring/) |
| Conversations view | Show raw AI conversations across sessions | Help you inspect the model's actual responses, not only the rendered summary | [Workspace and Monitoring](workspace-and-monitoring/) |
| Session timeline | Show what happened in each trading cycle | Make the AI workflow easier to audit and explain | [Session Trades and Timeline](trading-cycle/entities/session-trades-and-timeline/) |
| Decision rendering | Show analysis, trade ideas, and actions in a readable format | Help you understand what the AI concluded, not just what the market did afterward | [Trading Cycle Overview](trading-cycle/overview/) |

## Platform And Support Functions

| Function | What It Does | What It Can Do For You | Read More |
| --- | --- | --- | --- |
| Windows installation and activation | Installs and licenses the desktop app | Get a working Cortiq environment on the machine that will operate it | [Installation and Activation](installation-and-activation/) |
| Home workspace | Show active sessions, quick actions, and first-run progress | Give you a practical starting point each time you open the app | [Workspace and Monitoring](workspace-and-monitoring/) |
| MT5 integration | Connects Cortiq to the local terminal | Turns AI decisions into actual broker-side execution capability | [MetaTrader 5 Integration](mt5-integration/) |
| Provider health | Track request count, success rate, response speed, retries, and recent provider errors | Help you diagnose whether provider instability is affecting results | [Workspace and Monitoring](workspace-and-monitoring/) |
| Feature AI providers | Override which provider a specific Cortiq feature should use | Let you keep one session default while assigning a different provider to a special workflow | [AI Providers](ai-providers/) |
| Automated performance reports | Schedule summary reports and deliver them through Telegram | Let you monitor performance without opening the desktop manually every time | [Execution Modes & Notifications](execution-modes-and-notifications/) |
| Public releases | Distribute the current public installer | Give you one clear place to get updates | [Licensing and Support](licensing-and-support/) |
| Public issues and discussions | Provide public support and feedback channels | Let you report bugs, ask usage questions, and request improvements | [Licensing and Support](licensing-and-support/) |

## Best Way To Use This Page

If you are evaluating Cortiq, use this page to decide which parts of the product matter most to your workflow.

If you are already using Cortiq, use it to identify the next capability you want to configure or improve.

If your next step is professional configuration quality, start with [Playbook Design Guide](trading-cycle/playbook-design/) and [Data Package Design Guide](trading-cycle/data-package-design/).