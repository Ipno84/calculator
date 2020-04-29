import React, { useCallback } from 'react';

import Button from './../Button';
import Props from './props';
import typeInputAction from '../../../../state/actions/CalculatorActions/typeInputAction';
import { useDispatch } from 'react-redux';

const NumericButton: React.FC<Props> = ({ number }) => {
    const dispatch = useDispatch();
    const typeInput = useCallback(() => dispatch(typeInputAction(number)), [
        dispatch,
        number,
    ]);
    return (
        <Button
            data-testid={`${number}_numericButton`}
            onClick={() => typeInput()}
        >
            {number}
        </Button>
    );
};

export default NumericButton;
