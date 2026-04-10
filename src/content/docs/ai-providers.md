---
title: AI Providers
description: Supported AI providers, integration modes, and how provider choice affects operation.
---

## Supported Providers

Cortiq supports these AI providers in the current product:

| Provider | Browser Mode | API Mode |
| --- | --- | --- |
| Google Gemini | Yes | Yes |
| xAI Grok | Yes | Yes |
| OpenAI ChatGPT | Yes | Yes |
| Anthropic Claude | No | Yes |

## Who This Is For

This page is for users who want to:

- choose the right provider for their workflow
- understand the difference between browser mode and API mode
- decide whether traceability, convenience, or fallback behavior matters most
- avoid choosing a provider setup that does not match their operating style

## Two Integration Modes

### Browser Mode

Browser mode uses provider web interfaces through managed browser automation.

This mode is useful when you want:

- A provider workflow that does not depend on direct API billing for every request
- One-time login per provider in a persistent browser profile
- A browser-driven session model where screenshots and provider web tools are part of the flow

### API Mode

API mode uses direct provider APIs through Cortiq adapters.

This mode is useful when you want:

- Structured request and response handling
- Persisted conversation history
- Token usage tracking
- Fallback provider behavior if the primary provider fails
- Cleaner automation for serious operational usage

## How Cortiq Chooses The Route

Each session stores both an AI provider and an integration type. Cortiq then routes the session to the matching browser or API pipeline automatically.

That means one session can run with one provider and mode, while another session uses a different provider and mode entirely.

## Security And Credentials

Cortiq stores supported provider API keys in encrypted local storage on Windows.

For browser mode, the main setup requirement is provider login rather than an API key.

## Practical Selection Guide

| If You Need | Prefer |
| --- | --- |
| Lower-friction experimentation with provider web interfaces | Browser mode |
| Better traceability and cleaner operational control | API mode |
| Provider fallback during runtime | API mode |
| The Claude integration | API mode |

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