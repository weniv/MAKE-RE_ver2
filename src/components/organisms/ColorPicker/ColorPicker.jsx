import { useContext, useEffect, useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { BlockPicker } from 'react-color'
import ColorPalette from '../../atoms/Nav/ColorPalette'
import ColorContext from '../../../context/ColorContext'
import ThemeContext from '../../../context/ThemeContext'
import { lightTheme, darkTheme } from '../../../theme/theme'

export default function ColorPicker() {
  const { mainColor, updateMainColor } = useContext(ColorContext)
  const { themeMode } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('mainColor', mainColor)
  }, [mainColor])

  const handleChangeComplete = (color) => {
    if (typeof color === 'object') {
      updateMainColor(color.hex)
    } else {
      updateMainColor(color)
    }
  }

  // PickBox 외부 클릭했을 시 닫기
  const pickBoxRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickBoxRef.current && !pickBoxRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [pickBoxRef])

  return (
    <>
      <Flexbox>
        <ColorPickerCont>
          <ColorPalette
            // color="#2E6FF2"
            // color={
            //   themeMode === 'light'
            //     ? lightTheme.codePurple
            //     : darkTheme.codePurple
            // }
            color={(themeMode === 'light' ? lightTheme : darkTheme).codePurple}
            setColor={handleChangeComplete}
          ></ColorPalette>
          <ColorPalette
            // color="#5F3AF2"
            color={(themeMode === 'light' ? lightTheme : darkTheme).codePink}
            setColor={handleChangeComplete}
          ></ColorPalette>
          <ColorPalette
            // color="#F2785C"
            color={
              (themeMode === 'light' ? lightTheme : darkTheme).primaryColor
            }
            setColor={handleChangeComplete}
          ></ColorPalette>
          <ColorPalette
            color={(themeMode === 'light' ? lightTheme : darkTheme).codeGreen}
            setColor={handleChangeComplete}
            setPickerOpen={setIsOpen}
          ></ColorPalette>
          <ColorPalette
            // color="#0FA650"
            color={(themeMode === 'light' ? lightTheme : darkTheme).codeOrange}
            setColor={handleChangeComplete}
          ></ColorPalette>
          <ColorPickerBtn
            onClick={() => {
              setIsOpen((isOpen) => !isOpen)
            }}
            isOpen={isOpen}
            mainColor={mainColor}
          >
            <span className="ir">메인 색상 선택하기</span>
          </ColorPickerBtn>
        </ColorPickerCont>
        {isOpen && (
          <PickBox ref={pickBoxRef}>
            <Picker color={mainColor} onChangeComplete={handleChangeComplete} />
          </PickBox>
        )}
      </Flexbox>
    </>
  )
}

const Flexbox = styled.div`
  position: relative;
`

const ColorPickerCont = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 280px;
  height: 70px;
  padding: 20px;
  border-radius: 16px;
  background-color: var(--background-color);
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.04);
`

const ColorPickerBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid var(--gray-color);
  background: conic-gradient(
    from 180deg at 50% 50%,
    #f22e2e 0deg,
    #db00ff 69.37499821186066deg,
    #05f 146.25deg,
    #00d1ff 217.50000715255737deg,
    #59ff31 288.7499928474426deg,
    #f00 360deg
  );
  ${(props) =>
    props.isOpen &&
    css`
      box-shadow: ${(props) => props.mainColor} 0px 0px 8px;
    `}
`

const PickBox = styled.div`
  position: absolute;
  top: 0;
  // NOTE: WritePage > Main의 gap 변경 시 20px 수정 필요
  left: calc(100% + 20px);
  border-radius: 16px;
  background-color: var(--background-color) !important;

  .block-picker {
    background-color: var(--background-color) !important;
  }

  .block-picker > div:first-child {
    transform: rotate(-90deg) !important;
    top: 30px !important;
    left: -4px !important;
  }

  .block-picker > div:nth-child(2) {
    border-radius: 16px 16px 0 0 !important;
  }
`

const Picker = styled(BlockPicker)`
  border-radius: 16px !important;
  box-shadow: none !important;
`
