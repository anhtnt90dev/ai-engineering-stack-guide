---
title: Anti-patterns
---

# Anti-patterns và Decision Traps

Đây là các lỗi phổ biến làm AI engineering stack trở nên rối, dễ vỡ hoặc quá nặng không cần thiết.

## So sánh tools khác layer như thể chúng cạnh tranh trực tiếp

**Dấu hiệu:** Team hỏi "LangGraph vs AI-DLC?" hoặc "Hermes vs Spec Kit?" như thể chỉ được chọn một.

**Vì sao fail:** Các tool này sở hữu layer khác nhau. LangGraph build runtime behavior. AI-DLC govern delivery. Hermes chạy agents. Spec Kit cấu trúc specs.

**Cách làm tốt hơn:** Bắt đầu từ stack map và xác định layer: app framework, harness, workflow, tools, data, evals hoặc governance.

## Dùng LangGraph như delivery governance

**Dấu hiệu:** Graph cho agent app đã tồn tại, nhưng requirements, approvals, tests và release evidence vẫn informal.

**Vì sao fail:** Runtime orchestration không chứng minh feature đã được specify, review hoặc approve đúng.

**Cách làm tốt hơn:** Dùng LangGraph cho stateful agent behavior và kết hợp OpenSpec, Spec Kit hoặc AI-DLC cho delivery control.

## Xem Hermes là replacement cho AI-DLC

**Dấu hiệu:** Team deploy custom harness và tưởng rằng nó giải quyết audit, approvals, NFR và enterprise delivery.

**Vì sao fail:** Harness execute. Nó không tự định nghĩa governance, source of truth, risk tiers hoặc production readiness.

**Cách làm tốt hơn:** Dùng Hermes khi cần custom/open agent execution. Thêm AI-DLC hoặc governance rõ cho high-risk work.

## Dùng GSD speed mode cho high-risk regulated changes

**Dấu hiệu:** Multi-agent execution chạy nhanh trên auth, payments, customer data hoặc infrastructure mà thiếu formal review.

**Vì sao fail:** Throughput có thể vượt accountability. High-risk domains cần traceability, security review và approval.

**Cách làm tốt hơn:** Dùng GSD cho execution dưới AI-DLC-style gates khi risk cao.

## Viết specs đẹp nhưng không ai review

**Dấu hiệu:** Repo có generated specs rất polished, nhưng product, security và engineering reviewers không verify.

**Vì sao fail:** Một spec sai nhưng viết rõ vẫn sinh code sai.

**Cách làm tốt hơn:** Assign artifact reviewers. Review requirement, architecture, security và implementation evidence riêng biệt.

## Chạy RAG không có evals

**Dấu hiệu:** Chatbot demo tốt, nhưng không ai đo retrieval quality, grounding, freshness hoặc regressions.

**Vì sao fail:** RAG quality thay đổi khi sources, chunking, embeddings, prompts hoặc models thay đổi.

**Cách làm tốt hơn:** Tạo golden questions, expected evidence, retrieval evals, generation evals và CI eval gates.

## Cấp broad tools cho agents mà không có policy

**Dấu hiệu:** Agents có shell, database, cloud hoặc ticketing access với chỉ dẫn mơ hồ kiểu "hãy cẩn thận."

**Vì sao fail:** Prompt instructions không phải authorization boundaries.

**Cách làm tốt hơn:** Dùng scoped credentials, allowlisted tools, approval gates, audit logs và tool gateway cho production actions.

## Dùng local LLMs không capability testing

**Dấu hiệu:** Local model được chọn vì cost hoặc privacy, nhưng coding, retrieval, tool use hoặc reasoning quality giảm.

**Vì sao fail:** Local serving thay đổi model capability và operations burden. Privacy không bảo đảm quality.

**Cách làm tốt hơn:** Chạy evals theo workload trước khi route traffic. Dùng local models ở nơi chúng đạt required bar.

## Thêm tất cả frameworks cùng lúc

**Dấu hiệu:** Team cài Spec Kit, OpenSpec, AI-DLC, GSD, Superpowers, Hermes, LangChain, LangGraph, MCP và observability tools trong một rollout.

**Vì sao fail:** Quá nhiều owner tạo artifact conflicts và adoption fatigue.

**Cách làm tốt hơn:** Thêm từng layer. Bắt đầu từ pain: vague requirements, execution context, quality discipline, app runtime, tools, evals hoặc governance.

## Xem AI-DLC là ceremony nặng cho mọi bug

**Dấu hiệu:** Small fixes cũng cần full lifecycle artifacts, approvals và audit.

**Vì sao fail:** Team sẽ bypass process khi ceremony không khớp risk.

**Cách làm tốt hơn:** Định nghĩa risk tiers. Dùng full AI-DLC cho high-risk work, và lightweight specs/tests cho low-risk changes.
