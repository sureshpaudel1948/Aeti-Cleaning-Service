import { render, screen } from '@testing-library/react';
import App from './App';

test('shows the new laundry and delivery service highlight', () => {
  render(<App />);
  expect(screen.getAllByText(/Laundry & Delivery/i).length).toBeGreaterThan(0);
});
