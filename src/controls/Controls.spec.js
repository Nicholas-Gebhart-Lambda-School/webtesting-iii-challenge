/* 
          Inherits the following from Dashboard:
            locked, closed
            toggleLocked, toggleClosed
        
            - default to locked and open
            - cannot be closed or opened if locked
            - cannot be locked if opened
*/

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';
