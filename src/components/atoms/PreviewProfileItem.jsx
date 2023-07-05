import React from 'react'
import styled from 'styled-components'

export default function PreviewProfileItem({ title, content }) {
  return (
    <Item>
      <ItemTitle>{title}</ItemTitle>
      <ItemContent>{content}</ItemContent>
    </Item>
  )
}
PreviewProfileItem.defaultProps = {
  title: '-',
  content: '-',
}

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 10px auto;
  font-size: 14px;
`

const ItemTitle = styled.p`
  font-weight: 700;
  width: 92px;
`

const ItemContent = styled.strong``
