import { fireEvent, render } from '@testing-library/react';

import App from '../../../../App';
import React from 'react';

test('renders set 1 on numeric click', () => {
    const { getByTestId } = render(<App />);
    const oneButton = getByTestId('1_numericButton');
    const contentEditable = getByTestId('contentEditable');
    fireEvent.click(oneButton, 1);
    expect(contentEditable).toContainHTML('1');
});

test('renders set 12 on numeric click', () => {
    const { getByTestId } = render(<App />);
    const oneButton = getByTestId('1_numericButton');
    const twoButton = getByTestId('2_numericButton');
    const contentEditable = getByTestId('contentEditable');
    fireEvent.click(oneButton, 1);
    fireEvent.click(twoButton, 1);
    expect(contentEditable).toContainHTML('12');
});
