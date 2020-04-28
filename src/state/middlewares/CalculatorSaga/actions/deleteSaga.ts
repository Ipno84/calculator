import { call, put, select } from 'redux-saga/effects';

import calculateResult from './helpers/calculateResult';
import getCalculatorOperationSelector from '../../../selectors/CalculatorSelectors/getCalculatorOperationSelector';
import setResultAction from '../../../actions/CalculatorActions/setResultAction';

export default function* deleteSaga({ all }: DeleteActionType) {
    try {
        if (!all) {
            const currentOperation = yield select(
                getCalculatorOperationSelector
            );
            const result = yield call(calculateResult, currentOperation);
            if (result !== null) yield put(setResultAction(result));
        }
    } catch (error) {}
}
