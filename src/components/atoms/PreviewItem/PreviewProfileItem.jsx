import React from 'react'
import styled from 'styled-components'
import move from '../../../assets/icon-link.svg'

export default function PreviewProfileItem({ title, content, type }) {
  return (
    <Item>
      <ItemTitle>{title}</ItemTitle>
      {type === 'link' ? (
        <ItemLink href={content}>{content}</ItemLink>
      ) : (
        <strong>{content}</strong>
      )}
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

const ItemLink = styled.a`
  color: #000;
  text-decoration: none;

  &::after {
    content: '';
    /* background: url(move) no-repeat 0px 0px; */
    background: url(${move}) no-repeat 0px 0px;
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 4px;
  }

  &:hover {
    text-decoration: underline;
  }
`
