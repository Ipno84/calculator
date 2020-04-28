import deleteWatcher from './watchers/deleteWatcher';
import { fork } from 'redux-saga/effects';
import typeInputWatcher from './watchers/typeInputWatcher';

export default function* CalculatorSaga() {
    yield fork(typeInputWatcher);
    yield fork(deleteWatcher);
}
