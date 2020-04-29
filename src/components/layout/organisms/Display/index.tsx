import DisplayContainer from './../../atoms/DisplayContainer';
import OperationDisplay from './../../molecules/OperationDisplay';
import OperationResult from './../../atoms/OperationResult';
import React from 'react';

const Display: React.FC = () => {
    return (
        <DisplayContainer top={true}>
            <OperationDisplay />
            <OperationResult />
        </DisplayContainer>
    );
};

export default Display;
