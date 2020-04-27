import Calculator from './components/layout/pages/Calculator';
import GlobalStyle from './components/containers/GlobalStyle';
import { Normalize } from 'styled-normalize';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './constants/ThemeConstants';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Normalize />
            <GlobalStyle />
            <Calculator />
        </ThemeProvider>
    );
}

export default App;
