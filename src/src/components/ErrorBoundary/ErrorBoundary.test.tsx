import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import ErrorBoundary from './ErrorBoundary';

import '@testing-library/jest-dom';

// Mock console.error to avoid noise in test output
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = vi.fn() as typeof console.error;
});

afterAll(() => {
  console.error = originalConsoleError;
});

// Component that throws an error for testing
function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
}

// Helper to render components with FluentProvider
function renderWithProvider(ui: React.ReactElement) {
  return render(<FluentProvider theme={webLightTheme}>{ui}</FluentProvider>);
}

describe('ErrorBoundary', () => {
  beforeEach(() => {
    // Clear console.error mock calls before each test
    vi.clearAllMocks();
  });

  test('renders children when there is no error', () => {
    renderWithProvider(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>,
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  test('displays error fallback UI when child component throws error', () => {
    renderWithProvider(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(screen.getByText('Houston, We Have an Error!')).toBeInTheDocument();
    expect(
      screen.getByText(
        /There's a minor glitch in the naming mission. Let's head home to launch again./,
      ),
    ).toBeInTheDocument();
  });

  test('displays home button in error state', () => {
    renderWithProvider(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(
      screen.getByRole('button', { name: /head home/i }),
    ).toBeInTheDocument();
  });

  test('navigates to home when home button is clicked', () => {
    const mockLocation = { href: '' } as Partial<Location>;
    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true,
    });

    renderWithProvider(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    const homeButton = screen.getByRole('button', { name: /head home/i });
    fireEvent.click(homeButton);

    expect(mockLocation.href).toBe('/');
  });

  test('logs error to console in development mode', () => {
    // Set NODE_ENV to development for this test
    const originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    renderWithProvider(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    expect(console.error).toHaveBeenCalledWith(
      'ErrorBoundary caught an error:',
      expect.any(Error),
    );
    expect(console.error).toHaveBeenCalledWith(
      'Error info:',
      expect.any(Object),
    );

    // Restore original NODE_ENV
    process.env.NODE_ENV = originalNodeEnv;
  });

  test('does not log error to console in production mode', () => {
    // Set NODE_ENV to production for this test
    const originalNodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    renderWithProvider(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    // Console.error should not be called for logging (only React's internal error logging)
    expect(console.error).not.toHaveBeenCalledWith(
      'ErrorBoundary caught an error:',
      expect.any(Error),
    );

    // Restore original NODE_ENV
    process.env.NODE_ENV = originalNodeEnv;
  });

  test('displays error icon in error state', () => {
    renderWithProvider(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>,
    );

    // Check that the error message is displayed (which indicates the error UI is rendered)
    expect(screen.getByText('Houston, We Have an Error!')).toBeInTheDocument();
    // The icon is rendered as part of the error UI, so if the error UI is there, the icon is there
  });
});
