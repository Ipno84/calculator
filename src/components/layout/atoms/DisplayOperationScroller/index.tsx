import styled from 'styled-components';

const DisplayOperationScroller = styled.div`
    height: 50%;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export default DisplayOperationScroller;
