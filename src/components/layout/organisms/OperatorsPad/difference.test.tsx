import { cleanup, fireEvent, render } from '@testing-library/react';

import App from '../../../../App';
import React from 'react';

test('Difference', () => {
    const { getByTestId } = render(<App />);
    const fiveButton = getByTestId('5_numericButton');
    const fourButton = getByTestId('4_numericButton');
    const diffButton = getByTestId('-_operatorButton');
    const operationResult = getByTestId('operationResult');
    fireEvent.click(fiveButton, 1);
    fireEvent.click(diffButton, 1);
    fireEvent.click(fourButton, 1);
    expect(operationResult).toContainHTML('1');
});
