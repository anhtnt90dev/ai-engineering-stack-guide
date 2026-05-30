# Superpowers TDD Prompt Template

Use this prompt with an AI coding agent when you want strict engineering discipline.

```text
You are working in an existing codebase. Do not start implementation yet.

Goal:
<describe the user-visible change>

Constraints:
- Preserve existing behavior unless explicitly changed.
- Follow local code patterns.
- Keep edits scoped.
- Do not skip tests.

Workflow:
1. Read the relevant code and tests.
2. Explain the design in a short plan.
3. Write or update a failing test first.
4. Implement the smallest change that passes the test.
5. Run the focused tests.
6. Review the diff for regressions, dead code, and missing edge cases.
7. Report exactly what changed and what was verified.

Acceptance criteria:
- <criterion 1>
- <criterion 2>
- <criterion 3>

Definition of done:
- Tests pass.
- Edge cases are covered.
- No unrelated refactors.
- Documentation updated if behavior changed.
```
