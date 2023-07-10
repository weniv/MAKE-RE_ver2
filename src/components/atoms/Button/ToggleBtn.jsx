import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export default function ToggleBtn({ onClick }) {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle((prev) => !prev)
    onClick()
  }
  return (
    <BtnCont onClick={handleToggle} toggle={toggle}>
      <Circle toggle={toggle} />
    </BtnCont>
  )
}
ToggleBtn.defaultProps = {
  onClick: () => {},
}

const BtnCont = styled.button`
  width: 64px;
  height: 32px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    !props.toggle ? 'var(--main-color)' : 'var(--lightgray-color)'};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`
const Circle = styled.div`
  background-color: white;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  position: absolute;
  left: 5px;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translateX(32px);
    `}
`
