import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import '@testing-library/jest-dom';

function renderWithProvider(component: React.ReactElement) {
  return render(
    <FluentProvider theme={webLightTheme}>{component}</FluentProvider>,
  );
}

describe('Layout', () => {
  test('renders header, main content, and footer', () => {
    const testContent = (
      <div>
        <h1>Page Title</h1>
        <p>Page content goes here</p>
      </div>
    );

    renderWithProvider(<Layout>{testContent}</Layout>);

    // Renders header
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Renders main content
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toContainElement(screen.getByText('Page Title'));
    expect(main).toContainElement(screen.getByText('Page content goes here'));

    // Renders footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
