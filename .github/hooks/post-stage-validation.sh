#!/bin/bash
# Post-stage Validation: Artifact & Linting
# Usage: ./post-stage-validation.sh <stage_name> <artifact_path>

STAGE=$1
ARTIFACT=$2

echo "[VALIDATION] Running post-stage checks for: $STAGE"

# 1. Artifact Existence
if [ ! -f "$ARTIFACT" ]; then
    echo "❌ [ERROR] Expected artifact not found at $ARTIFACT"
    exit 1
fi

# 2. Handoff Schema Integrity
if ! grep -q "\"stage\":" "$ARTIFACT"; then
    echo "❌ [ERROR] Artifact missing standard Handoff Schema."
    exit 1
fi

# 3. Target Specific Checks
if [ "$STAGE" == "Builder" ]; then
    echo "[LINT] Running npm run lint..."
    npm run lint
fi

echo "✅ [SUCCESS] Post-stage validation passed."
exit 0
