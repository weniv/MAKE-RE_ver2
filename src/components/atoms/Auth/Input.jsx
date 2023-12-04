import React from 'react'
import styled from 'styled-components'

export default function Input({
  id,
  name,
  type,
  value,
  placeholder,
  onChange,
  warning,
  disabled,
}) {
  return (
    <CommonInput
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      warning={warning}
      disabled={disabled}
    />
  )
}

const CommonInput = styled.input`
  width: 100%;
  height: 42px;
  border: none;
  border-bottom: 2px solid var(--gray-lv2-color);
  padding-left: 8px;
  border-bottom: ${({ warning }) =>
    warning
      ? '2px solid var(--error-color);'
      : '2px solid var(--gray-lv2-color);'};

  &::placeholder {
    font-size: 16px;
    color: var(--gray-lv3-color);
  }

  &:focus {
    outline: none;
    border-bottom: ${({ warning }) =>
      warning
        ? '2px solid var(--error-color);'
        : '2px solid var(--primary-color);'};
    background-color: var(--gray-lv1-color);
  }

  &:disabled {
    background-color: var(--gray-lv1-color);
  }
`
