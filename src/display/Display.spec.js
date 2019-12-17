import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display';

test('Gate is open and unlocked by default', () => {
    const { getByText } = render(<Display/>);
    getByText('Unlocked');
    getByText('Open');
})