import React, { useState } from 'react'
import styled from 'styled-components'
import PreviewSubtitle from '../components/atoms/Title/PreviewSubtitle'
import PreviewProfileItem from '../components/atoms/PreviewItem/PreviewProfileItem'
import PreviewMonthItem from '../components/atoms/PreviewItem/PreviewMonthItem'
import ToggleBtn from '../components/atoms/Button/ToggleBtn'
import FooterItem from '../components/atoms/FooterItem/FooterItem'
import Footer from '../components/organisms/Footer/Footer'
import UrlAccordion from '../components/organisms/UrlAccordion/UrlAccordion'

export default function Baek() {
  const urlTest = [
    { name: '네이버', link: 'http://www.naver.com' },
    { name: '벨로그', link: 'http://www.velog.io' },
  ]

  return (
    <PageCont>
      <h1>🐯 경현 구현</h1>
      <p>- atoms 생성 테스트를 위한 페이지입니다.</p>

      <PreviewSubtitle title="atoms/PreviewItem/PreviewProfileItem" />
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

      <PreviewSubtitle title="atoms/PreviewItem/PreviewMonthItem" />
      <PreviewMonthItem date="2023-06" content="ICT 교육 봉사" />
      <PreviewMonthItem date="2023-07" content="ICT 교육 봉사" />

      <PreviewSubtitle title="atoms/Button/ToggleBtn" />
      <ToggleBtn />

      <PreviewSubtitle title="organisms/Footer" />
      <Footer />

      <PreviewSubtitle title="organisms/UrlAccordion" />
      {urlTest.map((el, idx) => {
        return <UrlAccordion key={idx} id={idx} data={el} />
      })}
    </PageCont>
  )
}

const PageCont = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px dashed black;
`
