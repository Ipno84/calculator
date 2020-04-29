import AppContainer from './../../atoms/AppContainer';
import BackspaceButton from './../../atoms/BackspaceButton';
import CommaButton from './../../atoms/CommaButton';
import Display from './../../organisms/Display';
import GetResultButton from './../../atoms/GetResultButton';
import NumericButtons from './../../molecules/NumericButtons';
import NumericPadContainer from './../../atoms/NumericPadContainer';
import OperatorButtons from './../../molecules/OperatorButtons';
import OperatorsPadContainer from './../../atoms/OperatorsPadContainer';
import PadContainer from './../../atoms/PadContainer';
import React from 'react';

const Calculator: React.FC = () => {
    return (
        <AppContainer>
            <Display />
            <PadContainer>
                <NumericPadContainer>
                    <NumericButtons />
                    <CommaButton />
                    <GetResultButton />
                </NumericPadContainer>
                <OperatorsPadContainer>
                    <BackspaceButton />
                    <OperatorButtons />
                </OperatorsPadContainer>
            </PadContainer>
        </AppContainer>
    );
};

export default Calculator;
