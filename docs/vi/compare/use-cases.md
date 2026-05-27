---
title: Use case thực tế
---

# Use case thực tế

Trang này đưa ra các pattern step-by-step để áp dụng framework trong tình huống delivery thực tế.

## Use case 1: SaaS feature có tác động product rõ

Ví dụ: thêm team invitation flow với role selection.

Combo khuyến nghị: **Spec Kit + Superpowers**.

### Vì sao

- Feature cần behavior rõ.
- Roles và permissions tạo nhiều edge cases.
- Implementation nên test-driven.
- Full enterprise lifecycle có thể quá nặng.

### Step-by-step

1. Tạo hoặc update Spec Kit constitution.
2. Viết feature spec:
   - actors: owner, admin, invited user.
   - acceptance criteria.
   - non-goals.
   - permission rules.
3. Chạy clarification:
   - Admin có invite owner được không?
   - Invitation expire sau bao lâu?
   - Re-invite behavior?
   - Email delivery failure xử lý thế nào?
4. Generate implementation plan:
   - database changes.
   - API endpoints.
   - email integration.
   - UI states.
5. Generate tasks.
6. Dùng Superpowers TDD cho backend invitation creation.
7. Thêm tests cho permission denial, duplicate invite, expired invite.
8. Implement UI flow.
9. Request code review.
10. Update spec nếu behavior đổi trong lúc implement.

### Done khi

- Spec có role matrix.
- Tests cover permission edges.
- Invite email path verified.
- UI có loading/error/success states.
- Review findings resolved.

## Use case 2: Enterprise brownfield modernization

Ví dụ: migrate legacy order-processing module sang service boundary mới.

Combo khuyến nghị: **AWS AI-DLC + Superpowers**.

### Vì sao

- Cần hiểu brownfield.
- Architecture, data và operations risk cao.
- Audit và approval quan trọng.
- TDD bảo vệ behavior trong migration.

### Step-by-step

1. Cài AI-DLC rules. Tham khảo: [awslabs/aidlc-workflows](https://github.com/awslabs/aidlc-workflows).
2. Định nghĩa approvers:
   - product owner.
   - architect.
   - security owner.
   - operations owner.
3. Bắt đầu:

```text
Using AI-DLC, reverse engineer the order-processing module and propose modernization units of work.
Do not change code until inception artifacts are approved.
```

4. Generate reverse-engineering docs:
   - data flow.
   - integrations.
   - failure modes.
   - deployment constraints.
5. Approve requirements và application design.
6. Chia units of work:
   - read-only adapter.
   - event publishing.
   - migration path.
   - compatibility tests.
7. Với mỗi unit, dùng Superpowers TDD.
8. Thêm characterization tests trước khi đổi behavior.
9. Chạy construction verification.
10. Update AI-DLC audit với decisions và evidence.
11. Hoàn tất operations checklist trước rollout.

### Done khi

- Reverse-engineering docs approved.
- Behavior compatibility tests pass.
- Rollback path tồn tại.
- Observability có sẵn.
- Audit giải thích key trade-offs.

## Use case 3: Startup MVP trong hai tuần

Ví dụ: build lightweight customer support portal.

Combo khuyến nghị: **GSD + selective Spec Kit + Superpowers**.

### Vì sao

- Work kéo dài nhiều session.
- Founder cần momentum và memory.
- Không phải feature nào cũng cần full spec.
- Flow quan trọng vẫn cần clarity và tests.

### Step-by-step

1. Cài GSD. Tham khảo: [open-gsd/get-shit-done-redux](https://github.com/open-gsd/get-shit-done-redux).
2. Tạo `.planning/PROJECT.md`, `ROADMAP.md`, `STATE.md`.
3. Chia MVP thành phases:
   - authentication.
   - ticket list.
   - ticket detail and reply.
   - admin assignment.
   - deployment polish.
4. Với phase đơn giản, dùng GSD discuss/plan/execute/verify/ship.
5. Với flow phức tạp, dùng Spec Kit để viết spec hẹp trước.
6. Dùng Superpowers TDD cho behavior-heavy backend tasks.
7. Giữ phase reviewable: một user outcome mỗi phase.
8. Ship sau mỗi verified phase.

### Done khi

- `.planning/STATE.md` thể hiện tiến độ hiện tại.
- Mỗi shipped phase có test evidence.
- Next phase rõ.
- Không phase nào chứa unrelated refactor.

## Use case 4: Thay đổi authentication nhạy cảm security

Ví dụ: password reset, MFA enrollment hoặc session revocation.

Combo khuyến nghị: **AWS AI-DLC + Spec Kit concepts + Superpowers**.

### Vì sao

- Security risk cao.
- Requirement phải explicit.
- TDD hữu ích cho abuse cases.
- Audit trail quan trọng.

### Step-by-step

1. Bắt đầu với AI-DLC, không dùng GSD automation trước.
2. Định nghĩa security approver.
3. Viết security-focused requirements:
   - no user enumeration.
   - token expiration.
   - replay prevention.
   - rate limit.
   - audit event.
4. Dùng acceptance criteria kiểu Spec Kit trong AI-DLC requirement artifact.
5. Approve threat model.
6. Implement với Superpowers TDD:
   - expired token test.
   - reused token test.
   - invalid user test.
   - rate limit test.
7. Chạy code review tập trung vào auth boundaries.
8. Ghi decisions vào audit.
9. Thêm monitoring cho abuse hoặc failure spikes.

### Done khi

- Security tests pass.
- Threat model reviewed.
- Logs/audit events tồn tại.
- UI/email không leak sensitive info.
- Rollback path rõ.

## Use case 5: Refactor lớn không đổi behavior

Ví dụ: split shared UI module hoặc extract service layer.

Combo khuyến nghị: **Superpowers + Spec Kit cho behavior contract**.

### Step-by-step

1. Document expected behavior bằng lightweight spec.
2. Thêm characterization tests.
3. Tạo worktree.
4. Plan các refactor steps nhỏ.
5. Chạy baseline tests.
6. Implement một refactor slice.
7. Chạy tests.
8. Request review.
9. Lặp đến khi hoàn tất.
10. Update docs chỉ nếu public behavior hoặc architecture đổi.

### Done khi

- Behavior tests pass trước và sau.
- Diff reviewable.
- Không thêm dependency mới nếu không có lý do.
- Public APIs vẫn compatible hoặc có migration guide.

## Use case 6: Brownfield feature iterative trong app hiện có

Ví dụ: thêm export filters vào customer list hiện có.

Combo khuyến nghị: **OpenSpec + Superpowers**.

### Vì sao

- App đã tồn tại.
- Bạn muốn proposed-change folder nhẹ.
- Change có thể evolve khi inspect code hiện có.
- Vẫn cần tests và review.

### Step-by-step

1. Cài OpenSpec:

```bash
npm install -g @fission-ai/openspec@latest
openspec init
```

2. Explore behavior hiện tại:

```text
/opsx:explore customer list export filters
```

3. Tạo change:

```text
/opsx:propose add-customer-export-filters
```

4. Review artifacts trong `openspec/changes/add-customer-export-filters/`.
5. Chỉnh `design.md` sau khi inspect code list/filter hiện có.
6. Dùng Superpowers TDD cho filter logic và export behavior.
7. Apply implementation bằng `/opsx:apply`.
8. Verify behavior thủ công hoặc bằng expanded `/opsx:verify`.
9. Sync và archive:

```text
/opsx:sync
/opsx:archive
```

### Done khi

- Proposed change được review trước implementation.
- Tests cover old behavior và new filter behavior.
- Current specs trong `openspec/specs/` phản ánh shipped behavior.
- Change folder được archive.

## Use case 7: Internal AI coding platform

Ví dụ: platform team muốn self-host hoặc customize coding agent cho internal repositories.

Stack khuyến nghị: **Hermes + OpenSpec + Superpowers-like discipline**.

### Vì sao

- Hermes cung cấp runtime, memory, tools, skills và subagent capabilities.
- OpenSpec cung cấp lightweight change artifacts.
- Superpowers-like skills cung cấp TDD và review discipline.

### Step-by-step

1. Chọn model strategy:
   - hosted API;
   - self-hosted model;
   - model router.
2. Cài và chạy Hermes trong môi trường kiểm soát.
3. Thêm minimum tools:
   - file read/write;
   - git;
   - shell;
   - test runner.
4. Chỉ thêm internal tools sau pilot đầu:
   - issue tracker;
   - docs search;
   - CI API;
   - deployment metadata.
5. Initialize OpenSpec trong một pilot repo.
6. Định nghĩa safety boundaries:
   - commands cần approval;
   - files/directories read-only;
   - secrets policy;
   - max runtime/task duration.
7. Chạy một OpenSpec change với Hermes làm executor.
8. Bắt buộc TDD/review behavior cho code changes.
9. Ghi lại tool calls và test evidence.
10. So sánh với Codex CLI hoặc Claude Code trên cùng task.

### Done khi

- Hermes có lợi thế rõ so với CLI hiện có.
- Tool permissions được document.
- Memory retention policy tồn tại.
- Test evidence được capture.
- Human có thể stop execution.

## Use case 8: Enterprise AI delivery với custom runtime

Stack khuyến nghị: **Hermes + AI-DLC + Superpowers**.

### Step-by-step

1. Hermes làm execution harness.
2. AI-DLC sở hữu lifecycle state, questions, approvals và audit.
3. Superpowers cung cấp TDD/review discipline trong construction units.
4. Platform team sở hữu tool permissions và model routing.
5. Security team review secrets, memory retention và tool audit.
6. Operations team định nghĩa release readiness.
7. Pilot một internal service medium-risk trước khi mở rộng.

### Done khi

- AI-DLC audit ghi material decisions.
- Hermes tool calls được log.
- Superpowers-style tests/review được enforce.
- Operations checklist complete.
- Runtime có safety controls và kill switch.

## Use case 9: RAG chatbot product feature

Ví dụ: build internal knowledge assistant trên product docs.

Stack khuyến nghị: **LangChain + OpenSpec + Superpowers**.

### Step-by-step

1. Tạo OpenSpec change:

```text
/opsx:propose add-internal-knowledge-chatbot
```

2. Định nghĩa acceptance criteria:
   - answers cite sources;
   - refuses unknown answers;
   - supports top product-doc collections;
   - logs retrieval failures.
3. Implement LangChain retriever và prompt.
4. Thêm model/tool configuration.
5. Thêm eval cases cho:
   - known answer;
   - unknown answer;
   - stale document;
   - source citation.
6. Dùng Superpowers-style review cho prompt, retrieval, error handling.
7. Chạy tests/evals trong CI.
8. Sync/archive OpenSpec change.

### Done khi

- Retrieval quality được evaluate.
- Prompt behavior được test.
- Sources hiển thị.
- Unknowns được xử lý an toàn.
- Cost và latency được đo.

## Use case 10: Long-running support agent

Ví dụ: build agent triage support tickets, draft responses và escalate risky cases cho human.

Stack khuyến nghị: **LangGraph + AI-DLC + Superpowers**.

### Step-by-step

1. Chạy AI-DLC inception cho business risk, privacy và NFR.
2. Thiết kế LangGraph state:
   - ticket;
   - customer context;
   - classification;
   - draft response;
   - escalation reason;
   - human approval state.
3. Tạo nodes:
   - classify;
   - retrieve context;
   - draft;
   - policy check;
   - human approval;
   - send or escalate.
4. Thêm checkpoints.
5. Thêm human-in-the-loop gates cho sensitive replies.
6. Thêm tests/evals theo node.
7. Thêm monitoring và audit logs.
8. Dùng Superpowers cho implementation review và test discipline.
9. Hoàn tất AI-DLC operations readiness.

### Done khi

- State graph được document.
- Human approval gates được enforce.
- Evals cover high-risk scenarios.
- Operations và rollback rõ.
- AI-DLC audit ghi material decisions.
