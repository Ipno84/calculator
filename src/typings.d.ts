import { DefaultTheme } from 'styled-components';

declare global {
    interface GenericObject {
        [s: string]: any;
    }

    interface Colors {
        [s: string]: Function;
    }

    interface Theme extends DefaultTheme {
        colors: Colors;
    }

    interface CalculatorStateType {
        operation: string;
        result: string;
    }

    interface ExtendedInputEvent extends Event {
        readonly inputType: string;
    }

    interface ActionType {
        type: string;
    }

    interface TypeInputActionType extends ActionType {
        keyCode: string;
        success?: boolean;
        error?: Error;
    }

    interface SetResultActionType extends ActionType {
        result: string;
    }

    interface DeleteActionType extends ActionType {
        all?: boolean;
    }

    interface CalculatorStoreType {
        operation: string;
        result: string;
    }

    type CalculatorStoreName = 'calculator';

    interface Store {
        calculator: CalculatorStoreType;
    }
}
