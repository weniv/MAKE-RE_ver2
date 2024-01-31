import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ColorIcon from '../ColorIcon/ColorIcon'
import IconLeftArrow from '../../../assets/icon-Left-arrow.svg'

export default function GotoMypage() {
  return (
    <Link to="/myresume">
      <ColorIcon iconPath={IconLeftArrow} type="iconLv2" />
    </Link>
  )
}

const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: var(--background-color);
  border-radius: 10px;

  div:hover {
    background-color: var(--surface-color);
  }
`
