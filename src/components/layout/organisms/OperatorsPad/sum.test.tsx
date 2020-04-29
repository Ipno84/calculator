import { cleanup, fireEvent, render } from '@testing-library/react';

import App from '../../../../App';
import React from 'react';

test('Sum', () => {
    const { getByTestId } = render(<App />);
    const oneButton = getByTestId('1_numericButton');
    const plusButton = getByTestId('+_operatorButton');
    const operationResult = getByTestId('operationResult');
    fireEvent.click(oneButton, 1);
    fireEvent.click(plusButton, 1);
    fireEvent.click(oneButton, 1);
    expect(operationResult).toContainHTML('2');
});
