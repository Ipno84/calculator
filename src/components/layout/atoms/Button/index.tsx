import styled, { css } from 'styled-components';

import NumericPadContainer from './../NumericPadContainer';
import OperatorsPadContainer from './../OperatorsPadContainer';
import Props from './props';

const Button = styled.button<Props>`
    margin: 0;
    padding: 0;
    border-width: 0;
    outline: 0;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.dark(0)};
    font-size: 1.6rem;
    border-radius: 0.25rem;
    ${NumericPadContainer} > & {
        flex: 1 0 26%;
    }
    ${OperatorsPadContainer} > & {
        flex: 1 0 34%;
        color: ${({ theme }) => theme.colors.blue(1)};
        ${({ full }) =>
            full &&
            css`
                flex: 1 1 100%;
            `}
    }
    &:hover {
        background-color: ${({ theme }) => theme.colors.dark(0.1)};
    }
    &:active {
        background-color: ${({ theme }) => theme.colors.dark(0.2)};
    }
`;

export default Button;
