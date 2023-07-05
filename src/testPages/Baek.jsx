import React from 'react'
import styled from 'styled-components'
import PreviewSubtitle from '../components/atoms/PreviewSubtitle'

export default function Baek() {
  return (
    <PageCont>
      <h1>🐯 경현 구현</h1>
      <p>- atoms 생성 테스트를 위한 페이지입니다.</p>
      <PreviewSubtitle title={'Profile'} />
    </PageCont>
  )
}

const PageCont = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px dashed black;
`
