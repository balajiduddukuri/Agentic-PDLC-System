# User Guide: Agentic PDLC

**Author:** Balaji Duddukuri

Welcome to the **Agentic PDLC** system. This guide will help new users and developers understand how to use the autonomous 11-stage pipeline.

## 1. Getting Started

The PDLC system is triggered via the agent interface using simple slash commands.

### Initialize a Task
Start by defining what you want to build.
```
/pdlc-start "Add a user profile page with editable fields"
```

### Choose Your Speed
- **Micro-Stage (Default)**: You trigger each stage manually (`/pdlc-plan`, `/pdlc-design`, etc.). Best for high control.
- **Monolith Mode**: The agent runs the entire pipeline alone (`/pdlc-monolith`). Best for speed.

---

## 2. The 11 Stages

1.  **WHAT** (Problem Decomposer): Extracts requirements.
2.  **PLAN** (Planner): Maps the execution.
3.  **HOW** (Design Architect): Blueprints the system.
4.  **CHALLENGE** (Design Critic): 🛑 **HUMAN GATE**. Audit the design.
5.  **MAKE** (Builder): Writes the code.
6.  **PROVE** (Tester): Verifies with tests.
7.  **WHY** (Critic/Verifier): Audits code quality (SOLID/Security).
8.  **RESOLVE** (Fixer): Fixes bugs if status is `needs-changes`.
9.  **DESIGN** (Functional Design): Maps user scenarios.
10. **VALIDATE** (Functional Validator): 🛑 **HUMAN GATE**. Final check.
11. **SHIP** (PR Generator): Creates the GitHub PR.

---

## 3. Using Hooks (Guardrails)

The system automatically runs "Hooks" to protect the repository.

- **Pre-Stage Hook**: Scans for Secrets and PII before any logic starts.
- **Post-Stage Hook**: Validates that artifacts match the schema and runs linting.

To run them manually:
```bash
./.github/hooks/pre-stage-guardrail.sh "Builder"
```

---

## 4. Best Practices

- **Clear Requests**: The "Problem Decomposer" is only as good as your prompt.
- **Don't Skip Gates**: The human gates at Stage 4 and 10 are your last line of defense.
- **Check .env.example**: If you add a new API key, the system expects it to be documented there.

---

## 5. Support
Technical Architecture overseen by **Balaji Duddukuri**.
