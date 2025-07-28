---
inclusion: always
---

# UI Component Guidelines

## Component Library Priority

Always use **Fluent UI React v9** components as the primary UI library. Only create custom components when:

- Required functionality doesn't exist in Fluent UI
- Specific business logic requires custom implementation
- Combining multiple Fluent UI components into a reusable pattern

## Fluent UI Documentation Access

Use the `mcp_gitmcp_fluentui` MCP tools to access Fluent UI React v9 documentation and examples:

### Available MCP Tools

- `mcp_gitmcp_fluentui_search_fluentui_documentation` - Search documentation for specific features, APIs, or concepts
- `mcp_gitmcp_fluentui_search_fluentui_code` - Find code examples and implementation patterns
- `mcp_gitmcp_fluentui_fetch_fluentui_documentation` - Retrieve comprehensive documentation (use first for general questions)

### Usage Guidelines

1. **Start with documentation search** for component APIs, props, and usage patterns
2. **Use code search** when you need specific implementation examples or advanced patterns
3. **Fetch full documentation** only for comprehensive overviews or when starting with unfamiliar components

## Component Development Standards

- Import Fluent UI components using named imports: `import { Button, Input } from '@fluentui/react-components'`
- Follow Fluent UI design tokens for consistent theming
- Use Fluent UI's built-in accessibility features rather than custom implementations
- Prefer composition over customization when extending Fluent UI components
