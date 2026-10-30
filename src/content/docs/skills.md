---
status: current
title: Skills
description: Create reusable instruction templates and explicitly attach them to supported generation, Copilot, session, backtest, or trade-idea workflows.
sidebar:
  order: 20
---

Skills hold reusable instructions for analysis and authoring. Create a skill once, then explicitly select or attach it where you want that guidance used.

## What this is

A skill has a name, description, category, Markdown body, and enabled state. The selected body adds guidance to the supported operation's prompt.

Copilot and autonomous actors do not discover, select, or load skills from your global library. Attach the skills you want them to use. A category helps filter selections; it does not grant access or trading authority.

## How it fits into Cortiq

| Concept | Purpose |
| --- | --- |
| Playbook | Defines operating rules for a strategy. |
| Data access policy | Limits the market inputs available to an operation. |
| Skill | Adds explicitly selected guidance about how to perform the task. |
| Preparation or research result | Retains the output and evidence from a particular operation. |

Skills cannot override host risk checks, required data, output validation, or permission gates. A skill that describes an entry method is not a validated Edge.

## Create a skill

1. Open **Preparation** → **Skills** and select **New**.
2. Give the skill a descriptive name and a focused category.
3. Write the guidance in Markdown. Keep one task or method per skill.
4. Save it with **Enabled** selected if you want it available for attachment.

Descriptions allow up to 1,000 characters and bodies up to 20,000. Editing a reusable skill can change the input identity of recipes that depend on it; review affected recipe inputs again when required.

## Use the skill explicitly

- Select enabled skills in a generation flow where that category's picker is available.
- Attach a skill through Copilot's attachment tray before asking it to use the method.
- Use session, Autonomous backtest, or trade-idea attachment controls for guidance that belongs to that configured context. Choose `Entry`, `Management`, or `Both` for each skill, then select `Apply skills`.

Do not assume that a saved skill is active everywhere. Check the visible selections or attachments for the operation you are about to run.

## Reference

| Category | Intended guidance |
| --- | --- |
| **Research** | Research methods and analysis instructions. |
| **Preparation** | Prepared analysis recipes. |
| **InstrumentProfile** | Instrument-profile authoring. |
| **Sentiment** | Sentiment synthesis guidance. |
| **Journal** | Journal analysis. |
| **Playbook** | Playbook authoring guidance, attached to the authoring context. |
| **Copilot** | General attached Copilot instructions. |
| **ChartConcept** | Market-structure concepts for chart analysis. |
| **TradeExecution** | Execution mechanics such as sizing or protection selection. |

ChartConcept and TradeExecution do not have independent generation-page pickers. Attach them through the supported Copilot, session, Autonomous backtest, or trade-idea controls. Categories describe purpose rather than permission.

## Verify the attachment

Open the operation's selected skills or attachment list and confirm the intended enabled skill is present. If a method is missing from an answer, check attachment scope before editing unrelated provider or strategy settings.

## Common questions

### Can a skill force a trade or bypass approval?

No. Guidance does not grant trading authority. Host execution, license, risk, and applicable mutation checks still apply.

### Will Copilot find a useful skill by itself?

No. Select it explicitly. The global library is not automatically injected into each conversation.

## What to read next

1. [Cortiq Copilot](/cortiq-public/cortiq-copilot/) — attach context and inspect authoring actions.
2. [Preparation packages](/cortiq-public/trading-cycle/entities/preparation-packages/) — use skills in reviewed recipes.
3. [Research](/cortiq-public/research/) — distinguish method guidance from measured findings.

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Skills library with saved instruction templates](/cortiq-public/images/screenshots/skills__list.png)

*A library entry is not automatically attached to every workflow.*

![Skill editor with category, description, and instruction body](/cortiq-public/images/screenshots/skills__editor.png)

*Illustrative instruction content. Select attachments explicitly in the workflow that will use them.*

## Related

- [Playbooks and data access policies](/cortiq-public/playbooks-and-data/)
- [Agent permissions](/cortiq-public/agent-permissions/)
- [Glossary](/cortiq-public/glossary/)
