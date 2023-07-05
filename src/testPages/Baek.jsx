import React from 'react'
import styled from 'styled-components'
import PreviewSubtitle from '../components/atoms/PreviewSubtitle'
import PreviewProfileItem from '../components/atoms/PreviewProfileItem'

export default function Baek() {
  return (
    <PageCont>
      <h1>🐯 경현 구현</h1>
      <p>- atoms 생성 테스트를 위한 페이지입니다.</p>
      <PreviewSubtitle title={'Profile'} />
      <PreviewProfileItem title="전화번호" content="010-7615-4078" />
      <PreviewProfileItem title="깃허브" content="www.github.com/baekg110" />
      <PreviewProfileItem title="기술 블로그" content="velog.io/@id" />
      <PreviewProfileItem title="경력 사항" content="1년차" />
    </PageCont>
  )
}

const PageCont = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px dashed black;
`
