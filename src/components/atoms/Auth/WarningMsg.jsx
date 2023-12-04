import React from 'react'
import styled from 'styled-components'

export default function WarningMsg({ children }) {
  return <Msg>{children}</Msg>
}

const Msg = styled.p`
  font-size: 12px;
  color: var(--error-color);
  margin-top: -8px;
`
