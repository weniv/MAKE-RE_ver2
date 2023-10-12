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
  isStill,
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
        readOnly={isStill}
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
  color: ${(props) => props.theme.grayLv4};
  margin-bottom: 8px;
  font-weight: 500; // Medium
`

const Input = styled.input`
  position: relative;
  width: ${(props) => props.width || '347px'};
  height: 42px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.grayLv2};
  padding: 11px 12px 11px 16px;
  box-sizing: border-box;
  color: ${(props) => props.theme.grayLv3};

  &::-webkit-calendar-picker-indicator {
    width: 20px;
    height: 20px;
    background-image: url(${CalendarIcon});
    cursor: pointer;
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.primary};
  }

  &:read-only {
    background-color: ${(props) => props.theme.grayLv2};
    cursor: not-allowed;
    opacity: 0.4;
  }
`
