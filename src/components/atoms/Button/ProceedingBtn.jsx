import React, { useState } from 'react'
import { styled } from 'styled-components'
import checkIcon from '../../../assets/icon-square-Check.svg'
import checkFillIcon from '../../../assets/icon-square-Check-fill.svg'

export default function ProceedingBtn({ name, onChange, inputData, onClick }) {
  const [isChecked, setIsChecked] = useState(inputData)

  const handleCheck = () => {
    setIsChecked(!isChecked)
    onClick()
  }

  return (
    <Wrap>
      <Checkbox
        id="proceeding"
        type="checkbox"
        name={name}
        onClick={handleCheck}
        onChange={onChange}
        value={!isChecked}
      ></Checkbox>
      <Lable htmlFor="proceeding" img={isChecked ? checkFillIcon : checkIcon} />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 0 24px;
  cursor: pointer;
`

const Checkbox = styled.input`
  display: none;
`

const Lable = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  &::before {
    content: ${({ img }) => `url(${img})`};
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  &::after {
    content: '진행 중';
    font-size: 14px;
    font-weight: 500;
  }
`
