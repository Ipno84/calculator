import App from '../../../../App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders comma button', () => {
    const { getByTestId } = render(<App />);
    const commaButton = getByTestId('commaButton');
    expect(commaButton).toBeInTheDocument();
});
