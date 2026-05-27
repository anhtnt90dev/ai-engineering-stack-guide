---
title: Anti-Patterns & Decision Traps
---

# Anti-Patterns & Decision Traps

These are the common mistakes that make AI engineering stacks confusing, fragile, or unnecessarily heavy.

## Comparing tools from different layers as if they were competitors

**Symptom:** The team asks "LangGraph vs AI-DLC?" or "Hermes vs Spec Kit?" as if only one can exist.

**Why it fails:** These tools own different layers. LangGraph builds runtime behavior. AI-DLC governs delivery. Hermes runs agents. Spec Kit structures specs.

**Better approach:** Start from the stack map and identify the layer: app framework, harness, workflow, tools, data, evals, or governance.

## Treating LangGraph as delivery governance

**Symptom:** A graph exists for the agent app, but requirements, approvals, tests, and release evidence are informal.

**Why it fails:** Runtime orchestration does not prove the feature was correctly specified, reviewed, or approved.

**Better approach:** Use LangGraph for stateful agent behavior and pair it with OpenSpec, Spec Kit, or AI-DLC for delivery control.

## Treating Hermes as a replacement for AI-DLC

**Symptom:** The team deploys a custom harness and assumes it solves audit, approvals, NFRs, and enterprise delivery.

**Why it fails:** A harness executes. It does not automatically define governance, source of truth, risk tiers, or production readiness.

**Better approach:** Use Hermes when you need custom/open agent execution. Add AI-DLC or explicit governance for high-risk work.

## Using GSD speed mode for high-risk regulated changes

**Symptom:** Multi-agent execution moves quickly on auth, payments, customer data, or infrastructure without formal review.

**Why it fails:** Throughput can outrun accountability. High-risk domains need traceability, security review, and approval.

**Better approach:** Use GSD for execution only under AI-DLC-style gates when risk is high.

## Writing beautiful specs no one reviews

**Symptom:** The repo has polished generated specs, but product, security, and engineering reviewers do not verify them.

**Why it fails:** A wrong spec written clearly still produces wrong code.

**Better approach:** Assign artifact reviewers. Review requirement, architecture, security, and implementation evidence separately.

## Running RAG without evals

**Symptom:** The chatbot demos well, but no one can measure retrieval quality, grounding, freshness, or regressions.

**Why it fails:** RAG quality changes when sources, chunking, embeddings, prompts, or models change.

**Better approach:** Create golden questions, expected evidence, retrieval evals, generation evals, and CI eval gates.

## Giving agents broad tools without policy

**Symptom:** Agents have shell, database, cloud, or ticketing access with vague instructions to "be careful."

**Why it fails:** Prompt instructions are not authorization boundaries.

**Better approach:** Use scoped credentials, allowlisted tools, approval gates, audit logs, and a tool gateway for production actions.

## Using local LLMs without capability testing

**Symptom:** A local model is adopted for cost or privacy, but coding, retrieval, tool use, or reasoning quality drops.

**Why it fails:** Local serving changes model capability and operations burden. Privacy does not guarantee quality.

**Better approach:** Run evals by workload before routing traffic. Use local models where they meet the required bar.

## Adding all frameworks at once

**Symptom:** The team installs Spec Kit, OpenSpec, AI-DLC, GSD, Superpowers, Hermes, LangChain, LangGraph, MCP, and observability tools in one rollout.

**Why it fails:** Too many owners create artifact conflicts and adoption fatigue.

**Better approach:** Add one layer at a time. Start with the pain: vague requirements, execution context, quality discipline, app runtime, tools, evals, or governance.

## Treating AI-DLC as heavyweight ceremony for every bug

**Symptom:** Small fixes require full lifecycle artifacts, approvals, and audit.

**Why it fails:** The team will bypass the process when the ceremony does not match risk.

**Better approach:** Define risk tiers. Use full AI-DLC for high-risk work, and lightweight specs/tests for low-risk changes.
