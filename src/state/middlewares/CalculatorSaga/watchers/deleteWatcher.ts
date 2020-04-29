import { DELETE } from './../../../../constants/CalculatorConstants';
import deleteSaga from './../actions/deleteSaga';
import { takeLatest } from 'redux-saga/effects';

export default function* deleteWatcher() {
    yield takeLatest(DELETE, deleteSaga);
}
