import React from 'react'
import { styled } from 'styled-components'
import CalendarIcon from '../../assets/icon-Calendar.svg'

export default function DateInput({ id, inputName }) {
  return (
    <Wrap>
      <Label htmlFor={`dateInput-${id}`}>{inputName}</Label>
      <Input id={`dateInput-${id}`} type="month" max="9999-12" />
    </Wrap>
  )
}

DateInput.defaultProps = {
  id: null,
  inputName: '업무 시작일',
}

// style
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0 0 100px;
`

const Label = styled.label`
  font-size: 12px;
  color: var(--gray-color);
  margin-bottom: 8px;
  font-weight: 500; // Medium
`

const Input = styled.input`
  position: relative;
  width: 347px;
  height: 42px;
  border-radius: 10px;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  padding: 11px 12px 11px 16px;
  box-sizing: border-box;
  color: var(--lightgray-color);

  &::-webkit-calendar-picker-indicator {
    width: 20px;
    height: 20px;
    background-image: url(${CalendarIcon});
    cursor: pointer;
  }

  &:focus {
    outline: 2px solid var(--main-color);
  }
`
