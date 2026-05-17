---
area: deployment
last_updated: 2026-05-17
---

# Deployment

## What it does

The docs site builds and ships to **GitHub Pages** from this repository. There is no Docker, no Cloudflare, no Vercel — every push to `main` that touches the site files triggers a GitHub Actions workflow that builds the Astro static site and publishes it to the `github-pages` environment. The release-asset side of the repo (Cortiq MSIX installer) is handled separately via GitHub Releases on the same repo, not through this workflow.

## Components

- `.github/workflows/docs.yml` — the build + deploy workflow.
  - Trigger: `push` to `main` when `src/**`, `public/**`, `astro.config.mjs`, `package.json`, `package-lock.json`, `tsconfig.json`, or `README.md` change; plus `workflow_dispatch`.
  - Build job: `withastro/action@v6` on `ubuntu-latest`, `node-version: 22`. Runs `npm ci && astro check && astro build` and uploads the Pages artifact.
  - Deploy job: `actions/deploy-pages@v5` against the `github-pages` environment.
  - Concurrency: `group: pages, cancel-in-progress: true` — a fresher push cancels an in-flight build.
- `astro.config.mjs` — `site: 'https://simeon-vanov.github.io'`, `base: '/cortiq-public'`. Both values must stay in sync with the GitHub Pages URL. Internal links must therefore use Starlight's relative slugs (e.g. `getting-started/`), not absolute paths.
- `package.json` scripts — `build` runs `astro check && astro build` (typecheck before build, so a `.md` frontmatter mistake fails CI).

## Entry points / interfaces

- **Live site:** <https://simeon-vanov.github.io/cortiq-public/>
- **Edit-this-page:** every Starlight page renders an "Edit this page" link to `https://github.com/simeon-vanov/cortiq-public/edit/main/src/content/docs/<slug>.md` (configured in `astro.config.mjs`).
- **Manual redeploy:** GitHub UI → Actions → "Deploy Public Docs" → Run workflow.
- **Release downloads:** `https://github.com/simeon-vanov/cortiq-public/releases/latest/download/Cortiq.msix` (managed by hand via GitHub Releases UI, not this workflow).

## Dependencies

- **GitHub Pages** must be enabled for the repository with "Build and deployment → Source: GitHub Actions" (not the legacy `gh-pages` branch). The `github-pages` environment must exist; the workflow's deploy job uses it.
- **Repository permissions** required by the workflow: `contents: read`, `pages: write`, `id-token: write` (already set in the workflow).
- **Node 22** — pinned in `engines` in `package.json` and in the workflow's `node-version`.
- **`withastro/action@v6`** handles the `npm ci` + build internally; do not duplicate those steps in the workflow.

## Known gaps / accepted debt

- The workflow only fires on `main`. Long-lived branches like `docs/foundations-and-polish` do not auto-deploy a preview — use `npm run dev` locally to preview, then merge to `main` to publish.
- No automated link checker or broken-image guard in CI. The `astro check` step catches frontmatter / type errors but not 404s on outbound links.
- The Cortiq MSIX release upload is a manual GitHub Releases step and is **not** wired into the docs deploy. If the installer URL ever changes shape, every reader page that links to it must be updated by hand.
- `base: '/cortiq-public'` is encoded in `astro.config.mjs`. Renaming the repo (or moving docs to a custom domain like `docs.cortiq.trade`) requires changing both `site` and `base`, plus the GitHub Pages source.
