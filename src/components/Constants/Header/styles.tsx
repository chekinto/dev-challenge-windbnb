import styled from 'styled-components/macro';

export const StyledHeader = styled.header`
  margin-bottom: 85px;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
  z-index: 5;
`;

export const SearchBtn = styled.div`
  border-radius: 16px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  min-width: 297px;
  cursor: pointer;
  z-index: 4;
  .location, .guests {
    display: grid;
    place-items: center;
    font-size: 14px;
    line-height: 22px;
    border-right: 1px solid #f2f2f2;
    height: 100%;
    span {
      padding: 20px 16px;
    }
  }
  .guests {
    color: var(--grey4);
  }
  .search img {
    margin: 20px;
  }
`