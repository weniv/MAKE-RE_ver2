import React from 'react'
import { styled } from 'styled-components'

export default function DateInput({ inputName, id }) {
  return (
    <Wrap>
      <Label htmlFor={`dateInput-${id}`}>{inputName}</Label>
      <Input id={`dateInput-${id}`} type="month" max="9999-12" />
    </Wrap>
  )
}

DateInput.defaultProps = {
  inputName: '업무 시작일',
  id: null,
}

// style
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 12px;
  color: var(--gray-color);
  font-weight: 700;
`

const Input = styled.input`
  width: 347px;
  height: 42px;
  border-radius: 10px;
`
