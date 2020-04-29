import React, { useCallback } from 'react';

import Button from '../Button';
import typeInputAction from '../../../../state/actions/CalculatorActions/typeInputAction';
import { useDispatch } from 'react-redux';

const CommaButton: React.FC = () => {
    const dispatch = useDispatch();
    const typeInput = useCallback(() => dispatch(typeInputAction(',')), [
        dispatch,
    ]);
    return (
        <Button data-testid='commaButton' onClick={() => typeInput()}>
            ,
        </Button>
    );
};

export default CommaButton;
