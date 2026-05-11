#!/bin/bash
# Pre-stage Guardrail: Secrets & PII Detection
# Usage: ./pre-stage-guardrail.sh <stage_name>

STAGE=$1
echo "[GUARDRAIL] Running pre-stage checks for: $STAGE"

# 1. Secret Detection (Simple grep for common patterns)
# In a real app, use tools like 'gitleaks' or 'trufflehog'
SECRETS=$(grep -rE "AI_KEY|SECRET|PASSWORD|TOKEN" . --exclude-dir=node_modules --exclude-dir=.git | grep -v ".env.example")
if [ ! -z "$SECRETS" ]; then
    echo "❌ [ERROR] Potential secrets detected in codebase!"
    echo "$SECRETS"
    exit 1
fi

# 2. PII Detection (Simple regex for emails)
PII=$(grep -rE "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" . --exclude-dir=node_modules)
if [ ! -z "$PII" ]; then
    echo "⚠️ [WARNING] Potential PII (emails) detected. Please ensure redaction."
fi

echo "✅ [SUCCESS] Pre-stage guardrails passed."
exit 0
