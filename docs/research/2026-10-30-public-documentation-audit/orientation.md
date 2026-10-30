---
status: reviewed
audited_at: 2026-10-30
reader_source_commit: b38e9b3
---

Snapshot findings recorded before this task's localized corrections. Consult the [main audit](../2026-10-30-public-documentation-audit.md) for each finding's current disposition. Reader line numbers identify the inspected pre-correction snapshot.

# Orientation, licensing, providers and agent audit — 2026-10-30

Read-only production audit. No production source edits, app launch, build, tests, provider calls or trading actions. Line numbers refer to the current local checkout observed during this audit; deployment/release availability is a separate question.

## Ranked findings

### P1 — Contradictory free-backtest claims can mislead purchase/setup decisions
- Reader: `src/content/docs/installation-and-activation.md:74` says “only backtests are exempt”; `src/content/docs/licensing-and-support.md:115` says “Backtests never need a valid license.” Both conflict with the same pages' current main explanations (`installation-and-activation.md:71`, `licensing-and-support.md:15`).
- Current source: `../cortiq-app/Cortiq.Business/Services/Licensing/LicensedActionGate.cs:15` defines the active-license refusal for starting a backtest; `../cortiq-app/Cortiq.Business/Services/Backtesting/BacktestRunService.cs:131` invokes that gate.
- Smallest correction: remove the exemption sentences; explicitly say a backtest start needs a valid license, including the normal grace policy.

### P2 — Updater instructions promise automatic installation that no longer happens
- Reader: `src/content/docs/installation-and-activation.md:79` says “New versions install themselves” and the update applies “on restart”.
- Current source: `../cortiq-app/Cortiq.Business/Services/AppUpdateService.cs:107` says a staged update always waits for explicit user action; `:142`–`:154` checks safety and calls ApplyAndRestart only from ApplyPendingUpdateAsync. `../cortiq-app/Cortiq.BlazorApp/Components/Layout/AppTopBar.razor:55`–`:65` renders the **Update to <version>** button.
- Smallest correction: keep background check/download and safety description, but instruct the operator to select **Update to <version>**, which installs and restarts once safe. Paused/RiskPaused/TimePaused sessions also block application (`AppUpdateService.cs:23`–`:27`).

### P2 — Refund request is wrongly directed through Stripe checkout
- Reader: `src/content/docs/installation-and-activation.md:111` says the refund is obtained “through the Stripe checkout”. Checkout takes payment; it is not the documented refund-request UI.
- Current source: `../cortiq-landing/src/content/legal/legal-pack.json:234`–`:236` offers the online withdrawal function at `/legal/withdrawal` or any clear withdrawal/refund statement to company contact; `:252` identifies Stripe as the original-payment refund method. `src/content/docs/licensing-and-support.md:54` already correctly says email support.
- Smallest correction: direct the reader to `support@cortiq.trade` and/or the refund/withdrawal page, saying approved refunds return through Stripe to the original payment method. Preserve statutory remedies rather than implying all remedies expire at 14 days.

### P2 — Documentation map describes the retired desktop sidebar
- Reader: `src/content/docs/documentation-map.md:15` lists a Playbooks group and says Settings is a lone NavItem rather than a group; it also treats Copilot only as a toggle.
- Current source: `../cortiq-app/Cortiq.BlazorApp/Components/Layout/Sidebar.razor:39`–`:42` has Knowledge/My Instruments, `:74`–`:87` has Preparation/My Playbooks, `:104`–`:121` has Setup and Settings groups with General/Copilot and optional Remote access. `src/content/docs/app-navigation-guide.md:21`–`:31` already matches that current structure.
- Smallest correction: replace the old sidebar paragraph with the actual groups and link to App navigation guide; distinguish the Settings/Copilot page from the Ctrl+K dock.

### P2 — First-run success criteria require trade journal output when no trade may occur
- Reader: `src/content/docs/first-30-minutes.md:9` correctly says a trade is not guaranteed, yet `:33` promises journal output, `:90` instructs reading the decision and simulated outcome in the journal after one or more cycles, and `:103` uses readable journal entries as a success criterion.
- Current source: `../cortiq-app/Cortiq.BlazorApp/Components/Pages/JournalPage.razor:285`–`:373` renders persisted SessionTrade rows and states orphan decisions were removed; `../cortiq-app/Cortiq.BlazorApp/Components/Pages/SessionDetailPage.razor:946`–`:958` hosts the Decision Log/SessionTimeline independently of a trade.
- Smallest correction: inspect the session Decision Log and recorded inputs as the first-cycle checkpoint; use Journal when a simulated trade actually exists. Do not manufacture an outcome to make a 30-minute walkthrough pass.

### P2 — FAQ overstates the condition checked before automatic risk resumption
- Reader: `src/content/docs/faq.md:71` says a RiskPaused session resumes when “the breach condition clears”, without qualification.
- Current source: `../cortiq-app/Cortiq.Business/Services/SessionMonitoringService.cs:430`–`:494` reads global risk settings/counters and tests global limits. `../cortiq-app/docs/reference/risk-management.md:285`–`:287` explicitly records that per-account counters are not re-evaluated by this resumer; risk-management-disabled resumes on the next tick.
- Smallest correction: describe automatic resumption based on the current global checks and link to the risk guide's limitation. This is an existing implementation limitation, not a proposed risk-engine change in this docs task.

### P2 — Setup support promise is missing from the reader support path
- Reader: `src/content/docs/faq.md:81`–`:83` sends setup questions only to Discussions; `src/content/docs/licensing-and-support.md:66`–`:74` limits its email examples to sensitive/account/refund cases. No setup-call or failed-setup promise appears in these pages.
- Current authorized product copy: `../cortiq-landing/src/components/FAQ.tsx:38`–`:39` says readers can email, receive a setup-help call, and receive a refund if support cannot get setup working. Parent confirmed this wording is authorized.
- Smallest correction: add the same route and promise to the setup FAQ and support page, with a link to the current refund policy. This is synchronization of an explicit offer, not an invented support SLA.

### P3 — Provider-maintenance button label is stale
- Reader: `src/content/docs/ai-providers.md:59` calls the button **Inspect runtime**.
- Current source: `../cortiq-app/Cortiq.BlazorApp/Components/Pages/AiProvidersPage.razor:441` calls it **Check setup**; current provider reference `../cortiq-app/docs/reference/ai-providers.md:587` uses that same label.
- Smallest correction: change that table label to **Check setup**. Repair connection, Update packages, Re-authenticate, and Subscription model labels match source.

### P3 — Initial prerequisite list omits the 64-bit requirement
- Reader: `src/content/docs/getting-started.md:49` says Windows 10/11 without architecture.
- Current source: `../cortiq-app/.github/workflows/publish-public-release.yml:123` packages `win-x64`; current landing FAQ `../cortiq-landing/src/components/FAQ.tsx:47` explicitly says 64-bit Windows 10 or 11.
- Smallest correction: say 64-bit Windows 10 or 11. Do not infer an unverified minimum OS build from mixed target/platform metadata.

## Full page coverage

All 14 pages were read in full, including frontmatter, tables, callouts, links and comments:

| Reader page | Result |
| --- | --- |
| `index.md` | Read fully; no additional concrete mismatch found. General AI loop is an orientation explanation, with narrower Manual/Autonomous detail elsewhere. |
| `getting-started.md` | Read fully; 64-bit prerequisite omission above. |
| `feature-overview.md` | Read fully; no additional confirmed mismatch. Broad capability presence is current-source scope, not release acceptance proof. |
| `capability-reference.md` | Read fully; no additional confirmed mismatch. |
| `documentation-map.md` | Read fully; retired sidebar paragraph above. |
| `app-navigation-guide.md` | Read fully; its sidebar matches current Sidebar.razor. |
| `installation-and-activation.md` | Read fully; backtest exemption, updater and refund-route findings above; checksum claim remains release-dependent below. |
| `first-30-minutes.md` | Read fully; journal checkpoint problem above. Topbar MT5 health indicator does exist in AppTopBar.razor:36, so that is not a defect. |
| `glossary.md` | Read fully; no additional confirmed mismatch. Learning readiness, explicit review, Manual/Autonomous, and license vocabulary align with current specialized references. |
| `licensing-and-support.md` | Read fully; free-backtest contradiction and missing setup-help synchronization above. |
| `faq.md` | Read fully; risk-resumption qualification and missing setup-help synchronization above. |
| `ai-providers.md` | Read fully; Check setup label above. Core API/Subscription, separate MCP, explicit models, independent Review configuration align with source. |
| `mcp-and-agent-integration.md` | Read fully; stdio, CORTIQ_DB_PATH, opt-in generic approval/read-only filters, Manual external sessions and symbols parameter align with current source. |
| `agent-permissions.md` | Read fully; provider Auto/Review, broad capability grants, and separate Cortiq authority match current settings and AcpFilesystemPermissionPolicy. |

## Photos and labels within this assignment

- These 14 current source pages have no actual image embeds/screenshot references and no `New` badge. `mcp-and-agent-integration.md:7` and `agent-permissions.md:7` have **Advanced** badges, which are distinct.
- `installation-and-activation.md:49` retains an invisible SCREENSHOT-NEEDED SmartScreen capture comment. This is a missing optional illustration, not proof of a stale visible photo. No screenshot was created or app launched by this audit.
- Parent owns the live-site/source drift and full screenshot audit; source-only absence does not establish the deployed site is clean.

## Uncertainties and acceptance boundaries

1. `installation-and-activation.md:47` says every release has checksums. The release workflow packages/signs and uploads with vpk, but the inspected workflow does not explicitly generate a checksum manifest. This needs actual release-asset inspection; it is not classified as a confirmed defect here.
2. Current `ai-providers.md:104`–`:110` uses “Verified sentiment research path” for adapter support. Source support does not prove every provider/account/runtime has passed live acceptance. `../cortiq-app/docs/reference/ai-providers.md:57`–`:61` retains separate cloud-API acceptance pending and Claude ACP transport failure evidence for chart acceptance; `../cortiq-app/docs/in-flight/copilot-acp-mcp-readiness.md:14` retains a Claude installed-adapter checkpoint failure. These are specific pending checkpoints, not evidence all provider use fails.
3. Public release asset presence/version, signing publisher, checkout delivery speed (“instantly”), API availability, public Discussions configuration, and actual email/call fulfillment were not exercised. No current-source statement is a claim the latest published binary contains that behavior.
4. No product build or automated tests were run: this was evidence-only review with no production changes. The sandbox launcher failed with HRESULT 0x800705AA; authorized local reads and this ignored evidence write used one justified elevated fallback.
