import { GET_RESULT } from '../../../constants/CalculatorConstants';

export default function getResultAction(): ActionType {
    return {
        type: GET_RESULT,
    };
}
