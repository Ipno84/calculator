import { CALCULATOR_REDUCER_NAME } from '../../../constants/StoreConstants';

export default function getCalculatorResultsSelector(
    state: Store
): GenericObject {
    return state[CALCULATOR_REDUCER_NAME].results;
}
