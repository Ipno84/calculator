import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0%{
        color: #777;
    }
    49%{
        color: #777;
    }
    60%{
        color: transparent;
    }
    99%{
        color: transparent;
    }
    100%{
        color: #777;
    }
`;

const ContentEditable = styled.div`
    outline: 0;
    margin: 0;
    border-width: 0;
    font-size: 6rem;
    line-height: 6rem;
    white-space: nowrap;
    caret-color: ${({ theme }) => theme.colors.blue(0)};
    display: table-cell;
    vertical-align: middle;
    text-align: right;
    position: relative;
    &[placeholder]:empty:before {
        content: attr(placeholder);
        position: absolute;
        color: ${({ theme }) => theme.colors.black(0.5)};
        background-color: transparent;
        right: 2rem;
        font-size: 2.5rem;
    }
    &:focus[placeholder]:empty:before {
        color: ${({ theme }) => theme.colors.black(0.8)};
        content: '|';
        font-size: 5rem;
        font-weight: 100;
        animation: ${animation} 1.2s infinite;
    }
`;

export default ContentEditable;
