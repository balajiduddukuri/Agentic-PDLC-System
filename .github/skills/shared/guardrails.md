# PDLC Guardrails

## Automation Hooks
The guardrails are strictly enforced via shell scripts:
- `/.github/hooks/pre-stage-guardrail.sh`: Runs before a stage (Secrets/PII).
- `/.github/hooks/post-stage-validation.sh`: Runs after a stage (Schema/Lint).

## Runtime Checks
These checks must run before: Builder, Tester, Fixer, PR Generator.

- **Secrets Detection**: 
  - Scan for regex patterns matching API keys, tokens, or private keys.
  - Fail if any plain-text secrets are found in code or artifacts.
- **PII Protection**:
  - Scan for emails, phones, or names in debug logs/test artifacts.
  - Mask or redact before persistence.
- **Destructive Ops**:
  - Intercept any `DELETE`, `DROP`, `rm`, or `truncate` calls.
  - Require specific user confirmation string: `I CONFIRM DESTRUCTION`.
- **Jira Validation**:
  - Ensure `JIRA-ID` exists in the local context.
  - Reject progress if current branch or artifact lacks the ID.
- **Token Check**:
  - Ensure handoffs do not exceed 500 words. Refactor if they do.

## On Violation
1. Stop all execution.
2. Summarize the risk found.
3. Prompt human: "Security Violation Found: [Details]. Proceed anyway? (y/n)"
