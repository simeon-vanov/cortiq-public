---
status: index
last_updated: 2026-05-17
---

# Cortiq Public Documentation

This repository follows the per-project AI-management pattern defined at [`../../ProjectTemplate/docs/specs/2026-05-10-ai-management-pattern-design.md`](../../ProjectTemplate/docs/specs/2026-05-10-ai-management-pattern-design.md) (canonical spec in the ProjectTemplate repo).

`cortiq-public` is the Astro + Starlight site at `https://simeon-vanov.github.io/cortiq-public/` that publishes the official user-facing Cortiq documentation, alongside the GitHub Releases / Issues / Discussions surface. The product source (Cortiq desktop app, license backend, landing site) lives in sibling repos and is **not** in this repo.

This `docs/` folder is the *engineering* documentation for the doc-site repo itself — how the site is built, deployed, styled, and what reference areas exist for agents working on it. It is distinct from the *published* documentation under `src/content/docs/`, which is the product-facing reader content.

## Reading order

When entering a fresh session, read in this order:

1. `../CLAUDE.md` — long-lived project facts (what this site is, build/dev commands, gotchas).
2. **This file** — index of reference areas and active work.
3. `in-flight/` — every feature currently being worked on; freshest truth.
4. `reference/<area>.md` — current system behaviour, by area.
5. `ARCHITECTURE-CHANGES.md` — recent flux (last ~20 entries usually enough).
6. Active `specs/` + `plans/` (status: draft / approved / active) — what's about to change.
7. Shipped `specs/` only when investigating *why* a past decision was made — never as current truth.
8. `decisions/` — ADRs (when researching trade-offs).

## Folder map

| Folder | Purpose | Mutability |
|---|---|---|
| `ideas/` | Captured seeds, lowest commitment | Mutable |
| `research/` | Findings & investigations | Append-only |
| `specs/` | Design docs (active + shipped) | Immutable on ship |
| `plans/` | Implementation plans (active + shipped) | Immutable on ship |
| `in-flight/` | Per-feature working state for the current session | Highly mutable; deleted on ship |
| `reference/` | Living docs of current system behaviour | Edited on every ship |
| `decisions/` | ADRs — irreversible architectural choices | Append-only |
| `_templates/` | Skeletons for each stage | Copied from ProjectTemplate |
| `ARCHITECTURE-CHANGES.md` | Changelog of architectural changes | Append-only |

## Reference areas (current system docs)

| Area | File | What it covers |
|---|---|---|
| Architecture | [`reference/architecture.md`](reference/architecture.md) | What this Astro + Starlight site is, repo layout, sidebar/content collection model, where things live |
| Pages and content | [`reference/pages-and-content.md`](reference/pages-and-content.md) | Map of the `docs` content collection — Start Here / Platform / MCP & Agent / Trading Cycle / Support — and the page slugs that back the Starlight sidebar |
| Deployment | [`reference/deployment.md`](reference/deployment.md) | GitHub Pages deploy via `.github/workflows/docs.yml`, the `withastro/action@v6` build, base path `/cortiq-public`, release-asset role |
| Style guide | [`reference/style-guide.md`](reference/style-guide.md) | Page skeleton, voice rules, callouts, mermaid, frontmatter, glossary — the writing contract for `src/content/docs/` |
| Screenshots | [`reference/screenshots.md`](reference/screenshots.md) | Filename / folder / resolution / redaction rules and the manifest of every PNG referenced from the docs |

_(Add a new row whenever a `reference/<area>.md` file is added or renamed.)_

## Active work

_(Updated at session end by the agent. Lists everything currently in `in-flight/`.)_

- _none._

## Decisions (ADRs)

_(None recorded yet. Future architectural choices that are irreversible or contentious — switching away from Starlight, changing the docs domain, splitting the docs out of the public-hub repo — should land here as `decisions/NNNN-<slug>.md`.)_
