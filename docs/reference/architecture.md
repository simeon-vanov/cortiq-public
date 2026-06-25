---
area: architecture
last_updated: 2026-05-17
---

# Architecture

## What it does

`cortiq-public` is the **Cortiq public hub** — a single GitHub repository that serves three purposes at once:

1. **Documentation site.** An Astro + Starlight static site published at `https://simeon-vanov.github.io/cortiq-public/` (GitHub Pages). All reader content lives in the `docs` content collection at `src/content/docs/`.
2. **Release host.** Public Cortiq installers (`Cortiq-win-Setup.exe`, an unsigned Velopack installer) ship as GitHub Releases on this repo; the landing page in the `cortiq-landing` sibling repo links directly to `releases/latest/download/Cortiq-win-Setup.exe`.
3. **Community surface.** Public bug reports (GitHub Issues with templates in `.github/ISSUE_TEMPLATE/`), feature requests, and Discussions for end users.

The repo intentionally does **not** contain the desktop app source, license backend, or any private/engineering material — those live in the sibling repos `cortiq-app`, `cortiq-backend`, `cortiq-landing`, and `cortiq-publish`. The cluster-level umbrella is `C:\Projects\Cortiq\CLAUDE.md`.

## Components

- `src/content/docs/` — Starlight `docs` content collection. One `.md` per published page. Subfolder `trading-cycle/` groups the per-entity reference pages (`sessions.md`, `playbooks.md`, `data-packages.md`, …).
- `src/content.config.ts` — registers the `docs` collection using `@astrojs/starlight/loaders` and `@astrojs/starlight/schema`.
- `astro.config.mjs` — Astro config: site URL, `base: '/cortiq-public'`, mermaid integration (dark theme), and the full Starlight sidebar layout (Start Here / Platform / MCP & Agent / Trading Cycle / Support).
- `public/` — static assets served as-is. Includes `favicon.ico` and `public/images/screenshots/` (the redacted UI screenshots referenced from the docs).
- `package.json` — pinned to `@astrojs/starlight@0.38.3`, `astro@6.1.5`, `astro-mermaid@2.0.1`, `mermaid@11.4.1`. Node `>=22`.
- `.github/workflows/docs.yml` — the CI pipeline that builds and deploys to GitHub Pages.
- `.github/ISSUE_TEMPLATE/` — bug-report / feature-request templates.

## Entry points / interfaces

- **Read the docs:** <https://simeon-vanov.github.io/cortiq-public/>
- **Download an installer:** <https://github.com/simeon-vanov/cortiq-public/releases/latest/download/Cortiq-win-Setup.exe>
- **File a bug:** <https://github.com/simeon-vanov/cortiq-public/issues/new/choose>
- **Discussions:** <https://github.com/simeon-vanov/cortiq-public/discussions>
- **Local preview:** `npm run dev` (serves at `http://localhost:4321/cortiq-public/` because of `base`).

## Dependencies

- **Astro 6 + Starlight 0.38** for the docs site framework.
- **astro-mermaid** + **mermaid 11** for inline diagrams (configured `theme: 'dark'`).
- **GitHub Pages** as the host (no Cloudflare / Vercel / Docker — pure Pages).
- **GitHub Releases** as the binary CDN for `Cortiq-win-Setup.exe`.

## Known gaps / accepted debt

- The published reader content under `src/content/docs/` is not duplicated into this `docs/` engineering folder — `docs/reference/pages-and-content.md` only maps slugs to purpose. The reader pages remain the canonical source for product behaviour.
- `editLink.baseUrl` in `astro.config.mjs` points at `https://github.com/simeon-vanov/cortiq-public/edit/main/` — long-lived feature branches will show "Edit this page" links that target `main`, not the branch.
- No automated link-check or screenshot-completeness check in CI yet; `grep -rn "SCREENSHOT-NEEDED" src/content/docs/` is the manual gate.
