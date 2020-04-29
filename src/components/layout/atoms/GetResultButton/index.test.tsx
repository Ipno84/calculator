import App from '../../../../App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders equal button', () => {
    const { getByTestId } = render(<App />);
    const equalButton = getByTestId('equalButton');
    expect(equalButton).toBeInTheDocument();
});
