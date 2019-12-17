import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';

test('Dashboard renders correctly', () => {
    render(<Dashboard/>);
})

test('Display renders correctly', () => {
    render(<Display/>);
})

test('Controls render correctly', () => {
    render(<Controls/>);
})