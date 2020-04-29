import App from '../../../../App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders operation scroller', () => {
    const { getByTestId } = render(<App />);
    const operationScroller = getByTestId('operationScroller');
    expect(operationScroller).toBeInTheDocument();
});

test('renders contenteditable', () => {
    const { getByTestId } = render(<App />);
    const contentEditable = getByTestId('contentEditable');
    expect(contentEditable).toBeInTheDocument();
});
