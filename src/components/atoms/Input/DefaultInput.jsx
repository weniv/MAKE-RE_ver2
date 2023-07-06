// import { useState } from 'react'
import { styled } from 'styled-components'

export default function DefaultInput({
  children,
  width,
  marginRight,
  id,
  type,
  placeholder,
  inputData,
  setInputData,
}) {
  return (
    <InputCont>
      <Label htmlFor={id}>{children}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        width={width}
        marginRight={marginRight}
        value={inputData}
        onChange={(e) => {
          setInputData(e.target.value)
        }}
      />
    </InputCont>
  )
}

const InputCont = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
`

const Label = styled.label`
  color: var(--gray-color);
  font-size: 12px;
`

const Input = styled.input`
  width: ${(props) => props.width};
  height: 42px;
  margin-right: ${(props) => props.marginRight};
  padding: 11px 16px 11px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
`
