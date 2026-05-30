---
title: Hướng dẫn AI Engineering Stack
---

# Hướng dẫn AI Engineering Stack

Tài liệu này giải thích AI engineering stack hiện đại dưới góc nhìn của AI solution architect và engineering lead: workflow frameworks, agent harness/runtime, agent app frameworks, model serving, RAG/data, tools/MCP, evals, observability, security và governance.

Thứ tự đọc được thiết kế như sau:

1. Nền tảng: hiểu AI-DLC và Spec-Driven Development.
2. Công cụ áp dụng: dùng cheat sheet, wizard, templates và scenario lab.
3. Stack map: hiểu model serving, RAG/data, tools/MCP, evals, security và governance.
4. Agent layers: hiểu LangChain, LangGraph, Hermes, Codex CLI, Claude Code nằm ở tầng nào.
5. Đi sâu từng framework: hiểu từng framework theo đúng bản chất của nó.
6. So sánh: chỉ so sánh sau khi đã có đủ context.
7. Áp dụng: chọn stack theo team, mức rủi ro và loại codebase.

## Bắt đầu bằng bản đồ stack

Nếu bạn bị rối vì framework nào cũng có vẻ giống `plan -> implement -> review`, hãy bắt đầu với [Bản đồ AI Engineering Stack](./stack/). Trang này giải thích mỗi framework sở hữu layer nào trước khi đi vào so sánh từng tool.

<div class="framework-grid">
  <a class="framework-card" href="./tools/cheat-sheet">
    <h3>Cheat Sheet Một Trang</h3>
    <p>Bản đồ layer, selection matrix và các cặp không nên so sánh trực tiếp.</p>
  </a>
  <a class="framework-card" href="./tools/decision-wizard">
    <h3>Decision Wizard</h3>
    <p>Công cụ tương tác để biến context của bạn thành stack khuyến nghị.</p>
  </a>
  <a class="framework-card" href="./tools/templates">
    <h3>Templates</h3>
    <p>Starter artifacts có thể tải cho specs, AI-DLC records, evals và tool policies.</p>
  </a>
  <a class="framework-card" href="./tools/scenario-lab">
    <h3>Scenario Lab</h3>
    <p>Một RAG assistant feature được nhìn qua nhiều workflow khác nhau.</p>
  </a>
  <a class="framework-card" href="./stack/">
    <h3>AI Engineering Stack</h3>
    <p>Bản đồ đầy đủ của workflow, harness, app framework, model, RAG, tools, evals và governance.</p>
  </a>
  <a class="framework-card" href="./app-frameworks/langchain">
    <h3>LangChain</h3>
    <p>Framework để build LLM apps và tool-calling agents.</p>
  </a>
  <a class="framework-card" href="./app-frameworks/langgraph">
    <h3>LangGraph</h3>
    <p>Stateful orchestration framework cho long-running agent systems.</p>
  </a>
  <a class="framework-card" href="./frameworks/spec-kit">
    <h3>GitHub Spec Kit</h3>
    <p>Spec-first delivery: intent trở thành spec, plan, tasks và implementation.</p>
  </a>
  <a class="framework-card" href="./frameworks/openspec">
    <h3>OpenSpec</h3>
    <p>SDD nhẹ, artifact-guided, có change folder, delta specs và iteration linh hoạt.</p>
  </a>
  <a class="framework-card" href="./frameworks/aws-ai-dlc">
    <h3>AWS AI-DLC Workflows</h3>
    <p>Lifecycle governance cho AI-driven development, có approval và audit trail.</p>
  </a>
  <a class="framework-card" href="./frameworks/gsd">
    <h3>GSD / Get Shit Done</h3>
    <p>Context engineering và multi-agent execution cho dự án dài ngày.</p>
  </a>
  <a class="framework-card" href="./frameworks/superpowers">
    <h3>Superpowers</h3>
    <p>Engineering discipline skills: brainstorm, design, TDD, review, finish.</p>
  </a>
  <a class="framework-card" href="./harnesses/hermes">
    <h3>Hermes Agent</h3>
    <p>Open-source, hackable agent runtime/CLI cho memory, tools, skills và subagents.</p>
  </a>
  <a class="framework-card" href="./tools/ecosystem-map">
    <h3>Ecosystem Lân Cận</h3>
    <p>OpenAI Agents SDK, AutoGen, CrewAI, Google ADK, Dify, n8n và managed agents nằm ở đâu.</p>
  </a>
</div>

## Định hướng nhanh

| Nếu nỗi đau lớn nhất là... | Bắt đầu với |
|---|---|
| Cần đường chọn nhanh nhất | [Cheat sheet một trang](./tools/cheat-sheet) |
| Muốn stack recommendation theo context | [Decision wizard tương tác](./tools/decision-wizard) |
| Cần artifacts copy-paste được | [Templates và starter artifacts](./tools/templates) |
| Muốn xem cùng một feature qua từng workflow | [Scenario lab](./tools/scenario-lab) |
| Đang rối vì các agent tools lân cận | [Bản đồ ecosystem agent](./tools/ecosystem-map) |
| Cần bản đồ kiến trúc AI engineering đầy đủ | [Bản đồ stack](./stack/) |
| Cần chất lượng production cho AI app | [Evals và Observability](./stack/evals-observability) |
| Cần dùng tools an toàn và governance cho agent | [Tools/MCP](./stack/tools-mcp) và [Security/Governance](./stack/security-governance) |
| Requirement mơ hồ, agent hay đoán | [GitHub Spec Kit](./frameworks/spec-kit) |
| Muốn SDD nhẹ, linh hoạt, ít gate hơn | [OpenSpec](./frameworks/openspec) |
| Enterprise cần approval, traceability, NFR và audit | [AWS AI-DLC Workflows](./frameworks/aws-ai-dlc) |
| Dự án dài ngày, agent hay mất context | [GSD / Get Shit Done](./frameworks/gsd) |
| Agent code quá nhanh, thiếu test/design/review | [Superpowers](./frameworks/superpowers) |
| Muốn self-host hoặc customize agent runtime | [Hermes Agent](./harnesses/hermes) |

```mermaid
flowchart TB
    A[AI coding workflow landscape] --> B[Spec correctness]
    A --> AA[AI app orchestration]
    A --> C[Lifecycle governance]
    A --> D[Execution throughput]
    A --> E[Engineering discipline]
    A --> F[Agent runtime]

    B --> SK[GitHub Spec Kit]
    B --> OS[OpenSpec]
    C --> AD[AWS AI-DLC]
    D --> GSD[GSD]
    E --> SP[Superpowers]
    F --> HA[Hermes Agent]
    AA --> LC[LangChain]
    AA --> LG[LangGraph]
```

## Lộ trình đọc đề xuất

1. [AI-DLC](./foundations/ai-dlc)
2. [Spec-Driven Development](./foundations/sdd)
3. [Cheat sheet một trang](./tools/cheat-sheet)
4. [Decision wizard tương tác](./tools/decision-wizard)
5. [Templates và starter artifacts](./tools/templates)
6. [Scenario lab](./tools/scenario-lab)
7. [Bản đồ ecosystem agent](./tools/ecosystem-map)
8. [Bản đồ AI Engineering Stack](./stack/)
9. [Tầng model và serving](./stack/model-serving)
10. [Data, RAG và Retrieval](./stack/data-rag)
11. [Tools, MCP và Gateway](./stack/tools-mcp)
12. [Evals và Observability](./stack/evals-observability)
13. [Security và Governance](./stack/security-governance)
14. [Agent Harness vs Workflow](./foundations/agent-harness-vs-workflow)
15. [LangChain](./app-frameworks/langchain)
16. [LangGraph](./app-frameworks/langgraph)
17. [LangChain/LangGraph vs Hermes](./app-frameworks/langchain-langgraph-hermes)
18. [GitHub Spec Kit](./frameworks/spec-kit)
19. [OpenSpec](./frameworks/openspec)
20. [AWS AI-DLC Workflows](./frameworks/aws-ai-dlc)
21. [GSD / Get Shit Done](./frameworks/gsd)
22. [Superpowers](./frameworks/superpowers)
23. [Hermes Agent](./harnesses/hermes)
24. [Codex CLI vs Claude Code vs Hermes](./harnesses/codex-claude-hermes)
25. [Ma trận so sánh](./compare/)
26. [Cùng flow, khác mục đích](./compare/same-flow-different-purpose)
27. [Hướng dẫn chọn](./compare/decision-guide)
28. [Kết hợp framework](./compare/combinations)
29. [Use case thực tế](./compare/use-cases)
30. [Playbook triển khai](./compare/adoption)
31. [Expert review](./compare/expert-review)
