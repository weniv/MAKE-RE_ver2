import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthCode, Layout } from '../components/atoms/Auth'
import { LabelInput } from '../components/organisms/Auth'
import { WarningMsg } from '../components/atoms/Auth'
import { issuanceCode } from '../utils/issuanceCode'
import { useNavigate } from 'react-router-dom'

let emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')

export default function SignupPage() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [isActive, setIsActive] = useState(false) // 회원가입 버튼 활성화 여부
  const [isDuplicate, setIsDuplicate] = useState(false) // 이메일 중복여부
  const [isValidate, setIsValidate] = useState(false) // 이메일 형식 검증
  const [isConfirm, setIsConfirm] = useState(false) // 비밀번호 확인 일치 여부
  const [isOpen, setIsOpen] = useState(false) // 인증코드 창 활성화 여부
  const [isDone, setIsDone] = useState(false) // 이메일 인증 완료 여부
  const [code, setCode] = useState(null) // 이메일 인증 코드
  const navigate = useNavigate()

  // 버튼 활성화 조건에 이메일 인증 여부 추가할 것
  useEffect(() => {
    if (
      !!input['email'] &&
      !!input['password'] & !!input['passwordConfirm'] &&
      isConfirm &&
      isDone
    ) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }

    setIsValidate(emailRegex.test(input['email']))
  }, [{ ...input }])

  useEffect(() => {
    cofirmPassword()
  }, [input['password'], input['passwordConfirm']])

  useEffect(() => {
    setIsOpen(false)
    setIsDuplicate(false)
  }, [input['email']])

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  // 이메일 중복 체크
  const CheckDuplicates = async () => {
    setIsOpen(true)
    const testEmail = 'user1@mail.com'
    try {
      if (input['email'] === testEmail) {
        setIsDuplicate(true)
      } else {
        setIsDuplicate(false)
        issuanceCode(setCode)
      }
    } catch (err) {
      console.log(err)
    }
  }

  // 비밀번호 확인
  const cofirmPassword = () => {
    if (input['password'] === input['passwordConfirm']) {
      setIsConfirm(true)
    } else {
      setIsConfirm(false)
    }
  }

  // 회원가입 완료
  const submitSignup = () => {
    navigate('/MAKE-RE_ver2/myProfile')
  }

  return (
    <Layout>
      <Title>회원가입</Title>
      <Form id="signupForm" method="POST" onSubmit={submitSignup}>
        <EmailWrap id="signupEmailForm" isValidate={isValidate}>
          <LabelInput
            title="이메일"
            name="email"
            type="email"
            handleOnChange={(e) => {
              handleOnchange(e)
            }}
            warning={isDuplicate}
          />
          <Button
            form="signupForm"
            type="button"
            onClick={CheckDuplicates}
            disabled={!isValidate}
          >
            인증
          </Button>
        </EmailWrap>
        {isOpen ? (
          <AuthCode
            warning={isDuplicate}
            alertMsg={'※ 사용 중인 이메일입니다.'}
            isDone={isDone}
            setIsDone={setIsDone}
            code={code}
            setCode={setCode}
          />
        ) : null}
        <LabelInput
          title="비밀번호"
          name="password"
          type="password"
          handleOnChange={(e) => {
            handleOnchange(e)
          }}
        />

        <LabelInput
          title="비밀번호 확인"
          name="passwordConfirm"
          type="password"
          handleOnChange={(e) => {
            handleOnchange(e)
          }}
          warning={!isConfirm}
        />
        {!isConfirm ? (
          <WarningMsg>※ 비밀번호가 일치하지 않아요.</WarningMsg>
        ) : null}
      </Form>
      <Notice>
        본인은 만 14세 이상이며, 메이커리의
        <br />
        <Link
          to="https://www.notion.so/paullabworkspace/2023-12-01-54085dc36cd64e36bcd8b9a957673bdc?pvs=4"
          target="_blank"
        >
          이용 약관
        </Link>
        ,
        <Link
          to="https://www.notion.so/paullabworkspace/2023-12-01-17147d5c603f45a6b49f0021d3769fa9?pvs=4"
          target="_blank"
        >
          개인정보취급방침
        </Link>
        을 확인하였습니다.
      </Notice>
      <Button
        form="signupForm"
        isActive={isActive}
        disabled={!isActive}
        type="submit"
      >
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

const EmailWrap = styled.div`
  position: relative;
  display: flex;
  gap: 8px;

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
    background-color: ${({ isValidate }) =>
      isValidate ? '#2e6ff2' : '#d9dbe0'};
    color: ${({ isValidate }) => (isValidate ? '#fff' : '#8D9299')};
  }
`

const Notice = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #47494d;
  font-weight: 500;
  text-align: center;
  margin: 24px 0;

  a {
    color: #2e6ff2;

    &:last-child {
      margin-left: 3px;
    }
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
