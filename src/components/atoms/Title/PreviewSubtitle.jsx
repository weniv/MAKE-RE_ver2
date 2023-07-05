import React from 'react'
import styled from 'styled-components'

export default function PreviewSubtitle({ title }) {
  return <Subtitle>{title}</Subtitle>
}
PreviewSubtitle.defaultProps = {
  title: 'Title',
}

const Subtitle = styled.h3`
  margin-top: 36px;
  padding-bottom: 10px;
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  text-align: left;

  color: var(--main-color);
  border-bottom: 1px solid var(--main-color);
`
