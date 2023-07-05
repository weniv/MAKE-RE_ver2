import React from 'react'
import styled from 'styled-components'
import WriteTitle from '../components/atoms/Title/WriteTitle'
import WriteSubtitle from '../components/atoms/Title/WriteSubtitle'
import ContributionInput from '../components/atoms/Input/ContributionInput'

export default function Baek() {
  return (
    <PageCont>
      <h1>🐬 나영 구현</h1>
      <p>- atoms 생성 테스트를 위한 페이지입니다.</p>
      <WriteTitle title="프로필" description="프로필 내용을 입력해 주세요." />
      <WriteSubtitle subtitle="기술 스택" />
      <ContributionInput />
    </PageCont>
  )
}

const PageCont = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px dashed black;
`