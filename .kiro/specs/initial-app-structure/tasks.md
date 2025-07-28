# Implementation Plan

## Implementation Guidelines

**Note:** Follow the UI Component Guidelines in `.kiro/steering/ui-components.md` for MCP documentation access requirements and Fluent UI development standards.

### Required Navigation Components for Header

When implementing the header navigation, use these specific components from "@fluentui/react-components":

- `Hamburger` for mobile menu toggle button
- `NavDrawer` for mobile navigation container
- `NavDrawerHeader` header in drawer that contains close button
- `NavDrawerBody` for mobile menu content
- `AppItem` to contain text "Azure Name Builder" in drawer
- `NavItem` for individual navigation items in mobile menu
- `NavDivider` to separate the first navigation items from "GitHub"

## Implementation Tasks

- [x] 1. Set up React Router and basic routing structure

  - Install and configure React Router 7.7 in the existing React application
  - Create basic route definitions for home ("/"), about ("/about"), and 404 fallback ("\*")
  - Replace the current Example component with a Router component that handles navigation
  - _Requirements: 3.1, 4.1, 7.1_

- [ ] 2. Create shared Layout component with basic structure

  - Implement Layout component that wraps all pages with consistent header and footer
  - Set up the component hierarchy: Layout > Header + Main + Footer
  - Ensure Layout component accepts children prop and renders them in the main content area
  - _Requirements: 2.3, 2.1_

- [ ] 3. Implement Header component with logo and navigation
- [ ] 3.1 Create Header component with logo and branding

  - Research Fluent UI navigation components using `mcp_gitmcp_fluentui_search_fluentui_documentation` for Title3, makeStyles, and navigation components
  - Build Header component using Fluent UI components (Title3, makeStyles)
  - Add CloudWordsFilled icon from @fluentui/react-icons as logo
  - Display "Azure Name Builder" text next to the logo, aligned to the left
  - Create basic styling with 64px fixed height and subtle border/shadow
  - _Requirements: 1.1, 2.1, 2.2_

- [ ] 3.2 Add navigation links with icons to Header

  - Research Fluent UI Button and AppItem components using `mcp_gitmcp_fluentui_search_fluentui_documentation` for proper usage patterns
  - Implement navigation items with FlashFilled, InfoFilled, and OpenFilled icons
  - Create NavigationItem interface with label, path, icon, external, and newTab properties
  - Add navigation buttons aligned to the right side of the header
  - Use AppItem to contain text "Azure Name Builder" in drawer
  - Handle internal navigation (Generate Names, About) and external link (GitHub) with proper target attributes
  - _Requirements: 1.2, 1.3, 1.4, 5.1, 5.2_

- [ ] 3.3 Implement responsive hamburger menu using NavDrawer for mobile

  - Research Fluent UI navigation components using `mcp_gitmcp_fluentui_search_fluentui_documentation` for NavDrawer, NavDrawerHeader, NavDrawerBody, AppItem, NavItem, NavDivider, Hamburger, and related components
  - Add mobile detection logic using window resize listener or CSS media queries
  - Create hamburger menu using Hamburger component, right-aligned for mobile screens
  - Implement NavDrawer component that opens when Hamburger is activated
  - Use NavDrawerHeader to contain the close button
  - Use NavDrawerBody with NavItem components for each navigation link
  - Use NavDivider to separate the first navigation items from "GitHub"
  - Configure NavDrawer with proper overlay behavior and focus management
  - Use makeStyles and mergeStyles for responsive styling (desktop vs mobile)
  - _Requirements: 1.5, 2.4_

- [ ] 3.4 Add active page highlighting to navigation

  - Implement logic to detect current route using React Router's useLocation hook
  - Apply active styling to the current page's navigation button
  - Use mergeStyles to conditionally apply active state styles
  - _Requirements: 3.3_

- [ ] 4. Create Footer component with copyright and attribution

  - Implement Footer component using Fluent UI Text and Link components
  - Display copyright text: "© 2025 Bijan Camp · Built with 💙 for Azure pros"
  - Make "Bijan Camp" a clickable link to https://bijancamp.com with proper external link attributes
  - Style footer with subtle appearance, minimal height, and centered content
  - _Requirements: 2.5_

- [ ] 5. Implement GenerateNamesPage as default home page

  - Create GenerateNamesPage component with placeholder content
  - Add clear messaging indicating this is where name generation functionality will be implemented
  - Ensure this page loads by default when visiting the root URL ("/")
  - Style the page with consistent spacing and Fluent UI components
  - _Requirements: 3.1, 3.2_

- [ ] 6. Create AboutPage with product information
- [ ] 6.1 Build AboutPage component structure

  - Create AboutPage component using Fluent UI Title1, Title2, Text, and Card components
  - Implement responsive single-column layout with proper spacing
  - Add comprehensive product introduction and overview section
  - _Requirements: 4.1, 2.4_

- [ ] 6.2 Add key features section to AboutPage

  - Create feature list highlighting: Zero Setup, Pre-built Conventions, Custom Convention Builder, IaC Integration, and Sharing Capabilities
  - Use Fluent UI List or Card components for feature presentation
  - Include descriptions for each feature to help users understand the value proposition
  - _Requirements: 4.2_

- [ ] 6.3 Add target users and license information to AboutPage

  - Create section explaining target users: Azure architects, DevOps teams, organizations seeking consistent naming
  - Add use cases and benefits for different user types
  - Include AGPL v3 license information with appropriate legal language
  - _Requirements: 4.3, 4.4_

- [ ] 7. Implement NotFoundPage for 404 error handling

  - Create NotFoundPage component with user-friendly 404 message
  - Add clear explanation that the requested page was not found
  - Include navigation button/link to return to the Generate Names home page
  - Maintain consistent header and footer layout on the 404 page
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 8. Add keyboard accessibility support

  - Ensure all navigation buttons are keyboard accessible with Tab navigation
  - Implement proper focus management for hamburger menu (open/close with Enter/Space)
  - Test and verify all interactive elements can be accessed without a mouse
  - _Requirements: 8.1_

- [ ] 9. Implement error boundary for JavaScript error handling

  - Create ErrorBoundary component that catches JavaScript errors in the component tree
  - Display user-friendly error message when errors occur
  - Provide option to reload the application or navigate back to home page
  - Log errors to console in development mode for debugging
  - _Requirements: 6.4_

- [ ] 10. Add loading states and performance optimizations

  - Implement smooth transitions between routes using React Router
  - Ensure navigation provides immediate visual feedback
  - Optimize bundle size by checking for unnecessary imports using Vite build analysis
  - Verify application loads within 2 seconds on standard connections
  - Monitor bundle size metrics
  - Implement code splitting if bundle size exceeds reasonable limits
  - _Requirements: 6.1, 6.2, 10.1, 10.2, 10.3, 10.4_

- [ ] 11. Create comprehensive test suite
- [ ] 11.1 Write unit tests for all components

  - Create test files for Layout, Header, Footer, GenerateNamesPage, AboutPage, and NotFoundPage components (ComponentName.test.tsx)
  - Test component rendering, props handling, and basic functionality
  - Test user interactions: navigation clicks, hamburger menu toggle, external link behavior
  - Test accessibility: keyboard navigation, focus management, ARIA attributes
  - Test error states: 404 page display, error boundary functionality
  - Use Testing Library queries that resemble how users interact with the app (getByRole, getByText, etc.)
  - Avoid testing implementation details like internal state or component methods
  - Ensure tests are descriptive and explain user scenarios
  - _Requirements: All requirements validation_

- [ ] 11.2 Add integration tests for routing and navigation

  - Test navigation between all pages (home, about, 404)
  - Verify external GitHub link opens in new tab
  - Test NavDrawer hamburger menu functionality and responsive behavior
  - Validate that header and footer appear consistently across all pages
  - _Requirements: 1.2, 1.3, 1.4, 5.1, 7.1_

- [ ] 11.3 Add accessibility and performance tests

  - Test keyboard navigation functionality across all components
  - Verify color contrast meets WCAG 2.1 AA standards using automated tools
  - Test mobile responsiveness at different viewport sizes
  - Measure and validate page load performance
  - _Requirements: 8.1, 8.2, 6.1, 2.4_

- [ ] 12. Implement security measures

  - Add `rel="noopener noreferrer"` to all external links (GitHub, Bijan Camp website)
  - Verify proper target="\_blank" implementation for external links
  - Ensure no sensitive information is exposed in client-side code
  - _Requirements: Security considerations_

- [ ] 13. Final integration and cleanup
  - Remove the existing Example component and related files
  - Update App.tsx to use the new Layout and Router structure
  - Verify all requirements are met through manual testing
  - Clean up any unused imports or dependencies
  - Ensure consistent code formatting and linting compliance
  - Run final performance and accessibility audits
  - _Requirements: All requirements final validation_
