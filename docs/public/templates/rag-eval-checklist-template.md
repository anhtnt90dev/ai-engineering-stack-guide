# RAG Eval Checklist Template

## Product Context

- App:
- User group:
- Data sources:
- Model:
- Retriever:

## Golden Dataset

| ID | User question | Expected answer | Required source | Reject if |
|---|---|---|---|---|
| Q-001 | | | | |

## Retrieval Evals

- [ ] Relevant documents appear in top K.
- [ ] Irrelevant documents are filtered.
- [ ] Freshness requirement is met.
- [ ] Source permissions are respected.
- [ ] Chunking preserves context.

## Generation Evals

- [ ] Answer is grounded in retrieved context.
- [ ] Answer cites required sources.
- [ ] Answer refuses when context is insufficient.
- [ ] Answer does not expose hidden/system data.
- [ ] Answer format matches product contract.

## Regression Thresholds

| Metric | Threshold | Blocking? |
|---|---|---|
| Retrieval recall@K | | |
| Grounded answer rate | | |
| Hallucination rate | | |
| Refusal correctness | | |
| Latency p95 | | |
| Cost per request | | |

## Release Gate

- [ ] Golden dataset updated
- [ ] Automated eval run attached
- [ ] Manual spot check completed
- [ ] Known failures documented
- [ ] Rollback plan ready
