import { CALCULATOR_REDUCER_NAME } from '../../../constants/StoreConstants';

export default function getCalculatorResultSelector(state: Store): string {
    return state[CALCULATOR_REDUCER_NAME].result;
}
