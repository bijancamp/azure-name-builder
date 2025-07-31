import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import Layout from './Layout';
import '@testing-library/jest-dom';

function renderWithProvider(component: React.ReactElement) {
  return render(
    <BrowserRouter>
      <FluentProvider theme={webLightTheme}>{component}</FluentProvider>
    </BrowserRouter>,
  );
}

describe('Layout', () => {
  test('renders header', () => {
    const testContent = <div>Test content</div>;

    renderWithProvider(<Layout>{testContent}</Layout>);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders children inside main content area', () => {
    const testContent = (
      <div>
        <h1>Page Title</h1>
        <p>Page content goes here</p>
      </div>
    );

    renderWithProvider(<Layout>{testContent}</Layout>);

    const main = screen.getByRole('main');
    expect(main).toContainElement(screen.getByText('Page Title'));
    expect(main).toContainElement(screen.getByText('Page content goes here'));
  });

  test('renders footer', () => {
    const testContent = <div>Test content</div>;

    renderWithProvider(<Layout>{testContent}</Layout>);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
