import { ReactComponent as BackspaceIcon } from './../../../../assets/images/icons/backspace.svg';
import styled from 'styled-components';

const Backspace = styled(BackspaceIcon)`
    fill: ${({ theme }) => theme.colors.blue(1)};
`;

export default Backspace;
