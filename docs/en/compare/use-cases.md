---
title: Real-World Use Cases
---

# Real-World Use Cases

This page shows practical step-by-step patterns for applying the frameworks in realistic delivery situations.

## Use case 1: SaaS feature with clear product impact

Example: add a team invitation flow with role selection.

Recommended combination: **Spec Kit + Superpowers**.

### Why

- The feature needs clear product behavior.
- Roles and permissions create edge cases.
- Implementation should be test-driven.
- Full enterprise lifecycle may be too heavy.

### Step-by-step

1. Create or update Spec Kit constitution.
2. Write feature spec:
   - actors: owner, admin, invited user.
   - acceptance criteria.
   - non-goals.
   - permission rules.
3. Run clarification:
   - Can admins invite owners?
   - Invitation expiration?
   - Re-invite behavior?
   - Email delivery failure?
4. Generate implementation plan:
   - database changes.
   - API endpoints.
   - email integration.
   - UI states.
5. Generate tasks.
6. Start Superpowers TDD for backend invitation creation.
7. Add tests for permission denial, duplicate invite, expired invite.
8. Implement UI flow.
9. Request code review.
10. Update spec if behavior changed during implementation.

### Done when

- Spec has role matrix.
- Tests cover permission edges.
- Invite email path is verified.
- UI has loading/error/success states.
- Review findings are resolved.

## Use case 2: Enterprise brownfield modernization

Example: migrate a legacy order-processing module to a new service boundary.

Recommended combination: **AWS AI-DLC + Superpowers**.

### Why

- Brownfield understanding is required.
- Architecture, data, and operations risk are high.
- Audit and approval matter.
- TDD helps protect behavior during migration.

### Step-by-step

1. Install AI-DLC rules. Reference: [awslabs/aidlc-workflows](https://github.com/awslabs/aidlc-workflows).
2. Define approvers:
   - product owner.
   - architect.
   - security owner.
   - operations owner.
3. Start:

```text
Using AI-DLC, reverse engineer the order-processing module and propose modernization units of work.
Do not change code until inception artifacts are approved.
```

4. Generate reverse-engineering docs:
   - data flow.
   - integrations.
   - failure modes.
   - deployment constraints.
5. Approve requirements and application design.
6. Split into units of work:
   - read-only adapter.
   - event publishing.
   - migration path.
   - compatibility tests.
7. For each unit, use Superpowers TDD.
8. Add characterization tests before changing behavior.
9. Run construction verification.
10. Update AI-DLC audit with decisions and evidence.
11. Complete operations checklist before rollout.

### Done when

- Reverse-engineering docs are approved.
- Behavior compatibility tests pass.
- Rollback path exists.
- Observability is in place.
- Audit explains key trade-offs.

## Use case 3: Startup MVP over two weeks

Example: build a lightweight customer support portal.

Recommended combination: **GSD + selective Spec Kit + Superpowers**.

### Why

- Work spans many sessions.
- Founder needs momentum and memory.
- Not every feature needs full spec.
- Important flows still need clarity and tests.

### Step-by-step

1. Install GSD. Reference: [open-gsd/get-shit-done-redux](https://github.com/open-gsd/get-shit-done-redux).
2. Create `.planning/PROJECT.md`, `ROADMAP.md`, and `STATE.md`.
3. Split MVP into phases:
   - authentication.
   - ticket list.
   - ticket detail and reply.
   - admin assignment.
   - deployment polish.
4. For simple phases, use GSD discuss/plan/execute/verify/ship.
5. For complex flows, use Spec Kit to write a focused spec first.
6. Use Superpowers TDD for behavior-heavy backend tasks.
7. Keep phases reviewable: one user outcome per phase.
8. Ship after every verified phase.

### Done when

- `.planning/STATE.md` shows current progress.
- Each shipped phase has test evidence.
- Next phase is clear.
- No phase contains unrelated refactor.

## Use case 4: Security-sensitive authentication change

Example: add password reset, MFA enrollment, or session revocation.

Recommended combination: **AWS AI-DLC + Spec Kit concepts + Superpowers**.

### Why

- Security risk is high.
- Requirements must be explicit.
- TDD is useful for abuse cases.
- Audit trail matters.

### Step-by-step

1. Start with AI-DLC, not GSD automation.
2. Define security approver.
3. Write security-focused requirements:
   - no user enumeration.
   - token expiration.
   - replay prevention.
   - rate limit.
   - audit event.
4. Use Spec Kit-style acceptance criteria in the AI-DLC requirement artifact.
5. Approve threat model.
6. Implement with Superpowers TDD:
   - expired token test.
   - reused token test.
   - invalid user test.
   - rate limit test.
7. Run code review focused on auth boundaries.
8. Record decisions in audit.
9. Add monitoring for abuse or failure spikes.

### Done when

- Security tests pass.
- Threat model is reviewed.
- Logs/audit events exist.
- No sensitive information leaks in UI or email.
- Rollback path is clear.

## Use case 5: Large refactor without behavior change

Example: split a shared UI module or extract a service layer.

Recommended combination: **Superpowers + Spec Kit for behavior contract**.

### Step-by-step

1. Document the expected behavior as a lightweight spec.
2. Add characterization tests.
3. Create a worktree.
4. Plan small refactor steps.
5. Run baseline tests.
6. Implement one refactor slice.
7. Run tests.
8. Request review.
9. Repeat until complete.
10. Update docs only if public behavior or architecture changed.

### Done when

- Behavior tests pass before and after.
- Diff is reviewable.
- No new dependencies are introduced without reason.
- Public APIs remain compatible or migration guide exists.

## Use case 6: Brownfield iterative feature in an existing app

Example: add export filters to an existing customer list.

Recommended combination: **OpenSpec + Superpowers**.

### Why

- The app already exists.
- You want a lightweight proposed-change folder.
- The change may evolve as you inspect existing code.
- You still want tests and review.

### Step-by-step

1. Install OpenSpec:

```bash
npm install -g @fission-ai/openspec@latest
openspec init
```

2. Explore the current behavior:

```text
/opsx:explore customer list export filters
```

3. Create the change:

```text
/opsx:propose add-customer-export-filters
```

4. Review generated artifacts in `openspec/changes/add-customer-export-filters/`.
5. Adjust `design.md` after inspecting existing list/filter code.
6. Use Superpowers TDD for filter logic and export behavior.
7. Apply implementation with `/opsx:apply`.
8. Verify behavior manually or with expanded `/opsx:verify`.
9. Sync and archive:

```text
/opsx:sync
/opsx:archive
```

### Done when

- Proposed change was reviewed before implementation.
- Tests cover old behavior and new filter behavior.
- Current specs in `openspec/specs/` reflect the shipped behavior.
- Change folder is archived.

## Use case 7: Internal AI coding platform

Example: a platform team wants a self-hosted or customizable coding agent for internal repositories.

Recommended stack: **Hermes + OpenSpec + Superpowers-like discipline**.

### Why

- Hermes provides runtime, memory, tools, skills, and subagent capabilities.
- OpenSpec provides lightweight change artifacts.
- Superpowers-like skills provide TDD and review discipline.

### Step-by-step

1. Choose model strategy:
   - hosted API;
   - self-hosted model;
   - model router.
2. Install and run Hermes in a controlled environment.
3. Add minimum tools:
   - file read/write;
   - git;
   - shell;
   - test runner.
4. Add internal tools only after the first pilot:
   - issue tracker;
   - docs search;
   - CI API;
   - deployment metadata.
5. Initialize OpenSpec in one pilot repo.
6. Define safety boundaries:
   - commands requiring approval;
   - files/directories that are read-only;
   - secrets policy;
   - max runtime/task duration.
7. Run one OpenSpec change with Hermes as executor.
8. Require TDD/review behavior for code changes.
9. Record tool calls and test evidence.
10. Compare against Codex CLI or Claude Code on the same task.

### Done when

- Hermes provides a clear advantage over existing CLIs.
- Tool permissions are documented.
- Memory retention policy exists.
- Test evidence is captured.
- Humans can stop execution.

## Use case 8: Enterprise AI delivery with custom runtime

Recommended stack: **Hermes + AI-DLC + Superpowers**.

### Step-by-step

1. Hermes acts as the execution harness.
2. AI-DLC owns lifecycle state, questions, approvals, and audit.
3. Superpowers provides TDD/review discipline during construction units.
4. Platform team owns tool permissions and model routing.
5. Security team reviews secrets, memory retention, and tool audit.
6. Operations team defines release readiness.
7. Pilot one medium-risk internal service before expanding.

### Done when

- AI-DLC audit records material decisions.
- Hermes tool calls are logged.
- Superpowers-style tests/review are enforced.
- Operations checklist is complete.
- Runtime has safety controls and kill switch.

## Use case 9: RAG chatbot product feature

Example: build an internal knowledge assistant over product docs.

Recommended stack: **LangChain + OpenSpec + Superpowers**.

### Step-by-step

1. Create an OpenSpec change:

```text
/opsx:propose add-internal-knowledge-chatbot
```

2. Define acceptance criteria:
   - answers cite sources;
   - refuses unknown answers;
   - supports top product-doc collections;
   - logs retrieval failures.
3. Implement LangChain retriever and prompt.
4. Add model/tool configuration.
5. Add eval cases for:
   - known answer;
   - unknown answer;
   - stale document;
   - source citation.
6. Use Superpowers-style review for prompt, retrieval, and error handling.
7. Run tests/evals in CI.
8. Sync/archive OpenSpec change.

### Done when

- Retrieval quality is evaluated.
- Prompt behavior is tested.
- Sources are shown.
- Unknowns are handled safely.
- Cost and latency are measured.

## Use case 10: Long-running support agent

Example: build an agent that triages support tickets, drafts responses, and escalates risky cases to humans.

Recommended stack: **LangGraph + AI-DLC + Superpowers**.

### Step-by-step

1. Run AI-DLC inception for business risk, privacy, and NFRs.
2. Design LangGraph state:
   - ticket;
   - customer context;
   - classification;
   - draft response;
   - escalation reason;
   - human approval state.
3. Create nodes:
   - classify;
   - retrieve context;
   - draft;
   - policy check;
   - human approval;
   - send or escalate.
4. Add checkpoints.
5. Add human-in-the-loop gates for sensitive replies.
6. Add tests/evals per node.
7. Add monitoring and audit logs.
8. Use Superpowers for implementation review and test discipline.
9. Complete AI-DLC operations readiness.

### Done when

- State graph is documented.
- Human approval gates are enforced.
- Evals cover high-risk scenarios.
- Operations and rollback are clear.
- AI-DLC audit records material decisions.
