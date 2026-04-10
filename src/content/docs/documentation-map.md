---
title: Documentation Map
description: Why the Cortiq docs site is organized the way it is and what each page is for.
---

## The Idea Behind This Documentation

The Cortiq documentation is structured around the decisions a real buyer or operator needs to make:

1. What is the product and who is it for?
2. How do I install it, activate it, and connect it correctly?
3. How do the important features fit together in daily use?
4. Where do I go for support, feedback, and updates?

That is why the site is not organized like an internal engineering wiki. It is organized like an operating manual for a commercial trading product.

## What Each Page Is For

| Page | Purpose | What The Reader Gets |
| --- | --- | --- |
| Home | Product orientation | A fast understanding of Cortiq, the site scope, and the best reading order |
| Documentation Map | Site overview | The logic behind the documentation structure and how to use it efficiently |
| Feature Overview | Capability summary | A short explanation of every major feature in the product |
| Capability Reference | Practical function guide | A customer-facing explanation of what each major function can do and when to use it |
| Getting Started | Evaluation and readiness | Who Cortiq is for, prerequisites, and the recommended first-run path |
| Installation & Activation | Windows onboarding | The purchase, download, install, and machine activation flow |
| First 30 Minutes in Cortiq | Guided first run | A safe onboarding path from activation to a first virtual session |
| MetaTrader 5 Integration | Broker terminal connectivity | How Cortiq and MT5 work together and what must be configured correctly |
| AI Providers | AI setup and routing | Which providers are supported, how browser and API modes differ, and how to choose between them |
| MCP and Agent Integration | Advanced external control | How MCP-compatible agents can control Cortiq through external sessions and tool calls |
| Playbooks & Data Packages | Strategy input design | How user-defined strategy rules and data scope shape AI decisions |
| Sessions & AutoScan | Runtime operation | How autonomous trading sessions work and how symbol selection can be automated |
| Risk Management | Control layer | The limits, pause behavior, and operating safeguards that sit above execution |
| Execution Modes & Notifications | Deployment options | The difference between live trading, virtual trading, copy trading, and notification flows |
| Journal & Analytics | Review and learning | How Cortiq records performance, explains trades, and helps improve workflows |
| Trading Cycle Overview | Architecture summary | How one session cycle is assembled from strategy, data, support context, and execution |
| Trading Cycle Entities | Detailed reference | Separate customer-facing pages for sessions, playbooks, data packages, trade ideas, preparation packages, instrument profiles, sentiment reports, and session trade history |
| Licensing & Support | Commercial and support flow | License behavior, renewal expectations, and where to get help publicly |
| FAQ | Fast answers | Common evaluation, setup, and operational questions in one place |

## Why This Works For GitHub Pages

GitHub Pages is a strong fit for Cortiq public documentation because it keeps the public product layer simple:

- Markdown files are easy to maintain and review.
- The site can be published automatically on every documentation update.
- The docs live next to releases, issues, and discussions in the same repository.
- Product explanations can be versioned and improved without touching the private application repository.

## Public Repository Roles

Use the public Cortiq repository for the following jobs:

- Read the official product documentation.
- Download the current public installer from Releases.
- Report bugs through GitHub Issues.
- Request features through GitHub Issues.
- Ask questions and share workflows through GitHub Discussions.

Do not use the public repository for private security disclosures or license-sensitive personal data. Those belong in direct support contact instead.