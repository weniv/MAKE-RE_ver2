import React from 'react'
import styled from 'styled-components'

export default function Input({ name, type, placeholder, ref, onChange }) {
  return (
    <CommonInput
      name={name}
      type={type}
      placeholder={placeholder}
      ref={ref}
      onChange={onChange}
    />
  )
}

const CommonInput = styled.input`
  width: 100%;
  height: 42px;
  border: none;
  border-bottom: 2px solid #d9dbe0;
  padding-left: 8px;
  margin: 8px 0;

  &::placeholder {
    font-size: 16px;
    color: #8d9299;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #2e6ff2;
    background-color: #f3f5fa;
  }
`
