---
title: Interactive Decision Wizard
---

# Interactive Decision Wizard

Use this wizard to turn a vague situation into a recommended stack. It is intentionally simple: the goal is not to replace architectural judgment, but to expose which layer owns the main problem.

<DecisionWizard lang="en" />

## How to interpret the result

The wizard returns a **primary workflow** and several **supporting layers**.

The primary workflow should own the delivery source of truth:

| Primary workflow | Owns |
|---|---|
| GitHub Spec Kit | Spec, plan, tasks, implementation alignment |
| OpenSpec | Change proposal, delta specs, lightweight SDD |
| AWS AI-DLC Workflows | Risk, approvals, governance, audit |
| GSD | Long-running context and multi-session execution |
| Superpowers | Engineering discipline, TDD, review, finishing |

Supporting layers should not create competing plans. For example, LangGraph may own runtime state, Hermes may own agent execution, and MCP may own tool exposure, but the delivery workflow still needs one source of truth.

## Manual override rules

Use these override rules when the wizard result feels too light or too heavy:

| Signal | Override |
|---|---|
| Regulated data, customer-impacting automation, finance, healthcare, legal, security operations | Move up to AI-DLC governance |
| Unclear requirements or stakeholder disagreement | Move toward Spec Kit before implementation |
| Small scoped change with clear acceptance criteria | Move toward OpenSpec |
| Multi-day agent work with context loss | Add GSD |
| Agent produces code without tests or review discipline | Add Superpowers |
| Runtime needs state, retries, checkpoints, human-in-the-loop | Add LangGraph |
| Team wants to own the coding/research agent harness | Add Hermes |

## Decision trace template

Copy this into an issue, PR, or planning doc:

```md
# AI engineering stack decision

## Context
- Product/system:
- Team:
- Risk level:
- AI behavior involved:

## Primary workflow
- Chosen workflow:
- Why this workflow owns the source of truth:

## Supporting layers
- App framework:
- Harness/runtime:
- Tool/protocol layer:
- Evals/observability:
- Security/governance:

## Required artifacts
- Spec/change proposal:
- Risk or approval record:
- Test/eval plan:
- Done criteria:

## Explicit non-goals
- We are not using:
- Because:
```
