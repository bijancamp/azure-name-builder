import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';

function renderWithProvider(component: React.ReactElement) {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <FluentProvider theme={webLightTheme}>{component}</FluentProvider>
    </MemoryRouter>,
  );
}

describe('Header', () => {
  test('renders header element', () => {
    renderWithProvider(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  test('renders application name', () => {
    renderWithProvider(<Header />);

    expect(screen.getByText('Azure Name Builder')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithProvider(<Header />);

    expect(
      screen.getByRole('button', { name: /generate names/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });

  test('github link opens in new tab', () => {
    renderWithProvider(<Header />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
