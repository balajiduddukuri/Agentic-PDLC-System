# Handoff Schema

All stages MUST produce a JSON5 object in their output artifacts following this structure:

```json5
{
  "stage": "StageName", // e.g., "Planner"
  "status": "approved | needs-changes | blocked",
  "owner": "agent-id",
  "jira_id": "PROJ-123",
  "inputs": [
    { "id": "artifact-id", "path": "path/to/file.md" }
  ],
  "outputs": [
     { "id": "artifact-id", "path": "path/to/output.md" }
  ],
  "risks": ["Risk description"],
  "next_stage": "NextStageName",
  "timestamp": "ISO-8601"
}
```
