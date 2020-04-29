import { CALCULATOR_REDUCER_NAME } from '../../../constants/StoreConstants';

export default function getCalculatorOperationSelector(state: Store): string {
    return state[CALCULATOR_REDUCER_NAME].operation;
}
