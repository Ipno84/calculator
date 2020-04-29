import CommaButton from '../../atoms/CommaButton';
import GetResultButton from '../../atoms/GetResultButton';
import NumericButtons from '../../molecules/NumericButtons';
import NumericPadContainer from '../../atoms/NumericPadContainer';
import React from 'react';

const NumericPad: React.FC = () => {
    return (
        <NumericPadContainer>
            <NumericButtons />
            <CommaButton />
            <GetResultButton />
        </NumericPadContainer>
    );
};

export default NumericPad;
