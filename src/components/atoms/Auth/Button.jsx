import React from 'react'
import styled from 'styled-components'

export default function Button({ children, form, type, onClick, disabled }) {
  return (
    <ButtonComponent
      form={form}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonComponent>
  )
}

const ButtonComponent = styled.button`
  width: 80px;
  height: 42px;
  background-color: #d9dbe0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ disabled }) => (disabled ? '#d9dbe0' : '#2e6ff2')};
  color: ${({ disabled }) => (disabled ? '#8D9299' : '#ffffff')};
`
