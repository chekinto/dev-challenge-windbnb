import React from 'react'
import styled from 'styled-components/macro';
import { Container } from 'components'
import logo from 'assets/logo.svg'
const StyledHeader = styled.header`
  margin-bottom: 85px;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderInner>
          <img src={logo} alt="windbnb logo" />
        </HeaderInner>
      </Container>
    </StyledHeader>
  )
}
