import styled from 'styled-components';

const Result = styled.div`
    flex: 1;
    font-size: 3.5rem;
    line-height: 3.5rem;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    padding: 2rem;
    color: ${({ theme }) => theme.colors.blue(1)};
    font-weight: 900;
`;

export default Result;
