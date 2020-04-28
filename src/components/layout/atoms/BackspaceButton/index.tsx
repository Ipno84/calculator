import React, { useCallback } from 'react';

import Backspace from './../../atoms/Backspace';
import Button from '../Button';
import deleteAction from '../../../../state/actions/CalculatorActions/deleteAction';
import { useDispatch } from 'react-redux';
import useLongPress from '../../../../hooks/useLongPress';

const BackspaceButton: React.FC = () => {
    const dispatch = useDispatch();
    const deleteOperation = useCallback(
        (all?: boolean) => dispatch(deleteAction(all)),
        [dispatch]
    );
    const onLongPress = useLongPress(() => deleteOperation(true), 600);
    return (
        <Button {...onLongPress} onClick={() => deleteOperation()} full={true}>
            <Backspace />
        </Button>
    );
};

export default BackspaceButton;
