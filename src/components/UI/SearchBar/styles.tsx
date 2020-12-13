import styled from 'styled-components/macro';

export const StyledSearchBar = styled.div`
  border-radius: 16px; 
  box-shadow: 0 1px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  width: max-content;
  margin: 0 auto;
  .dropdown__location, .dropdown__guest {
    border-right: 1px solid var(--grey1);
  }
`;

export const LocationWrapper = styled.div`
  display: inline-block;  
`;

export const LocationDropdownWrapper = styled.div`
  position: absolute;
  margin-left: 24px;
  padding-top: 48px;  
  li {
    color: var(--grey3);
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 32px;
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