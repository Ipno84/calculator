import React, { useCallback } from 'react';

import Button from './../Button';
import Props from './props';
import typeInputAction from '../../../../state/actions/CalculatorActions/typeInputAction';
import { useDispatch } from 'react-redux';

const OperatorButton: React.FC<Props> = ({ operator, label }) => {
    const dispatch = useDispatch();
    const typeInput = useCallback(() => dispatch(typeInputAction(operator)), [
        dispatch,
        operator,
    ]);
    return (
        <Button
            data-testid={`${operator}_operatorButton`}
            onClick={() => typeInput()}
        >
            {label}
        </Button>
    );
};

export default OperatorButton;
