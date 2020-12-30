import styled, { css, keyframes } from 'styled-components/macro';

const fadeIn = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`

export const StyledFilterContainer = styled.div<{ isFilterOpen: boolean }>`
  background-color: var(--white);
  box-shadow: 0 1px 6px rgba(0,0,0,0.1);
  padding: 93px 96px 32px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  visibility: hidden;
  opacity: 0;
  height: 100%;
  .close--btn {
    position: absolute;
    top: 32px;
    right: 32px;
    cursor: pointer;
    transition: filter 0.5s ease-in;
    &:hover {
      filter: opacity(25%);
    }
  }
  ${({ isFilterOpen }) => isFilterOpen && css`
    visibility: visible;
    opacity: 1;
    animation: 0.5s ${fadeIn} ease-out;
  `}
`;