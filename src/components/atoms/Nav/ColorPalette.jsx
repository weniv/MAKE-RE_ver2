import React from 'react'
import { styled } from 'styled-components'

export default function ColorPalette({ color }) {
  return <Cont color={color}></Cont>
}

const Cont = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : 'var(--main-color)')};
`
