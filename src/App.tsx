import { persistor, store } from './state/store';

import Calculator from './components/layout/pages/Calculator';
import GlobalStyle from './components/containers/GlobalStyle';
import { Normalize } from 'styled-normalize';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './constants/ThemeConstants';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Normalize />
                    <GlobalStyle />
                    <Calculator />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
