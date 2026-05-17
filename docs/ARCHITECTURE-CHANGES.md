# Architecture Changes Log

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
