---
status: active
started_at: 2026-10-30
spec: ../research/2026-10-30-public-documentation-audit.md
---

# Workflow and screenshot refresh implementation plan

**Goal:** Resolve the remaining audited workflow discrepancies, replace historical
screenshots with checked captures of the current desktop, and publish the result.

**Architecture:** Preserve all public URLs and the Astro/Starlight site. Compare
reader instructions with the current desktop implementation. Capture the real
desktop using the existing isolated automation harness, then embed only verified
images. The audit is the accepted requirements checklist.

**Spec:** [Public documentation audit](../research/2026-10-30-public-documentation-audit.md),
findings 13–33, screenshot inventory, and additional completeness gaps; the owner
explicitly requested implementation, capture, push, and deployment.

## Constraints and rulings

- Work on current branches; preserve unrelated edits. No feature worktrees.
- No live trading, real-provider calls, personal data capture, or installer release.
- The explicit screenshot request authorizes the desktop/UI capture checkpoint.
- Use current development source as the documentation/capture baseline and state
  its boundary from older public installer builds. Never imply pending runtime
  acceptance passed because documentation or a screenshot exists.
- Preserve source URLs and actual `New` button labels; keep novelty badges absent.
- Reuse the capture harness and installed tools; change only capture-specific code
  if required, with focused verification and no unrelated application fixes.
- Push/deploy are already authorized. Continue without additional approval prompts.

## Tasks

- [x] Correct platform guides (findings 13–25) and backtest skills/chart controls.
- [x] Correct trading-cycle guides (findings 15, 24, 26–33), including package/run
  workflows and provider-billed sentiment updates.
- [x] Align orientation, glossary, capability maps, first-run and FAQ risk wording
  with the corrected workflows and declared baseline.
- [x] Build the affected desktop project if needed; run only the documented
  screenshot capture checkpoint against isolated demo data. Inspect every result,
  replace or retire old PNGs, and embed current images with accurate captions/alt.
- [x] Update screenshot/content references and an audit-resolution ledger. Keep
  original audit history intact.
- [x] Run the docs production build (including corpus tests/Astro validation),
  link/anchor/image/badge checks, screenshot freshness/coverage checks, and
  `git diff --check`. Review text and images independently; resolve findings.
- [ ] Commit only owned files, push and monitor Pages deployment, then crawl all
  published reader pages and verify the source revision and image hashes. After
  that evidence passes, mark this plan shipped and remove its in-flight note in
  a documentation-only follow-up commit.

## Completion evidence

Every remaining audit ID has a source-backed correction and current reader owner.
Every embedded image is a fresh checked capture recorded in the manifest; no
historical image silently substitutes for a failed capture. Full docs build and
focused capture checks pass, and deployed pages contain the corrected content,
working images/anchors, and no novelty badges. No desktop/runtime release is
claimed by this documentation publication.
