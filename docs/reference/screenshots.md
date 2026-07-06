---
area: screenshots
last_updated: 2026-06-26
---

# Screenshots

This file tracks every screenshot referenced by the reader docs. A PNG either exists at
`public/images/screenshots/<name>` (captured) or carries an outstanding
`<!-- SCREENSHOT-NEEDED: ... -->` marker on its reader page.

## What it does

Single manifest of every `/images/screenshots/*.png` referenced from a reader page.

## How the app-UI screenshots are captured

Most screenshots are captured automatically by driving the real desktop app under Playwright,
not by hand. The harness launches `Cortiq.BlazorApp` in `CORTIQ_AUTOMATION_MODE` (fakes MT5 +
LLM, no live terminal), connects to its WebView2 over CDP, seeds a rich demo database
(`Cortiq.DemoSeeder.DemoDataSeeder` plus augmented rows), navigates each route with the Copilot
dock closed, and writes 1600x900 PNGs.

- Capture driver: `cortiq-app/Cortiq.E2ETests/Tests/DocScreenshotCaptureTests.cs`
  (test `CaptureAllDocScreenshots`).
- Run: `dotnet test Cortiq.E2ETests/Cortiq.E2ETests.csproj --filter "FullyQualifiedName~DocScreenshotCapture"`
  from `cortiq-app/` (a DEBUG build of `Cortiq.BlazorApp` must exist).
- To add a screen: add a `CaptureRouteAsync(...)` line for its route + filename, run, then
  reference it from the reader page.

### Capture gotchas (read before extending the driver)
- The desktop app shell is fixed-height with an inner scroll container, so Playwright
  `FullPage` equals the viewport — below-the-fold content can't be captured by `FullPage` and
  inner-container scrolling is unreliable.
- Never use the harness's asserting waits (`WaitForTextAsync` / `ClickTabAsync`) inside the
  best-effort loop — they call `Assert.Fail` and poison later captures. Use the non-asserting
  local helpers.
- MudTabs need a real Playwright `ClickAsync` on `.mud-tab` (JS `.click()` doesn't fire
  Blazor binding). Wait on a body-unique subtitle, not a sidebar word (sidebar words match
  instantly before the page renders).
- `/ai-providers` and `/license` are extra `@page` directives on `SettingsPage.razor` that
  deep-link to its tabs. `/research/{id}` is `int`; `/backtests/{id}` is `guid`.

## Conventions

- **Folder:** `public/images/screenshots/`
- **Filename:** `<page-slug>__<descriptor>.png` (lowercase; double-underscore separator).
- **Reference path:** always include the site base — `/cortiq-public/images/screenshots/<name>.png`.
  Bare `/images/...` 404s in dev and on GitHub Pages because the site is served under
  `base: '/cortiq-public'`.
- **Resolution:** 1600x900 for full UI; smaller crops allowed for single components.
- **Redaction:** no real broker names, no real account numbers, mask balances unless that's
  the point of the screenshot. Automation-mode shots already use demo data and show
  "MT5 Disconnected"; the License surface shows a DEV-MOCK license.

## Manifest — captured (auto-driver)

These PNGs are present in `public/images/screenshots/` and their reader-page markers are
removed. The Instrument Hub and the new Research surfaces (Data Files, grounded answer,
exploration) are seeded by `DemoDataSeeder.SeedInstrumentHubAsync` plus augmented rows in
`DocScreenshotCaptureTests` (a managed data file per XAUUSD, and a completed exploration run
with state / instances / script-run audit).

| Filename | Page | Route captured |
|---|---|---|
| `app-navigation-guide__sidebar.png` | app-navigation-guide | sidebar crop on `/` |
| `ai-providers__api-keys.png` | ai-providers | `/ai-providers` |
| `ai-providers__provider-card.png` | ai-providers | `/ai-providers` (provider card) |
| `mt5-integration__settings-page.png` | mt5-integration | `/settings` → MT5 Accounts |
| `installation-and-activation__activation-dialog.png` | installation-and-activation | `/license` |
| `sessions__list.png` | sessions | `/sessions` |
| `sessions__create-form.png` | sessions | `/sessions/new` |
| `sessions__detail.png` | sessions | `/sessions/{id}` |
| `risk-management__global-panel.png` | risk-management | `/risk` (Global tab) |
| `risk-management__account-panel.png` | risk-management | `/risk` (Per-Account tab) |
| `execution-modes-and-notifications__settings.png` | execution-modes-and-notifications | `/settings` → Notifications |
| `workspace-and-monitoring__home.png` | workspace-and-monitoring | `/` |
| `workspace-and-monitoring__dashboard.png` | workspace-and-monitoring | `/dashboard` |
| `workspace-and-monitoring__trade-ideas.png` | workspace-and-monitoring | `/trade-ideas` |
| `workspace-and-monitoring__conversations.png` | workspace-and-monitoring | `/conversations` |
| `workspace-and-monitoring__provider-health.png` | workspace-and-monitoring | `/provider-health` |
| `workspace-and-monitoring__journal.png` | workspace-and-monitoring | `/journal` |
| `journal-and-analytics__analytics.png` | journal-and-analytics | `/dashboard` |
| `backtesting__list.png` | backtesting | `/backtests` |
| `backtesting__new.png` | backtesting | `/backtests/new` |
| `backtesting__detail.png` | backtesting | `/backtests/{id}` |
| `research__list.png` | research | `/research` (browse-first launcher) |
| `research__data-files.png` | research | `/research?symbol=XAUUSD&tab=files` (Data Files tab) |
| `research__answer-card.png` | research | `/research/{workspaceId}?runId={groundedRunId}` (grounded v2 answer) |
| `research__exploration.png` | research | `/research/{workspaceId}?runId={explorationRunId}` (exploration detail) |
| `instrument-hub__list.png` | instrument-hub | `/instruments` |
| `instrument-hub__detail.png` | instrument-hub | `/instruments/XAUUSD` |
| `instrument-hub__knowledge-ledger.png` | instrument-hub | `/instruments/XAUUSD` (scrolled to knowledge feed) |
| `skills__list.png` | skills | `/skills` |
| `skills__editor.png` | skills | `/skills/{id}/edit` |
| `session-review__panel.png` | session-review | `/reviews` |
| `system-messages__inbox.png` | system-messages | `/system-messages` |
| `agent-permissions__settings.png` | agent-permissions | `/settings` → Copilot tab |
| `cortiq-copilot__dock.png` | cortiq-copilot | Copilot dock open on `/` |
| `playbooks-and-data__playbook-editor.png` | playbooks-and-data | `/playbooks/{id}/edit` |

## Manifest — outstanding

These reader pages still carry a `<!-- SCREENSHOT-NEEDED: ... -->` marker.

| Filename | Page | Why not auto-captured | How to fill |
|---|---|---|---|
| `installation-and-activation__smartscreen.png` | installation-and-activation | Windows OS dialog, not app UI | Capture by hand on first run of `Cortiq-win-Setup.exe` (More info → Run anyway) |
| `mt5-integration__zmqfacade-attached.png` | mt5-integration | MetaTrader 5 terminal, not Cortiq | Capture a EURUSD chart with `ZmqFacade` attached (smiley icon visible); mask broker/balance |
| `mt5-integration__health-green.png` | mt5-integration | Needs a live MT5 connection; automation mode shows Disconnected | Capture the topbar health indicator while connected to a live terminal |
| `workspace-and-monitoring__now-trading-bar.png` | workspace-and-monitoring | NowTradingBar only renders during a live active cycle | Capture the bottom bar during a running live session; mask account/broker |

## Entry points / interfaces

- **Add a captured screenshot:** add a route capture to `DocScreenshotCaptureTests.cs`, run the
  test, reference `![...](/images/screenshots/<name>.png)` on the reader page, add a row above.
- **Add a manual screenshot:** drop the `![...]` plus a `<!-- SCREENSHOT-NEEDED: ... -->` marker
  on the page and an outstanding row here; remove both once the redacted PNG is committed.
- **Audit outstanding:** `grep -rn "SCREENSHOT-NEEDED" src/content/docs/`.

## Known gaps / accepted debt

- The auto-driver depends on a DEBUG build of `Cortiq.BlazorApp` and on `CORTIQ_AUTOMATION_MODE`
  (compiled out of Release). It can't show live MT5 state (every shot reads "MT5 Disconnected").
- `agent-permissions__settings.png` frames the Copilot settings tab; the grant list sits just
  below the fold because the inner scroll container isn't the document root. Re-crop by hand if
  the grant list itself must be visible.
- No automated redaction check — automation-mode demo data is safe, but hand-captured shots must
  be checked for real account numbers / broker names before committing.
