# AI Engineering Stack Guide

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-2ea44f?logo=github)](https://anhtnt90dev.github.io/ai-engineering-stack-guide/)
[![VitePress](https://img.shields.io/badge/Built%20with-VitePress-646cff)](https://vitepress.dev/)
[![English](https://img.shields.io/badge/language-English-blue)](https://anhtnt90dev.github.io/ai-engineering-stack-guide/en/)
[![Tieng Viet](https://img.shields.io/badge/language-Tieng%20Viet-red)](https://anhtnt90dev.github.io/ai-engineering-stack-guide/vi/)
[![Mermaid](https://img.shields.io/badge/diagrams-Mermaid-ff3670)](https://mermaid.js.org/)

A bilingual field guide for understanding the modern AI engineering stack: AI-DLC, Spec-Driven Development, workflow frameworks, agent harnesses/runtimes, agent app frameworks, model serving, RAG/data, MCP/tools, evals, observability, security, and governance.

Live site: https://anhtnt90dev.github.io/ai-engineering-stack-guide/

## Why This Guide Exists

AI engineering tools are increasingly hard to compare because many of them use the same verbs:

```text
plan -> implement -> review -> iterate
```

That similarity creates confusion. Spec Kit, OpenSpec, AWS AI-DLC, GSD, Superpowers, Hermes, Codex CLI, Claude Code, LangChain, LangGraph, and MCP can all appear in an AI-assisted engineering workflow, but they do not solve the same problem.

This guide explains the difference by layer:

```text
Model / Serving
  -> Data / RAG
  -> Tools / MCP
  -> Agent App Frameworks
  -> Agent Harnesses / Runtimes
  -> Workflow / Methodology
  -> Artifacts / Source of Truth
  -> Evals / Observability / Governance
```

The goal is to help readers choose the right tool for the right layer instead of comparing unrelated frameworks as if they were direct competitors.

## What You Will Learn

- Why AI-DLC exists and how it changes traditional software delivery.
- What Spec-Driven Development means in AI-assisted coding.
- How GitHub Spec Kit, OpenSpec, AWS AI-DLC Workflows, GSD, and Superpowers differ.
- Where Hermes, Codex CLI, and Claude Code fit as agent harness/runtime tools.
- Where LangChain and LangGraph fit as agent app frameworks.
- Why RAG, MCP/tools, evals, observability, security, and governance are separate production layers.
- How to combine frameworks without creating multiple sources of truth.
- Which stack fits common use cases such as SaaS features, RAG products, enterprise modernization, internal agent platforms, and long-running agent services.

## Start Reading

| Language | Entry point |
|---|---|
| English | https://anhtnt90dev.github.io/ai-engineering-stack-guide/en/ |
| Tieng Viet | https://anhtnt90dev.github.io/ai-engineering-stack-guide/vi/ |

Recommended path:

1. Start with the Stack Map.
2. Read AI-DLC and Spec-Driven Development foundations.
3. Understand Agent Harness vs Workflow Framework.
4. Read the deep dives for each workflow framework.
5. Read LangChain, LangGraph, and Hermes positioning.
6. Use the comparison matrix and decision guide.
7. Apply the reference architectures and adoption playbook.

## Topics Covered

| Area | Pages |
|---|---|
| Foundations | AI-DLC, Spec-Driven Development, Harness vs Workflow |
| AI Engineering Stack | Model serving, RAG/data, MCP/tools, evals, observability, security, governance |
| Workflow Frameworks | GitHub Spec Kit, OpenSpec, AWS AI-DLC Workflows, GSD, Superpowers |
| Agent Harnesses | Hermes Agent, Codex CLI vs Claude Code vs Hermes |
| Agent App Frameworks | LangChain, LangGraph, LangChain/LangGraph vs Hermes |
| Adoption | Decision guide, combinations, real-world use cases, maturity model, anti-patterns |

## Featured Frameworks And References

- GitHub Spec Kit: https://github.com/github/spec-kit
- OpenSpec: https://github.com/Fission-AI/OpenSpec
- AWS AI-DLC Workflows: https://github.com/awslabs/aidlc-workflows
- GSD Redux: https://github.com/open-gsd/get-shit-done-redux
- Superpowers: https://github.com/obra/superpowers
- Hermes Agent: https://github.com/NousResearch/hermes-agent
- LangChain: https://docs.langchain.com/oss/python/langchain/overview
- LangGraph: https://docs.langchain.com/oss/python/langgraph/overview
- Model Context Protocol: https://modelcontextprotocol.io/
- OpenTelemetry: https://opentelemetry.io/

## Local Development

Requirements:

- Node.js 22 or newer is recommended.
- npm.

Install dependencies:

```bash
npm install
```

Run the local documentation server:

```bash
npm run docs:dev
```

Build the static site:

```bash
npm run docs:build
```

Preview the production build:

```bash
npm run docs:preview
```

The English site is under `/en/`. The Vietnamese site is under `/vi/`.

## Deployment

This repository uses GitHub Actions to deploy VitePress to GitHub Pages.

Workflow file:

```text
.github/workflows/deploy.yml
```

The workflow sets:

```text
BASE_PATH=/${{ github.event.repository.name }}/
```

That makes the site work as a GitHub project page:

```text
https://anhtnt90dev.github.io/ai-engineering-stack-guide/
```

## Repository Structure

```text
docs/
  .vitepress/
    config.mts
    theme/
  en/
    foundations/
    stack/
    frameworks/
    app-frameworks/
    harnesses/
    compare/
  vi/
    foundations/
    stack/
    frameworks/
    app-frameworks/
    harnesses/
    compare/
```

## Project Status

This is an evolving learning guide. The current focus is clear taxonomy, deep framework comparison, and practical adoption guidance. Good next additions would be:

- A one-page cheat sheet.
- An interactive decision wizard.
- Downloadable templates for specs, AI-DLC audit entries, and review checklists.
- Example repositories showing the same feature implemented with different workflows.
- Screenshots or short workflow demos.

## License

No explicit license file has been added yet. Add a license before reusing or redistributing the content beyond normal GitHub viewing and contribution workflows.
