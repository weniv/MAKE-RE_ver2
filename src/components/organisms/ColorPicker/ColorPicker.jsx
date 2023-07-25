import { useContext, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { SketchPicker } from 'react-color'
import ColorPalette from '../../atoms/Nav/ColorPalette'
import ColorContext from '../../../context/ColorContext'

export default function ColorPicker() {
  const { mainColor, updateMainColor } = useContext(ColorContext)
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

  return (
    <>
      <Flexbox>
        <ColorPickerCont>
          <ColorPalette
            color="#2E6FF2"
            setColor={handleChangeComplete}
          ></ColorPalette>
          <ColorPalette
            color="#5F3AF2"
            setColor={handleChangeComplete}
          ></ColorPalette>
          <ColorPalette
            color="#F2785C"
            setColor={handleChangeComplete}
          ></ColorPalette>
          <ColorPalette
            color="#F2B705"
            setColor={handleChangeComplete}
            setPickerOpen={setIsOpen}
          ></ColorPalette>
          <ColorPalette
            color="#0FA650"
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
          <PickBox>
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
  background: var(--bg-color);
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
  background-color: #fff;
  border-radius: 16px;
`

const Picker = styled(SketchPicker)`
  border-radius: 16px !important;
  box-shadow: none !important;
  background-color: var(--bg-color) !important;
  padding: 20px !important;
`
