import React from 'react';
import Result from './../../atoms/Result';
import getCalculatorResultSelector from '../../../../state/selectors/CalculatorSelectors/getCalculatorResultSelector';
import { useSelector } from 'react-redux';

const OperationResult: React.FC = () => {
    const result = useSelector((state: Store) =>
        getCalculatorResultSelector(state)
    );
    return <Result data-testid='operationResult'>{result}</Result>;
};

export default OperationResult;
