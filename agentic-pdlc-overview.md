# Agentic PDLC Overview

## Sample Workflow: "Add export to CSV on reports page"

| Stage | Goal | Artifact |
| :--- | :--- | :--- |
| **Problem Decomposer** | Extract requirements. | `req-001.md` |
| **Planner** | Create implementation sequence. | `plan-001.md` |
| **Design Architect** | Define API/Component structure. | `design-001.md` |
| **Design Critic** | Challenge edge cases. | `critique-001.md` |
| **Builder** | Write the code. | `PR-diff` |
| **Tester** | Run unit/integration tests. | `test-results.md` |
| **Critic / Verifier** | Verify code quality. | `audit-001.md` |
| **Fixer** | Resolve identified bugs. | `fix-001.md` |
| **Functional Design** | Define e2e scenarios. | `functional-spec.md` |
| **Functional Validator**| Verify app behavior. | `validation-report.md` |
| **PR Generator** | Create the PR. | `GitHub PR` |

## Handoff Schema Example (Planner -> Design Architect)

```json5
{
  "stage": "Planner",
  "status": "approved",
  "owner": "agent-planner",
  "inputs": ["req-001.md"],
  "outputs": ["plan-001.md"],
  "risks": ["CSV generation library choice"],
  "next_stage": "DesignArchitect",
  "timestamp": "2026-05-11T06:05:00Z"
}
```
