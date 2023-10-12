import React, { useState, useContext } from 'react'
import styled, { css } from 'styled-components'
import LightIcon from '../../../assets/icon-light-mode.svg'
import DarkIcon from '../../../assets/icon-dark-mode.svg'
import ThemeContext from '../../../context/ThemeContext'

export default function ToggleBtn({ onClick }) {
  const { themeMode, toggleTheme } = useContext(ThemeContext)

  return (
    <BtnCont onClick={toggleTheme} mode={themeMode}>
      <span className="ir">다크모드 온/오프 버튼</span>
      <Circle mode={themeMode} />
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
  background-color: ${(props) => props.theme.primary};
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
      transform: translateX(32px);
    `}

  background-image: ${(props) =>
    props.mode === 'light' ? `url(${LightIcon})` : `url(${DarkIcon})`};

  background-color: ${(props) => props.theme.background};

  background-repeat: no-repeat;
  background-position: center;
`
