import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../assets/makere-logo.svg'
import GithubLogo from '../assets/github-logo.svg'
import GoogleLogo from '../assets/google-logo.svg'

const LoginInput = ({ name, type, placeholder, ref, onChange }) => {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      ref={ref}
      onChange={onChange}
    />
  )
}

export default function LoginPage() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: '',
    password: '',
  })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!!input['email'] && !!input['password']) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [{ ...input }])

  const handleOnchange = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  // 로그인 정보 전송
  const sendLoginData = async (e) => {
    e.preventDefault()
    try {
      console.log(input)
    } catch (err) {
      console.log(err)
    }
  }

  // 깃허브 로그인
  const githubLogin = async () => {
    try {
      console.log('깃허브로 로그인')
    } catch (err) {
      console.log(err)
    }
  }

  // 구글 로그인
  const googleLogin = async () => {
    try {
      console.log('구글로 로그인')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout>
      <Wrap>
        <div className="logo"></div>
        <p className="description">
          메이커리 로그인 후<br />
          나만의 이력서를 만들어 보세요.
        </p>
        <form id="loginform" onSubmit={sendLoginData}>
          <LoginInput
            name="email"
            type={'email'}
            placeholder={'이메일을 입력하세요.'}
            onChange={(e) => handleOnchange(e)}
          />
          <LoginInput
            name="password"
            type={'password'}
            placeholder={'비밀번호를 입력하세요.'}
            onChange={(e) => handleOnchange(e)}
          />
        </form>
        <Button
          form="loginform"
          className="login"
          isActive={isActive}
          disabled={!isActive}
        >
          로그인
        </Button>
        <Redirect>
          <p
            className="join"
            onClick={() => {
              navigate('/MAKE-RE_ver2/signup')
            }}
          >
            이메일로 회원가입
          </p>
          <p
            className="findPassword"
            onClick={() => console.log('비밀번호 찾기 페이지로 이동')}
          >
            비밀번호 찾기
          </p>
        </Redirect>
        <div className="line">
          <p className="or">또는</p>
        </div>
        <Button className="github social" onClick={githubLogin}>
          GitHub 계정으로 로그인
        </Button>
        <Button className="google social" onClick={googleLogin}>
          Google 계정으로 로그인
        </Button>
      </Wrap>
    </Layout>
  )
}

const Layout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 322px;
  height: auto;

  div.logo {
    width: 80px;
    height: 80px;
    background-color: #2e6ff2;
    border-radius: 16px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center center;
  }

  p.description {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    color: #121314;
    text-align: center;
    margin: 24px 0 52px 0;
  }
  div.line {
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #8d9299;
    margin: 32px 0 24px 0;

    p.or {
      padding: 0 12px;
      white-space: nowrap;
    }

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: #d9dbe0;
    }
  }
`

const Input = styled.input`
  width: 100%;
  height: 42px;
  border: none;
  border-bottom: 2px solid #d9dbe0;
  padding-left: 8px;
  margin: 8px 0;

  &::placeholder {
    font-size: 16px;
    color: #8d9299;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #2e6ff2;
    background-color: #f3f5fa;
  }
`

const Redirect = styled.div`
  display: flex;
  p {
    font-size: 14px;
    font-weight: 500;
    color: #8d9299;
    padding: 0 8px;
    cursor: pointer;
  }

  p:hover {
    color: #2e6ff2;
  }

  p:first-child {
    border-right: 1.75px solid #8d9299;
  }
`

const Button = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;

  &.login {
    margin: 16px 20px;
    background-color: ${({ isActive }) => (isActive ? '#2e6ff2' : '#d9dbe0')};
    color: ${({ isActive }) => (isActive ? '#fff' : '#8d9299')};
  }

  &.social {
    background-color: #ffffff;
    border: 1px solid #d9dbe0;
    color: #121314;

    &:hover {
      background-color: #f3f5fa;
    }
  }

  &.github {
    position: relative;
    margin: 0 0 11px 0;

    &::before {
      content: url(${GithubLogo});
      position: absolute;
      top: 9px;
      left: 12px;
    }
  }

  &.google {
    position: relative;

    &::before {
      content: url(${GoogleLogo});
      position: absolute;
      top: 9px;
      left: 12px;
    }
  }
`
