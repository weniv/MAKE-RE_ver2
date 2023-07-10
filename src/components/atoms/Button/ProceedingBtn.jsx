import React, { useState } from 'react'
import { styled } from 'styled-components'
import checkIcon from '../../../assets/icon-square-Check.svg'
import checkFillIcon from '../../../assets/icon-square-Check-fill.svg'

export default function ProceedingBtn() {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheck = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Wrap>
      <Btn id="proceeding" type="button" onClick={handleCheck}>
        <Img src={isChecked ? checkFillIcon : checkIcon} />
      </Btn>
      <Lable htmlFor="proceeding">진행 중</Lable>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 24px;
  cursor: pointer;
`

const Btn = styled.button`
  display: flex;
  align-items: center;
`

const Img = styled.img`
  width: 20px;
  height: 20px;
`

const Lable = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
  cursor: pointer;
`
