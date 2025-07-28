# Design Document

## Overview

The Azure Name Builder application will be structured as a single-page application (SPA) using React 18.3 with TypeScript and React Router 7.7 for navigation. The application will feature a clean, professional interface built with Fluent UI React v9 components, following Microsoft's design language to align with Azure tooling aesthetics.

The application will have three main sections accessible through a top navigation bar: Generate Names (default home page), About, and GitHub (external link). The layout will be responsive and maintain consistency across all pages with a shared header and footer.

## Architecture

### Component Hierarchy

```
App (FluentProvider wrapper)
├── Router (React Router 7.7)
    ├── Layout (Shared layout component)
    │   ├── Header (Navigation component)
    │   ├── Main (Page content area)
    │   │   ├── GenerateNamesPage (Default route "/")
    │   │   ├── AboutPage (Route "/about")
    │   │   └── NotFoundPage (Fallback route)
    │   └── Footer (Copyright and links)
```

### Routing Strategy

- **React Router 7.7** will handle client-side routing
- **Browser Router** for clean URLs without hash fragments
- **Route definitions:**
  - `/` → GenerateNamesPage (default)
  - `/about` → AboutPage
  - `*` → NotFoundPage (404 fallback)
- **External navigation** for GitHub link (opens in new tab)

### State Management

- **Local component state** using React hooks for simple UI state
- **No global state management** needed for initial structure
- **Future consideration:** Context API or state management library when name generation features are added

## Components and Interfaces

### Layout Component

**Purpose:** Provides consistent structure across all pages

**Props Interface:**

```typescript
interface LayoutProps {
  children: React.ReactNode;
}
```

**Responsibilities:**

- Renders Header, main content area, and Footer
- Provides consistent spacing and layout structure
- Ensures responsive behavior

### Header Component

**Purpose:** Top navigation bar with application branding and navigation links

**Props Interface:**

```typescript
interface HeaderProps {
  // No props needed initially - navigation is static
}
```

**Fluent UI Components Used:**

- `makeStyles` and `mergeStyles` for custom styling and conditional styles
- `Button` for desktop navigation items and hamburger toggle
- `Title3` for application branding
- `CloudWordsFilled` icon from `@fluentui/react-icons` for logo
- `FlashFilled`, `InfoFilled`, `OpenFilled` icons for navigation items
- `Hamburger` for mobile menu toggle button
- `NavDrawer` for mobile navigation container
- `NavDrawerHeader` header in drawer that contains close button
- `NavDrawerBody` for mobile menu content
- `AppItem` to contain text "Azure Name Builder" in drawer
- `NavItem` for individual navigation items in mobile menu
- `NavDivider` to separate the first navigation items from "GitHub"
- Flex layout for header structure

**Responsibilities:**

- Display logo (CloudWordsFilled icon) and "Azure Name Builder" branding aligned to the left
- Render navigation buttons with icons for Generate Names (FlashFilled), About (InfoFilled), and GitHub (OpenFilled) aligned to the right
- Handle GitHub external link with proper target="\_blank"
- Highlight active page in navigation
- Implement responsive hamburger menu using NavDrawer for mobile screens
- Use Hamburger component for the mobile menu toggle button
- Show/hide NavDrawer with right-aligned Hamburger button
- Use NavItem components within NavDrawerBody for consistent navigation styling
- Maintain proper spacing and alignment across all screen sizes

**Import pattern:**

```typescript
import {
  Button,
  Title3,
  Hamburger,
  NavDrawer,
  NavDrawerHeader,
  NavDrawerBody,
  AppItem,
  NavItem,
  NavDivider,
} from "@fluentui/react-components";
```

### Footer Component

**Purpose:** Subtle footer with copyright and attribution

**Props Interface:**

```typescript
interface FooterProps {
  // No props needed - content is static
}
```

**Fluent UI Components Used:**

- `makeStyles` for styling
- `Link` for external link to bijancamp.com
- `Text` for copyright text

**Responsibilities:**

- Display copyright text: "© 2025 Bijan Camp · Built with 💙 for Azure pros"
- Render "Bijan Camp" as clickable link to https://bijancamp.com
- Maintain subtle, non-intrusive appearance
- Responsive text sizing

### GenerateNamesPage Component

**Purpose:** Main landing page with placeholder for name generation functionality

**Props Interface:**

```typescript
interface GenerateNamesPageProps {
  // No props needed initially
}
```

**Responsibilities:**

- Display placeholder content indicating future name generation features
- Serve as the default route and primary application entry point
- Provide clear indication this is the active page

### AboutPage Component

**Purpose:** Information page about the Azure Name Builder product

**Props Interface:**

```typescript
interface AboutPageProps {
  // No props needed - content is static
}
```

**Fluent UI Components Used:**

- `Title1`, `Title2` for headings
- `Text` for body content
- `Card` for content sections
- `List` for feature enumeration

**Responsibilities:**

- Display comprehensive product information
- Highlight key features: Zero Setup, Pre-built Conventions, Custom Convention Builder, IaC Integration, Sharing Capabilities
- Explain target users and use cases
- Include AGPL v3 license information
- Maintain readable, well-structured content layout

### NotFoundPage Component

**Purpose:** 404 error page for invalid routes

**Props Interface:**

```typescript
interface NotFoundPageProps {
  // No props needed
}
```

**Responsibilities:**

- Display user-friendly 404 message
- Provide navigation back to home page
- Maintain consistent styling with rest of application

## Data Models

### Navigation Item Interface

```typescript
interface NavigationItem {
  label: string;
  path: string;
  icon: React.ComponentType;
  external?: boolean;
  newTab?: boolean;
}
```

**Usage:** Define navigation structure in Header component with icons

### Header State Interface

```typescript
interface HeaderState {
  isMobileMenuOpen: boolean;
  isMobile: boolean;
}
```

**Usage:** Manage mobile menu visibility and responsive behavior

### Page Route Interface

```typescript
interface PageRoute {
  path: string;
  element: React.ComponentType;
  exact?: boolean;
}
```

**Usage:** Define routing configuration for React Router

## Security Considerations

### External Link Security

- **External links:** Use `rel="noopener noreferrer"` for all external links to prevent security vulnerabilities
- **GitHub link:** Ensure proper target="\_blank" with security attributes
- **Footer link:** Apply same security measures to Bijan Camp website link

### Content Security

- **XSS Prevention:** Ensure all user-facing content is properly sanitized (though minimal user input in this phase)

## Error Handling

### Navigation Errors

- **Invalid routes:** Redirect to NotFoundPage component
- **JavaScript errors:** Error boundary component to catch and display user-friendly messages

### Loading States

- **Initial app load:** Minimal loading time expected due to simple structure
- **Route transitions:** Immediate navigation with React Router
- **Future consideration:** Loading spinners for dynamic content

### Error Boundary Implementation

```typescript
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}
```

**Responsibilities:**

- Catch JavaScript errors in component tree
- Display fallback UI with error message
- Provide option to reload application
- Log errors for debugging (development mode)

## Component Implementation Guidelines

**Note:** Follow the UI Component Guidelines in `.kiro/steering/ui-components.md` for MCP documentation access requirements and general Fluent UI development standards.

## Testing Strategy

### Unit Testing

**Framework:** Vitest with jsdom environment and Testing Library

**Testing Philosophy:** Follow Testing Library's core principle - test software the way users use it, focusing on user behavior rather than implementation details.

**Component Testing Approach:**

- **Layout Component:** Test rendering of header, footer, and children; verify consistent layout structure
- **Header Component:** Test user interactions (clicking navigation links, hamburger menu toggle), active state indication, external link behavior, keyboard navigation
- **Footer Component:** Test copyright text display and external link functionality
- **Page Components:** Test content rendering, accessibility features, and user-facing functionality
- **Router Integration:** Test route navigation, 404 handling, and URL changes
- **Mobile Navigation:** Test hamburger menu open/close, NavDrawer functionality, touch interactions

**Testing Patterns:**

- Focus on user interactions: clicks, form submissions, navigation
- Test accessibility: keyboard navigation
- Test error states and validation messages
- Avoid testing implementation details like internal state or component methods

**Test File Structure:**

```
src/
├── components/
│   ├── Layout/
│   │   ├── Layout.tsx
│   │   └── Layout.test.tsx
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.test.tsx
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.test.tsx
├── pages/
│   ├── GenerateNamesPage/
│   │   ├── GenerateNamesPage.tsx
│   │   └── GenerateNamesPage.test.tsx
│   └── AboutPage/
│       ├── AboutPage.tsx
│       └── AboutPage.test.tsx
```

### Integration Testing

- **Router functionality:** Test navigation between pages
- **Layout consistency:** Verify header and footer appear on all pages
- **External links:** Test GitHub and Bijan Camp links open correctly
- **Responsive behavior:** Test layout on different viewport sizes
- **Mobile menu functionality:** Test hamburger menu toggle and navigation

### Accessibility Testing

- **Keyboard navigation:** Ensure all interactive elements are keyboard accessible
- **Color contrast:** Verify Fluent UI theme meets accessibility standards

### Performance Testing

- **Bundle size:** Monitor JavaScript bundle size with Vite build analysis
- **Load time:** Measure initial page load performance
- **Navigation speed:** Test client-side route transition performance

## Visual Design Specifications

### Color Scheme

**Primary Colors:**

- Use Fluent UI React v9 `webLightTheme` as base theme
- Azure blue accents for branding consistency
- Neutral grays for text and backgrounds

### Typography

**Fluent UI Typography Scale:**

- `Title1` (28px) - Main page headings
- `Title2` (20px) - Section headings
- `Title3` (16px) - Application branding
- `Body1` (14px) - Primary body text
- `Caption1` (12px) - Footer text

### Spacing and Layout

**Grid System:**

- Consistent 16px base spacing unit
- 32px padding for main content areas
- 16px gaps between navigation items
- Responsive breakpoints following Fluent UI standards

### Component Styling

**Header:**

- Fixed height navigation bar (64px)
- Subtle shadow or border for separation
- Left side: Logo (CloudWordsFilled icon) + "Azure Name Builder" text
- Right side: Navigation links with icons (desktop) or Hamburger menu (mobile)
- Responsive Hamburger menu for screens < 768px with right-aligned toggle button
- NavDrawer appears as overlay/sidebar when Hamburger is activated
- NavDrawerBody contains NavItem components for each navigation link
- NavDrawer handles proper focus management and accessibility automatically

**Footer:**

- Minimal height with centered content
- Subtle text color (secondary)
- Small font size to maintain subtlety

**Page Content:**

- Maximum width container for readability
- Consistent padding and margins
- Card-based layout for About page content sections

## Responsive Design

### Breakpoints

**Desktop (1024px+):**

- Full horizontal navigation
- Multi-column layout for About page
- Optimal spacing and typography

**Tablet (768px - 1023px):**

- Maintained horizontal navigation
- Single-column layout
- Adjusted spacing for touch targets

**Mobile (< 768px):**

- NavDrawer with Hamburger toggle
- NavItem components provide consistent touch targets and styling
- Single-column layout
- Increased touch target sizes
- Optimized typography scaling

### Mobile Considerations

- Touch-friendly button sizes (minimum 44px)
- Readable text without zooming
- Proper viewport meta tag configuration
- Fast loading on mobile networks
