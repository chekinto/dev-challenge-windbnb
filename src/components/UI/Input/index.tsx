import React, { FunctionComponent } from 'react'
import styled from 'styled-components/macro';

const StyledInput = styled.input`
  border: none;
  height: 56px;
  width: 426px;
  padding: 12px 26px;
  font-size: 14px;
  line-height: 17.57px;
  opacity: 0.6;
`;

interface IInput {
  type?: string;
  className?: string;
  onFocus?: (e: any) => void;
  placeholder?: string;
  tabindex?: string;
}

export const Input: FunctionComponent<IInput> = ({ type = 'text', placeholder, className }) => {
  return (
    <StyledInput placeholder={placeholder} type={type} className={className} />
  )
}
