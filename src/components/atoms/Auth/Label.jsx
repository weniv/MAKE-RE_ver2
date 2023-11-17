import React from 'react'
import styled from 'styled-components'

export default function Label({ children, htmlFor, warning }) {
  return (
    <LableComponent htmlFor={htmlFor} warning={warning}>
      {children}
    </LableComponent>
  )
}

const LableComponent = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: ${({ warning }) => (warning ? '#ff3440' : '#47494d')};
`
