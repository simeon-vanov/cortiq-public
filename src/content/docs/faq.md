---
title: FAQ
description: Common questions about installation, operation, and support for Cortiq.
---

## Is Cortiq a cloud trading platform?

No. Cortiq is a Windows desktop product that runs locally and integrates with MetaTrader 5 on the same machine.

## Does Cortiq support brokers outside MetaTrader 5?

No public support is documented for non-MT5 execution environments. The supported execution path is MetaTrader 5.

## Is virtual trading the same as backtesting?

No. Virtual trading simulates trades without sending them to MT5, but it does so on current market conditions. It is not a historical backtesting engine.

## Can I start with one AI provider and switch later?

Yes. Sessions can be configured with different providers and different integration modes, so you can change your operating model over time.

## Can I use Claude Desktop or another MCP agent with Cortiq?

Yes, in advanced setups. Cortiq includes an MCP server model that allows an MCP-compatible client to control `External MCP` sessions through tool calls. That is a different operating mode from the normal autonomous session loop. See [MCP and Agent Integration](mcp-and-agent-integration/).

## Should I go live immediately after installation?

No. The recommended path is to install Cortiq, confirm MT5 and AI connectivity, create a narrow playbook, and run virtual sessions first.

## Does Cortiq guarantee profitable trading?

No. Cortiq is an execution and decision-support platform with risk controls, not a guarantee of performance.

## Can Cortiq manage multiple accounts?

Yes. Cortiq supports multi-account MT5 setups, but each account needs correct configuration and non-conflicting connectivity settings.

## Where should I ask questions about workflow or setup?

Use GitHub Discussions for public questions and shared workflows.

## Where should I report bugs?

Use GitHub Issues when you can describe a reproducible product problem clearly.

## Where should I ask about license problems?

Use direct support rather than public issues if the case involves license keys, payment data, or other sensitive details.