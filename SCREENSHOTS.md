# Cortiq Public Docs — Screenshot Manifest

This file tracks every screenshot referenced by the docs. When the markdown placeholder is filled, the corresponding PNG must live at the path below and follow the redaction rules.

## Conventions

- **Folder:** `public/images/screenshots/`
- **Filename:** `<page-slug>__<descriptor>.png` (lowercase; double-underscore separator).
- **Default resolution:** 1600 × 900 for full UI; 1200 × 600 for partial views.
- **Redaction:** no real broker names, no real account numbers, mask balances unless that's the point of the screenshot.
- **Outstanding placeholders:** `grep -rn "SCREENSHOT-NEEDED" src/content/docs/`

## Manifest

| Filename | Page | What to capture | Resolution | Redaction notes |
|---|---|---|---|---|
| `mt5-integration__settings-page.png` | mt5-integration | Cortiq Settings → MT5 Accounts panel with one configured account, default badge visible | 1600×900 | Mask account number (first 3 + last 2 digits ok), use a demo broker name |
| `mt5-integration__zmqfacade-attached.png` | mt5-integration | A blank EURUSD chart in MT5 with ZmqFacade EA attached and the smiley face icon visible (top-right of chart) | 1200×600 | Mask broker name and balance |
| `mt5-integration__health-green.png` | mt5-integration | Cortiq topbar showing the MT5 health indicator in green/connected state | 1200×600 | None |
| `workspace-and-monitoring__home.png` | workspace-and-monitoring | Home screen with at least one running session and the first-run checklist still visible | 1600×900 | Mask balances |
| `workspace-and-monitoring__dashboard.png` | workspace-and-monitoring | Dashboard with cross-account P/L chart, recent trades list, and risk widgets visible | 1600×900 | Mask balances and account numbers |
| `workspace-and-monitoring__sessions-list.png` | workspace-and-monitoring | Sessions page with a mix of Running, Paused, and Stopped sessions | 1600×900 | None |
| `workspace-and-monitoring__session-detail.png` | workspace-and-monitoring | Session detail page with live execution view and AI conversation panel open | 1600×900 | Mask account, broker name |
| `workspace-and-monitoring__trade-ideas.png` | workspace-and-monitoring | Trade Ideas page with 3+ ideas at different statuses | 1600×900 | None |
| `workspace-and-monitoring__conversations.png` | workspace-and-monitoring | Conversations panel showing one full prompt+response cycle | 1600×900 | None |
| `workspace-and-monitoring__provider-health.png` | workspace-and-monitoring | Provider Health view with success rate, response times, recent errors per provider | 1600×900 | None |
| `workspace-and-monitoring__journal.png` | workspace-and-monitoring | Journal page with a closed-trade entry and AI-generated journal text | 1600×900 | Mask account |
| `workspace-and-monitoring__now-trading-bar.png` | workspace-and-monitoring | Bottom NowTradingBar with active session metrics during a live cycle | 1200×400 | Mask account, broker |
| `app-navigation-guide__sidebar.png` | app-navigation-guide | Cortiq desktop app sidebar (full + mini state side-by-side if possible) showing all top-level pages | 1200×900 | None |
| `installation-and-activation__activation-dialog.png` | installation-and-activation | Cortiq's license-activation dialog with a placeholder key visible (CRTQ-XXXX-XXXX-XXXX-XXXX) | 1200×600 | Use a fake key only |
| `installation-and-activation__msix-installer.png` | installation-and-activation | Windows MSIX installer mid-install showing Cortiq.msix | 1200×600 | None |
| `ai-providers__api-keys.png` | ai-providers | Cortiq Settings → AI Providers panel with API key fields filled (placeholders) for OpenAI, xAI, Anthropic, Google | 1600×900 | Use placeholder keys (sk-...REDACTED) only |
| `ai-providers__browser-mode.png` | ai-providers | Browser-mode flow: a Playwright-controlled provider window showing logged-in state | 1200×600 | Mask any real account email |
| `playbooks-and-data__playbook-editor.png` | playbooks-and-data | Cortiq Playbooks page with one playbook open in the editor, all step types visible | 1600×900 | None |
