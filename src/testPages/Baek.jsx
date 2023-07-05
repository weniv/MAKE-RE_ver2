import React from 'react'
import styled from 'styled-components'
import PreviewSubtitle from '../components/atoms/Title/PreviewSubtitle'
import PreviewProfileItem from '../components/atoms/PreviewItem/PreviewProfileItem'
import PreviewMonthItem from '../components/atoms/PreviewItem/PreviewMonthItem'

export default function Baek() {
  return (
    <PageCont>
      <h1>🐯 경현 구현</h1>
      <p>- atoms 생성 테스트를 위한 페이지입니다.</p>
      <PreviewSubtitle title="Profile" />
      <PreviewProfileItem title="전화번호" content="010-7615-4078" />
      <PreviewProfileItem
        title="깃허브"
        content="www.github.com/baekg110"
        type="link"
      />
      <PreviewProfileItem
        title="기술 블로그"
        content="velog.io/@id"
        type="link"
      />
      <PreviewProfileItem title="경력 사항" content="1년차" />
      <PreviewProfileItem />

      <PreviewSubtitle title="Date Item" />
      <PreviewMonthItem date="2023-06" content="ICT 교육 봉사" />
      <PreviewMonthItem date="2023-07" content="ICT 교육 봉사" />
      <PreviewMonthItem />

      <PreviewSubtitle title="On/Off" />
    </PageCont>
  )
}

const PageCont = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px dashed black;
`
