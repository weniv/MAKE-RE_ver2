import React, { useState } from 'react'
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
  const [isStill, setIsStill] = useState(edu.inProgress)

  return (
    <ComponentHeader
      kind="교육"
      id={edu.id}
      title={edu.title ? edu.title : null}
      handleDelete={deleteEdu}
    >
      <Wrap>
        <DefaultInput
          id={`edu-title-${edu.id}`}
          type="text"
          width="738px"
          name="title"
          placeholder="예) 위니브 방학 부트캠프"
          onChange={(e) => {
            updateData(e, idx, eduData, setEduData)
          }}
          inputData={edu.title}
        >
          교육명
        </DefaultInput>
        <DefaultInput
          width="100%"
          marginRight="0px"
          id={`edu-content-${edu.id}`}
          type="text"
          name="content"
          placeholder="예) HTML / CSS / JavaScript를 활용한 포트폴리오 제작 및 배포"
          inputData={edu.content}
          onChange={(e) => {
            updateData(e, idx, eduData, setEduData)
          }}
        >
          설명
        </DefaultInput>
        <DateWrap>
          <DateInput
            id={`edu-startDate-${edu.id}`}
            name="startDate"
            width="220px"
            inputData={edu.startDate}
            onChange={(e) => updateData(e, idx, eduData, setEduData)}
          >
            시작일
          </DateInput>
          <Tilde>~</Tilde>
          <DateInput
            id={`edu-endDate-${edu.id}`}
            name="endDate"
            width="220px"
            isStill={isStill}
            inputData={edu.endDate}
            onChange={(e) => updateData(e, idx, eduData, setEduData)}
          >
            종료일
          </DateInput>

          <ProceedingBtn
            name="inProgress"
            value={isStill}
            idx={edu.id}
            type="edu"
            inputData={edu.inProgress}
            onChange={(e) => {
              setEduData(
                eduData.map((el, i) =>
                  i === idx ? { ...el, inProgress: !isStill } : el
                )
              )
              setIsStill(!isStill)
            }}
            isStill={isStill}
          />
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
  color: var(--surface-color);
  font-size: 14px;
  font-weight: 500;
  margin: 20px 8px 0 8px;
`
