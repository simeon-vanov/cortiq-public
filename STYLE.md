# Cortiq Public Docs — Style Guide

This file is the single source of truth for how pages in `cortiq-public/` are written and structured. All contributors and automated agents must read this before editing or adding pages.

## 1. Page template

Every page conforms to this skeleton. Sections marked *(optional)* are dropped when they wouldn't carry weight; the rest are mandatory.

```text
---
title: <Sentence case page title>
description: <One factual sentence; used as SEO meta>
sidebar:
  order: <N>
  badge: <Advanced | New | omit>
---

<Lede: 1–2 sentence opener stating what this page is for and what
the reader will know after reading it. No preamble. No "Welcome to…">

<:::tip or :::caution if there's something the reader must know up front>

## What this is
<2–3 short paragraphs of concept-first prose. The "why" before the "how".>

## Who this is for *(optional — used on conceptual / decision pages)*
<Short bulleted list of fit / not-fit indicators.>

## How it fits into Cortiq
<Brief mapping to neighboring concepts. Usually a small comparison table
or 3 sentences.>

## How to use it *(or "Configuration", "Setup", "Walkthrough")*
<The actionable body. Numbered steps. Code blocks. Screenshots.
This is the largest section on most pages.>

## Reference *(optional — for pages with options/parameters/states)*
<Tables. Strict, not narrative.>

## Common questions / Troubleshooting *(optional)*
<Q&A or symptom→cause→fix triplets.>

## What to read next
<2–4 ranked links with one-sentence framing each.>

## Related
<Plain bulleted list of 3–6 links.>
```

Minimum a page must have: lede → What this is → How it fits → actionable body → Related.

## 2. Voice rules (Anthropic API docs flavor)

- **Address the reader as "you".** Never "the user", never "we" except on the Home page.
- **Active voice, present tense.** *Cortiq sends the prompt to the provider* — not *the prompt is sent by Cortiq*.
- **Concept-first.** Each section opens with the idea, then shows the mechanism. The reader understands *why* before *how*.
- **One idea per paragraph.** When a paragraph has two ideas, split it.
- **Sentence rhythm.** Average 15–25 words. Mix shorter sentences in. Periods carry weight.
- **Banned words** (rewrite when found): *powerful, seamless, robust, leverage, best-in-class, simply, just, easy, intuitive, blazing-fast, unleash, supercharge*.
- **No hedging.** Replace *might / may / could potentially* with the precise condition. *"Might fail"* → *"fails when X"*.
- **Inline code** for tool names, settings labels, file paths, status values: `External MCP`, `cortiq.db`, `Risk Management`, `Running`.
- **Tables are reference, not narrative.** If two sentences would carry the meaning better, use sentences.
- **Tradeoff framing.** When two paths exist, present both with the criterion that picks one — don't recommend without saying why.

## 3. Callout grammar

| Callout | When to use | Example |
|---|---|---|
| `:::note` | Incidental clarification that breaks paragraph flow | *Cortiq stores all timestamps in UTC; the UI displays your local timezone.* |
| `:::tip` | Non-obvious workflow improvement | *Run a virtual session before live so you can validate the playbook against today's market without risking capital.* |
| `:::caution` | Safe but easy to misconfigure; warns before action | *External MCP sessions skip the autonomous workflow engine. The agent is the only thing driving trades.* |
| `:::danger` | Financial risk, data loss, irreversible action | *Live trading sends real orders to MT5. Verify your risk settings before starting a non-virtual session.* |

Rule: **at most one `:::danger` per page**, near the top. Overuse trains readers to ignore it.

## 4. Mermaid diagrams

Use only when prose+table can't carry the meaning.

- **Max 12 nodes per diagram.** Past that, split.
- **Shape vocabulary:** rectangle = component / service, rounded rect = action / step, diamond = decision, cylinder = persisted store.
- **Caption every diagram** with one sentence below stating the takeaway.

## 5. Screenshots

**Folder:** `cortiq-public/public/images/screenshots/`
**Filename:** `<page-slug>__<descriptor>.png` (lowercase, double-underscore separator). Examples: `home__first-run-checklist.png`, `mcp-and-agent-integration__claude-config.png`.

**Markdown placeholder pattern:**

```markdown
![Home page – first-run checklist showing four setup steps](/images/screenshots/home__first-run-checklist.png)
<!-- SCREENSHOT-NEEDED: home__first-run-checklist.png – capture the Home page on a fresh install with no sessions started yet -->
```

The HTML comment stays until the PNG is in place. `grep -rn "SCREENSHOT-NEEDED" src/content/docs/` lists all outstanding.

`SCREENSHOTS.md` at the repo root is the manifest.

## 6. Frontmatter rules

- `title`: sentence case, matches sidebar label exactly.
- `description`: one factual sentence under 160 chars.
- `sidebar.order`: integer in multiples of 10 (10, 20, 30…) for easy insertion.
- `sidebar.badge`: `New` for pages added in past 30 days; `Advanced` for MCP/agent and developer-leaning pages; omit by default.
- `lastUpdated`: leave to Starlight; never set manually.

## 7. Glossary

Defined terms live in `src/content/docs/glossary.md`. Other pages link to glossary entries instead of redefining vocabulary.