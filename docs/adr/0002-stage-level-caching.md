# ADR 0002: Implement Stage-Level Caching Mechanism

**Status:** Accepted  
**Date:** 2024-05-11  
**Author:** Balaji Duddukuri

## Context
Running every stage of the 11-stage pipeline for every minor change is computationally expensive and increases token consumption. Many stages (e.g., Problem Decomposition, Design) do not need to re-run if their inputs and requirements haven't changed.

## Decision
We will implement a **Content-Addressable Cache (CAC)** for stage artifacts. 
- Hash inputs (previous artifact + instruction).
- Store output artifacts in a `.pdlc_cache` directory.
- Before executing a stage, the agent will check if a valid cache entry exists.
- If a cache hit occurs, the agent will "Pass-Through" the cached result instead of re-generating.

## Consequences
- **Positive**: Massive reduction in token usage for iterative cycles.
- **Positive**: Near-instant execution for cached stages.
- **Negative**: Risk of "Stale Context" if dependencies outside the direct chain are modified.
- **Mitigation**: Add a `--force` flag to bypass cache when needed.
