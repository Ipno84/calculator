import {
    DELETE,
    GET_RESULT,
    SET_RESULT,
    TYPE_INPUT,
} from './../../constants/CalculatorConstants';

import { SUCCESS } from '../../constants/BaseConstants';

const initialState: CalculatorStateType = {
    operation: '',
    result: '',
    results: {},
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case TYPE_INPUT + SUCCESS:
            return {
                ...state,
                operation: String(action.keyCode),
            };
        case SET_RESULT:
            return {
                ...state,
                result: String(action.result),
            };
        case DELETE:
            if (!action.all)
                return {
                    ...state,
                    operation: state.operation.slice(
                        0,
                        state.operation.length - 1
                    ),
                };
            return {
                ...state,
                operation: initialState.operation,
                result: initialState.result,
            };
        case GET_RESULT:
            if (state.result === '') return state;
            return {
                ...state,
                operation: state.result,
                result: state.result,
                results: {
                    ...state.results,
                    [state.operation]: state.result,
                },
            };
        default:
            return state;
    }
};
