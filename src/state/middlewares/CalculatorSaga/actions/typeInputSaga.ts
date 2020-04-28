import { PutEffect, all, call, put, select } from 'redux-saga/effects';

import { OPERATORS } from '../../../../constants/CalculatorConstants';
import calculateResult from './helpers/calculateResult';
import getCalculatorOperationSelector from '../../../selectors/CalculatorSelectors/getCalculatorOperationSelector';
import multipleReplacer from '../../../../helpers/multipleReplacer';
import setResultAction from './../../../actions/CalculatorActions/setResultAction';
import typeInputAction from './../../../actions/CalculatorActions/typeInputAction';

export default function* typeInputSaga({ keyCode }: TypeInputActionType) {
    try {
        const currentOperation = yield select(getCalculatorOperationSelector);
        keyCode = yield call(refactorKeycode, keyCode);
        const operation = yield call(
            refactorOperation,
            currentOperation,
            keyCode
        );
        let actions: PutEffect<SetResultActionType | TypeInputActionType>[] = [
            put(typeInputAction(operation, true)),
        ];
        const result = yield call(calculateResult, operation);
        if (result !== null) {
            actions.push(put(setResultAction(result)));
        }
        yield all(actions);
    } catch (error) {
        yield put(typeInputAction(keyCode, false, error));
    }
}

function refactorKeycode(keyCode: string) {
    return multipleReplacer(keyCode, { ',': '.' });
}

function refactorOperation(operation: string, keyCode: string) {
    const lastElement = operation[operation.length - 1];
    if (
        (lastElement &&
            OPERATORS.includes(lastElement) &&
            OPERATORS.includes(keyCode)) ||
        (lastElement === '.' && keyCode === '.')
    ) {
        return operation.slice(0, operation.length - 1) + keyCode;
    }
    return String(operation) + String(keyCode);
}
