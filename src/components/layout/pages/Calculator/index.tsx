import AppContainer from './../../atoms/AppContainer';
import Display from './../../organisms/Display';
import Pad from '../../templates/Pad';
import React from 'react';

const Calculator: React.FC = () => {
    return (
        <AppContainer>
            <Display />
            <Pad />
        </AppContainer>
    );
};

export default Calculator;
