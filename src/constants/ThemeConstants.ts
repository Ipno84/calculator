import Color from 'color';

const black: Color = Color('#000000');
const dark: Color = Color('#333333');
const white: Color = Color('#FFFFFF');
const lightgray: Color = Color('#E3E3E3');
const blue: Color = Color('#4385F5');

const getColor = (
    color: Color,
    opacity: number = 1,
    darken: number = 0
): string => {
    return color
        .fade(1 - opacity)
        .darken(darken)
        .string();
};

const ThemeConstants: Theme = {
    colors: {
        black: (opacity: number = 1, darken: number = 0) =>
            getColor(black, opacity, darken),
        white: (opacity: number = 1, darken: number = 0) =>
            getColor(white, opacity, darken),
        dark: (opacity: number = 1, darken: number = 0) =>
            getColor(dark, opacity, darken),
        lightgray: (opacity: number = 1, darken: number = 0) =>
            getColor(lightgray, opacity, darken),
        blue: (opacity: number = 1, darken: number = 0) =>
            getColor(blue, opacity, darken),
    },
};

export default ThemeConstants;
