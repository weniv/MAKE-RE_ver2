import React from 'react'
import styled from 'styled-components'

export default function CompanyInfo() {
  return (
    <Container>
      <div>
        <Term className="ir">회사명</Term>
        <Descript>(주)위니브</Descript>
      </div>
      <div>
        <Term>대표</Term>
        <Descript>이호준</Descript>
      </div>
      <div>
        <Term>사업자 번호</Term>
        <Descript>546-86-01737</Descript>
      </div>
      <div>
        <Term className="ir">업종</Term>
        <Descript>정보통신업</Descript>
      </div>
      <div>
        <Term>주소</Term>
        <Descript>제주 제주시 첨단로 330 세미양빌딩 A동 1층 106호</Descript>
      </div>
    </Container>
  )
}
const Container = styled.dl`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  font-size: 10px;
  position: absolute;
  bottom: 40px;
  color: var(--gray-lv3-color);

  > div {
    display: flex;
    margin: 2px 0;
  }
  > div + div::before {
    content: '|';
    margin: 0 5px;
  }
`

const Term = styled.dt`
  white-space: nowrap;
  &::after {
    content: ' :';
    margin-right: 5px;
  }
`

const Descript = styled.dd`
  white-space: nowrap;
`
