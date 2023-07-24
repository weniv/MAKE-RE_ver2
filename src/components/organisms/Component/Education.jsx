import React from 'react'
import styled from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DateInput } from '../../atoms/Input'
import { ProceedingBtn } from '../../atoms/Button'
import { updateData } from '../../../utils'

export default function Education({
  idx,
  edu,
  eduData,
  setEduData,
  deleteEdu,
}) {
  return (
    <ComponentHeader
      kind="교육"
      id={edu.id}
      title={edu.title ? edu.title : null}
      handleDelete={deleteEdu}
    >
      <Wrap>
        <DefaultInput
          id="educationName"
          type="text"
          width="738px"
          name="title"
          placeholder="예) 위니브대학교 컴퓨터공학과"
          onChange={(e) => {
            updateData(e, idx, eduData, setEduData)
          }}
          inputData={edu.title}
        >
          교육명
        </DefaultInput>
        <DateWrap>
          <DateInput
            id="startDate"
            name="start"
            width="220px"
            onChange={(e) => updateData(e, idx, eduData, setEduData)}
          >
            시작일
          </DateInput>
          <Tilde>~</Tilde>
          <DateInput
            id="endDate"
            name="end"
            width="220px"
            onChange={(e) => updateData(e, idx, eduData, setEduData)}
          >
            종료일
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
