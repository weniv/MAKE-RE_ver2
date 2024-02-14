import React, { useState } from 'react'
import styled from 'styled-components'
import WarningMsg from './WarningMsg'
import { Input, Button } from './index'
import { issuanceCode } from '../../../utils/issuanceCode'
import EmailAuthCheck from '../../../assets/icon-email-auth.svg'
import HelpCircle from '../../../assets/icon-help-circle.svg'

export default function AuthCode({
  warning,
  alertMsg,
  isDone,
  setIsDone,
  code,
  setCode,
}) {
  const [inputCode, setInputCode] = useState(null) // 입력된 인증번호
  const [isActive, setIsActive] = useState(true) // 확인 버튼 활성화 여부
  const [isOpen, setIsOpen] = useState(false) // 이메일 인증 성공 여부

  const sendCode = () => {
    setIsOpen(true)

    if (inputCode === code) {
      setIsDone(true)
      setInputCode(code)
    } else {
      setIsDone(false)
      setInputCode('')
    }

    setIsActive(true)
  }

  const handleCode = (e) => {
    const { value } = e.target
    setInputCode(value)

    if (value.length === 5) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
  }

  // 인증번호 발급
  const getAuthCode = () => {
    issuanceCode(setCode)
  }

  return (
    <>
      {warning ? (
        <WarningMsg>{alertMsg}</WarningMsg>
      ) : (
        <Wrap>
          <Cont>
            <p className="title">인증코드 입력</p>
            <p className="description">
              이메일로 전송된 인증코드를 입력해주세요 :)
            </p>
            <InputWrap>
              <Input
                id="authCode"
                name="authCode"
                type="text"
                value={inputCode}
                onChange={(e) => handleCode(e)}
                disabled={isDone}
              />
              <Button type="button" onClick={sendCode} disabled={isActive}>
                확인
              </Button>
            </InputWrap>
            <div style={{ display: isOpen ? 'block' : 'none' }}>
              {isDone ? (
                <p className="alert done">이메일 인증이 완료되었어요 :)</p>
              ) : (
                <p className="alert warning">※ 인증번호가 올바르지 않아요.</p>
              )}
            </div>
          </Cont>
          <ResendWrap>
            <p>인증코드를 받지 못하셨나요?</p>
            <button type="button" onClick={getAuthCode}>
              <a>재전송</a>
            </button>
          </ResendWrap>
        </Wrap>
      )}
    </>
  )
}

const Wrap = styled.div``

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 322px;
  gap: 12px;
  padding: 20px;
  border-radius: 10px;
  margin: 0 0 12px 0;
  border: 1px solid var(--gray-lv3-color);

  p.title {
    font-weight: 700;
    font-size: 16px;
    color: var(--surface-color);
  }

  p.description {
    font-size: 14px;
    color: var(--gray-lv4-color);
  }

  p.alert {
    font-size: 14px;
    font-weight: 500;
  }

  p.done {
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--primary-color);

    &::before {
      content: url(${EmailAuthCheck});
    }
  }

  p.warning {
    color: var(--error-color);
  }
`

const InputWrap = styled.div`
  display: flex;
  gap: 8px;
  button.submit {
  }
`

const ResendWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  p {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    color: var(--gray-lv4-color);

    &::before {
      content: url(${HelpCircle});
    }
  }

  a {
    font-size: 12px;
    font-weight: 700;
    color: var(--primary-color);
    cursor: pointer;
  }
`
