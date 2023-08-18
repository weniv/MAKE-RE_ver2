import React from 'react'
import { styled } from 'styled-components'
import checkIcon from '../../../assets/icon-square-Check.svg'
import checkFillIcon from '../../../assets/icon-square-Check-fill.svg'

export default function ProceedingBtn({
  name,
  idx,
  type,
  onChange,
  isStill,
  onClick,
}) {
  const handleCheck = () => {
    onClick()
  }

  return (
    <Wrap>
      <Checkbox
        id={`${type}-proceeding-${idx}`}
        type="checkbox"
        name={name}
        onClick={handleCheck}
        onChange={onChange}
        value={isStill}
      ></Checkbox>
      <Lable
        htmlFor={`${type}-proceeding-${idx}`}
        img={isStill ? checkFillIcon : checkIcon}
      />
    </Wrap>
  )
}
ProceedingBtn.defaultProps = {
  onClick: function () {},
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
