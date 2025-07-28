import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

function renderWithProvider(component: React.ReactElement) {
  return render(
    <FluentProvider theme={webLightTheme}>{component}</FluentProvider>,
  );
}

describe('Header', () => {
  test('renders application name', () => {
    renderWithProvider(<Header />);

    expect(screen.getByText('Azure Name Builder')).toBeInTheDocument();
  });

  test('renders as header element', () => {
    renderWithProvider(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
