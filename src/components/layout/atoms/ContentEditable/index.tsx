import styled from 'styled-components';

const ContentEditable = styled.div`
    outline: 0;
    margin: 0;
    border-width: 0;
    font-size: 6rem;
    line-height: 6rem;
    white-space: nowrap;
    caret-color: ${({ theme }) => theme.colors.white(0)};
    display: table-cell;
    vertical-align: middle;
    text-align: right;
    &[placeholder]:empty:before {
        content: attr(placeholder);
        position: absolute;
        color: ${({ theme }) => theme.colors.black(0.5)};
        background-color: transparent;
        right: 2rem;
        font-size: 2.5rem;
    }
`;

export default ContentEditable;
