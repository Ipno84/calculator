import { cleanup, fireEvent, render } from '@testing-library/react';

import App from '../../../../App';
import React from 'react';

test('Division', () => {
    const { getByTestId } = render(<App />);
    const fourButton = getByTestId('4_numericButton');
    const twoButton = getByTestId('2_numericButton');
    const divisionButton = getByTestId('/_operatorButton');
    const operationResult = getByTestId('operationResult');
    fireEvent.click(fourButton, 1);
    fireEvent.click(divisionButton, 1);
    fireEvent.click(twoButton, 1);
    expect(operationResult).toContainHTML('2');
});
