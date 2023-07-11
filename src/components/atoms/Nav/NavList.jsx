import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import checkIcon from '../../../assets/icon-Check.svg'
import checkFillIcon from '../../../assets/icon-Check-fill.svg'
import hamburgerIcon from '../../../assets/icon-hamburger.svg'

export default function NavList({ id, listName, isFill, clicked }) {
  const [isClick, setIsClick] = useState(clicked)
  const navListRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navListRef.current && !navListRef.current.contains(e.target)) {
        setIsClick(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [navListRef])

  return (
    <Cont
      key={id}
      isFill={isFill}
      onClick={() => {
        setIsClick(true)
      }}
      ref={navListRef}
      isClick={isClick}
    >
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

  ${(props) =>
    props.isClick &&
    css`
      border: 2px solid var(--main-color);
      background-color: var(--hover-color);
    `}
`
