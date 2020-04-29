import getCalculatorResultByOperationSelector from '../../../../selectors/CalculatorSelectors/getCalculatorResultByOperationSelector';
import { select } from 'redux-saga/effects';

export default function* calculateResult(operation: string) {
    try {
        const previuosResult = yield select((state) =>
            getCalculatorResultByOperationSelector(state, operation)
        );
        if (previuosResult !== null && !isNaN(previuosResult))
            return previuosResult;
        const result = eval(operation);
        if (result === undefined) return '';
        return String(result);
    } catch (error) {
        return null;
    }
}
