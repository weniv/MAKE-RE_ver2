import React from 'react'
import { styled } from 'styled-components'

export default function WriteTitle({ title, description }) {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrap>
  )
}

WriteTitle.defaultProps = {
  title: '타이틀',
  description: '타이틀 설명',
}

// style
const Wrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin: 52px 0;
`

const Title = styled.h2`
  color: var(--surface-color);
  font-size: 32px;
`
const Description = styled.p`
  color: var(--gray-lv4-color);
  font-size: 14px;
`
