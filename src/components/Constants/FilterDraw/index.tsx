import React from 'react'
import styled from 'styled-components/macro';
import { SearchBar } from 'components'

const StyledFilterDraw = styled.div`
  background-color: var(--white);
  box-shadow: 0 1px 6px rgba(0,0,0,0.1);
  padding: 93px 96px 344px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  
`;


export const FilterDraw = () => {
  return (
    <StyledFilterDraw>
      <SearchBar />
    </StyledFilterDraw>
  )
}
