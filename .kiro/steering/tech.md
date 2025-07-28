# Technology Stack

## Frontend Framework

- **React 18.3** with TypeScript
- **React Router 7.7** for navigation
- **Fluent UI React v9** for components
- **Pragmatic drag and drop** for drag-and-drop functionality

## Development Tools

- **Vite** as build tool and dev server
- **TypeScript 5.6** with strict mode enabled
- **ESLint** with TypeScript, React, and Prettier integration
- **Prettier** for code formatting
- **Vitest** with jsdom for testing
- **Testing Library** (React, jest-dom) for component testing

## Build & Deployment

- **Azure Developer CLI (azd)** for deployment orchestration
- **Azure Static Web Apps** for hosting
- **Bicep** for infrastructure as code
- **GitHub Actions** for CI/CD

## Code Quality Standards

- Strict TypeScript configuration with no unused variables/parameters
- ESLint with recommended TypeScript and React rules
- Prettier formatting with single quotes and experimental ternaries
- Import sorting enforced via ESLint
- Pre-deployment hooks run linting, formatting, and tests

## Testing Configuration

- Vitest globals enabled (no need to import `describe`, `it`, `expect`)
- jsdom environment for DOM testing
- Testing Library for React component testing
- Jest DOM matchers available globally

## Common Commands

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality

```bash
npm run lint         # Check linting issues
npm run lint:fix     # Fix linting issues
npm run prettier     # Check formatting
npm run prettier:fix # Fix formatting
npm run fix          # Fix both formatting and linting
npm test             # Run tests
```

### Deployment

```bash
azd up               # Provision and deploy
azd provision        # Provision Azure resources
azd deploy --all     # Deploy application
```
