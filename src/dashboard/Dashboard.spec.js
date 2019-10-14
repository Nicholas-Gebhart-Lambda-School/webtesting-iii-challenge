/* 
            Renders:
                - Controls
                - Display

*/

import React from 'react';
import { render } from '@testing-library/react';

import Display from '../display/Display';
import Controls from '../controls/Controls';

test('Display renders', () => {
  render(<Display />);
});

test('Controls renders', () => {
  render(<Controls />);
});
