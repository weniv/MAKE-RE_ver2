import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import IconLeftArrow from '../../../assets/IconLeftArrow'

export default function GotoMypage() {
  const [isHover, setIsHover] = useState(false)
  return (
    <Link
      to="/myresume"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <IconLeftArrow className="icon" hover={isHover} />
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
`
