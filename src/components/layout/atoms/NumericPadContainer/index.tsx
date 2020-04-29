import styled from 'styled-components';

const NumericPadContainer = styled.div`
    flex: 4;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 1px;
        background-color: ${({ theme }) => theme.colors.dark(0.3)};
    }
`;

export default NumericPadContainer;
