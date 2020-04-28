import {
    ALLOWED_CHARS,
    OPERATORS,
} from '../../../../constants/CalculatorConstants';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContentEditable from '../ContentEditable';
import TreeItemsReferences from '../../../../helpers/TreeItemsReferences';
import getCalculatorFormattedOperationSelector from '../../../../state/selectors/CalculatorSelectors/getCalculatorFormattedOperationSelector';
import multipleReplacer from '../../../../helpers/multipleReplacer';
import typeInputAction from '../../../../state/actions/CalculatorActions/typeInputAction';

const OperationInput: React.FC = () => {
    const dispatch = useDispatch();
    const typeInput = useCallback(
        (keyCode) => dispatch(typeInputAction(keyCode)),
        [dispatch]
    );
    const value = useSelector((state: Store) =>
        getCalculatorFormattedOperationSelector(state)
    );
    useEffect(() => {
        TreeItemsReferences.scrollDisplayOperationScroller();
    }, [value]);
    return (
        <ContentEditable
            placeholder='Type operation...'
            contentEditable={true}
            onKeyDown={(e) => {
                const allowed = ALLOWED_CHARS.includes(e.nativeEvent.keyCode);
                if (!allowed) e.preventDefault();
            }}
            onBeforeInput={(e) => {
                const data = (e.nativeEvent as TextEvent).data;
                const target = (e.nativeEvent as TextEvent).target;
                const currentValue = target
                    ? (target as HTMLDivElement).innerText
                    : null;
                const lastElement = currentValue
                    ? currentValue[currentValue.length - 1]
                    : null;
                if (
                    (lastElement &&
                        OPERATORS.includes(lastElement) &&
                        OPERATORS.includes(data)) ||
                    (data === '.' && lastElement === '.')
                )
                    e.preventDefault();
            }}
            onInput={(e: React.ChangeEvent<HTMLDivElement>) => {
                const data = (e.nativeEvent as InputEvent).data;
                if (data) typeInput(multipleReplacer(data, { ',': '.' }));
            }}
            dangerouslySetInnerHTML={{ __html: value }}
        />
    );
};

export default OperationInput;
