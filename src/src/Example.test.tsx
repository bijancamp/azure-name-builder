import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Example from './Example';

describe('Example', () => {
  it('shows example greeting', () => {
    render(<Example />);
    const title = screen.getByText('Hello, Fluent UI!');
    expect(title).toBeInTheDocument();
  });

  it('shows example button', () => {
    render(<Example />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });
});
