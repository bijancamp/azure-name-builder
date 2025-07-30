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
  test('renders copyright and attribution', () => {
    renderWithProvider(<Footer />);

    expect(screen.getByText(/© 2025/)).toBeInTheDocument();

    expect(
      screen.getByText(/· Built with 🩵 for Azure pros/),
    ).toBeInTheDocument();
  });

  test('renders link', () => {
    renderWithProvider(<Footer />);

    const link = screen.getByRole('link', { name: /Bijan Camp/ });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://bijancamp.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders as footer element', () => {
    renderWithProvider(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
