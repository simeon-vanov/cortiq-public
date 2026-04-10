---
title: AI Providers
description: Supported AI providers, integration modes, and how provider choice affects operation.
---

## Supported Providers

Cortiq is designed to work with the main provider families used across the product, including OpenAI ChatGPT, Google Gemini, Anthropic Claude, and xAI Grok.

The exact integration route exposed to the user depends on the provider and the current application surface. In the current desktop settings screen, the main distinction presented to the user is:

- direct API integration
- local tool or CLI integration where supported

## Who This Is For

This page is for users who want to:

- choose the right provider for their workflow
- understand the difference between local-tool and API-based operation
- decide whether traceability, convenience, or fallback behavior matters most
- avoid choosing a provider setup that does not match their operating style

## Where To Find This In The App

Provider setup lives mainly in:

- `Settings` -> `AI Providers`

That screen is where you configure provider credentials, choose API or CLI/browser-style integration where supported, and set feature-level provider overrides.

Per-session provider choice then happens when you build or edit a session in:

- `Library` -> `Sessions`

## How The Settings Screen Labels This

In the current customer UI, provider integration choices are surfaced as `API` and `CLI` where a provider supports both.

For customers, the important practical distinction is simple:

- `API` means Cortiq is calling the provider directly through an API key and structured adapter.
- `CLI` means Cortiq is using a local-tool route on the same machine instead of a direct API call.

## Two Integration Modes

### Local Tool Or CLI Route

The local-tool route uses a provider-compatible tool path on the same machine instead of direct API billing.

This mode is useful when you want:

- a provider workflow that does not depend on the same direct API setup as the API route
- a local-machine integration path where the provider tool handles the interaction
- flexibility when your preferred provider workflow is better suited to a local tool than to a straight API call

### API Mode

API mode uses direct provider APIs through Cortiq adapters.

This mode is useful when you want:

- Structured request and response handling
- Persisted conversation history
- Token usage tracking
- Fallback provider behavior if the primary provider fails
- Cleaner automation for serious operational usage

## How Cortiq Chooses The Route

Each session stores both an AI provider and an integration type. Cortiq then routes the session to the matching local-tool or API pipeline automatically.

That means one session can run with one provider and mode, while another session uses a different provider and mode entirely.

## Feature-Level Provider Overrides

The `Settings` -> `AI Providers` screen also includes `Feature AI Providers`.

That area lets you assign a specific provider and integration type to a particular Cortiq feature instead of inheriting the session default.

This is useful when:

- one provider is better for your main trading loop but another is better for a supporting workflow
- you want to keep the session default simple but tune one advanced feature separately
- you need to isolate a weaker provider from the rest of the product surface

## Security And Credentials

Cortiq stores supported provider API keys in encrypted local storage on Windows.

For local-tool routes, the main setup requirement is the local executable path and related configuration rather than an API key alone.

## Practical Selection Guide

| If You Need | Prefer |
| --- | --- |
| A local-machine route where direct API setup is not your first choice | Local tool or CLI route |
| Better traceability and cleaner operational control | API mode |
| Provider fallback during runtime | API mode |
| Feature-level provider overrides | `Settings` -> `AI Providers` |

## Feature Implications

Your provider choice affects more than response text. It also affects:

- Session traceability
- Conversation persistence
- Operational cost structure
- Failure handling options
- Setup effort for first use

## Best Use Cases

Choose this part of the platform carefully when you want:

- lower-friction experimentation with provider web apps
- a cleaner API-driven operating model for serious runtime usage
- different providers for different session types
- resilience through fallback-provider design

## Related Pages

- [Getting Started](getting-started/)
- [First 30 Minutes in Cortiq](first-30-minutes/)
- [Playbooks & Data Packages](playbooks-and-data/)
- [Sessions & AutoScan](sessions-and-autoscan/)
- [Workspace and Monitoring](workspace-and-monitoring/)