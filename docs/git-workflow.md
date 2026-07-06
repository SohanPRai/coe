# Git Workflow - CoE Demo Website

## Core Workflow Steps
To maintain codebase integrity, verify and document every feature addition before checking it in.

---

## Pre-Commit Verification Checklist

Before running `git commit`, you must execute these steps locally:

1. **Verify No Type Check/Build Errors**:
   Run the TypeScript compiler and Vite builder to check for compilation issues:
   ```bash
   npm run build
   ```
   *The build must finish with exit code 0 and no warnings/errors.*

2. **Verify Development Server Performance**:
   Start the development server and test the changes:
   ```bash
   npm run dev
   ```
   - Check the console logs for React errors or warnings.
   - Manually test animations, transitions, and layout responsiveness.

3. **Asset Alignment**:
   Ensure all created SVGs have matching prompt logs in their companion directories and follow the sequential numbering rules.

---

## Commit Guidelines

Use descriptive, structured commit messages that specify the page or component modified:

### Format
`type(scope): description`

- **types**:
  - `feat`: A new feature or component.
  - `fix`: A bug fix or layout correction.
  - `docs`: Documentation edits (e.g., in `docs/` or `README.md`).
  - `style`: Visual theme updates, assets, or formatting changes.
  - `refactor`: Structural code edits with no functional change.

### Examples
- `feat(loading-page): implement elegant fade-in animations and progress loading state`
- `docs(root): establish project organization, architecture, and coding standards`
- `style(loading-page): add optimized vector assets for academic logo and text`

---

## Push Guidelines

- Push your changes immediately after completing a structured task to avoid local-only build divergence.
  ```bash
  git push origin <branch-name>
  ```
- Never push broken builds or unfinished features that disrupt the local development flow.
