import React, { FunctionComponent } from 'react'
import styled from 'styled-components/macro';

const StyledButton = styled.button`
  background-color: var(--red);
  border: none;
  border-radius: 16 0 0 16px;
  color: var(--white);
  width: 128px;
  height: 58px;
  transition: filter 0.2s ease-in-out;
  cursor: pointer;
  .btn__icon {
    height: 16px;
    width: 16px;
    margin-right: 8px;
    filter: invert(1);
  }
  &:hover {
    filter: brightness(1.2);
  }
`;

interface IButton {
  children: React.ReactNode;
  icon?: boolean;
  src?: string;
  className?: string;
  handleClick?: () => void;
  onClick?: () => void;
}

export const Button: FunctionComponent<IButton> = ({ children, icon, src, className, handleClick }) => {
  return (
    <StyledButton className={className} onClick={handleClick}>
      {icon && <img className="btn__icon" src={src} alt="button icon" />}
      {children}
    </StyledButton>
  )
}
