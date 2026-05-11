# Command: /pdlc-monolith

**When to use**: For experienced users who want to kickoff the entire pipeline in one go. The agent will run autonomously until the first human gate.

**Inputs**:
- User request: [Detailed description]
- Jira ID: [Optional/Required]

**Stages involved**:
- ALL (1 through 11)

**Process**:
1. Agent clears stages 1-3.
2. Agent stops at **Design Critic** for your approval.
3. Once approved, Agent clears stages 5-9.
4. Agent stops at **Functional Validator** for final sign-off.
5. Agent ships the PR.

**Example**:
`/pdlc-monolith "Implement a CSV export for all user tables with date filtering"`
