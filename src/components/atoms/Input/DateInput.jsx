import React from 'react'
import { styled } from 'styled-components'
import CalendarIcon from '../../../assets/icon-Calendar.svg'

export default function DateInput({
  id,
  children,
  width,
  name,
  onChange,
  inputData,
}) {
  return (
    <Wrap>
      <Label htmlFor={`dateInput-${id}`}>{children}</Label>
      <Input
        id={`dateInput-${id}`}
        type="month"
        max="9999-12"
        width={width}
        name={name}
        value={inputData}
        onChange={onChange}
      />
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
`

const Label = styled.label`
  font-size: 12px;
  color: var(--gray-color);
  margin-bottom: 8px;
  font-weight: 500; // Medium
`

const Input = styled.input`
  position: relative;
  width: ${(props) => props.width || '347px'};
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
