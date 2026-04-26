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
