import React from 'react'
import styled from 'styled-components'

const LoginInput = ({ type, placeholder }) => {
  return <Input type={type} placeholder={placeholder} />
}

const LoginButton = ({ children, addClass }) => {
  return <Button className={addClass}>{children}</Button>
}

export default function LoginPage() {
  return (
    <Layout>
      <Header>Header</Header>
      <Wrap>
        <div className="logo"></div>
        <p className="description">
          메이커리 로그인 후<br />
          나만의 이력서를 만들어 보세요.
        </p>
        <LoginInput type={'email'} placeholder={'이메일을 입력하세요.'} />
        <LoginInput type={'password'} placeholder={'비밀번호를 입력하세요.'} />
        <LoginButton addClass="login">{'로그인'}</LoginButton>
        <Redirect>
          <p className="join">이메일로 회원가입</p>
          <p className="findPassword">비밀번호 찾기</p>
        </Redirect>
        <div className="line">
          <p className="or">또는</p>
        </div>
        <LoginButton addClass="github social">
          {'GitHub 계정으로 로그인'}
        </LoginButton>
        <LoginButton addClass="google social">
          {'Google 계정으로 로그인'}
        </LoginButton>
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

const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
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
  }
`

const Redirect = styled.div`
  display: flex;
  p {
    font-size: 14px;
    font-weight: 500;
    color: #8d9299;
    padding: 0 8px;
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
    background-color: #d9dbe0;
    color: #8d9299;
    margin: 16px 20px;
  }

  &.social {
    background-color: #ffffff;
    border: 1px solid #d9dbe0;
    color: #121314;
  }

  &.github {
    margin: 0 0 11px 0;
  }
`
