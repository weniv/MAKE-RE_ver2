import React from 'react'
import styled from 'styled-components'
import LinkItem from './LinkItem'

export default function FooterItem({ title, list }) {
  return (
    <li>
      <ItemTitle>{title}</ItemTitle>
      <ItemList>
        {list.map((el, idx) => (
          <LinkItem key={idx} content={el.content} link={el.link} />
        ))}
      </ItemList>
    </li>
  )
}
FooterItem.defaultProps = {
  title: '',
  list: [],
}
const ItemTitle = styled.p`
  color: var(--surface-color);
  font-size: 14px;
  display: inline-block;
  margin-bottom: 20px;
`

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;

  li a {
    color: var(--gray-lv3-color);
  }

  & a {
    white-space: nowrap;
  }
`
