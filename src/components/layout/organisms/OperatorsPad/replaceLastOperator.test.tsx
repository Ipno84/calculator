import { cleanup, fireEvent, render } from '@testing-library/react';

import App from '../../../../App';
import React from 'react';

test('Replace last operator and char', () => {
    const { getByTestId } = render(<App />);
    const fourButton = getByTestId('4_numericButton');
    const twoButton = getByTestId('2_numericButton');
    const diffButton = getByTestId('-_operatorButton');
    const divisionButton = getByTestId('/_operatorButton');
    const contentEditable = getByTestId('contentEditable');
    fireEvent.click(fourButton, 1);
    fireEvent.click(twoButton, 1);
    fireEvent.click(diffButton, 1);
    fireEvent.click(divisionButton, 1);
    expect(contentEditable).toContainHTML('42÷');
});
