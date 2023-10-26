import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import LightIcon from '../../../assets/icon-light-mode.svg'
import DarkIcon from '../../../assets/icon-dark-mode.svg'
import ThemeContext from '../../../context/ThemeContext'
import ColorContext from '../../../context/ColorContext'

export default function ToggleBtn({ onClick }) {
  const { themeMode, toggleTheme } = useContext(ThemeContext)
  const { mainColor } = useContext(ColorContext)

  return (
    <BtnCont mainColor={mainColor} onClick={toggleTheme} mode={themeMode}>
      <span className="ir">다크모드 온/오프 버튼</span>
      <Circle mode={themeMode} />
    </BtnCont>
  )
}
ToggleBtn.defaultProps = {
  onClick: () => {},
}

const BtnCont = styled.button`
  width: 56px;
  height: 32px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  background-color: var(--primary-color);
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
    props.mode === 'dark' &&
    css`
      transform: translateX(24px);
    `}

  background-image: ${(props) =>
    props.mode === 'light' ? `url(${LightIcon})` : `url(${DarkIcon})`};

  background-color: var(--background-color);
  background-repeat: no-repeat;
  background-position: center;
`
