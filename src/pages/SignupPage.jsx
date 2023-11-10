import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Layout, Input } from '../components/atoms/Auth'

const LabelInput = ({
  lableTitle,
  name,
  type,
  placeholder,
  handleOnChange,
  warning,
}) => {
  return (
    <div>
      <Label htmlFor={name} warning={warning}>
        {lableTitle}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        warning={warning}
      />
      {warning ? <Alert>※ 사용 중인 이메일입니다.</Alert> : null}
    </div>
  )
}

let emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')

export default function SignupPage() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [isActive, setIsActive] = useState(false)
  const [isWarning, setIsWarning] = useState(false)
  const [isDuplicate, setIsDuplicate] = useState(false)

  useEffect(() => {
    if (!!input['email'] && !!input['password'] & !!input['passwordConfirm']) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }

    setIsDuplicate(emailRegex.test(input['email']))
  }, [{ ...input }])

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  // 이메일 중복 체크
  const CheckDuplicates = async () => {
    const testEmail = 'user1@mail.com'
    try {
      if (input['email'] === testEmail) {
        setIsWarning(true)
      } else {
        setIsWarning(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout>
      <Title>회원가입</Title>
      <Form id="singupForm" method="POST">
        <EmailWrap id="signupEmailForm" isDuplicate={isDuplicate}>
          <LabelInput
            lableTitle="이메일"
            name="email"
            type="email"
            placeholder={''}
            handleOnChange={(e) => {
              handleOnchange(e)
            }}
            warning={isWarning}
          />
          <button
            form="singupForm"
            type="button"
            onClick={CheckDuplicates}
            disabled={!isDuplicate}
          >
            인증
          </button>
        </EmailWrap>
        <LabelInput
          lableTitle="비밀번호"
          name="password"
          type="password"
          placeholder={''}
          handleOnChange={(e) => {
            handleOnchange(e)
          }}
        />
        <LabelInput
          lableTitle="비밀번호 확인"
          name="passwordConfirm"
          type="password"
          placeholder={''}
          handleOnChange={(e) => {
            handleOnchange(e)
          }}
        />
      </Form>
      <Notice>
        본인은 만 14세 이상이며, 메이커리의
        <br /> <span>이용 약관, 개인정보취급방침</span>을 확인하였습니다.
      </Notice>
      <Button form="singupForm" isActive={isActive} disabled={!isActive}>
        동의하고 회원가입
      </Button>
    </Layout>
  )
}

const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
  color: #121314;
  margin-bottom: 60px;
`

const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: ${({ warning }) => (warning ? '#ff3440' : '#47494d')};
`

const Alert = styled.p`
  font-size: 12px;
  color: #ff3440;
  padding-top: 8px;
`

const EmailWrap = styled.div`
  position: relative;
  display: flex;

  button {
    position: absolute;
    top: 16px;
    right: 0;
    width: 80px;
    height: 42px;
    background-color: #d9dbe0;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    background-color: ${({ isDuplicate }) =>
      isDuplicate ? '#2e6ff2' : '#d9dbe0'};
    color: ${({ isDuplicate }) => (isDuplicate ? '#fff' : '#8D9299')};
  }
`

const Notice = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #47494d;
  font-weight: 500;
  text-align: center;
  margin: 24px 0;

  span {
    color: #2e6ff2;
  }
`

const Button = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  background-color: ${({ isActive }) => (isActive ? '#2e6ff2' : '#d9dbe0')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#8d9299')};
`
