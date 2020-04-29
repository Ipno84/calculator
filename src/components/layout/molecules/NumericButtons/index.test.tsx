import App from '../../../../App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders numeric buttons', () => {
    const { getByTestId } = render(<App />);
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    numbers.forEach((number) => {
        const numericButton = getByTestId(`${number}_numericButton`);
        expect(numericButton).toBeInTheDocument();
    });
});
