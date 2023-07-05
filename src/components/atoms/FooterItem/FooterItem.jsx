import React from 'react'
import styled from 'styled-components'
import LinkItem from './LinkItem'

export default function FooterItem({ title, list }) {
  return (
    <li>
      <ItemTitle>{title}</ItemTitle>
      <ItemList>
        {list.map((el) => (
          <LinkItem content={el.content} link={el.link} />
        ))}
      </ItemList>
    </li>
  )
}
FooterItem.defaultProps = {
  title: '',
  list: [],
}
const ItemTitle = styled.strong`
  font-size: 14px;
  display: inline-block;
  margin-bottom: 20px;
`

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;

  & a {
    white-space: nowrap;
  }
`
