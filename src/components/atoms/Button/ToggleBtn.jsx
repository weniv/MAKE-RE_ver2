import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import LightIcon from '../../../assets/icon-light-mode.svg'
import DarkIcon from '../../../assets/icon-dark-mode.svg'

export default function ToggleBtn({ onClick }) {
  const [isDark, setisDark] = useState(false)

  const handleToggle = () => {
    setisDark((prev) => !prev)
    onClick()
  }
  return (
    <BtnCont onClick={handleToggle} isDark={isDark}>
      <span className="ir">다크모드 온/오프 버튼</span>
      <Circle isDark={isDark} />
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
  background-color: var(--main-color);
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
    props.isDark &&
    css`
      transform: translateX(32px);
    `}
  background-color: ${(props) =>
    !props.isDark ? 'var(--bg-color)' : 'var(--font-color)'};
  background-image: ${(props) =>
    !props.isDark ? `url(${LightIcon})` : `url(${DarkIcon})`};
  background-repeat: no-repeat;
  background-position: center;
`
