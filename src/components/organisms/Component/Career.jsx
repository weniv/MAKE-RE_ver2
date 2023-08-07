import React, { useState } from 'react'
import styled from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DateInput } from '../../atoms/Input'
import { ProceedingBtn } from '../../atoms/Button'
import { updateData } from '../../../utils'

export default function Career({
  idx,
  career,
  careerData,
  setCareerData,
  handleDelete,
}) {
  const [isStill, setIsStill] = useState(career.inProgress)

  console.log('career.inProgress', career.inProgress)

  return (
    <ComponentHeader
      id={career.id}
      kind={'커리어'}
      title={career.title ? career.title : null}
      handleDelete={handleDelete}
    >
      <Wrap>
        <DefaultInput
          id="careerName"
          type="text"
          width="738px"
          name="title"
          placeholder="예) 위니브(WENIV)"
          onChange={(e) => {
            updateData(e, idx, careerData, setCareerData)
          }}
          inputData={career.title}
        >
          {'회사명'}
        </DefaultInput>
        <DateWrap>
          <DateInput
            id="startDate"
            width="220px"
            name="start"
            inputData={career.start}
            onChange={(e) => {
              updateData(e, idx, careerData, setCareerData)
            }}
          >
            {'시작일'}
          </DateInput>
          <Tilde>~</Tilde>
          <DateInput
            id="endDate"
            width="220px"
            name="endDate"
            inputData={career.end}
            onChange={(e) => {
              updateData(e, idx, careerData, setCareerData)
            }}
            isStill={isStill}
          >
            {'종료일'}
          </DateInput>
          <ProceedingBtn
            name="progress"
            type="career"
            idx={career.id}
            onChange={(e) => {
              updateData(e, idx, careerData, setCareerData)
            }}
            onClick={() => setIsStill(!isStill)}
            isStill={isStill}
          />
        </DateWrap>
        <DefaultInput
          width="738px"
          name="works"
          placeholder={'예) 스터디인 Front-End 개발'}
          onChange={(e) => {
            updateData(e, idx, careerData, setCareerData)
          }}
          inputData={career.works}
        >
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
