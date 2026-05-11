# ADR 0001: Use ADRs for Architecture Tracking

**Status:** Accepted  
**Date:** 2024-05-11  
**Author:** Balaji Duddukuri

## Context
As the Agentic PDLC system grows in complexity, tribal knowledge regarding architectural choices (e.g., state management, API patterns, token optimization) is becoming difficult to maintain. We need a way to capture the "Why" behind the "What".

## Decision
We will adopt the **MADR (Markdown Architectural Decision Records)** format. Every significant architectural change must be accompanied by a new ADR file in the `/docs/adr/` directory.

## Consequences
- **Positive**: Clear audit trail of decisions.
- **Positive**: Easier onboarding for new contributors.
- **Negative**: Slight increase in overhead for the Design Architect stage.
