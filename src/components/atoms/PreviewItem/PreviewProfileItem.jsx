import React from 'react'
import styled from 'styled-components'
import move from '../../../assets/icon-link.svg'
import urlValidation from '../../../utils/urlValidation'

export default function PreviewProfileItem({ title, content, type }) {
  return (
    <Item>
      <ItemTitle>{title}</ItemTitle>
      {type === 'link' ? (
        <ItemLink href={urlValidation(content)} target="_blank">
          {content}
        </ItemLink>
      ) : (
        <p>{content}</p>
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
  gap: 4px;
  font-size: 14px;
`

const ItemTitle = styled.p`
  font-weight: 600;
  width: 100px;
`

const ItemLink = styled.a`
  text-decoration: none;

  &::after {
    content: '';
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
