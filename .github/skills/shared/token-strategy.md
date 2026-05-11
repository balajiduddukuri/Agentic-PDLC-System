# Token Optimization Strategy

To minimize token usage and latency while maintaining high precision:

## 1. Context Minimization
- **Stage-Only Context**: Each agent stage MUST only read its direct predecessor's artifact, not the entire history, unless explicitly needed (e.g., Builder needs Design AND Requirements).
- **Summary Over Full-Text**: Prefer reading 50-word summaries of previous stages over 500-word detailed specs.
- **Diffs Only**: Builder and Fixer should operate on 'diffs' rather than full file rewrites where possible.

## 2. Instruction Compaction
- **No Fluff**: Eliminate polite filler and repetitive framing in prompts.
- **Reference by Path**: Instead of pasting file contents into prompts, use direct paths.
- **Schema Enforcement**: Use JSON/JSON5 for handoffs to ensure high information density.

## 3. Tool Utilization
- **Greedy Reading**: Use `view_file` on specific line ranges rather than entire large files to save input tokens.
- **Parallel Ops**: Standardize parallel tool calling to reduce round-trips.

## 4. Content-Addressable Cache (CAC)
- **Artifact Re-use**: For every stage, compute a hash of inputs (previous stage artifact + instructions). If the hash matches a cached entry in `.pdlc_cache`, re-use the output artifact without recalling the model.
- **Selective Invalidation**: Only invalidate cache for a stage if its direct parent artifact is changed.

## 5. Cache-Friendly Structure
- Keep `AGENTS.md` and global rules stable to benefit from system-level prompt caching.
