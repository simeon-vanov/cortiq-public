---
status: reviewed
audited_at: 2026-10-30
reader_source_commit: b38e9b3
live_docs_commit: d1d26efe058ddda6afa55bcd3f7b76d2dd1e552c
desktop_head_observed: f755cc8d175ae53ea8752d3d8e37ee6f1a214ae0
---

# Public documentation audit

## Outcome and scope

All **43 reader pages** were read in full and compared with the current desktop
references and relevant implementation. All 43 live URLs returned HTTP 200. The
audit checked rendered links, heading anchors, image URLs, and seven external link
destinations, and visually inspected all **39 existing screenshots**.

The largest issue is publication drift. The public site and remote `main` are at
`d1d26ef`; the local source started four commits ahead, at `b38e9b3`. Those commits
already remove the novelty badges and obsolete image embeds and update many
workflows. The live site still shows seven `New` sidebar badges, 39 historical
screenshots, four broken image references, and obsolete free-backtesting claims.
Publishing the newer source alone would still leave the content defects below.

This task corrects localized contradictions and records the larger rewrite work.
It does **not** claim the documentation is fully current, replace screenshots,
publish the site, or verify an installed desktop. The shared desktop checkout
contains unfinished work. Current source is evidence of its implementation, not
proof of public release availability. The latest public installer observed was
**v0.0.31, published 2026-08-30**. Its contents were not installed or exercised.

## Findings and disposition

`Fixed locally` means the reader source was corrected in this task; the public
site still needs publication. `Flagged` means a verified discrepancy or omission
is documented for a subsequent content refresh. Detailed source file/line proof
and the complete page-coverage tables are in the three linked evidence reports.
Their line numbers identify the pre-correction snapshot.

### Publication, labels, and images

| ID | Finding | Disposition and action |
| --- | --- | --- |
| 1 | Four local documentation commits have never reached public `main`. | **Flagged.** Review the full outgoing documentation snapshot before authorizing a push. The existing Pages workflow deploys on a reader-source push to `main`. |
| 2 | The live site embeds 39 historical screenshots and four nonexistent capture targets. | **Flagged.** Current reader source already omits every image embed. Keep it that way until current captures are checked. See the image inventory below. |
| 3 | Seven `New` badges remain on every live sidebar. | **Source already corrected; policy fixed locally.** There are no `New` badges in current reader source. The style guide now prohibits novelty badges, preventing their reintroduction. Keep `Advanced` and real controls such as `New Session`. |

The seven live novelty labels belong to Backtesting, Session review, System
messages, Instrument Hub, Research, Skills, and Cortiq Copilot. Ordinary uses of
“new” describe actions or new data and should not be globally deleted.

### Localized corrections made

Evidence: [orientation, licensing, providers, and support](2026-10-30-public-documentation-audit/orientation.md).

| ID | Page or area | Correction |
| --- | --- | --- |
| 4 | Installation; Licensing & support | Removed the two remaining claims that backtests are license-exempt. Both contradicted the same pages and `LicensedActionGate` / `BacktestRunService`. |
| 5 | Installation | Replaced automatic-install/on-restart instructions with background download followed by the explicit `Update to <version>` action and a safe restart. |
| 6 | Installation | Replaced “refund through Stripe checkout” with the support email and the online withdrawal form. Stripe is the payment/refund processor, not the request interface. |
| 7 | First 30 minutes | Replaced guaranteed Journal output with inspection of the session Decision Log. Journal needs a recorded trade; a valid first run may make no trade. |
| 8 | Documentation map | Replaced retired sidebar groups and the claim that Settings is a lone item with current groups and the separate Copilot settings/dock distinction. |
| 9 | AI providers | Changed `Inspect runtime` to the current `Check setup` button label. |
| 10 | FAQ; Licensing & support | Added the authorized setup-help call and refund-if-setup-cannot-work promise, synchronized with the landing FAQ. |
| 11 | Getting started | Added the 64-bit Windows requirement from the x64 release target. |
| 12 | Installation | Removed the unsupported assertion that every release supplies checksums. The observed latest release has installer/package/update assets, with no separately named checksum manifest. The guide now directs readers to release assets and publisher verification. |

### Workflow and operational rewrites still needed

Evidence: [platform workflows](2026-10-30-public-documentation-audit/platform.md).

| ID | Priority | Reader pages | Verified discrepancy and smallest correction |
| --- | --- | --- | --- |
| 13 | High | Research | The direct-start dialog has been replaced in current source by a saved Research draft with Intent, Scope, Questions, measurement checks, and human `Approve and start research`. Rewrite start, follow-up, and rerun steps together. Installed integration remains unverified. |
| 14 | High | Cortiq Copilot; Research | “Start research” proposals imply the assistant can start a draft. Current draft context explicitly reserves approval/start to the operator. Document preparation in Copilot followed by approval in the wizard. |
| 15 | High | Backtesting; Sessions; Discretionary trading; Trading cycle overview | Descriptions still use initial planning, durable market plans, and replanning. Current source uses `continuous-assessment-v1`, retained market understanding, opportunities, and local watches; a global plan is not required. Rewrite the shared explanation once, then align callers. |
| 16 | High | Execution modes & notifications; System messages; Journal & analytics | X/Telegram controls and scheduled social reports are advertised after desktop registration/settings removal on 2026-10-28. Document current Windows Push, Activity, and price alerts; do not promise delivery from retained legacy flags. |
| 17 | High | Discretionary trading | The guide says there is no free-form volume field. The current ticket has editable `Lots`, Manual sizing, default-risk sizing, and draggable protection. Explain both sizing paths and actual validation. |
| 18 | High | MT5 integration | A failed health check is described as immediate pause/automatic reattachment. Source distinguishes debounced socket/EA failures from confirmed broker-feed loss, which can fail sessions. Document the separate failure and restart paths without promising management while disconnected. |
| 19 | Medium, release-dependent | Instrument Hub | The blanket ban on full-population Topic Learning execution continuation conflicts with implemented source. Replace it only after choosing the documented runtime baseline: this feature still has failing consumers/uncommitted prerequisites and no installed/provider acceptance. |
| 20 | Medium | Risk management | The daily trade cap is described as counting closed trades. The entry ledger counts executed/filled entries. Keep entry counts separate from realized-P/L statistics. |
| 21 | Medium | Risk management | Weekly limits are described as rolling, and symbol exposure/count and loss-streak controls as account-only. Source uses a Sunday-anchored configured trading week and also has global controls. Clarify default sizing versus an actual hard ceiling. |
| 22 | Medium | Risk management | The FAQ says unrealized risk is checked only at cycle end, contradicting both the page and the independent background monitor. Explain polling latency, broker fills/gaps, and protective orders. |
| 23 | Medium | FAQ | “Resumes when the breach clears” overstates risk resumption. The current resumer checks global counters and does not re-evaluate per-account counters. State that limitation without changing the risk engine in a documentation task. |
| 24 | Low | Journal & analytics; Session trades & timeline | Instructions point to nonexistent Library → Cohorts / Conversations sidebar items. Their routes remain, so this is navigation drift rather than proof of deletion. Use supported contextual navigation or deliberately retained direct routes. |
| 25 | Low | System messages | The filter list invents a Permission filter and blurs categories, reading, and deletion. Use the actual filter labels and distinguish mark-as-read from delete. |

### Trading-cycle reference rewrites still needed

Evidence: [all trading-cycle guides and entities](2026-10-30-public-documentation-audit/trading-cycle.md).

| ID | Priority | Reader pages | Verified discrepancy and smallest correction |
| --- | --- | --- | --- |
| 26 | High | Sentiment reports | The refresh description omits host-wide post-event maintenance of active, nonexpired packages even without a running session. This can incur provider usage. Explain the running-host requirement, delay, retries, update history, and unchanged original expiry. |
| 27 | High | Sentiment reports | The page denies claim-linked sources and recorded publication dates, both now rendered by the current UI. Document per-claim excerpts/dates where supplied, missing-date/legacy fallback, independent review, and truthful absence of query telemetry. |
| 28 | Medium | Sentiment reports | “Finite validity window” is too absolute: a null deadline is permitted. Tell readers to inspect the actual saved deadline. |
| 29 | Medium | Playbook design | A four-stage runtime pipeline is presented as executable behavior. The current runtime evaluates rule fields holistically. Retain useful authoring advice as a conceptual checklist; remove the invented execution sequence. |
| 30 | Medium | Session architecture; Sessions entity; Playbook design | Entry schedules are assigned to the session. Current days, entry windows, and close offsets belong to pinned playbooks; session End Date is a separate lifetime boundary. Explain continued management after entry-window closure. |
| 31 | Medium | Data access policy design; Data packages entity | Initial/Stream/Analysis tier delivery is presented as the current autonomous payload. Assessments read configured rolling numeric history across permitted timeframes; Primary still supplies scheduling context. Separate retained Test Data/legacy vocabulary from the current contract. |
| 32 | Medium | Playbook design; Playbooks entity | Structured Risk Multiplier, min/max reward-to-risk, context requirements, and generation skills are missing. Add a concise reference distinguishing enforced structured values from prose guidance. |
| 33 | Medium | Instrument profiles | The page explains a conceptual document but omits ProfilePackage → generation run → saved profile, policies/skills, run selection, and effective/expiry inspection. Document the actual package/run workflow. |

Additional completeness gaps: backtest skill attachments are implemented but not
taught; chart bracket/default-sizing controls need coverage alongside finding 17;
the homepage still centers the autonomous cycle and should introduce Manual,
research, and review paths when the assessment narrative is rewritten. These are
coverage improvements, not proof that every described capability is absent.

## Screenshot review and replacement inventory

All filenames below are in `public/images/screenshots/`. All 39 were inspected in
four contact sheets; the manifest already classifies them as historical. No
replacement was captured and no image was re-enabled. A screenshot's age alone
does not prove every visible field is wrong: the table distinguishes explicit
drift from captures that simply lack current visual acceptance.

| Existing PNG | Observation / replacement focus |
| --- | --- |
| `app-navigation-guide__sidebar.png` | Retired sidebar: old top-level Trade Ideas, Cohorts, Conversations, and old grouping. Highest-priority replacement. |
| `agent-permissions__settings.png` | Historical Settings/Copilot layout and old sidebar. Recapture the current permission boundary and grant controls. |
| `ai-providers__api-keys.png` | Historical tabbed provider layout and connection controls. Use current AI Providers/Check setup and explicit model selection. |
| `ai-providers__provider-card.png` | Same historical tabbed view as the preceding capture; the supposed card crop does not isolate the card. |
| `backtesting__list.png` | Historical shell/list. Recapture current status, recovery, and setup entry points. |
| `backtesting__new.png` | Historical setup and policy/session selection. Recapture current standalone setup and captured settings. |
| `backtesting__detail.png` | Historical decision-log vocabulary. Use current assessment/result/evidence layout. |
| `backtesting__manual-replay.png` | Historical replay controls and shell. Recheck against current replay UI before reuse. |
| `cortiq-copilot__dock.png` | Historical home/sidebar and old decision-chat content. Show a current entity-scoped chat or review. |
| `execution-modes-and-notifications__settings.png` | Shows X and Telegram toggles that are no longer available. Do not reuse. |
| `installation-and-activation__activation-dialog.png` | Old Settings/License tabs and a mock active license. Recapture current activation without real keys. |
| `instrument-hub__list.png` | Historical instrument list/sidebar; recheck current list and study status. |
| `instrument-hub__detail.png` | Historical overview/Knowledge/Data tabs and metrics. Show the current Hub and saved-result entry points. |
| `instrument-hub__knowledge-ledger.png` | Historical knowledge pipeline/feed. Recapture current Observations, Learnings, and readiness states. |
| `instrument-hub__instance-events.png` | Historical Learning instance view. Check current evidence controls and readiness representation. |
| `journal-and-analytics__analytics.png` | Historical dashboard/sidebar. Recheck current metrics and risk labels. |
| `mt5-integration__settings-page.png` | Historical Settings tabs and demo-account rows. Use current MT5 Accounts setup. |
| `playbooks-and-data__playbook-editor.png` | Historical editor and shell. Show current structured risk, schedule, policy, and context sections. |
| `research__list.png` | Retired browse-first research launcher. Do not reuse for the saved-draft/Hub workflow. |
| `research__data-files.png` | Retired Research Data Files tab. Show current Hub-managed files/coverage. |
| `research__answer-card.png` | Historical grounded-answer layout. Recapture current Questions and saved result/evidence. |
| `research__exploration.png` | Historical exploration-run interface. Do not present it as current draft/run flow. |
| `risk-management__global-panel.png` | Historical global form and sidebar. Recheck all current scope/limit controls. |
| `risk-management__account-panel.png` | Historical per-account form and sidebar. Recheck counters, sizing, and configured limits. |
| `session-review__panel.png` | Mostly empty old filter screen, not a completed review. Replace with a current saved review and bounded evidence. |
| `sessions__list.png` | Historical shell/list. Recheck current statuses and entry paths. |
| `sessions__create-form.png` | Historical creation form. Use current pinned playbook schedules and explicit session lifetime. |
| `sessions__detail.png` | Historical session/decision layout. Show current assessment and opportunity state. |
| `sessions__manual-detail.png` | Historical Manual ticket and old shell. Recapture editable Lots/default-risk/protection behavior. |
| `sessions__live-chart.png` | Ticket crop does not teach the current editable Lots/sizing state. Recheck before reuse. |
| `skills__list.png` | Historical skill library/shell; validate attachment and current list controls. |
| `skills__editor.png` | Historical skill editor/shell; validate current fields before reuse. |
| `system-messages__inbox.png` | Historical Activity view. Capture actual filters and current message/approval types. |
| `workspace-and-monitoring__home.png` | Historical Home checklist, counters, and sidebar. Replace after current onboarding path is settled. |
| `workspace-and-monitoring__dashboard.png` | Historical dashboard/sidebar. Recheck metric labels and current risk controls. |
| `workspace-and-monitoring__trade-ideas.png` | Historical standalone list/old sidebar. Show current idea-to-reviewed-mandate path if available in the chosen release. |
| `workspace-and-monitoring__conversations.png` | Old Conversations sidebar entry. Route existence does not justify teaching that navigation. |
| `workspace-and-monitoring__provider-health.png` | Historical provider cards; shell header says Conversations while the page is AI Provider Health. Avoid this confusing capture. |
| `workspace-and-monitoring__journal.png` | Historical Journal/sidebar. Show actual recorded trades and distinguish them from Decision Log. |

The four live HTTP 404 images are:

- `installation-and-activation__smartscreen.png`
- `mt5-integration__zmqfacade-attached.png`
- `mt5-integration__health-green.png`
- `workspace-and-monitoring__now-trading-bar.png`

These are optional capture comments in current source, so the source does not
request nonexistent images. Do not manufacture substitute screenshots. Capture
SmartScreen and MT5 only in the appropriate real environment, with identifiers
redacted. This audit did not launch the desktop or connect to a broker/provider.

## Coverage and verification evidence

Full reader coverage is partitioned without gaps or duplicate ownership:

- [Orientation/support/providers](2026-10-30-public-documentation-audit/orientation.md): 14 pages.
- [Platform workflows](2026-10-30-public-documentation-audit/platform.md): 16 pages.
- [Trading-cycle guides/entities](2026-10-30-public-documentation-audit/trading-cycle.md): 13 pages.

The evidence reports identify pages where no additional concrete contradiction
was found; that is not a runtime certification. Source support, installed
acceptance, and release availability remain separate.

Ignored evidence is saved under `.verification/docs-audit-20261030/`:

- `site-audit.json` and `live/*.html`: all 43 fresh responses, image references,
  image status codes, and current-source Markdown link/anchor checks.
- `live-links.json`: rendered internal links/anchors and seven public outbound
  destination checks. No rendered link/anchor failures found; all seven outbound
  destinations returned successful responses.
- `screenshots-1.jpg` through `screenshots-4.jpg`: the 39-image visual inventory.
- `build.log`: `npm run build` passed, including 3/3 retrieval-corpus tests,
  export of all 43 reader pages, Astro validation with zero errors/warnings/hints,
  and generation of 44 HTML pages including the 404 page.

At audit time, current-source internal links and heading anchors had no failures.
The live navigation also had no page/anchor failures; image errors were the four
404s listed above. Working links do not establish truthful instructions, which is
why the source comparison is required.

Final rendered checks confirmed that all 43 built reader pages contain no novelty
badges or image embeds, while legitimate `New` action labels remain. Audit
frontmatter, report links, and `git diff --check` passed. Independent review found
only an external-link count mismatch, corrected to seven before completion.

## Recommended order

1. Choose the supported runtime baseline before rewriting source-only features.
2. Rewrite Research approval/start, social notifications, Manual sizing, MT5
   failure handling, and risk statements first; these change user actions or cost.
3. Align the assessment/playbook/schedule/policy explanations across all affected
   pages, then update sentiment and profile package/run instructions.
4. Capture current screens after those workflows are settled. Keep archived
   images out of reader pages until each is checked against the documented build.
5. Review and authorize publication of the complete outgoing documentation set;
   after deployment, repeat the 43-page link/image/badge smoke check.

No push, deployment, installer execution, desktop capture, MT5/LLM call, checkout,
or refund was performed. The live site therefore remains stale after this local
audit. Further behavioral rewrites and fresh screenshots are flagged work, not
silently claimed complete.
