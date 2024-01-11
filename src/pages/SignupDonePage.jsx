import React from 'react'
import styled from 'styled-components'
import { Layout, Logo } from '../components/atoms/Auth'
import { useNavigate } from 'react-router-dom'
import { MetaData } from '../utils/metaData'

const SERVICE_NAME = '메이커리'

export default function SignupDonePage() {
  const navigate = useNavigate()

  const meta = {
    title: 'MAKE:RE',
    description: '쉽게 빠르게 이력서를 커스텀할 수 있는 웹 서비스',
    url: 'https://make-re.weniv.co.kr/',
  }

  return (
    <Layout>
      <MetaData meta={meta} />
      <Wrap>
        <Logo />
        <p className="title">회원가입 완료!</p>
        <p className="description">
          {SERVICE_NAME} 회원가입을 완료했어요.
          <br /> 로그인 후 프로필 생성을 진행해 볼까요?
        </p>
        <button
          onClick={() => {
            navigate('/login')
          }}
        >
          로그인하기
        </button>
      </Wrap>
    </Layout>
  )
}

const Wrap = styled.div`
  display: flex;
  width: 322px;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  p.title {
    font-size: 32px;
    font-weight: 600;
    color: #121314;
  }

  p.description {
    font-size: 16px;
    line-height: 22px;
    color: #47494d;
  }

  button {
    width: 100%;
    height: 42px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    background-color: #2e6ff2;
    color: #ffffff;
  }
`
