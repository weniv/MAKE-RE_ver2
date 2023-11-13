import React from 'react'
import styled from 'styled-components'

export default function WarningMsg({ children }) {
  return <Msg>{children}</Msg>
}

const Msg = styled.p`
  font-size: 12px;
  color: #ff3440;
  margin-top: -8px;
`
