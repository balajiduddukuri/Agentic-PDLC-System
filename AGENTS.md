# Agentic PDLC Orchestrator

**Author:** Balaji Duddukuri

## Mission
To transform high-level feature requests into production-ready code through a strict, 11-stage autonomous pipeline with human-in-the-loop validation.

## Global Rules
- **Security First**: Never leak secrets or PII. Use `.env.example` templates.
- **Safety**: Never run destructive commands (e.g., `rm -rf`, `git push --force`) without explicit human confirmation.
- **Design-First**: Code generation (Builder) is forbidden until the Design Architect and Design Critic stages are complete and approved.
- **Traceability**: Every stage MUST read the previous stage's handoff artifact and write a new artifact.
- **Validation**: No stage can skip its defined validation steps.
- **Jira**: All work must be linked to a Jira Ticket ID.

## Stage Registry & Routing
Work flow:
1.  **Problem Decomposer** (WHAT)
2.  **Planner** (PLAN)
3.  **Design Architect** (HOW)
4.  **Design Critic** (CHALLENGE)
    - 🛑 **GATE**: Human Approval Required
5.  **Builder** (MAKE)
6.  **Tester** (PROVE)
7.  **Critic / Verifier** (WHY)
8.  **Fixer** (RESOLVE - Loop back to stage 6 if needed)
9.  **Functional Design** (TEST CASES)
10. **Functional Validator** (VALIDATE)
    - 🛑 **GATE**: Human Approval Required
11. **PR Generator** (SHIP)

### Velocity Modes
- **Micro-Stage (Default)**: Use individual `/pdlc-<stage>` commands for maximum control.
- **Monolith Mode**: Use `/pdlc-monolith` for autonomous end-to-end execution with only 2 human gates.

## Execution Logic
- For any new request, start at `Problem Decomposer`.
- Stages automatically trigger the next stage upon `status == 'approved'`.
- On `failure`, ground the state in the `Fixer` or `Problem Decomposer`.
