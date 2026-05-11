# Security Rules

- **Client-Side Secrets**: NEVER commit API keys to client-side code. Use `/api` proxy routes.
- **Environment Variables**: All new vars must be declared in `.env.example`.
- **Dependency Audit**: Scan new npm packages using `npm audit` before Stage 5 (Builder).
- **Authentication**: All user-facing routes must have an Auth check if standard auth is enabled.
