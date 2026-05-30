---
title: Expert Review
---

# Expert Review: How to Make This Guide More Useful and Viral

This page reviews the guide from multiple expert perspectives and recommends additions that make it more practical, shareable, and credible.

## Review panel

| Expert lens | What they care about |
|---|---|
| AI solution architect | Architecture fit, governance, NFRs, adoption strategy |
| Staff software engineer | Code quality, testing, maintainability, developer workflow |
| DevSecOps lead | Security, audit, deployment, incident readiness |
| Product leader | Clarity, outcome, prioritization, stakeholder alignment |
| AI platform engineer | Tooling, repeatability, agent rules, integrations |
| Agent platform engineer | Runtime safety, model routing, tool permissions, memory |
| Agent application architect | State model, tool safety, evals, observability, production behavior |
| Technical educator | Learning path, examples, diagrams, practical exercises |
| Community/content strategist | Shareability, hooks, templates, viral artifacts |

## Stack expansion coverage

The major architecture gaps identified in earlier reviews are now covered by dedicated pages:

| Gap | New page |
|---|---|
| Full-stack architecture map | [AI Engineering Stack Map](../stack/) |
| Model routing and serving strategy | [Model & Serving Layer](../stack/model-serving) |
| RAG data architecture | [Data, RAG & Retrieval](../stack/data-rag) |
| MCP, tool permissions, and gateway patterns | [Tools, MCP & Gateways](../stack/tools-mcp) |
| Evals, tracing, and feedback loops | [Evals & Observability](../stack/evals-observability) |
| Security, governance, and risk tiers | [Security & Governance](../stack/security-governance) |
| Practical combinations | [Reference Architectures](../stack/reference-architectures) |
| Adoption level setting | [Maturity Model](../stack/maturity-model) |
| Terminology | [Glossary](../stack/glossary) |
| Common mistakes | [Anti-Patterns](../stack/anti-patterns) |

## AI solution architect review

What is strong:

- The guide explains the layers: spec, governance, execution, discipline.
- It avoids pretending one framework solves everything.
- It includes source-of-truth boundaries.

What to add next:

1. More detailed variants of the [reference architectures](../stack/reference-architectures) for specific industries.
2. Risk classification templates.
3. NFR checklist downloads.
4. Architecture decision record examples.
5. Brownfield modernization blueprint.

## Staff engineer review

What is strong:

- Superpowers and TDD sections reduce the chance of "AI says done" without evidence.
- Spec Kit sections make implementation intent clearer.

What to add next:

1. Real PR examples with good and bad diffs.
2. Test strategy examples per framework.
3. Code review checklist for AI-generated changes.
4. "When to stop the agent" warning signs.
5. Small exercise repo where readers can practice.

## DevSecOps review

What is strong:

- AI-DLC sections correctly emphasize audit and NFRs.
- Security-sensitive use cases are separated from speed-first workflows.

What to add next:

1. Threat modeling mini-template.
2. Secrets and IAM checklist.
3. Production readiness checklist as downloadable markdown.
4. Rollback and incident runbook examples.
5. Abuse-case examples for auth, billing, file upload, and admin flows.

## Product leader review

What is strong:

- The guide explains why requirements and non-goals matter.
- It helps choose the right workflow by business risk.

What to add next:

1. Product brief template for AI-assisted delivery.
2. Acceptance criteria library.
3. Stakeholder approval matrix.
4. Examples of product questions AI should ask before implementation.
5. A "feature readiness before coding" checklist.

## AI platform engineer review

What is strong:

- The guide names project rules, artifacts, and context management explicitly.
- It warns about multiple sources of truth.

What to add next:

1. Agent rules starter pack.
2. Repo templates for each workflow combination.
3. CI checks to detect stale specs or missing test evidence.
4. Standard folder layout for multilingual docs.
5. Example `AGENTS.md`, Cursor rules, and Copilot instructions.

## Agent platform engineer review

What is strong:

- The guide now separates harness/runtime from workflow frameworks.
- Hermes is positioned as an execution/runtime layer, not as another SDD framework.

What to add next:

1. Runtime safety model connected to [Security & Governance](../stack/security-governance).
2. Tool permission matrix connected to [Tools, MCP & Gateways](../stack/tools-mcp).
3. Model routing policy connected to [Model & Serving Layer](../stack/model-serving).
4. Memory retention and deletion policy connected to [Security & Governance](../stack/security-governance).
5. Agent audit logging requirements connected to [Evals & Observability](../stack/evals-observability).
6. Evaluation harness for agent quality.
7. Kill switch and timeout patterns.

Minimum platform checklist:

| Area | Checklist |
|---|---|
| Model routing | Which model can handle which task class? |
| Tool sandboxing | Which commands are blocked, allowed, or approval-gated? |
| Secrets boundary | Can the agent read secrets? Under what identity? |
| Memory retention | What is stored, where, and for how long? |
| Audit logs | Are prompts, tool calls, file edits, and approvals recorded? |
| Evaluation | Can you compare agent output across versions? |
| Emergency stop | Can a human stop long-running execution immediately? |

## Agent application architect review

What is strong:

- The guide now distinguishes app/orchestration frameworks from harnesses and workflow methods.
- LangChain and LangGraph can be explained without confusing them with delivery frameworks.

What to add next:

1. State model templates for LangGraph agents.
2. Tool-calling safety checklist.
3. Evals examples for RAG and agent workflows using [Evals & Observability](../stack/evals-observability).
4. Human-in-the-loop design patterns.
5. Observability checklist for agent apps.
6. Latency and cost budget templates.
7. Failure-mode catalog for long-running agents.

Minimum app checklist:

| Area | Checklist |
|---|---|
| State | Is state explicit, serializable, and testable? |
| Tools | Are tool permissions scoped and logged? |
| Evals | Are important scenarios evaluated? |
| Human review | Are high-risk steps gated? |
| Observability | Are traces, logs, and metrics available? |
| Cost/latency | Are budgets defined? |
| Fallbacks | Does the app degrade safely? |

## Technical educator review

What is strong:

- The reading path is clear.
- Framework pages come before comparison.
- Mermaid diagrams make concepts easier to remember.

What to add next:

1. Exercises at the end of every framework page.
2. "Beginner / intermediate / expert" tracks.
3. Expanded exercises that use the [Glossary](../stack/glossary).
4. One-page cheat sheet.
5. Downloadable workshop agenda.

## Viral/content strategy review

What is strong:

- The topic is timely.
- The comparison is practical, not just theoretical.
- The framework positioning is memorable.

What to add next to make it shareable:

| Asset | Why it helps |
|---|---|
| One-page decision tree | Easy to share in LinkedIn/GitHub README |
| Printable cheat sheet | Helps teams discuss adoption |
| Example repo | Lets readers try the workflows |
| Before/after prompt examples | Shows immediate value |
| "Choose your workflow" quiz | Turns the guide into an interactive tool |
| Slide deck | Helps internal champions present it |
| Templates pack | Converts readers into users |
| Short videos/GIFs | Shows workflows in action |

## Completed usefulness upgrades

| Addition | Where |
|---|---|
| One-page cheat sheet | [Decision Tools](../tools/cheat-sheet) |
| Interactive decision wizard | [Decision Wizard](../tools/decision-wizard) |
| Downloadable templates pack | [Templates and Starter Artifacts](../tools/templates) |
| Scenario lab with one feature across workflows | [Scenario Lab](../tools/scenario-lab) |
| Extended adjacent ecosystem guide | [Adjacent Agent Ecosystem Map](../tools/ecosystem-map) |

## Remaining high-value backlog

| Priority | Addition | Why |
|---|---|---|
| P1 | Runnable example repository with branches per workflow | Makes differences concrete in code |
| P1 | Prompt library | Helps readers start quickly |
| P1 | CI guardrail examples | Helps platform teams operationalize eval/security gates |
| P2 | Workshop deck | Helps enterprise adoption |
| P2 | Longer case studies | Builds credibility with real migration stories |

## What would make this guide feel world-class

1. A runnable demo repository with the same feature implemented by each workflow.
2. CI examples that turn specs, evals, and security checks into automated gates.
3. A short "wrong way vs right way" example for every framework.
4. Longer real-world case studies with trade-offs and failure modes.
5. A workshop deck for internal engineering enablement.
6. Benchmark-style comparison: speed, review effort, defect rate, artifact quality.
7. Community contribution guide for adding new frameworks.
