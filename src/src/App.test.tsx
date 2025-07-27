import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('shows app title', () => {
    render(<App />);
    expect(screen.getByText('Azure Name Builder')).toBeInTheDocument();
  });
});
