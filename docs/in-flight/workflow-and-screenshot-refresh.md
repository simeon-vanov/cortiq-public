---
status: active
feature: workflow-and-screenshot-refresh
spec: ../research/2026-10-30-public-documentation-audit.md
plan: ../plans/2026-10-30-workflow-and-screenshot-refresh.md
started: 2026-10-30
last_session: 2026-10-30
---

# Workflow and screenshot refresh

## Current state

User authorized all remaining audited workflow corrections, fresh screenshots,
push, and deployment. Platform and trading-cycle writer workers own disjoint
reader files; the root owns orientation, capture, integration, and verification.
All reader corrections and final integration reviews are complete. Forty-four
fresh screenshots are accepted; 41 figures are embedded across 24 pages. The
production docs build, four offline tests, source links/anchors, and desktop/mobile
render checks passed. Ready to commit and publish the public repo; no new approval
is needed. Preserve the pre-existing `.gitignore` edit.

The capture fixture needs isolated reserved loopback ports and removal of seeded
provider keys: DEBUG automation does not override every streamer/history transport.
A capture worker owns only `DocScreenshotCaptureTests.cs` and screenshot outputs,
and has adapted retired routes and added strict fresh-output acceptance. The first
desktop build hit three unrelated interface ambiguities; another active owner
corrected them in the shared source. Rebuilding the changed source passed with
zero errors. The worker is running only the authorized capture fixture.

The resolution map is `docs/reference/workflow-refresh.md`. Final evidence is under
desktop `.verification/doc-screenshots-20261030-final-license/` and public
`.verification/docs-refresh-20261030/`. Production readiness files and their
unrelated edits are not owned or staged by this task.

Capture support owns only `Cortiq.E2ETests/Tests/DocScreenshotCaptureTests.cs` and
`Cortiq.E2ETests/Infrastructure/DesktopAppTestHarness.cs`. Final capture+port
tests passed 2/2, guards 8/8, and review is clean. Commit those two locally only:
app `main` already has one unrelated unpublished commit (`f755cc8d`) which this
documentation task must not push. No desktop runtime release is requested.

The first failed seed attempts generated demo chart files in the default app-data
`research/demo-grounded` folder before explicit temporary artifact-root isolation
was added. The database was temporary throughout. Leave the shared demo files in
place; the user has been informed. Final capture isolates generated artifacts too.

## Where I left off

Read the plan and original audit. Public baseline is `b6118f5`; only pre-existing
`.gitignore` edits were present in the public checkout. Desktop checkout has many
unrelated edits; preserve them. Do not stage mixed app production files.

## Decisions

- Screenshot checkpoint is explicitly authorized by the user. Use the existing
  harness's isolated automation/demo data, not the user's active database.
- Current development source is the baseline; source/capture checks do not
  establish availability in the older published installer.
- The original audit remains historical. Add current resolution evidence rather
  than rewriting its findings as though they never existed.

## Next session: read first

1. This note and the linked plan.
2. The current worker outputs and capture-inspection evidence under
   `.verification/docs-refresh-20261030/`.
3. `docs/reference/screenshots.md` and desktop testing/capture requirements.
