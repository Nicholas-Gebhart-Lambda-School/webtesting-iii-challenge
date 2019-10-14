/* 
        Inherits the following from Dashboard:
            locked, closed

            - displays if gate is open/closed and if it is locked/unlocked
            - displays 'Closed' if the closed prop is true and 'Open' if otherwise
            - displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
            - when locked or closed use the red-led class
            - when unlocked or open use the green-led class

*/

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

// Render component
test('Display is rendering', () => {
  render(<Display />);
});

// Open or closed
test('Open or Closed', () => {
  const closedMock = jest.fn();
  const lockedMock = jest.fn();
  const { getByText } = render(
    <Display closed={closedMock} locked={lockedMock} />
  );
  lockedMock ? getByText(/locked/i) : getByText(/unlocked/i);
  closedMock ? getByText(/closed/i) : getByText(/open/i);
});
