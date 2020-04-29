import NumericPad from '../../organisms/NumericPad';
import OperatorsPad from '../../organisms/OperatorsPad';
import PadContainer from '../../atoms/PadContainer';
import React from 'react';

const Pad: React.FC = () => {
    return (
        <PadContainer>
            <NumericPad />
            <OperatorsPad />
        </PadContainer>
    );
};

export default Pad;
