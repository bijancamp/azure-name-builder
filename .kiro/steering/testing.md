---
inclusion: always
---

# Testing Guidelines

## Testing Framework Setup

- **Vitest** with jsdom environment for DOM testing
- **Testing Library** (React, jest-dom) for component testing
- **Globals enabled** - no need to import `describe`, `it`, `expect`
- **Jest DOM matchers** available globally (e.g., `toBeInTheDocument`, `toHaveClass`)

## Testing Philosophy

Follow Testing Library's core principle: **Test your software the way your users use it**

### Key Principles

- Focus on **user behavior** rather than implementation details
- Test **DOM nodes** not component instances
- Write tests that **resemble real user interactions**
- Keep tests **simple, maintainable, and valuable**

### What to Test

✅ **User interactions**: clicks, form submissions, navigation
✅ **Accessibility**: keyboard navigation
✅ **Business logic**: data validation, state changes, API responses
✅ **Error handling**: error states, validation messages
✅ **Integration**: component interactions, routing

❌ **Implementation details**: internal state, private methods
❌ **Styling specifics**: colors, exact positioning, icon presence
❌ **Third-party library internals**: Fluent UI component internals

## File Conventions

- Test files: `ComponentName.test.tsx`
- Co-locate tests with components when possible
- Use descriptive test names that explain user scenarios

## Common Patterns

```typescript
// Good: Testing user behavior
test("submits form when user clicks submit button", () => {
  render(<MyForm />);
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByText(/success/i)).toBeInTheDocument();
});

// Avoid: Testing implementation details
test("calls handleSubmit function", () => {
  // Don't test internal function calls
});
```

## Commands

- `npm test` - Run all tests
- `npm test -- --watch` - Run tests in watch mode
