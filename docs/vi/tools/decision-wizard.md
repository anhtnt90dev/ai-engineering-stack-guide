---
title: Decision wizard tương tác
---

# Decision Wizard Tương Tác

Dùng wizard này để biến một tình huống mơ hồ thành stack khuyến nghị. Nó cố tình đơn giản: mục tiêu không phải thay thế judgment của architect, mà là làm rõ layer nào đang sở hữu vấn đề chính.

<DecisionWizard lang="vi" />

## Cách đọc kết quả

Wizard trả về **primary workflow** và các **supporting layers**.

Primary workflow nên sở hữu delivery source of truth:

| Primary workflow | Sở hữu |
|---|---|
| GitHub Spec Kit | Spec, plan, tasks, implementation alignment |
| OpenSpec | Change proposal, delta specs, lightweight SDD |
| AWS AI-DLC Workflows | Risk, approvals, governance, audit |
| GSD | Long-running context và multi-session execution |
| Superpowers | Engineering discipline, TDD, review, finishing |

Supporting layers không nên tạo plan cạnh tranh. Ví dụ LangGraph có thể sở hữu runtime state, Hermes sở hữu agent execution, MCP sở hữu tool exposure, nhưng delivery workflow vẫn cần một source of truth chính.

## Quy tắc override thủ công

Dùng các rule này khi kết quả wizard quá nhẹ hoặc quá nặng:

| Tín hiệu | Override |
|---|---|
| Regulated data, automation ảnh hưởng khách hàng, finance, healthcare, legal, security operations | Nâng lên AI-DLC governance |
| Requirement mơ hồ hoặc stakeholder chưa thống nhất | Nghiêng về Spec Kit trước khi implement |
| Change nhỏ, scope rõ, acceptance criteria rõ | Nghiêng về OpenSpec |
| Agent làm nhiều ngày và mất context | Thêm GSD |
| Agent code thiếu test hoặc review discipline | Thêm Superpowers |
| Runtime cần state, retry, checkpoint, human-in-the-loop | Thêm LangGraph |
| Team muốn tự sở hữu coding/research agent harness | Thêm Hermes |

## Decision trace template

Copy vào issue, PR hoặc planning doc:

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
