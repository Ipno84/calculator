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
}
