import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import AlertIcon from '../../../assets/icon-alert-circle.svg'
import ColorIcon from '../ColorIcon/ColorIcon'
import { ResumeContext } from '../../../context/ResumeContext'

export function checkRequiredValidity(ref) {
  const form = ref.current
  const input = form?.querySelector('.inputWrap input')
  const alertMsg = form?.querySelector('.alertMsg')

  if (input) {
    if (input?.value === '') {
      alertMsg.style.display = 'flex'
      input.style.outline = '2px solid var(--error-color)'
    } else {
      alertMsg.style.display = 'none'
      input.style.outline = ''
    }
  }
}

export default function RequireInput({
  id,
  type,
  width = '100%',
  name,
  onChange,
  inputData,
  children,
  placeholder,
}) {
  const { formRef } = useContext(ResumeContext)

  return (
    <form id="requiredForm" ref={formRef}>
      <InputCont type={type} className="inputWrap">
        <label htmlFor={id}>{children}</label>
        <input
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          width={width}
          value={inputData}
          onChange={onChange}
          autoComplete="off"
          // pattern=".*\S.*"
          // required
        />
      </InputCont>

      <Alert className="alertMsg">
        <ColorIcon iconPath={AlertIcon} type="error" width="14px" />
        <p className="requiredAlert">{`${children}은 필수로 입력해야 합니다.`}</p>
      </Alert>
    </form>
  )
}

const InputCont = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${(props) => (props.type === 'resumeTitle' ? '0px' : '8px')};
  width: ${(props) => (props.type === 'resumeTitle' ? '706px' : '100%')};

  label {
    color: var(--gray-lv4-color);
    font-size: 12px;
  }

  input {
    width: ${(props) => props.width};
    height: 42px;
    margin-right: ${(props) => props.marginRight};
    padding: 11px 0 11px;
    padding-left: ${(props) => (props.type === 'url' ? '36px' : '16px')};
    border-radius: 10px;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 12px;
  }
`

const Alert = styled.div`
  display: none;
  align-items: center;
  gap: 4px;

  p {
    font-size: 12px;
    font-weight: 500;
    color: var(--error-color);
  }
  margin: 8px 0 0 0;
`
