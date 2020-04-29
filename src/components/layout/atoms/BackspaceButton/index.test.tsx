import App from '../../../../App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders backspace button', () => {
    const { getByTestId } = render(<App />);
    const backspaceButton = getByTestId('backspaceButton');
    expect(backspaceButton).toBeInTheDocument();
});
