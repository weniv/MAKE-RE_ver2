import React, { useState } from 'react'
import styled from 'styled-components'
import WarningMsg from './WarningMsg'
import { Input, Button } from './index'
import EmailAuthCheck from '../../../assets/icon-email-auth.svg'

export default function AuthCode({ warning, alertMsg, isDone, setIsDone }) {
  const [code, setCode] = useState(null) // code 번호
  const [isActive, setIsActive] = useState(true) // 확인 버튼 활성화 여부
  const [isOpen, setIsOpen] = useState(false)

  const sendCode = () => {
    const exCode = '12345'
    setIsOpen(true)

    if (code === exCode) {
      setIsDone(true)
    } else {
      setIsDone(false)
    }

    setCode('')
    setIsActive(true)
  }

  const handleCode = (e) => {
    const { value } = e.target
    setCode(value)

    if (value.length === 5) {
      setIsActive(false)
    } else {
      setIsActive(true)
    }
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
                value={code}
                onChange={(e) => handleCode(e)}
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
            <a>재전송</a>
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
  border: 1px solid #d9dbe0;

  p.title {
    font-weight: 700;
    font-size: 16px;
    color: #121314;
  }

  p.description {
    font-size: 14px;
    color: #47494d;
  }

  p.alert {
    font-size: 14px;
    font-weight: 500;
  }

  p.done {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #2e6ff2;

    &::before {
      content: url(${EmailAuthCheck});
    }
  }

  p.warning {
    color: #ff3440;
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
  gap: 4px;
  p {
    font-size: 12px;
    color: #47494d;
  }

  a {
    font-size: 12px;
    font-weight: 700;
    color: #2e6ff2;
    cursor: pointer;
  }
`
