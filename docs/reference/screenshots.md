---
status: reference
area: screenshots
last_updated: 2026-10-30
---

# Screenshots

## Current capture set

The 2026-10-30 refresh contains **44 fresh PNGs**, captured from the real current
MAUI Blazor Hybrid development desktop. Forty-one figures appear across 24 reader
pages; alternate and legacy-result views are retained as reference captures.
They use isolated synthetic data and are not customer trading results.

The [machine manifest](../../public/images/screenshots/capture-manifest.json)
records every image's route, timestamp, dimensions, byte count, SHA256, reader
uses, and captured application hashes. The source HEAD is a development checkout,
not a guarantee about a published installer. The original
[audit](../research/2026-10-30-public-documentation-audit.md) records the superseded
39-image set. Its two retired Research list/data-files assets have no current
reader references and are removed; current Research draft/history and Hub Data
views replace them.

## Capture checkpoint

Use the existing screenshot fixture from `cortiq-app/`. This checkpoint requires
an explicit desktop/UI request; do not run it as ordinary CI verification.

```powershell
dotnet build Cortiq.BlazorApp/Cortiq.BlazorApp.csproj -m:1 -c Debug -f net10.0-windows10.0.19041.0
```

Set the opt-in and evidence variables only in the test child process. This command
saves complete logs and TRX to a unique ignored directory:

```powershell
pwsh -NoProfile -Command {
    $captureRoot = Join-Path (Get-Location) ('.verification/doc-screenshots-' + [DateTime]::UtcNow.ToString('yyyyMMdd-HHmmss'))
    New-Item -ItemType Directory -Force -Path $captureRoot | Out-Null
    $env:CORTIQ_ENABLE_DESKTOP_E2E = '1'
    $env:CORTIQ_DOC_CAPTURE_EVIDENCE = $captureRoot
    $env:CORTIQ_DOC_CAPTURE_SOURCE_HEAD = git rev-parse HEAD
    dotnet test Cortiq.E2ETests/Cortiq.E2ETests.csproj -m:1 -c Debug --filter "FullyQualifiedName~DocScreenshotCaptureTests" --results-directory $captureRoot --logger "trx;LogFileName=capture.trx" *> (Join-Path $captureRoot 'capture.log')
    $captureExit = $LASTEXITCODE
    Get-Content (Join-Path $captureRoot 'capture.log') -Tail 20
    exit $captureExit
}
```

The fixture clears seeded provider credentials while retaining feature routes,
uses temporary database/app-data/WebView2 directories, and reserves loopback ports
for every demo MT5 account. It selects **Continue without sharing** in that demo
instance. It does not submit an order, start a session, generate research, or send
a model turn. The Manual Order example edits a local preview only.

The shared harness disables native occlusion/background throttling for its child
WebView and polls readiness explicitly. The capture fixture foregrounds only its
owned app and waits for navigation/loading/modal layers to clear. It uses current
SPA routes and actual controls, with page-content crops for Provider Health and
Reviews where the development shell can retain the preceding page's title.

A passing checkpoint requires all 44 declared outputs to be fresh. Consume only a
complete successful `capture-manifest.json`; earlier failed attempts can leave
partial PNGs in place. Review every image visually as well as checking its route,
size, timestamp, and hash. A valid PNG alone does not prove useful framing.

## Reader and image rules

- Use base-absolute `/cortiq-public/images/screenshots/<name>.png` URLs.
- Give each screenshot purposeful alt text and an accurate state caption.
- Preserve truthful warnings in a stopped/unconfigured demo. Do not imply a live
  connection or a submitted trade from an editable preview.
- MT5 ports shown in captures are temporary isolation ports, not setup defaults.
- Demo risk limits and quantities are illustrative, not recommendations.
- Never publish real keys, broker/account identifiers, or personal data.
- Full views are 1600x900. The two real-content crops are 1360x755.
- Do not embed a missing future capture. The build tests reject missing image
  paths, empty alt text, incorrect base paths, and novelty badges.
- SmartScreen and live MT5/connected-status images are not part of this isolated
  set. The guides do not reference nonexistent substitutes.

## Manifest

| PNG | Reader pages | Captured route |
| --- | --- | --- |
| `app-navigation-guide__sidebar.png` | `app-navigation-guide` | `/mt5-accounts` |
| `ai-providers__api-keys.png` | `ai-providers` | `/ai-providers` |
| `ai-providers__provider-card.png` | Reference capture only | `/ai-providers` |
| `mt5-integration__settings-page.png` | `mt5-integration` | `/mt5-accounts` |
| `installation-and-activation__activation-dialog.png` | `installation-and-activation` | `/license` |
| `sessions__list.png` | `sessions` | `/sessions` |
| `sessions__create-form.png` | `sessions` | `/sessions/new` |
| `sessions__detail.png` | `sessions` | `/sessions/{id}` |
| `risk-management__global-panel.png` | `risk-management` | `/risk` |
| `risk-management__account-panel.png` | `risk-management` | `/risk` |
| `execution-modes-and-notifications__settings.png` | `execution-modes-and-notifications` | `/sessions/{id}` |
| `workspace-and-monitoring__home.png` | `first-30-minutes`, `workspace-and-monitoring` | `/` |
| `workspace-and-monitoring__dashboard.png` | `workspace-and-monitoring` | `/dashboard` |
| `workspace-and-monitoring__trade-ideas.png` | `trading-cycle/entities/trade-ideas` | `/trade-ideas` |
| `workspace-and-monitoring__conversations.png` | Reference capture only | `/conversations` |
| `workspace-and-monitoring__provider-health.png` | `workspace-and-monitoring` | `/provider-health` |
| `workspace-and-monitoring__journal.png` | `journal-and-analytics` | `/journal` |
| `journal-and-analytics__analytics.png` | `journal-and-analytics` | `/dashboard` |
| `backtesting__list.png` | Reference capture only | `/backtests` |
| `backtesting__new.png` | `backtesting` | `/backtests/new` |
| `backtesting__detail.png` | `backtesting` | `/backtests/{id}` |
| `research__log.png` | `research` | `/instruments/XAUUSD/research` |
| `research__draft.png` | `research` | `/research-drafts/{id}` |
| `instrument-hub__data.png` | `research` | `/instruments/XAUUSD?tab=data` |
| `research__answer-card.png` | Reference capture only | `/research/2?runId=6` |
| `research__exploration.png` | Reference capture only | `/research/2?runId=8` |
| `instrument-hub__list.png` | `instrument-hub` | `/instruments` |
| `instrument-hub__detail.png` | `instrument-hub` | `/instruments/XAUUSD` |
| `instrument-hub__knowledge-ledger.png` | `instrument-hub` | `/instruments/XAUUSD?tab=knowledge` |
| `skills__list.png` | `skills` | `/skills` |
| `skills__editor.png` | `skills` | `/skills/1/edit` |
| `playbooks-and-data__playbook-editor.png` | `playbooks-and-data` | `/playbooks/1/edit` |
| `session-review__panel.png` | `session-review` | `/reviews` |
| `session-review__backtest-workspace.png` | `session-review` | `/backtests/{id}/review` |
| `playbooks-and-data__policy-list.png` | `playbooks-and-data` | `/data-access-policies` |
| `profiles__packages.png` | `trading-cycle/entities/instrument-profiles` | `/instrument-profiles` |
| `sentiment__packages.png` | `trading-cycle/entities/sentiment-reports` | `/sentiment` |
| `system-messages__inbox.png` | `system-messages` | `/system-messages` |
| `agent-permissions__settings.png` | `agent-permissions` | `/copilot-settings` |
| `cortiq-copilot__dock.png` | `cortiq-copilot` | `/` |
| `sessions__manual-detail.png` | `discretionary-trading` | `/sessions/{id}` |
| `sessions__live-chart.png` | `charting` | `/sessions/{id}` |
| `backtesting__manual-replay.png` | `backtesting`, `charting` | `/backtests/{id}` |
| `instrument-hub__instance-events.png` | `instrument-hub` | `/instruments/XAUUSD/knowledge/9201` |
