# Architecture Changes Log

---

## 2026-06-26 — Reader-docs refresh, new feature pages, and automated app screenshots

### What Changed

- **Refreshed all 18 existing reader pages** under `src/content/docs/` to current app behaviour: removed dead "browser mode", Grok, and "not a backtester" claims; corrected the session-status set (added `TimePaused`, `Failed`), MT5 ports (`6200/6201`), the BYO-AI provider/transport model (API / ACP / CLI / External MCP), and the license model (€199 one-time, 2 machines, 14-day refund, fail-open re-verify with 14-day grace, backtests-only license-free). Removed the single-instrument-mandate violation on the Home page.
- **Added 7 new reader pages** for feature areas that shipped after the docs were written: `backtesting`, `research`, `skills`, `session-review`, `system-messages`, `cortiq-copilot`, `agent-permissions`. Wired them into `astro.config.mjs` (new **Research & Skills** sidebar group; new entries under Platform and MCP & Agent).
- **Automated app-UI screenshots.** Added `Cortiq.E2ETests/Tests/DocScreenshotCaptureTests.cs` (sibling `cortiq-app` repo) — a Playwright-over-WebView2-CDP driver that launches the desktop app under `CORTIQ_AUTOMATION_MODE`, seeds a rich demo DB (`Cortiq.DemoSeeder` + augmented rows), and captures 1600x900 PNGs of each documented screen with the Copilot dock closed. Produced 29 screenshots into `public/images/screenshots/`, replacing their `SCREENSHOT-NEEDED` markers.
- **Updated engineering references:** `docs/reference/screenshots.md` (rewritten manifest + capture how-to + gotchas), `docs/reference/pages-and-content.md` (new slugs/groups). Fixed the stale `Cortiq.msix` → `Cortiq-win-Setup.exe` link in `README.md`.

### Why

The docs predated whole feature areas and carried stale facts and a single-instrument-mandate violation. Screenshots had never been captured (23 placeholders, zero PNGs).

### Outstanding

- 5 screenshots remain outstanding (tracked in `screenshots.md`): 3 inherently manual (Windows SmartScreen OS dialog, the MT5-terminal EA shot, the live "health green" indicator), `playbooks-and-data__playbook-editor.png` (auto-capture in progress), and `workspace-and-monitoring__now-trading-bar.png` (renders only during a live cycle).
- Not yet deployed — GitHub Pages publishes on push to `main`.

---

## 2026-05-17 — Adopted cross-project docs/ convention

### What Changed

- Created the standard `docs/` skeleton at the repo root: `ideas/`, `research/`, `specs/`, `plans/`, `in-flight/`, `reference/`, `decisions/`, `_templates/`, each with a `.gitkeep` where empty.
- Copied the 7 canonical templates from `C:\Projects\ProjectTemplate\docs\_templates\` into `docs/_templates/` (idea, research, spec, plan, in-flight, reference, decision).
- Wrote `docs/README.md` (status: index) with reading order, folder map, and reference-area table. Explicitly disambiguates the *engineering* docs (this `docs/` folder, for agents working on the site) from the *published* reader docs (under `src/content/docs/`, served by Starlight).
- Moved repo-root `STYLE.md` → `docs/reference/style-guide.md` with reference front-matter; cross-link to `screenshots.md` updated. The original `STYLE.md` is deleted.
- Moved repo-root `SCREENSHOTS.md` → `docs/reference/screenshots.md` with reference front-matter. The original `SCREENSHOTS.md` is deleted.
- Kept `SECURITY.md` at repo root (GitHub Security Policy convention).
- Kept `README.md` at repo root (public-facing landing on GitHub). No internal references needed updating — `README.md` did not previously link to `STYLE.md` or `SCREENSHOTS.md`.
- Created `cortiq-public/CLAUDE.md` (none existed before) using the cluster-sibling cortiq-app/cortiq-backend pattern.
- Wrote `docs/reference/*` (current-state docs for the doc-site engineering surface, not the published reader content):
  - `architecture.md` — Astro + Starlight site purpose, repo layout, dual role as docs site / release host / community surface.
  - `pages-and-content.md` — slug-to-purpose map for every published page, organised by sidebar group.
  - `deployment.md` — GitHub Pages deploy via `.github/workflows/docs.yml`, `withastro/action@v6` build, base path `/cortiq-public`.
  - `style-guide.md` — page skeleton, voice rules, callouts, mermaid, frontmatter (moved + reframed from `STYLE.md`).
  - `screenshots.md` — manifest + redaction rules for `public/images/screenshots/` (moved from `SCREENSHOTS.md`).

### Why

Rolling out the per-project AI-management pattern (see `C:\Projects\ProjectTemplate\docs\specs\2026-05-10-ai-management-pattern-design.md`) so every repo in the Cortiq cluster has the same shape, reading order, and reference-vs-history split. Until now `cortiq-public` had no per-repo `CLAUDE.md` and no `docs/` engineering folder — agents entering the repo had to reverse-engineer the site structure from `astro.config.mjs` and the published content. Sibling `cortiq-backend` migrated to the same convention on the same day; `cortiq-app` already uses it.

### System Behavior After This Change

No code behaviour change. No published-content change. The deployed site at `https://simeon-vanov.github.io/cortiq-public/` is byte-identical after this commit — only repo-root MDs and `docs/` are touched. Future agents entering this repo follow the standard reading order; specs / plans / decisions / reference files carry the convention's front-matter; shipped specs are immutable via supersession.

### Reference docs created

- `docs/reference/architecture.md`
- `docs/reference/pages-and-content.md`
- `docs/reference/deployment.md`
- `docs/reference/style-guide.md`
- `docs/reference/screenshots.md`

---
