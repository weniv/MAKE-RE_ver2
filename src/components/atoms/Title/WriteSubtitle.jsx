import React from 'react'
import { styled } from 'styled-components'

export default function WriteSubtitle({ subtitle }) {
  return <Title>{subtitle}</Title>
}

WriteSubtitle.defaultProps = {
  subtitle: '서브타이틀',
}

// style
const Title = styled.h4`
  color: var(--font-color);
  font-size: 20px;
`
