import App from '../../../../App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders operator buttons', () => {
    const { getByTestId } = render(<App />);
    const operators = ['/', '*', '-', '+', '(', ')'];
    operators.forEach((operator) => {
        const operatorButton = getByTestId(`${operator}_operatorButton`);
        expect(operatorButton).toBeInTheDocument();
    });
});
