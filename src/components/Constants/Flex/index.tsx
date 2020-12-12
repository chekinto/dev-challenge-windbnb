import styled from 'styled-components';

interface IFlex {
  justify?: string;
  align?: string;
  direction?: string;
  children?: React.ReactNode;
}

export const Flex = styled.div<IFlex>` 
  display: flex;
  justify-content: ${({ justify }) => justify ? justify : 'flex-start'};
  align-items: ${({ align }) => align ? align : 'center'};
  flex-direction: ${({ direction }) => direction ? direction : 'row'};
  width: 100%;
`;