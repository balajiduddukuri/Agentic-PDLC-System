# Test Strategy

- **Unit**: All pure functions must have unit tests.
- **Integration**: Database operations and API handlers must be tested with mocks.
- **E2E**: Critical user journeys must be validated via the Functional Validator.
- **Standard**: Always use `vitest` or `jest` (standard for React apps).
- **Evidence**: Artifacts must include screenshot hashes or console logs of passing tests.
