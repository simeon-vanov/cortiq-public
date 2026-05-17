---
status: draft
spec: ../specs/YYYY-MM-DD-<slug>-design.md
phase: 1
total_phases: <N>
started_at: null
shipped_at: null
---

# <Feature> Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** <One sentence>

**Architecture:** <2-3 sentences>

**Tech Stack:** <key technologies>

---

## File Structure

| Path | Action | Responsibility |
|---|---|---|
| `<exact path>` | Create / Modify | <one-line> |

---

## Task 1: <Component name>

**Files:**
- Create: `<exact path>`
- Test: `<exact test path>`

- [ ] **Step 1: Write the failing test**

```<lang>
<actual test code>
```

- [ ] **Step 2: Run the test, see it fail**

Run: `<exact command>`
Expected: FAIL with `<expected error>`

- [ ] **Step 3: Implement minimal code**

```<lang>
<actual implementation code>
```

- [ ] **Step 4: Run the test, see it pass**

Run: `<exact command>`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add <files>
git commit -m "feat(<scope>): <message>"
```
