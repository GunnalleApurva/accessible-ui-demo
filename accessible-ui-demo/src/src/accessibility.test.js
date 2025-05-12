/**
 * @jest-environment jsdom
 */

import { configureAxe } from 'jest-axe';
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const axe = configureAxe();

test('should have no accessibility violations', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations(); // This will fail if <App /> has issues
});
