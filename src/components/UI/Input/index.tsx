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
  placeholder?: string;
  value?: string | number;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: any) => void;
  onClick?: () => void;
  name?: string;
}

export const Input: FunctionComponent<IInput> = ({ type = 'text', placeholder, className, value, onFocus, onChange }) => {
  return (
    <StyledInput
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
    />
  )
}