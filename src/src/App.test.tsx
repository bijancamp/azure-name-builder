import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('shows sample heading', () => {
    render(<App />);
    expect(screen.getByText('Sample Heading')).toBeInTheDocument();
  });
});
