---
title: Expert review
---

# Expert Review: Làm sao để tài liệu cực kỳ hữu ích và viral

Trang này review bộ tài liệu từ nhiều góc nhìn chuyên gia và đề xuất các phần nên bổ sung để tài liệu thực dụng hơn, dễ chia sẻ hơn và đáng tin hơn.

## Hội đồng review

| Góc nhìn chuyên gia | Họ quan tâm điều gì |
|---|---|
| AI solution architect | Architecture fit, governance, NFR, adoption strategy |
| Staff software engineer | Code quality, testing, maintainability, developer workflow |
| DevSecOps lead | Security, audit, deployment, incident readiness |
| Product leader | Clarity, outcome, prioritization, stakeholder alignment |
| AI platform engineer | Tooling, repeatability, agent rules, integrations |
| Agent platform engineer | Runtime safety, model routing, tool permissions, memory |
| Agent application architect | State model, tool safety, evals, observability, production behavior |
| Technical educator | Learning path, examples, diagrams, exercises |
| Community/content strategist | Shareability, hooks, templates, viral assets |

## Phần stack expansion đã bổ sung

Các gap kiến trúc lớn trong review trước đã được đưa thành trang riêng:

| Gap | Trang mới |
|---|---|
| Bản đồ kiến trúc toàn stack | [Bản đồ AI Engineering Stack](../stack/) |
| Model routing và serving strategy | [Tầng model và serving](../stack/model-serving) |
| Kiến trúc RAG/data | [Data, RAG và Retrieval](../stack/data-rag) |
| MCP, tool permissions và gateway patterns | [Tools, MCP và Gateway](../stack/tools-mcp) |
| Evals, tracing và feedback loops | [Evals và Observability](../stack/evals-observability) |
| Security, governance và risk tiers | [Security và Governance](../stack/security-governance) |
| Các cách kết hợp thực tế | [Reference Architectures](../stack/reference-architectures) |
| Mức trưởng thành adoption | [Maturity Model](../stack/maturity-model) |
| Thuật ngữ | [Glossary](../stack/glossary) |
| Lỗi áp dụng phổ biến | [Anti-patterns](../stack/anti-patterns) |

## Review từ AI solution architect

Điểm mạnh:

- Tài liệu giải thích các layer: spec, governance, execution, discipline.
- Không giả vờ một framework giải quyết mọi thứ.
- Có source-of-truth boundaries.

Cần bổ sung tiếp:

1. Biến thể chi tiết hơn của [reference architectures](../stack/reference-architectures) theo từng ngành.
2. Risk classification templates.
3. NFR checklist dạng download.
4. Ví dụ Architecture Decision Record.
5. Brownfield modernization blueprint.

## Review từ staff engineer

Điểm mạnh:

- Superpowers và TDD sections giảm nguy cơ "AI nói done" nhưng không có evidence.
- Spec Kit sections làm intent implementation rõ hơn.

Cần bổ sung tiếp:

1. Ví dụ PR thật với diff tốt/xấu.
2. Test strategy examples theo từng framework.
3. Code review checklist cho AI-generated changes.
4. Warning signs: khi nào phải dừng agent.
5. Exercise repo nhỏ để người đọc thực hành.

## Review từ DevSecOps

Điểm mạnh:

- AI-DLC sections nhấn mạnh audit và NFR đúng hướng.
- Use case security-sensitive được tách khỏi speed-first workflow.

Cần bổ sung tiếp:

1. Threat modeling mini-template.
2. Secrets và IAM checklist.
3. Production readiness checklist dạng markdown download.
4. Rollback và incident runbook examples.
5. Abuse-case examples cho auth, billing, file upload, admin flows.

## Review từ product leader

Điểm mạnh:

- Tài liệu giải thích vì sao requirements và non-goals quan trọng.
- Giúp chọn workflow theo business risk.

Cần bổ sung tiếp:

1. Product brief template cho AI-assisted delivery.
2. Acceptance criteria library.
3. Stakeholder approval matrix.
4. Ví dụ câu hỏi product mà AI nên hỏi trước implementation.
5. "Feature readiness before coding" checklist.

## Review từ AI platform engineer

Điểm mạnh:

- Tài liệu gọi rõ project rules, artifacts và context management.
- Cảnh báo multiple sources of truth.

Cần bổ sung tiếp:

1. Agent rules starter pack.
2. Repo templates cho từng workflow combo.
3. CI checks để phát hiện stale specs hoặc thiếu test evidence.
4. Standard folder layout cho multilingual docs.
5. Ví dụ `AGENTS.md`, Cursor rules và Copilot instructions.

## Review từ agent platform engineer

Điểm mạnh:

- Guide đã tách harness/runtime khỏi workflow frameworks.
- Hermes được định vị là execution/runtime layer, không phải một SDD framework nữa.

Cần bổ sung tiếp:

1. Runtime safety model nối với [Security và Governance](../stack/security-governance).
2. Tool permission matrix nối với [Tools, MCP và Gateway](../stack/tools-mcp).
3. Model routing policy nối với [Tầng model và serving](../stack/model-serving).
4. Memory retention và deletion policy nối với [Security và Governance](../stack/security-governance).
5. Agent audit logging requirements nối với [Evals và Observability](../stack/evals-observability).
6. Evaluation harness cho agent quality.
7. Kill switch và timeout patterns.

Minimum platform checklist:

| Area | Checklist |
|---|---|
| Model routing | Model nào được xử lý task class nào? |
| Tool sandboxing | Command nào blocked, allowed hoặc approval-gated? |
| Secrets boundary | Agent có đọc secrets không? Dưới identity nào? |
| Memory retention | Lưu gì, ở đâu, bao lâu? |
| Audit logs | Prompts, tool calls, file edits, approvals có được ghi không? |
| Evaluation | Có so sánh output agent qua versions không? |
| Emergency stop | Human có dừng long-running execution ngay được không? |

## Review từ agent application architect

Điểm mạnh:

- Guide đã tách app/orchestration frameworks khỏi harnesses và workflow methods.
- LangChain và LangGraph được giải thích mà không bị lẫn với delivery frameworks.

Cần bổ sung tiếp:

1. State model templates cho LangGraph agents.
2. Tool-calling safety checklist.
3. Evals examples cho RAG và agent workflows dựa trên [Evals và Observability](../stack/evals-observability).
4. Human-in-the-loop design patterns.
5. Observability checklist cho agent apps.
6. Latency và cost budget templates.
7. Failure-mode catalog cho long-running agents.

Minimum app checklist:

| Area | Checklist |
|---|---|
| State | State có explicit, serializable, testable không? |
| Tools | Tool permissions có scoped và logged không? |
| Evals | Scenarios quan trọng có được evaluate không? |
| Human review | High-risk steps có gate không? |
| Observability | Traces, logs, metrics có sẵn không? |
| Cost/latency | Budgets đã định nghĩa chưa? |
| Fallbacks | App degrade an toàn không? |

## Review từ technical educator

Điểm mạnh:

- Reading path rõ.
- Framework pages xuất hiện trước comparison.
- Mermaid diagrams giúp dễ nhớ.

Cần bổ sung tiếp:

1. Exercises cuối mỗi framework page.
2. Track beginner / intermediate / expert.
3. Exercises mở rộng dựa trên [Glossary](../stack/glossary).
4. One-page cheat sheet.
5. Workshop agenda dạng download.

## Review từ community/content strategist

Điểm mạnh:

- Chủ đề rất đúng thời điểm.
- So sánh thực dụng, không chỉ lý thuyết.
- Cách định vị framework dễ nhớ.

Cần thêm để dễ viral:

| Asset | Vì sao hữu ích |
|---|---|
| One-page decision tree | Dễ share trên LinkedIn/GitHub README |
| Printable cheat sheet | Giúp team thảo luận adoption |
| Example repo | Cho người đọc thử workflow |
| Before/after prompt examples | Thấy giá trị ngay |
| "Choose your workflow" quiz | Biến guide thành interactive tool |
| Slide deck | Giúp internal champions trình bày |
| Templates pack | Biến reader thành user |
| Short videos/GIFs | Cho thấy workflow chạy thật |

## Các bổ sung hữu ích đã hoàn thành

| Addition | Ở đâu |
|---|---|
| One-page cheat sheet | [Công cụ áp dụng](../tools/cheat-sheet) |
| Interactive decision wizard | [Decision wizard](../tools/decision-wizard) |
| Downloadable templates pack | [Templates và starter artifacts](../tools/templates) |
| Scenario lab với một feature qua nhiều workflow | [Scenario lab](../tools/scenario-lab) |
| Extended adjacent ecosystem guide | [Bản đồ ecosystem agent](../tools/ecosystem-map) |

## Backlog giá trị cao còn lại

| Priority | Bổ sung | Vì sao |
|---|---|---|
| P1 | Runnable example repository với branches theo từng workflow | Làm khác biệt cụ thể bằng code |
| P1 | Prompt library | Giúp người đọc bắt đầu nhanh |
| P1 | CI guardrail examples | Giúp platform teams operationalize eval/security gates |
| P2 | Workshop deck | Hỗ trợ enterprise adoption |
| P2 | Case studies dài hơn | Tăng credibility bằng migration story thật |

## Điều gì sẽ làm guide này đẳng cấp hơn

1. Repo demo chạy được với cùng một feature implement bởi từng workflow.
2. CI examples biến specs, evals và security checks thành automated gates.
3. Short "wrong way vs right way" cho từng framework.
4. Case studies thật dài hơn, có trade-offs và failure modes.
5. Workshop deck cho internal engineering enablement.
6. Benchmark-style comparison: speed, review effort, defect rate, artifact quality.
7. Community contribution guide để thêm framework mới.
