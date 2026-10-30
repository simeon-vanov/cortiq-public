---
status: active
last_updated: 2026-10-30
---

# Workflow documentation refresh

This ledger records how the remaining findings from the
[public documentation audit](../research/2026-10-30-public-documentation-audit.md)
are resolved. The original audit remains a historical snapshot.

## Reader corrections

| Audit ID | Current reader owner | Correction |
| --- | --- | --- |
| 13 | Research | Saved drafts, evidence scope, explicit measurement checking, and human approval/start; saved edits and follow-up/rerun paths. |
| 14 | Research; Cortiq Copilot; Instrument Hub | Copilot prepares/edits/checks a draft; it does not approve or start the study. |
| 15 | Trading cycle overview; Sessions; Backtesting; Discretionary trading; orientation pages | Continuous assessments, retained understanding, opportunities, and local watches replace global-plan/replanning descriptions. |
| 16 | Execution modes & notifications; Activity; Journal; Workspace | Windows trade notifications, durable Activity, and price alerts replace removed social delivery and reporting promises. |
| 17 | Discretionary trading; Charting; Feature overview | Risk-based Auto sizing, editable Lots/Manual sizing, ATR defaults, and protection brackets are distinguished. |
| 18 | MT5 integration | Debounced connection failures, confirmed broker-feed loss, session failure/restart checks, and unavailable management are distinguished. |
| 19 | Instrument Hub; Research | Complete-population Topic continuation is described with source/evidence/validation constraints and the development-runtime boundary. |
| 20 | Risk management | Daily trade caps count executed entries, separately from realized P/L and outstanding order capacity. |
| 21 | Risk management | Configured trading-week boundary and actual global/account control ownership replace rolling-week and scope errors. Default sizing is not a universal hard ceiling. |
| 22 | Risk management | Independent unrealized-P/L polling replaces cycle-end-only claims; polling and execution limits remain explicit. |
| 23 | FAQ; Risk management; Sessions; Workspace | Automatic resumption checks global counters, not every account breach; entry validation remains separate. |
| 24 | Journal; Session trades & timeline; Sessions entity | Current session detail, Journal, Dashboard, and Reviews paths replace absent sidebar instructions. |
| 25 | Activity | Actual visible filters and research categories; marking read is distinct from deleting. |
| 26 | Sentiment reports; Supporting context | Host-wide post-event maintenance can incur provider usage without a running session; delay, retries, history, and preserved original expiry are explained. |
| 27 | Sentiment reports | Claim-linked source excerpts/dates, truthful unknown dates/query telemetry, legacy fallback, and independent review. |
| 28 | Sentiment reports | Actual saved deadlines can be absent; finite validity is not universal. |
| 29 | Playbook design; Playbooks entity | Rule sections are authoring responsibilities, not a four-stage executable pipeline. |
| 30 | Session architecture; Sessions entity; Playbook design | Pinned playbook entry schedules are separate from session End Date and continued exposure management. |
| 31 | Data policy design; Data packages entity | Rolling numeric history across permitted timeframes is separate from retained Test Data tier previews. |
| 32 | Playbook design; Playbooks entity | Structured risk multiplier, min/max reward-to-risk, context requirements, and generation skills are documented. |
| 33 | Instrument profiles; Supporting context | Package → generation run → outputs, effective-time/freshness controls, and actual history-inspection limits. |

The homepage, glossary, capability maps, first-run guide, and app-navigation guide
are aligned with those corrections. Backtesting and Skills now explain explicit
Autonomous replay skill attachments. Existing page URLs remain stable, including
an alias for the renamed assessment heading's former planning anchor.

## Review corrections

- Profile history shows run metadata and output names/generated stamps. Detailed
  analysis stays bound to the latest valid profile; the history rows do not expose
  exact historical deadlines. The guide follows that actual interface.
- Clearing a profile validity override recomputes the deadline using the package
  duration; despite the current UI's wording, it is not an open-ended deadline.
- Global symbol-count/exposure/loss-streak controls are not advertised as account
  fields. Per-account loss streak can affect recovery sizing, which is distinct.

## Capture and runtime baseline

Capture uses the real DEBUG desktop and the existing isolated harness: temporary
SQLite database, app-data root, and WebView2 profile. Demo credentials are removed
and demo accounts use held reserved loopback ports so residual transports cannot
reach an operator's MT5 terminal. No real provider, research-generation, session
start, or trading actions are part of the capture checkpoint.

The current development desktop is the reader baseline. A successful capture does
not establish that every feature is available in an older public installer, nor
does it satisfy live provider or broker acceptance. The guides state that boundary.

## Focused verification

- Affected DEBUG desktop project built successfully, with zero errors. Existing
  dependency warnings were recorded rather than expanded into unrelated updates.
- Final capture and reserved-port tests passed **2/2**; harness guard tests passed
  **8/8**. All **44/44** declared PNGs were fresh and visually reviewed.
- The docs production build passed, including **4/4** offline tests, Astro
  validation with zero errors/warnings/hints, and all 43 reader pages plus the 404.
- The image/badge guard was also checked against negative temporary fixtures:
  missing images and novelty badges were rejected; a valid reference passed.
- Internal source links/anchors, desktop/mobile rendered previews, visible-image
  loading, the preserved overview deep link, and horizontal-overflow checks passed.
- Final integration and capture-code reviews found no remaining important issues.

The site embeds **41 figures across 24 pages**, using 39 unique assets from the
44-image set. Thirty-seven historical PNGs are replaced, two retired Research
assets removed, and seven current-workflow captures added. Alternate captures are
retained with their provenance in the
[machine manifest](../../public/images/screenshots/capture-manifest.json).

Publication is the remaining step in the
[implementation plan](../plans/2026-10-30-workflow-and-screenshot-refresh.md).

The installation guide also describes the current first-run product-analytics
choice. Capture selects **Continue without sharing** only in the isolated demo
instance; it does not alter a personal installation's consent.

The fresh Home setup view also exposed a missing first-run instruction: the
walkthrough now explicitly reviews applied risk settings and selects **Confirm
current limits reviewed** before proceeding. This acknowledgement is separate
from merely entering risk settings.
