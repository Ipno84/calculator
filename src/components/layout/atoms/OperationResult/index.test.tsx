import App from '../../../../App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders operation result', () => {
    const { getByTestId } = render(<App />);
    const operationResult = getByTestId('operationResult');
    expect(operationResult).toBeInTheDocument();
});
