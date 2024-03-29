import { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import LinkIcon from '../../../assets/icon-Url.svg'

export default function DefaultInput({
  children,
  essentialMsg,
  width,
  marginRight,
  id,
  type,
  name,
  placeholder,
  inputData,
  onChange,
  onKeyDown,
  maxLength,
  isFirst,
}) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (isFirst && inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <InputCont type={type}>
      <Label htmlFor={id}>
        {children}
        <strong> {essentialMsg}</strong>
      </Label>
      <Input
        ref={inputRef}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        width={width}
        marginRight={marginRight}
        value={inputData}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoComplete="off"
        maxLength={maxLength}
      />
    </InputCont>
  )
}

const InputCont = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${(props) => (props.type === 'resumeTitle' ? '0px' : '8px')};
  width: ${(props) => (props.type === 'resumeTitle' ? '706px' : '100%')};
`

const Label = styled.label`
  color: var(--gray-lv4-color);
  font-size: 12px;
  font-weight: 700;

  strong {
    color: var(--primary-color);
  }
`

export const Input = styled.input`
  width: ${(props) => props.width};
  height: 42px;
  margin-right: ${(props) => props.marginRight};
  padding: 11px 0 11px;
  padding-left: ${(props) => (props.type === 'url' ? '36px' : '16px')};
  border-radius: 10px;
  background-image: ${(props) =>
    props.type === 'url' ? `url(${LinkIcon})` : null};
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 12px;
`
