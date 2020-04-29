import { cleanup, fireEvent, render } from '@testing-library/react';

import App from '../../../../App';
import React from 'react';

test('Multiplication', () => {
    const { getByTestId } = render(<App />);
    const twoButton = getByTestId('2_numericButton');
    const multiplierButton = getByTestId('*_operatorButton');
    const operationResult = getByTestId('operationResult');
    fireEvent.click(twoButton, 1);
    fireEvent.click(multiplierButton, 1);
    fireEvent.click(twoButton, 1);
    expect(operationResult).toContainHTML('4');
});
