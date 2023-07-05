import React from 'react'
import styled from 'styled-components'

export default function PreviewMonthItem({ date, content }) {
  return (
    <Item>
      <ItemDate>{date}</ItemDate>
      <p>{content}</p>
    </Item>
  )
}

PreviewMonthItem.defaultProps = {
  date: '-',
  content: '-',
}

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 10px auto;
  font-size: 14px;
`

const ItemDate = styled.p`
  width: 80px;
  color: #bdbdbd;
  font-weight: 700;
`
