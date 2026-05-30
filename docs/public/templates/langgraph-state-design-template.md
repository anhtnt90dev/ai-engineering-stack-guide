# LangGraph State Design Template

## Agent Service

- Name:
- Owner:
- Runtime:
- Workflow owner:

## State Schema

| Field | Type | Owner node | Required? | Notes |
|---|---|---|---|---|
| user_request | string | intake | yes | |
| retrieved_context | list | retrieval | no | |
| tool_results | list | tool nodes | no | |
| final_answer | string | response | no | |

## Nodes

| Node | Responsibility | Inputs | Outputs | Failure behavior |
|---|---|---|---|---|
| intake | | | | |
| retrieve | | | | |
| decide_tool | | | | |
| call_tool | | | | |
| respond | | | | |

## Edges

| From | Condition | To |
|---|---|---|
| intake | valid request | retrieve |
| retrieve | needs tool | decide_tool |
| decide_tool | approved | call_tool |
| call_tool | success | respond |

## Human-in-the-Loop

| Condition | Required approver | Timeout | Fallback |
|---|---|---|---|
| | | | |

## Checkpointing and Recovery

- Checkpoint store:
- Retry policy:
- Idempotency strategy:
- Resume behavior:

## Evals

| Eval | Cases | Threshold |
|---|---|---|
| Task success | | |
| Tool correctness | | |
| Grounding | | |
| Safety | | |
