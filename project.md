# Alpha Drop Project Context

## Identity
- Repository: riverxapp/alpha-drop-ihh
- Branch: main
- Code Type: Vite + React + TypeScript

## Brand Context
- Brand Name: Alpha Drop
- Positioning Statement: A fast React single-page product experience that keeps workflows intuitive and responsive.
- Primary Audience: Product users seeking streamlined task execution.

## Product Vision
Alpha Drop enables users to define and execute project scopes with clear, user-visible outcomes. The roadmap is designed to maintain coherence across requests, delivering explicit acceptance criteria in small, completable iterations.

## Core Problem
Deliver a clear process for defining and executing project scope that results in visible and measurable user outcomes.

## Goals
- Achieve coherent requirements aligned across all requests.
- Ship incremental user-visible value in manageable steps.
- Maintain high-quality user interactions and predictable UI behavior.

## Constraints
- Restrict changes to requested surfaces only.
- Preserve existing architecture and current working flows.
- Avoid broad refactors outside the defined scope.

## Non-Goals
- No complete rewrites of unrelated modules.
- No speculative feature expansion without explicit requests.

## Success Metrics
- Each request results in clear acceptance criteria and unambiguous done conditions.
- Incremental deliveries show tangible user-visible improvements.

## Roles
- Owner: Maintains project direction and approves merges.
- Member: Implements specific scoped tasks and reports progress.

## Core Entities
- Primary workspace entity: central to main workflows.
- User profile: authenticated user data and preferences.

## Integrations
- Currently none planned or implemented.

## Full Build Roadmap
1. Brand alignment, SPA shell, and foundational routes/pages.
2. Core entity CRUD operations, state handling, and validation.
3. Collaboration workflows, role-aware UI behavior, and UX resilience.
4. Reporting, automation, and quality/performance optimizations.

## Request 1 – Ready for Implementation
- Brand: Alpha Drop
- Positioning: Fast React SPA focused on intuitive, responsive workflows.
- Scope: Brand and content alignment plus foundational user-facing surfaces only.

### Tasks for Request 1
1. Application Shell and Entry Points: align `src/main.tsx` and `src/App.tsx` to reflect brand messaging and global shell layout.
2. Core Pages: create or update essential page surfaces and route-level structure.
3. Shared Components: establish reusable UI primitives and sections for consistent patterns.
4. Primary Workflows: implement baseline view-state management (loading, empty, error, success) for initial journeys.

## Development Commands

Install dependencies:

```bash
pnpm install
```

Start development server:

```bash
pnpm run dev
```

Create production build:

```bash
pnpm run build
```