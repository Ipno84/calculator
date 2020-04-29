import { SET_RESULT } from '../../../constants/CalculatorConstants';

export default function setResultAction(result: string): SetResultActionType {
    return {
        type: SET_RESULT,
        result,
    };
}
