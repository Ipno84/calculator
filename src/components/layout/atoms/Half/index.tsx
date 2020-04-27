import styled, { css } from 'styled-components';

import Props from './props';

const Half = styled.div<Props>`
    flex: 1;
    ${({ top }) =>
        top
            ? css`
                  background-color: ${({ theme }) => theme.colors.white(1)};
                  z-index: 1;
                  box-shadow: ${({ theme }) => theme.colors.dark(0.2)} 0
                          0.1875rem 0.1875rem -0.125rem,
                      ${({ theme }) => theme.colors.dark(0.14)} 0px 0.1875rem
                          0.25rem 0,
                      ${({ theme }) => theme.colors.dark(0.12)} 0 0.0625rem
                          0.5rem 0;
              `
            : css`
                  background-color: ${({ theme }) => theme.colors.lightgray(1)};
              `}
`;

export default Half;
