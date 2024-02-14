import React from 'react'
import styled from 'styled-components'
import FooterItem from '../../atoms/FooterItem/FooterItem'
import CompanyInfo from '../../atoms/FooterItem/CompanyInfo'
import ppt from '../../../assets/제코베_포트폴리오_템플릿_배포용_최종수정.pptx'

export default function Footer() {
  return (
    <FooterCont>
      <Wrap>
        <ItemCont>
          <FooterItem
            title="위니브"
            list={[
              {
                content: '제주코딩베이스캠프',
                link: 'https://www.paullab.co.kr/about.html',
              },
              {
                content: '유튜브 채널',
                link: 'https://www.youtube.com/@jejucodingcamp',
              },
            ]}
          />
          <FooterItem
            title="메이커리"
            list={[
              {
                content: '메이커리 서비스 소개',
                link: 'https://paullabworkspace.notion.site/b3258bc3a2a94151b9bf4d6e6f7b5071',
              },
            ]}
          />
          <FooterItem
            title="자료"
            list={[
              {
                content: '신입 개발자 이력서 작성 가이드',
                link: 'https://ridibooks.com/books/2773000064?_s=search&_q=%EA%B0%9C%EB%B0%9C%EC%9E%90+%EC%9D%B4%EB%A0%A5%EC%84%9C&_rdt_sid=search&_rdt_idx=0',
              },
              {
                content: 'Figma 이력서 바로가기',
                link: 'https://paullabworkspace.notion.site/Figma-bfa32213fc244db9b31bb8486a479ee6',
              },
              {
                content: 'PPT 포트폴리오 다운로드',
                link: ppt,
              },
            ]}
          />
        </ItemCont>
        <CompanyInfo />
        <Copyright>ⓒ WENIV Corp.</Copyright>
      </Wrap>
    </FooterCont>
  )
}

const FooterCont = styled.footer`
  background-color: var(--background-color);
`

const Wrap = styled.div`
  width: min(1190px, 100%);
  margin: 0 auto;
  padding: 52px 0 40px;
  position: relative;
  height: 320px;
`
const ItemCont = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 70px;
  width: 100%;
`

const Copyright = styled.small`
  color: var(--gray-lv3-color);
  font-size: 12px;
  position: absolute;
  right: 0;
  bottom: 40px;
`
