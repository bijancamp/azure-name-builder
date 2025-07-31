import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

function renderWithProvider(component: React.ReactElement) {
  return render(
    <FluentProvider theme={webLightTheme}>{component}</FluentProvider>,
  );
}

describe('Footer', () => {
  test('renders footer element', () => {
    renderWithProvider(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  test('renders copyright notice', () => {
    renderWithProvider(<Footer />);

    expect(screen.getByText(/© 2025/)).toBeInTheDocument();
  });

  test('renders author link', () => {
    renderWithProvider(<Footer />);

    const link = screen.getByRole('link', { name: /Bijan Camp/ });
    expect(link).toHaveAttribute('href', 'https://bijancamp.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders dedication message', () => {
    renderWithProvider(<Footer />);

    expect(
      screen.getByText(/· Built with 🩵 for Azure pros/),
    ).toBeInTheDocument();
  });
});
