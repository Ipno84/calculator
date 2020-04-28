import Props from './props';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<Props>`
    body {
        font-size: 16px;
        font-family:'Product Sans Regular', sans-serif;
        background-color: ${({ theme }) => theme.colors.dark(1)};
        color: ${({ theme }) => theme.colors.black(1)};
    }
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        user-select: none;
    }
    #root {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        transition: padding .3s ease;
        @media screen and (min-width: 30rem) {
            padding: 2rem;
        }
    }
`;

export default GlobalStyle;
