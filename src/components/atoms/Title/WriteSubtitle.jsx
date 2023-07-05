import React from 'react'
import { styled } from 'styled-components'

export default function WriteSubtitle({ id, subtitle }) {
  return <Title htmlFor={`subtitle-${id}`}>{subtitle}</Title>
}

WriteSubtitle.defaultProps = {
  id: null,
  subtitle: '서브타이틀',
}

// style
const Title = styled.label`
  color: var(--font-color);
  font-size: 20px;
  margin: 32px 0 24px;
`
