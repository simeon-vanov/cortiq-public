---
feature: docs-refresh-and-screenshots
spec: n/a (user-directed docs overhaul, 2026-06-26)
plan: this file is the working contract
started: 2026-06-26
last_session: 2026-06-26
---

# In-flight: User-facing docs refresh + app screenshots

Comprehensive refresh of the public Starlight docs at `src/content/docs/` to match the
current app, add pages for whole feature areas that shipped after the docs were written,
and replace every `SCREENSHOT-NEEDED` placeholder with a real captured app screenshot.

## Current state

CONTENT COMPLETE and committed. All 18 stale pages rewritten + 7 new pages authored, sidebar
wired, `npm run build` green (41 pages, 0 errors/warnings), 0 broken internal links, code-review
returned zero blocking findings. 29 app screenshots captured by `DocScreenshotCaptureTests.cs`
and their markers removed. `ARCHITECTURE-CHANGES.md` + engineering references updated.

Remaining before this file can be deleted (ship): the 5 outstanding screenshots tracked in
`docs/reference/screenshots.md` — 3 inherently manual (SmartScreen, MT5 EA, live health-green),
`playbooks-and-data__playbook-editor.png` (auto-capture in progress), and
`workspace-and-monitoring__now-trading-bar.png` (live-cycle only) — plus a push to `main` to
deploy on GitHub Pages (not yet pushed; user gates pushes).

## Canonical facts (writers MUST follow — these override anything in the old pages)

### Product mandates
- **Single instrument per session.** Each `AISession` is locked to exactly ONE symbol.
  There is NO symbol scanner, NO AutoScan, NO multi-symbol baskets. Never imply trading
  "many symbols at once". Multi-account is the only "across many" axis. Banned asset/word:
  `autoscan`.
- **BYO-AI only.** Managed Cortiq AI is discontinued and removed from the UI (dormant code
  only). Do NOT feature it. Present AI as bring-your-own.
- **Backtesting EXISTS** and is first-class. Any text saying "Cortiq is not a backtester" /
  "doesn't include a backtester" is FALSE — remove/invert it.

### AI providers and transports (replaces the old "browser vs API" model)
- **Browser mode is DEAD.** Remove every mention of browser mode / "logged-in browser
  account" / Playwright-driven provider window.
- **Grok is removed** as a first-class provider. Drop it everywhere.
- Providers: **ChatGPT (OpenAI), Gemini (Google), Claude (Anthropic), OpenRouter /
  OpenAI-compatible, Local model (Ollama / LM Studio).** (Managed AI dormant — omit.)
- Transports: **API, ACP (local agent over JSON-RPC, e.g. `claude-agent-acp` / `codex-acp`),
  CLI, External MCP.**
- Default models worth citing: `gpt-4o`, `gemini-2.0-flash`, `claude-sonnet-4-6` (API);
  Claude ACP `claude-opus-4-6[1m]`. Verify against `cortiq-app/docs/reference/ai-providers.md`.
- A session won't start an unauthenticated provider (auth preflight / `ProviderAuthBadge`).

### Licensing (replaces machine-bound/expiring language)
- **€199 one-time**, lifetime v1.x updates. **One key activates up to 2 machines.**
- **14-day refund** via Stripe. Purchase at `cortiq.trade` (`/#pricing`); key emailed instantly.
- Key shape `CRTQ-XXXX-XXXX-XXXX-XXXX`. Activated on first launch.
- Enforcement = **periodic fail-open re-verify with a 14-day grace**. ANY MT5-bound session
  start needs a valid license; **only backtests are license-free** (demo exemption removed
  2026-06-25). Non-dismissible red banner when effectively invalid.
- Installer = **Velopack** `Cortiq-win-Setup.exe` (NOT `Cortiq.msix`). Auto-updates in the
  background, installs on restart only when no session is active and no trade is open.
  Source of truth: `cortiq-landing/src/lib/site.ts`.

### Session status set (the true set)
`Created` (initial) → `Running` → `RiskPaused` (auto-resume) / `TimePaused` (auto-resume) /
`Paused` (manual-only, no service writer) / `Stopped` / `Completed` / `Failed` (terminal;
auto-restart only if `EnableAutoRestart` + `NextAutoRestartAt`). The old page is missing
`TimePaused` and `Failed`.

### Real app sidebar (for app-navigation-guide)
- **Library:** Home, Dashboard, Sessions, Trade Ideas, Journal, Session Reviews, Cohorts,
  Conversations, System Messages.
- **Playbooks:** My Playbooks (+ up to 5 pinned playbook links).
- **Preparation:** Research, Backtests, Skills, Preparation, Sentiment, Instrument Profiles.
- **Tools:** Data Packages, Indicators, Risk Management, Provider Health, AI Providers, License.
- Standalone: **Settings** (a lone NavItem, NOT a group — holds MT5 accounts, notification
  credentials, reports, agent permissions as sub-surfaces). **Copilot** (toggle button, Ctrl+K).
- **Community:** Report a Bug, Feedback, Discussion (external links).

## Information architecture (final sidebar — update `astro.config.mjs`)

Existing pages keep their slugs. New pages and group placement:

- **Start Here:** documentation-map, app-navigation-guide, feature-overview,
  capability-reference, getting-started, installation-and-activation, first-30-minutes, glossary
- **Platform:** mt5-integration, ai-providers, playbooks-and-data, sessions, risk-management,
  **backtesting (NEW)**, execution-modes-and-notifications, workspace-and-monitoring,
  journal-and-analytics, **session-review (NEW)**, **system-messages (NEW)**
- **Research & Skills (NEW group):** research (NEW), skills (NEW)
- **MCP & Agent:** mcp-and-agent-integration, **cortiq-copilot (NEW)**, **agent-permissions (NEW)**
- **Trading Cycle:** (unchanged subtree)
- **Support:** licensing-and-support, faq

## Screenshot list (filenames → route → seed → notes)

Capture via `Cortiq.E2ETests/Tests/DocScreenshotCaptureTests.cs`. Viewport 1600x900,
`FullPage=false`. **Close the Copilot dock first** (`nav-copilot-toggle`) except on the
Copilot page. Use `DemoDataSeeder` for rich pages; `DesktopAppSeedData` for edge states.
Output dir: `cortiq-public/public/images/screenshots/`. Filenames `<page-slug>__<descriptor>.png`.
Manifest lives in `docs/reference/screenshots.md` — keep it in sync. Rename the banned
`sessions-and-autoscan__create-form.png` → `sessions__create-form.png`.

## Where I left off
Writing the shared contract; about to dispatch parallel writer subagents + extend the
screenshot harness.

## Open blockers / decisions to make
- Confirm default model strings + ACP package names against `ai-providers.md` during the
  ai-providers rewrite (don't invent).

## Mid-flight decisions made
- 2026-06-26: Deliverable target = the existing Astro/Starlight public docs repo
  (`cortiq-public`), per user ("already in the public repo in github"). Full coverage of
  every feature requested.
- 2026-06-26: Screenshots captured by driving the real desktop app via `DesktopAppTestHarness`
  (WebView2 CDP + Playwright) under `CORTIQ_AUTOMATION_MODE`, seeded with `DemoDataSeeder`.

## Next session: read first
1. This file
2. `docs/reference/style-guide.md`, `docs/reference/screenshots.md`,
   `docs/reference/pages-and-content.md`
3. `cortiq-app/docs/reference/*.md` for ground truth
4. `Cortiq.E2ETests/Tests/DocScreenshotCaptureTests.cs` for the capture pattern
