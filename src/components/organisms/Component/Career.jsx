import React from 'react'
import styled from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DateInput } from '../../atoms/Input'
import { ProceedingBtn } from '../../atoms/Button'

export default function Career() {
  return (
    <ComponentHeader kind={'커리어'}>
      <Wrap>
        <DefaultInput width="738px" placeholder={'예) 위니브(WENIV)'}>
          {'회사명'}
        </DefaultInput>
        <DateWrap>
          <DateInput width="220px">{'시작일'}</DateInput>
          <Tilde>~</Tilde>
          <DateInput width="220px">{'종료일'}</DateInput>
          <ProceedingBtn />
        </DateWrap>
        <DefaultInput width="738px" placeholder={'예) 스터디인 Front-End 개발'}>
          {'담당 업무'}
        </DefaultInput>
      </Wrap>
    </ComponentHeader>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const DateWrap = styled.div`
  display: flex;
  align-items: center;
`

const Tilde = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 20px 8px 0 8px;
`
