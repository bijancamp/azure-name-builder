# Project Structure

## Root Level

- `azure.yaml` - Azure Developer CLI configuration
- `README.md` - Project documentation
- `LICENSE` - AGPL v3 license file

## Infrastructure (`/infra`)

- `main.bicep` - Primary Bicep template for Azure resources
- `main.parameters.json` - Environment-specific parameters
- `abbreviations.json` - Azure resource naming abbreviations

## Source Code (`/src`)

Main application directory containing the React frontend.

### Configuration and Website Root Files

- `package.json` - Node.js dependencies and scripts
- `vite.config.ts` - Vite build configuration with Vitest setup
- `tsconfig.json` - TypeScript project references
- `tsconfig.app.json` - Application TypeScript configuration
- `tsconfig.node.json` - Node.js TypeScript configuration
- `eslint.config.js` - ESLint configuration with React and TypeScript rules
- `.prettierrc` - Prettier formatting configuration
- `index.html` - Root page and entry point for the React application
- `public` - Static assets served directly (favicon, manifest, etc.)

### Application Structure (`/src/src`)

- `main.tsx` - Application entry point
- `App.tsx` - Root React component
- `App.css` - Application styles
- `index.css` - Global styles
- `vite-env.d.ts` - Vite environment type definitions
- `/assets` - Static assets (images, icons, etc.)
- `/components` - Non-page components
- `/pages` - Page components

### Generated Directories

- `/dist` - Production build output (generated)
- `/node_modules` - Dependencies (installed via npm)

## Key Locations

- Source code lives in `/src/src`
- Infrastructure definitions in `/infra`
- Build outputs to `/src/dist`
- Azure deployment configured via `azure.yaml`

## Key Conventions

- TypeScript strict mode enforced
- React functional components preferred
- ESLint import sorting required
- Prettier formatting with single quotes
- Test files use `.test.tsx` suffix
- Components should be co-located with their tests and styles when applicable

## File Naming

- React components: PascalCase (e.g., `MyComponent.tsx`)
- Test files: Component name + `.test.tsx` (e.g., `MyComponent.test.tsx`)
- Utility files: camelCase (e.g., `nameBuilder.ts`)
- CSS files: Match component name
