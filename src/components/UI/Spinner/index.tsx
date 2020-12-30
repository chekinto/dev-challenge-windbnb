import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
`

const StyledSpinner = styled.div`
  display: grid;
  place-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-top: 4px solid black;
  border-left: 2px solid black;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

export const Spinner = () => {
  return (
    <StyledSpinner>
      <Loader></Loader>
    </StyledSpinner>
  )
}
