import React from 'react'
import { styled } from 'styled-components'
import checkIcon from '../../assets/icon-Check.svg'
import checkFillIcon from '../../assets/icon-Check-fill.svg'
import hamburgerIcon from '../../assets/icon-hamburger.svg'

export default function NavList({ id, listName, isFill }) {
  return (
    <Cont key={id} isFill={isFill}>
      <p>{listName}</p>
    </Cont>
  )
}

NavList.defaultProps = {
  id: null,
  listName: '프로필',
  isFill: false,
}

const Cont = styled.div`
  position: relative;
  display: flex;
  width: 240px;
  height: 48px;
  background-color: var(--bg-color);
  color: var(--font-color);
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  align-items: center;
  padding: 14px 12px;
  box-sizing: border-box;
  cursor: pointer;

  &:before {
    content: url(${({ isFill }) => (isFill ? checkFillIcon : checkIcon)});
    margin-right: 12px;
  }

  &::after {
    content: url(${hamburgerIcon});
    position: absolute;
    right: 16px;
  }

  &:hover {
    background-color: var(--hover-color);
  }
`
