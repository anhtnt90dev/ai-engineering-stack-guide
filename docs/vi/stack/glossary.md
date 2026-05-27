---
title: Glossary
---

# Glossary

Glossary này định nghĩa các thuật ngữ dùng trong toàn bộ guide. Nhiều tranh luận về AI engineering tools thực ra là vấn đề vocabulary.

## AI-DLC

AI-Driven Development Life Cycle: vòng đời phát triển phần mềm khi AI tham gia requirements, design, planning, implementation, testing, documentation và operations, trong khi con người vẫn chịu accountability.

**Đừng nhầm với:** code generation chung chung hoặc một coding assistant đơn lẻ.

## Spec-Driven Development

Cách phát triển trong đó specification là source of truth, còn implementation đi sau behavior, constraints, acceptance criteria và non-goals đã explicit.

**Đừng nhầm với:** waterfall. Specs có thể iterative và lightweight.

## Workflow framework

Framework định nghĩa human và agent đi từ intent đến delivery artifacts như specs, plans, tasks, approvals, tests, reviews và audit records như thế nào.

**Đừng nhầm với:** app framework chạy production AI behavior.

## Agent harness

Môi trường chạy agent với quyền truy cập tools như filesystem, shell, Git, editors, memory và subagents.

**Đừng nhầm với:** workflow methodology hướng dẫn agent đi theo quy trình nào.

## Agent runtime

Hệ thống execution của agent, gồm state, tools, memory, model calls và control flow. Trong coding context, nó thường overlap với harness.

**Đừng nhầm với:** bản thân model.

## Agent app framework

Framework để build AI applications hoặc agent services, gồm chains, graphs, tools, memory, state và deployment surfaces.

**Đừng nhầm với:** coding workflow như Spec Kit hoặc AI-DLC.

## Orchestration

Việc điều phối model calls, tools, state transitions, retrieval, memory và human handoffs.

**Đừng nhầm với:** governance. Orchestration chạy behavior; governance kiểm soát risk và accountability.

## LangChain

Application framework để build LLM-powered apps và agents với integrations cho models, tools, retrievers, prompts và observability.

**Đừng nhầm với:** lifecycle framework cho software delivery.

## LangGraph

Framework/runtime để build stateful, long-running, graph-based agent systems với durable execution và human-in-the-loop patterns.

**Đừng nhầm với:** spec hoặc governance framework.

## Hermes

Open agent harness/runtime có thể dùng để chạy agents với tools, memory, skills và subagent-style capabilities.

**Đừng nhầm với:** managed coding CLIs hoặc enterprise lifecycle governance.

## MCP

Model Context Protocol: protocol để expose tools, resources và prompts cho AI applications và agents theo cách chuẩn hóa.

**Đừng nhầm với:** full security/governance system. MCP cần policy và controls bao quanh.

## Tool calling

Cơ chế model sinh structured arguments cho tool hoặc function mà application có thể execute.

**Đừng nhầm với:** quyền execute mọi action. Tool calling vẫn cần authorization.

## Tool gateway

Control layer của tổ chức để trung gian hóa tool access, authentication, authorization, rate limits, approval, logging và audit.

**Đừng nhầm với:** MCP. Gateway có thể expose MCP tools, OpenAPI tools, scripts và internal services.

## RAG

Retrieval-Augmented Generation: pattern retrieve external information liên quan rồi thêm vào model context trước khi sinh answer hoặc action.

**Đừng nhầm với:** chỉ lưu embeddings trong vector database.

## Embedding

Biểu diễn số của text, image hoặc content khác, dùng cho semantic similarity search và retrieval.

**Đừng nhầm với:** original content. Embeddings là representation cho index.

## Vector database

Database hoặc index tối ưu cho lưu vectors và tìm kiếm bằng similarity.

**Đừng nhầm với:** complete RAG system. Nó chỉ là một component.

## Retriever

Component chọn candidate context từ index hoặc source system cho một query.

**Đừng nhầm với:** generator model viết final response.

## Reranker

Component sắp xếp lại retrieved candidates để tăng relevance trước khi đưa vào prompt context.

**Đừng nhầm với:** retriever ban đầu. Reranking thường xảy ra sau retrieval.

## Grounding

Thực hành buộc model response dựa trên evidence, context, citations hoặc tool results explicit.

**Đừng nhầm với:** model confidence. Một answer rất tự tin vẫn có thể ungrounded.

## Evaluation

Đo hành vi AI so với expected outcomes, gồm retrieval quality, generation quality, tool trajectories, safety, latency và cost.

**Đừng nhầm với:** chỉ unit testing.

## Golden dataset

Tập representative cases được curate với expected behavior hoặc evidence để phát hiện regressions.

**Đừng nhầm với:** demo prompts ngẫu nhiên.

## Trace

Timeline được ghi lại của một AI run, gồm prompts, model calls, retrieval, tools, outputs, errors và metadata.

**Đừng nhầm với:** application logs đơn thuần. Traces cho thấy causal path end-to-end.

## Observability

Khả năng hiểu behavior của AI system thông qua traces, metrics, logs, evals, costs, latency và feedback loops.

**Đừng nhầm với:** chỉ dashboard.

## Guardrail

Control để ngăn, phát hiện hoặc giảm thiểu AI behavior unsafe hoặc không mong muốn.

**Đừng nhầm với:** guarantee. Guardrails giảm risk nhưng phải được test.

## Model router

Policy layer route requests đến các models khác nhau theo task, cost, latency, sensitivity, capability hoặc availability.

**Đừng nhầm với:** một model endpoint duy nhất.

## Local LLM

Language model được serve trong môi trường local, private hoặc self-controlled.

**Đừng nhầm với:** tự động an toàn hơn hoặc rẻ hơn. Nó vẫn cần evals, security và operations.

## Human-in-the-loop

Thiết kế trong đó human review, approve, correct hoặc guide AI action trước hoặc trong khi execution.

**Đừng nhầm với:** rubber-stamp approval.

## Audit trail

Record bền vững của decisions, approvals, tool calls, model runs và evidence dùng để giải thích chuyện gì đã xảy ra.

**Đừng nhầm với:** chat history có thể mất hoặc bị sửa.

## Approval gate

Điểm trong workflow mà tiến trình cần approval explicit từ người hoặc system chịu trách nhiệm.

**Đừng nhầm với:** acknowledgement informal trong chat.

## Source of truth

Artifact authoritative định nghĩa expected behavior hiện tại, ví dụ spec, change proposal, audit record hoặc production configuration.

**Đừng nhầm với:** notes rải rác trong tickets, chats và PR descriptions.

## Context rot

Sự suy giảm performance của agent khi conversation dài tích lũy context cũ, nhiễu hoặc mâu thuẫn.

**Đừng nhầm với:** model yếu đơn thuần. Artifacts tốt hơn và session boundaries rõ hơn có thể giảm context rot.
