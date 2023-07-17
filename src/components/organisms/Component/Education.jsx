import React from 'react'
import styled from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DateInput } from '../../atoms/Input'
import { ProceedingBtn } from '../../atoms/Button'

export default function Education() {
  return (
    <ComponentHeader kind="교육">
      <Wrap>
        <DefaultInput
          id="educationName"
          type="text"
          width="738px"
          placeholder="예) 위니브대학교 컴퓨터공학과"
        >
          {'교육명'}
        </DefaultInput>
        <DateWrap>
          <DateInput id="startDate" width="220px">
            {'시작일'}
          </DateInput>
          <Tilde>~</Tilde>
          <DateInput id="endDate" width="220px">
            {'종료일'}
          </DateInput>
          <ProceedingBtn />
        </DateWrap>
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
