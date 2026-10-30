---
title: Agent permissions
description: Configure Copilot provider permissions, review Cortiq action approvals, and manage remembered capability grants.
status: current
sidebar:
  order: 30
  badge: Advanced
---

Provider permissions control a local agent's requests for access. Cortiq action approvals and trading checks control what that agent can change inside the product. Configure each boundary separately.

:::caution
`Auto` permits trusted local access without routine provider prompts. It isn't limited to web access, and it doesn't confine the provider to Cortiq folders. Choose `Review` when you want to review provider permission requests.
:::

## What this is

Cortiq separates provider access from authority to change product state. Allowing an agent to search the web or read a file doesn't approve an order, publish a Learning, or enable an automated trade idea.

The selected page also limits the tools available to Copilot. For example, the standalone chart permits market inspection and annotations without creating a session or exposing trade execution.

## How it fits into Cortiq

| Boundary | What it controls |
| --- | --- |
| Provider permission mode | Routine permission prompts from a local Subscription/ACP provider. |
| Remembered capability grants | Whether a provider permission request that reaches Cortiq has already been allowed. |
| Cortiq action approvals | Specific product changes that require an action card or explicit save. |
| Trading authority | Session, account, instrument, license, mandate, lifecycle, and risk checks for execution. |

Neither provider mode bypasses Cortiq's tool validation or trading authority. An approval permits the specified action to proceed to its normal checks; it doesn't guarantee execution succeeds.

## Configure provider permissions

1. Open `Settings` → `Copilot`.
2. Find `Agent permissions` and select `Provider permission mode`.
3. Choose `Auto` or `Review`, then select `Save`.

| Mode | Behavior |
| --- | --- |
| `Auto` | The default. Uses trusted local access without routine provider prompts and automatically accepts supported residual permission requests. |
| `Review` | Leaves provider permission requests available for review. Requests that reach Cortiq use its path policy and remembered grants. |

Local Codex and Claude adapters run with the signed-in Windows user's local rights. Their enabled tools depend on the provider and Cortiq transport profile. `Review` is a permission-request policy, rather than operating-system isolation or a guarantee that every tool call prompts.

For requests that reach the path policy, access within configured roots is allowed without a card. Requests outside those roots, or without a resolvable path, are classified as web, filesystem read, filesystem write, or shell capabilities. A remembered grant permits the matching capability; an ungranted request needs your decision in `Review`.

The provider selector is separate from the `Copilot behavior` controls. It doesn't turn off required Cortiq action approvals, feature-specific confirmation, or risk validation. Autonomous [sessions](/cortiq-public/sessions/) have their own bounded authority and don't inherit this Copilot review setting.

## Review a Cortiq action

Cortiq approvals cover more than trade execution. Protected operations include playbook management, session instructions and trigger changes, application settings, observation deletion, and Learning maintenance. Other validated actions can run directly. The available action and its page context determine which boundary applies.

When an action card appears in [Copilot](/cortiq-public/cortiq-copilot/), inspect the proposed change before approving it. Reject it when the scope or arguments don't match your request. A rejected, expired, cancelled, or unresolved gated request doesn't run the protected action.

Some features own a more specific decision:

- **Learning publication:** a Copilot draft is a proposal. Review it in the research results and select `Save Learning` explicitly.
- **Learning maintenance:** applying a curation plan or purging retired Learnings requires a host-prepared approval for the specific saved change.
- **Automated trade ideas:** creating or editing a disabled draft doesn't enable it. Enabling uses its dedicated approval card and trading mandate.
- **Editor changes:** a proposal applied to an unsaved editor draft isn't proof that the entity has been saved.

External MCP clients don't automatically share every in-app approval setting. Generic mutation gating depends on how the MCP connection is configured, while feature-owned authority checks remain separate. Follow [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/) for the external-client boundary.

### Trading approvals are separate

A Copilot trade request still needs the execution authority and checks for its session, account, and instrument. The gated Copilot trade tools require their action approval; a filesystem or web grant supplies none of that authority.

Session-level pending-trade approval is a different control. A Manual session deliberately bypasses that pending-trade workflow for operator-requested actions, while retaining execution and risk validation. Autonomous sessions apply their own configured opening-approval policy. See [Execution modes & notifications](/cortiq-public/execution-modes-and-notifications/) for those differences.

## Manage remembered grants

`Granted capabilities` on `Settings` → `Copilot` lists remembered web, filesystem, and shell decisions with their grant time. These are capability-wide grants, rather than per-site or per-folder promises.

1. Find the capability you want to remove.
2. Select `Revoke`.
3. Select `Review` if you want future ungranted provider requests reviewed, then save the mode.

Revoking a grant doesn't change `Auto` to `Review`. In `Auto`, provider requests can still be accepted automatically. A grant also doesn't add tools to a page or remove a feature's approval requirement.

Capability requests appear in the Copilot dock and as actionable permission items in [Activity](/cortiq-public/system-messages/), with a desktop notification where available. Allowing or denying through either surface resolves that request. Denial, cancellation, and timeout deny access through this permission path.

## Verify your settings

Reopen `Settings` → `Copilot` and confirm the saved provider permission mode and remaining grants. When approving an action, verify its resulting saved entity or execution status; an accepted card alone isn't a successful result.

## Common questions

**Does Auto remove trading safeguards?**
No. It controls provider permission prompts. Cortiq still enforces trading mandates, risk limits, tool validation, and execution authority.

**Why didn't Review ask about a file?**
The provider must send a permission request for Cortiq to handle it. In-root requests and remembered capabilities can be allowed without another card. Review isn't a filesystem sandbox.

**Does every entity change require an action card?**
No. Some operations run under their existing validated authority, some require an action card, and others require a feature-specific save. Read the proposal and verify the resulting state.

## What to read next

1. [Cortiq Copilot](/cortiq-public/cortiq-copilot/) — configure its model, maintain chat context, and review actions.
2. [Activity](/cortiq-public/system-messages/) — find permission requests and their outcomes.
3. [MCP and agent integration](/cortiq-public/mcp-and-agent-integration/) — configure an external client.

## Screenshots

These captures use the development desktop with isolated demo data. Connection states and amounts are illustrative.

![Copilot settings showing behavior and Agent permissions controls](/cortiq-public/images/screenshots/agent-permissions__settings.png)

*Provider permissions and Cortiq session authority are separate controls.*

## Related

- [AI Providers](/cortiq-public/ai-providers/)
- [Risk management](/cortiq-public/risk-management/)
- [Research](/cortiq-public/research/)
- [Sessions](/cortiq-public/sessions/)
