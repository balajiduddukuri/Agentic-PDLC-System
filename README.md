# Agentic PDLC Repository

**Author:** Balaji Duddukuri

This repository implements a 11-stage Agentic Product Development Life Cycle (PDLC).

## Quick Start
1.  Read the [User Guide (Usage)](./USAGE.md)
2.  Initialize a request: `/pdlc-start "Add export to CSV to reports"`
3.  Follow the agent prompts for approvals at GATES.
4.  Monitor progress: `/pdlc-status`

## Key Built-ins
- **Hooks**: Automated guardrails located in [./.github/hooks/](./.github/hooks/)
- **React Hooks**: UI logic for PDLC in [src/hooks/usePDLC.ts](src/hooks/usePDLC.ts)

## Documentation
- [Agentic PDLC Overview](./agentic-pdlc-overview.md)
- [How to Use](./USAGE.md)
- [Prompts Library](./prompts/)
- [Skills Logic](./.github/skills/)
