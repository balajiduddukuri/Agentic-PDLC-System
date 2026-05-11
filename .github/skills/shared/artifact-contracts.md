# Artifact Contracts

Every artifact produced by a stage must follow these structural rules:

1.  **Header**: Must contain title and stage name.
2.  **Context**: Link to the Jira ID and previous stage artifact.
3.  **Body**: Checklist of requirements met in this stage.
4.  **Summary of Changes**: For Builder/Fixer stages, a high-level list of modified files.
5.  **Risks & Debt**: Any lingering risks or technical debt introduced.
6.  **Handoff**: The JSON5 handoff object at the very end of the file.
