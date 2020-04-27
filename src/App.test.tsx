import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders REACT HOOK DARK MODE', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/REACT HOOK DARK MODE/i);
  expect(textElement).toBeInTheDocument();
});
