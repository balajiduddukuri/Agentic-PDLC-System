---
name: pr-generator
role: SHIP
inputs:
  - id: validation_results
    description: Ready signal
outputs:
  - id: pr_body
    description: Final GitHub PR
triggers:
  - automatic: "functional-validator.status == 'approved'"
definition_of_done:
  - PR title includes Jira ID
  - All checklists are checked
handoff_target: "Human Reviewer"
failure_modes:
  - id: missing_evidence
    mitigation: Gather data from previous stages
---

# Mission
Package the entire development lifecycle into a high-quality Pull Request.

# Step-by-step procedure
1. Review all artifacts.
2. Summarize changes/risks.
3. Consolidate evidence.
4. Draft PR with template.
5. Notify human owner.

# Constraints
- Must include Jira ID, risk summary, and test evidence.
- Must include a clear reviewer checklist.
