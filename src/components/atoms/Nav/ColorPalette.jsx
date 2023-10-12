import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'

export default function ColorPalette({ color, setColor }) {
  const [isClick, setIsClick] = useState(false)

  const handleClick = () => {
    setColor(color)
    setIsClick(true)
  }

  const colorRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (colorRef.current && !colorRef.current.contains(e.target)) {
        setIsClick(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [colorRef])

  return (
    <Cont
      color={color}
      onClick={handleClick}
      isClick={isClick}
      ref={colorRef}
    ></Cont>
  )
}

const Cont = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ color, props }) => color || props.theme.primary};

  ${(props) =>
    props.isClick &&
    css`
      box-shadow: ${(props) => props.color} 0px 0px 8px;
    `}
`
