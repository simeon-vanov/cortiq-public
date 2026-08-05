# Project: Cortiq Public — Docs Site + Release Hub

`cortiq-public` is the **Cortiq public hub** repo. A single GitHub repository serves three purposes:

- **Documentation site.** An Astro 6 + Starlight 0.38 static site published to GitHub Pages at <https://simeon-vanov.github.io/cortiq-public/>. All reader content lives at `src/content/docs/`.
- **Release host.** Public Cortiq installers (Velopack `Cortiq-win-Setup.exe`) are published as GitHub Releases on this repo by the `cortiq-app` CI (`publish-public-release.yml`); the marketing site in the sibling `cortiq-landing` repo links to `releases/latest/download/Cortiq-win-Setup.exe`.
- **Community surface.** GitHub Issues (templates in `.github/ISSUE_TEMPLATE/`) and Discussions for end users.

This repo intentionally contains **no application source code, no license backend, no private engineering material**. Those live in the sibling repos `cortiq-app`, `cortiq-backend`, `cortiq-landing`, `cortiq-publish`. Cluster-level overview is at `C:\Projects\Cortiq\CLAUDE.md`.

## Documentation

This repo follows the per-project AI-management pattern. On entering a session, read in this order:

1. **This file (`CLAUDE.md`)** — long-lived project facts, commands, gotchas.
2. `docs/README.md` — index + reading order for the *engineering* docs (this folder).
3. `docs/in-flight/` — every active feature.
4. `docs/reference/<area>.md` — current system behaviour, by area.
5. `docs/ARCHITECTURE-CHANGES.md` — recent flux.
6. Active `docs/specs/` + `docs/plans/`.

`docs/` (this folder) is the engineering reference for the doc-site repo. The published reader content under `src/content/docs/` is a separate surface served by Starlight — see `docs/reference/pages-and-content.md` for the slug map. Do not duplicate reader content into `docs/reference/`.

Reference areas (each is the source of truth for its slice — do not duplicate their content here):

- `docs/reference/architecture.md` — what this Astro + Starlight site is, repo layout, dual role as docs site / release host / community surface.
- `docs/reference/pages-and-content.md` — slug-to-purpose map for every published page, organised by sidebar group (Start Here / Platform / MCP & Agent / Trading Cycle / Support).
- `docs/reference/deployment.md` — GitHub Pages deploy via `.github/workflows/docs.yml`, `withastro/action@v6` build, base path `/cortiq-public`, release-asset role.
- `docs/reference/style-guide.md` — page skeleton, voice rules, callouts, mermaid, frontmatter — the writing contract for `src/content/docs/`.
- `docs/reference/screenshots.md` — manifest + redaction rules for `public/images/screenshots/`.

## Build & dev commands

```bash
# from cortiq-public/
npm install
npm run dev                          # local preview at http://localhost:4321/cortiq-public/
npm run build                        # astro check && astro build (used by CI)
npm run preview                      # serve the built site
npm run check                        # astro check only — frontmatter / type validation
```

Node `>=22` is required (pinned in `package.json` engines + the GitHub Actions workflow).

Every code or configuration change must pass `npm run build` before it is committed, reported as successful, or treated as complete. A build failure blocks completion: fix failures caused by the change, investigate pre-existing failures, and report the work as blocked rather than done if the gate cannot pass. Documentation-only changes are exempt from the product build but still require validation of changed links, frontmatter, commands, and paths.

## Critical gotchas

- **Base path `/cortiq-public`.** `astro.config.mjs` sets `site: 'https://simeon-vanov.github.io'` and `base: '/cortiq-public'`. Internal page links and `public/` asset references MUST be base-absolute — `/cortiq-public/<slug>/` and `/cortiq-public/images/...`. Do NOT use bare relative slugs (`getting-started/`) or `../`-relative paths: Astro only rewrites relative links that end in `.md`, so a bare `slug/` stays a raw href that the browser resolves against the current page URL (e.g. from `/cortiq-public/skills/`, `session-review/` → `/cortiq-public/skills/session-review/` → 404). Renaming the repo or moving to a custom domain (e.g. `docs.cortiq.trade`) requires updating both config values, the GitHub Pages config, and every `/cortiq-public/` prefix in content.
- **CI only deploys from `main`.** `.github/workflows/docs.yml` triggers only on push to `main`. Long-lived branches like `docs/foundations-and-polish` do not auto-publish — preview locally with `npm run dev`, then merge to `main`.
- **Releases are published by CI, not by hand.** The Velopack installer (`Cortiq-win-Setup.exe`) plus update metadata (`RELEASES`, `releases.win.json`, `Cortiq-<version>-full.nupkg`) are built and uploaded by the `cortiq-app` repo's `publish-public-release.yml` workflow (kicked off via its manual `create-release.yml`). Reader pages and the landing site link to `releases/latest/download/Cortiq-win-Setup.exe` — keep that asset name stable (it is fixed by Velopack `packId=Cortiq`, channel `win`).
- **Reader content has its own style contract.** Every page under `src/content/docs/` must match `docs/reference/style-guide.md` (page skeleton, voice, banned words, callouts, frontmatter). The `astro check` step in `npm run build` validates frontmatter shape but does not enforce voice / banned words.
- **Screenshots manifest.** Every PNG referenced from a reader page must have a row in `docs/reference/screenshots.md` and a redacted file at `public/images/screenshots/<page-slug>__<descriptor>.png`. Outstanding placeholders: `grep -rn "SCREENSHOT-NEEDED" src/content/docs/`.

## Repo conventions

- Sentence-case page titles, Anthropic-API-docs voice (see `docs/reference/style-guide.md`).
- Inline code for tool names, settings labels, file paths, status values.
- One idea per paragraph; no banned words (*powerful, seamless, robust, leverage, best-in-class, simply, just, easy, intuitive, blazing-fast, unleash, supercharge*).
- Mermaid diagrams capped at 12 nodes; every diagram has a one-sentence caption.
- `SECURITY.md` lives at repo root (GitHub Security Policy convention). `README.md` is the public-facing GitHub landing — keep it short and aimed at end users, not contributors.

## Context-window discipline

This is a docs / release-hub repo with no money-movement code paths, so context discipline is less safety-critical than in `cortiq-app` / `cortiq-backend`. Still: at 80% context, stop and start a fresh session rather than risk a partial edit to the sidebar config or a botched migration of reader content.
