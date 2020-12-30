import styled from 'styled-components/macro';

export const StyledSearchBar = styled.form`
  border-radius: 16px; 
  box-shadow: 0 1px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  width: max-content;
  margin: 0 auto;
  z-index: 100;
`;

export const LocationWrapper = styled.div`
  display: inline-block;  
`;

export const LocationDropdownWrapper = styled.div`
  position: absolute;
  padding-top: 48px;  
`;

export const LocationDropdown = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  cursor: pointer;
  img {
    margin-right: 10px;
  } 
  &:hover {
    background-color: var(--grey1);
  }
`;

export const GuestWrapper = styled.div`
  display: inline-block;  
`;

export const GuestDropdownWrapper = styled.div`
  color: var(--grey3);
  margin-left: 24px;
  padding-top: 48px;
  position: absolute;
`;

export const GuestDropdown = styled.div`
  margin-bottom: 32px;
  h4, p {
    font-size: 14px;
    line-height: 22px;
  }
  p {
    opacity: 0.4;
    margin-bottom: 16px;
  }
  span {
    width: 18px;
    text-align: center;
    margin: 0 15px;
  }
  button {
    background-color: var(--white);
    border: 1px solid var(--grey2); 
    border-radius: 4px;
    height: 24px;
    width: 24px;
  }
`;