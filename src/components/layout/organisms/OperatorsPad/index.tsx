import BackspaceButton from '../../atoms/BackspaceButton';
import OperatorButtons from '../../molecules/OperatorButtons';
import OperatorsPadContainer from '../../atoms/OperatorsPadContainer';
import React from 'react';

const OperatorsPad: React.FC = () => {
    return (
        <OperatorsPadContainer>
            <BackspaceButton />
            <OperatorButtons />
        </OperatorsPadContainer>
    );
};

export default OperatorsPad;
