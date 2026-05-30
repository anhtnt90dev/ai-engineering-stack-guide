# Agent Tool Permission Matrix Template

## System

- Agent/app:
- Owner:
- Environment:
- Review date:

## Tool Inventory

| Tool | Purpose | Data access | Side effects | Default mode | Approval required? |
|---|---|---|---|---|---|
| read_file | Read repo files | source code | none | allowed | no |
| shell | Run commands | repo/env | possible | restricted | yes for destructive |
| deploy | Deploy app | production | high | denied | yes |

## Permission Levels

| Level | Meaning | Examples |
|---|---|---|
| Allowed | Agent may use without extra approval | read-only repo inspection |
| Restricted | Agent may use within constraints | tests, package install, local build |
| Approval | Human approval required | migrations, production config |
| Denied | Agent must not use | secrets exfiltration, destructive production actions |

## Policy Rules

- Destructive file operations require explicit human approval.
- Production changes require linked issue, eval/test evidence, and rollback plan.
- Tools that access secrets must never print secret values.
- Network calls must use approved domains or documented exceptions.

## Audit Events

| Event | Required fields | Retention |
|---|---|---|
| Tool call | agent, tool, args summary, timestamp, result | |
| Approval | approver, reason, scope, timestamp | |
| Denial | policy rule, attempted action, timestamp | |

## Review Checklist

- [ ] Tool list is current.
- [ ] High-risk tools have approval gates.
- [ ] Read-only and write tools are separated.
- [ ] Logs are available for incident review.
- [ ] Policy is tested with failure cases.
