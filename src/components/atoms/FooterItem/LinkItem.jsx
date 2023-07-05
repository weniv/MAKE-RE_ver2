import React from 'react'
import styled from 'styled-components'
import move from '../../../assets/icon-link.svg'

export default function LinkItem({ content, link }) {
  return (
    <li>
      <Link href={link} target="_blank">
        {content}
      </Link>
    </li>
  )
}
const Link = styled.a`
  color: var(--lightgray-color);
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
