---
status: reference
area: pages-and-content
last_updated: 2026-10-18
---

# Pages and content

## What it does

Defines the published-page surface of the docs site. Starlight reads `src/content/docs/` as the `docs` content collection (registered in `src/content.config.ts`), and `astro.config.mjs` declares the sidebar groups that bind page slugs to navigation labels. This reference is the slug-to-purpose map; it is not a duplicate of the reader content.

## Components

### Reader-content audit baseline

The 2026-10-18 refresh follows the current sibling desktop source, including work
still awaiting installed/provider acceptance. It does not assert a released runtime
version or clear the desktop's pending verification gates. Existing reader URLs
remain stable; screen labels come from the current desktop sidebar.

Maintain the main explanations against these current desktop reference owners:

| Reader topic | Desktop source of truth |
| --- | --- |
| Replay, risk snapshots, coverage and recovery | `cortiq-app/docs/reference/backtesting.md`, checked against current Backtest UI/service where historical sections conflict. |
| Topic questions, results, continuation and publication | `cortiq-app/docs/reference/research.md` and current Research/Hub components. |
| Knowledge readiness and validated execution | `cortiq-app/docs/reference/instrument-hub.md`. |
| Explicit review, Observations and historical lessons | `cortiq-app/docs/reference/session-review.md`. |
| Policy generation, compatibility and delivered inputs | `cortiq-app/docs/reference/playbook-data-policy-validation.md` and indicator references. |
| Provider routes, permissions, skills and charts | Their specialized desktop references and current settings/tool implementations. |

Specialized current source overrides obsolete paragraphs retained lower in long
reference histories. Do not derive current licensing, concurrency, or recovery
claims from old backtesting limitations. Do not describe active designs as shipped
solely because a specification exists. All licensed starts use the desktop's
`LicensedActionGate`.

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
| `installation-and-activation` | Windows Velopack installer and license-key activation flow. |
| `first-30-minutes` | Guided walkthrough from install to first safe virtual session. |
| `glossary` | Defined terms — every other page links here instead of redefining. |

### Platform

| Slug | Purpose |
|---|---|
| `mt5-integration` | MetaTrader 5 setup, ZmqFacade EA, per-account multi-MT5 configuration, health indicator. |
| `ai-providers` | Explicit API/ACP provider routes, captured models, feature selection, and separate Manual-context External MCP integration. |
| `playbooks-and-data` | Playbooks (strategy rules) + data packages (what context the AI sees). |
| `sessions` | Session create form, single-instrument scope, run/pause/stop lifecycle. |
| `discretionary-trading` | Explicit Manual sessions, operator tickets, scoped agent actions, risk checks, and review. |
| `charting` | Standalone/live/replay/evidence charts, persistent drawings, exact indicators, and one-shot session price notifications. |
| `risk-management` | Global + per-account risk limits, emergency-stop circuit breaker. |
| `backtesting` | Licensed standalone Manual/Autonomous replay, saved setup and risk, coverage generation, recovery, results, and review. |
| `execution-modes-and-notifications` | Live / virtual / external-MCP modes; Toast / X / Telegram channels; System Messages. |
| `workspace-and-monitoring` | Day-to-day screens: Home, Dashboard, Sessions, Trade Ideas, Conversations, Provider Health, Journal, Reviews, System Messages, NowTradingBar. |
| `journal-and-analytics` | Closed-trade journal + analytics page (P/L, win rate, best/worst day) + the review/lessons loop. |
| `session-review` | Explicit saved-evidence review, coverage, supported Observations, proposed improvements, and uncertain-request recovery. |
| `system-messages` | Activity: durable inbox, applicable approval cards, and session price notifications. |

### Instruments & Research

| Slug | Purpose |
|---|---|
| `instrument-hub` | Overview/Knowledge/Data, conclusion readiness, workflow-created Hypotheses, validated Edges, aliases, and mastery. |
| `research` | Managed data, Topic question targets, independent answers, saved results, continuation, review, and Learning publication. |
| `skills` | Reusable Markdown instruction templates injected into the creation flows. |

### MCP & Agent

| Slug | Purpose |
|---|---|
| `mcp-and-agent-integration` | Running Cortiq as an MCP server for Claude Desktop / Code; external-MCP session mode; tool families; approval gate. |
| `cortiq-copilot` | In-app Copilot dock (Ctrl+K) that authors entities behind the approval gate. |
| `agent-permissions` | Approval/permission model — always-on trade gate + capability grants. |

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
