import React, { useCallback } from 'react';

import Button from '../Button';
import getResultAction from '../../../../state/actions/CalculatorActions/getResultAction';
import { useDispatch } from 'react-redux';

const GetResultButton: React.FC = () => {
    const dispatch = useDispatch();
    const getResult = useCallback(() => dispatch(getResultAction()), [
        dispatch,
    ]);
    return (
        <Button data-testid='equalButton' onClick={() => getResult()}>
            =
        </Button>
    );
};

export default GetResultButton;
