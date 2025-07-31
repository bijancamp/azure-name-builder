---
inclusion: always
---

# Code Quality Standards

## TypeScript Standards

- **Strict Mode Required**: All code must pass TypeScript strict mode compilation with no errors
- **Type Safety**: Prefer explicit types over `any`, use proper type annotations for function parameters and return values
- **Interface Documentation**: Document all TypeScript interfaces with JSDoc comments and usage examples
- **No Unused Variables**: Remove unused variables, imports, and parameters (enforced by ESLint)

## React Component Standards

- **Functional Components**: Use functional components with hooks instead of class components
- **Component Documentation**: Add JSDoc comments explaining component purpose, props, and usage
- **Props Interface**: Define explicit TypeScript interfaces for all component props
- **Event Handlers**: Use proper TypeScript event types (e.g., `React.MouseEvent<HTMLButtonElement>`)
- **Accessibility**: Ensure components use semantic HTML

## Code Formatting & Linting

- **ESLint Compliance**: All code must pass ESLint rules without warnings or errors
- **Prettier Formatting**: Code must be formatted with Prettier using project configuration
- **Import Organization**: Imports must be sorted and organized (in all-multiple-single-none order)
- **Consistent Naming**: Use camelCase for variables/functions, PascalCase for components/types, UPPER_CASE for constants

## File Organization

- **Co-location**: Place component tests and styles near the component file when applicable
- **Naming Conventions**:
  - Components: `ComponentName.tsx`
  - Tests: `ComponentName.test.tsx`
  - Utilities: `utilityName.ts`
- **Directory Structure**: Follow established `/src/src` structure for application code

## Testing Requirements

- **Test Coverage**: Write tests for user interactions, business logic, and error handling
- **Testing Library Patterns**: Use Testing Library best practices (test behavior, not implementation)
- **Descriptive Test Names**: Use clear, descriptive test names that explain user scenarios
