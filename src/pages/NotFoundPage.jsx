import React from 'react'
import Header from '../components/organisms/Header/Header'
import { MainBtn, SaveBtn } from '../components/atoms/Button'
import styled from 'styled-components'
import licat404 from '../assets/licat-404.png'
import { useNavigate } from 'react-router-dom'
import { MetaData } from '../utils/metaData'

export default function NotFoundPage() {
  //라우팅을 변경하는 함수
  const navigate = useNavigate()

  const goMain = () => {
    navigate('/')
  }
  const goBack = () => {
    navigate(-1)
  }

  const meta = {
    title: 'MAKE:RE',
    description: '쉽고 빠르게 이력서를 커스텀할 수 있는 웹 서비스',
    url: 'https://make-re.weniv.co.kr/',
  }

  return (
    <>
      <MetaData meta={meta} />
      <Header options={{ isCenter: true, isWhite: true }} />
      <MainContainer>
        <img className="img-licat" src={licat404} alt="" />
        <MainText>페이지를 찾을 수 없습니다.</MainText>

        <p className="description">
          페이지가 존재하지 않거나 사용할 수 없는 페이지입니다. 웹 주소가
          올바른지 확인해 주세요.
        </p>
        <BtnContainer>
          <MainBtn type="fit" onClick={goMain}>
            메인으로
          </MainBtn>
          <BeforeBtn onClick={goBack}>이전 페이지</BeforeBtn>
        </BtnContainer>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  padding: 0 1rem;
  background-color: var(--background-color);
  z-index: -1;

  & .img-licat {
    width: 30rem;
    max-width: 100%;
  }

  & .description {
    color: var(--gray-lv4-color);
  }
`

const MainText = styled.p`
  font-size: 4rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--primary-color);
  margin-bottom: 20px;
`

const BtnContainer = styled.div`
  margin: 32px auto;
  display: flex;
  gap: 1.2rem;
`

const BeforeBtn = styled.a`
  padding: 1.1rem 2rem;
  border: 1px solid var(--gray-lv2-color);
  border-radius: 10px;
  background-color: inherit;
  font-size: 1.4rem;
  line-height: 2rem;
  color: var(--gray-lv3-color);
  cursor: pointer;
  &:hover {
    background: var(--gray-lv1-color);
    background-color: var(--gray-lv1-color);
  }
`
