import React from 'react'
import { styled } from 'styled-components'

export default function WriteSubtitle({ id, subtitle }) {
  return <Title htmlFor={id}>{subtitle}</Title>
}

WriteSubtitle.defaultProps = {
  id: 1,
  subtitle: '서브타이틀',
}

// style
const Title = styled.label`
  display: inline-flex;
  color: var(--surface-color);
  font-size: 20px;
  margin: 32px 0 24px;
`
