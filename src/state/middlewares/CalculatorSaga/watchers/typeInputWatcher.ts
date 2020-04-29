import { TYPE_INPUT } from './../../../../constants/CalculatorConstants';
import { takeLatest } from 'redux-saga/effects';
import typeInputSaga from './../actions/typeInputSaga';

export default function* typeInputWatcher() {
    yield takeLatest(TYPE_INPUT, typeInputSaga);
}
