import { FAILURE, SUCCESS } from '../../../constants/BaseConstants';

import { TYPE_INPUT } from '../../../constants/CalculatorConstants';

export default function typeInputAction(
    keyCode: string,
    success?: boolean,
    error?: Error
): TypeInputActionType {
    if (success) {
        return {
            type: TYPE_INPUT + SUCCESS,
            keyCode,
        };
    } else if (error) {
        return {
            type: TYPE_INPUT + FAILURE,
            keyCode,
            error,
        };
    }
    return {
        type: TYPE_INPUT,
        keyCode,
    };
}
