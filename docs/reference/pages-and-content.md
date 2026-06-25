---
area: pages-and-content
last_updated: 2026-05-17
---

# Pages and content

## What it does

Defines the published-page surface of the docs site. Starlight reads `src/content/docs/` as the `docs` content collection (registered in `src/content.config.ts`), and `astro.config.mjs` declares the sidebar groups that bind page slugs to navigation labels. This reference is the slug-to-purpose map; it is not a duplicate of the reader content.

## Components

The sidebar in `astro.config.mjs` is the source of truth for what's published. Pages are grouped as follows:

### Start Here

| Slug | Purpose |
|---|---|
| `index` | Home page — what Cortiq is, the per-cycle loop diagram, what to read next. |
| `documentation-map` | Bird's-eye map across all reader pages. |
| `app-navigation-guide` | Maps each doc page to its matching screen in the desktop app sidebar. |
| `feature-overview` | High-level summary of every major capability. |
| `capability-reference` | Plain-English summary of what each function does for the user. |
| `getting-started` | Orientation for evaluators (who it's for, first-day shape). |
| `installation-and-activation` | Windows MSIX install and license-key activation flow. |
| `first-30-minutes` | Guided walkthrough from install to first safe virtual session. |
| `glossary` | Defined terms — every other page links here instead of redefining. |

### Platform

| Slug | Purpose |
|---|---|
| `mt5-integration` | MetaTrader 5 setup, ZmqFacade EA, per-account multi-MT5 configuration, health indicator. |
| `ai-providers` | API-key / browser-mode / external-MCP transports for OpenAI, xAI, Anthropic, Google. |
| `playbooks-and-data` | Playbooks (strategy rules) + data packages (what context the AI sees). |
| `sessions` | Session create form, single-instrument scope, run/pause/stop lifecycle. |
| `risk-management` | Global + per-account risk limits, emergency-stop circuit breaker. |
| `execution-modes-and-notifications` | Live / virtual / external-MCP modes; Toast / X / Telegram channels. |
| `workspace-and-monitoring` | Day-to-day screens: Home, Dashboard, Sessions, Trade Ideas, Conversations, Provider Health, Journal, NowTradingBar. |
| `journal-and-analytics` | Closed-trade journal + analytics page (P/L, win rate, best/worst day). |

### MCP & Agent

| Slug | Purpose |
|---|---|
| `mcp-and-agent-integration` | Running Cortiq as an MCP server for Claude Desktop / Code; external-MCP session mode. |

### Trading Cycle

| Slug | Purpose |
|---|---|
| `trading-cycle/overview` | Concept-level overview of the cycle and its entities. |
| `trading-cycle/session-architecture` | How a session composes account / playbook / data package / symbol / window. |
| `trading-cycle/supporting-context` | Instrument profile + preparation package + sentiment report feeding the cycle. |
| `trading-cycle/playbook-design` | How to author a playbook. |
| `trading-cycle/data-package-design` | How to author a data package. |
| `trading-cycle/entities/sessions` | `AISession` entity reference. |
| `trading-cycle/entities/data-packages` | Data-package entity reference. |
| `trading-cycle/entities/playbooks` | Playbook entity reference. |
| `trading-cycle/entities/trade-ideas` | Trade-idea entity reference. |
| `trading-cycle/entities/preparation-packages` | Preparation-package entity reference. |
| `trading-cycle/entities/instrument-profiles` | Instrument-profile entity reference. |
| `trading-cycle/entities/sentiment-reports` | Sentiment-report entity reference. |
| `trading-cycle/entities/session-trades-and-timeline` | Session trades + cycle timeline view. |

### Support

| Slug | Purpose |
|---|---|
| `licensing-and-support` | License tiers, support intake (`support@cortiq.trade`), bug-report flow. |
| `faq` | Common questions. |

## Entry points / interfaces

- **Add a page:** create `src/content/docs/<slug>.md` (or under `trading-cycle/` / `trading-cycle/entities/`) with Starlight frontmatter (`title`, `description`, optional `sidebar.order` / `sidebar.badge`), then add the slug to the matching `sidebar` group in `astro.config.mjs`.
- **Rename a page:** rename the `.md` file and update its slug in `astro.config.mjs`; Starlight's `editLink.baseUrl` is the only other place a path can leak.
- **Add a sidebar group:** append a new `{ label, items: [...] }` object to the `sidebar` array in `astro.config.mjs`.

## Dependencies

- `@astrojs/starlight` docs schema (`docsSchema()`) — defines the allowed frontmatter on every reader page.
- Style rules in [`style-guide.md`](style-guide.md) — voice, callouts, page skeleton, frontmatter conventions.
- Screenshot manifest in [`screenshots.md`](screenshots.md) — every `/images/screenshots/*.png` reference.

## Known gaps / accepted debt

- The sidebar order in `astro.config.mjs` is the canonical reading order, but inside-page `sidebar.order` overrides are not enforced — easy to drift if both are touched. Treat `astro.config.mjs` as source of truth.
- Glossary entries live in a single `glossary.md`; no per-term anchors are documented yet.
