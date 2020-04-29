import createCachedSelector from 're-reselect';
import getCalculatorResultsSelector from './getCalculatorResultsSelector';

export default createCachedSelector(
    [
        getCalculatorResultsSelector,
        (_: CalculatorStateType, operation: string): string => operation,
    ],
    (results, operation) => {
        if (
            !results ||
            !operation ||
            Object.keys(results).length === 0 ||
            results[operation] === undefined
        ) {
            return null;
        }
        return results[operation];
    }
)((_: CalculatorStateType, operation: string): string => operation);
