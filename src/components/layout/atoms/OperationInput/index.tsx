import { ALLOWED_CHARS } from '../../../../constants/CalculatorConstants';
import ContentEditable from '../ContentEditable';
import React from 'react';

const OperationInput: React.FC = () => {
    return (
        <ContentEditable
            placeholder='Type operation...'
            contentEditable={true}
            onKeyPress={(e) => {
                const allowed = ALLOWED_CHARS.includes(e.nativeEvent.keyCode);
                if (!allowed) e.preventDefault();
            }}
        />
    );
};

export default OperationInput;
