export const TYPE_NUMERIC_PAD: string = 'TYPE_NUMERIC_PAD';
export const TYPE_INPUT: string = 'TYPE_INPUT';
export const SET_RESULT: string = 'SET_RESULT';
export const GET_RESULT: string = 'GET_RESULT';
export const DELETE: string = 'DELETE';

export const ALLOWED_CHARS: number[] = [
    187, // =
    40, // (
    41, // )
    42, // *
    43, // +
    45, // -
    47, // /
    48, // 0
    49, // 1
    50, // 2
    51, // 3
    52, // 4
    53, // 5
    54, // 6
    55, // 7
    56, // 8
    57, // 9
    106, // *
    107, // +
    109, // -
    110, // .
    111, // /
    190, // .
    188, // ,
];

export const OPERATORS = ['/', '*', '-', '+'];

export const REPLACED_CHARS: GenericObject = {
    '*': '×',
    '/': '÷',
};
