---
title: Glossary
---

# Glossary

This glossary defines the terms used across the guide. Many disagreements about AI engineering tools are really vocabulary problems.

## AI-DLC

AI-Driven Development Life Cycle: a software delivery lifecycle where AI participates in requirements, design, planning, implementation, testing, documentation, and operations while humans retain accountability.

**Do not confuse with:** generic code generation or a single coding assistant.

## Spec-Driven Development

A development approach where the specification is the source of truth and implementation follows from explicit behavior, constraints, acceptance criteria, and non-goals.

**Do not confuse with:** waterfall. Specs can be iterative and lightweight.

## Workflow framework

A framework that defines how humans and agents move from intent to delivery artifacts such as specs, plans, tasks, approvals, tests, reviews, and audit records.

**Do not confuse with:** an app framework that runs production AI behavior.

## Agent harness

The environment that runs an agent with access to tools such as filesystem, shell, Git, editors, memory, and subagents.

**Do not confuse with:** the workflow methodology that tells the agent what process to follow.

## Agent runtime

The execution system for an agent, including state, tools, memory, model calls, and control flow. In coding contexts, this often overlaps with the harness.

**Do not confuse with:** the model itself.

## Agent app framework

A framework for building AI applications or agent services, such as chains, graphs, tools, memory, state, and deployment surfaces.

**Do not confuse with:** a coding workflow like Spec Kit or AI-DLC.

## Orchestration

The coordination of model calls, tools, state transitions, retrieval, memory, and human handoffs.

**Do not confuse with:** governance. Orchestration runs behavior; governance controls risk and accountability.

## LangChain

An application framework for building LLM-powered apps and agents with integrations for models, tools, retrievers, prompts, and observability.

**Do not confuse with:** a lifecycle framework for software delivery.

## LangGraph

A framework/runtime for building stateful, long-running, graph-based agent systems with durable execution and human-in-the-loop patterns.

**Do not confuse with:** a spec or governance framework.

## Hermes

An open agent harness/runtime that can be used to run agents with tools, memory, skills, and subagent-style capabilities.

**Do not confuse with:** managed coding CLIs or enterprise lifecycle governance.

## MCP

Model Context Protocol: a protocol for exposing tools, resources, and prompts to AI applications and agents in a standardized way.

**Do not confuse with:** a full security/governance system. MCP needs policy and controls around it.

## Tool calling

The mechanism where a model produces structured arguments for a tool or function that an application may execute.

**Do not confuse with:** permission to execute every action. Tool calling still needs authorization.

## Tool gateway

An organizational control layer that mediates tool access, authentication, authorization, rate limits, approval, logging, and audit.

**Do not confuse with:** MCP itself. A gateway can expose MCP tools, OpenAPI tools, scripts, and internal services.

## RAG

Retrieval-Augmented Generation: a pattern where relevant external information is retrieved and added to model context before generating an answer or action.

**Do not confuse with:** simply storing embeddings in a vector database.

## Embedding

A numeric representation of text, image, or other content used for semantic similarity search and retrieval.

**Do not confuse with:** the original content. Embeddings are an index representation.

## Vector database

A database or index optimized for storing vectors and searching by similarity.

**Do not confuse with:** a complete RAG system. It is only one component.

## Retriever

The component that selects candidate context from an index or source system for a query.

**Do not confuse with:** the generator model that writes the final response.

## Reranker

A component that reorders retrieved candidates to improve relevance before they enter the prompt context.

**Do not confuse with:** the initial retriever. Reranking usually happens after retrieval.

## Grounding

The practice of making model responses rely on explicit evidence, context, citations, or tool results.

**Do not confuse with:** model confidence. A confident answer can still be ungrounded.

## Evaluation

The measurement of AI behavior against expected outcomes, including retrieval quality, generation quality, tool trajectories, safety, latency, and cost.

**Do not confuse with:** unit testing only.

## Golden dataset

A curated set of representative cases with expected behavior or evidence used to detect regressions.

**Do not confuse with:** random demo prompts.

## Trace

A recorded timeline of an AI run, including prompts, model calls, retrieval, tools, outputs, errors, and metadata.

**Do not confuse with:** plain application logs. Traces show end-to-end causality.

## Observability

The ability to understand AI system behavior through traces, metrics, logs, evals, costs, latency, and feedback loops.

**Do not confuse with:** dashboards alone.

## Guardrail

A control that prevents, detects, or mitigates unsafe or undesired AI behavior.

**Do not confuse with:** a guarantee. Guardrails reduce risk but must be tested.

## Model router

A policy layer that routes requests to different models based on task, cost, latency, sensitivity, capability, or availability.

**Do not confuse with:** a single model endpoint.

## Local LLM

A language model served inside a local, private, or self-controlled environment.

**Do not confuse with:** automatically safer or cheaper. It still needs evals, security, and operations.

## Human-in-the-loop

A design where a human reviews, approves, corrects, or guides an AI action before or during execution.

**Do not confuse with:** rubber-stamp approval.

## Audit trail

A durable record of decisions, approvals, tool calls, model runs, and evidence used to explain what happened.

**Do not confuse with:** chat history that can be lost or edited.

## Approval gate

A point in the workflow where progress requires explicit approval from a responsible person or system.

**Do not confuse with:** informal acknowledgement in chat.

## Source of truth

The authoritative artifact that defines current expected behavior, such as a spec, change proposal, audit record, or production configuration.

**Do not confuse with:** scattered notes across tickets, chats, and PR descriptions.

## Context rot

The degradation of agent performance when long conversations accumulate outdated, irrelevant, or conflicting context.

**Do not confuse with:** model weakness alone. Better artifacts and session boundaries can reduce context rot.
