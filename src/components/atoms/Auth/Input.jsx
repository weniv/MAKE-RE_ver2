import React from 'react'
import styled from 'styled-components'

export default function Input({
  id,
  name,
  type,
  placeholder,
  ref,
  onChange,
  warning,
}) {
  return (
    <CommonInput
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      ref={ref}
      onChange={onChange}
      warning={warning}
    />
  )
}

const CommonInput = styled.input`
  width: 100%;
  height: 42px;
  border: none;
  border-bottom: 2px solid #d9dbe0;
  padding-left: 8px;
  border-bottom: ${({ warning }) => (warning ? '2px solid red;' : 'none')};

  &::placeholder {
    font-size: 16px;
    color: #8d9299;
  }

  &:focus {
    outline: none;
    border-bottom: ${({ warning }) =>
      warning ? '2px solid red;' : '2px solid #2e6ff2;'};
    background-color: #f3f5fa;
  }
`
