import React, { useState } from 'react'
import { styled } from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import DefaultInput from '../../atoms/Input/DefaultInput'
import { DateInput } from '../../atoms/Input'
import { updateData } from '../../../utils'
import { ProceedingBtn } from '../../atoms/Button'

export default function Experience({
  idx,
  exp,
  expData,
  setExpData,
  deleteExp,
}) {
  const [isStill, setIsStill] = useState(exp.inProgress)

  return (
    <ExpItem>
      <ComponentHeader
        kind="경험"
        id={exp.id}
        title={exp.title || null}
        handleDelete={deleteExp}
      >
        <DefaultInput
          width="100%"
          marginRight="0px"
          id={`exp-name-${exp.id}`}
          type="text"
          name="title"
          placeholder="예) 제 7회 주식회사 위니브 청년 ICT 해외봉사 참여"
          inputData={exp.title}
          onChange={(e) => {
            updateData(e, idx, expData, setExpData)
          }}
        >
          경험명
        </DefaultInput>
        <Period>
          <DateInput
            id="startDate"
            name="startDate"
            width="220px"
            inputData={exp.startDate}
            onChange={(e) => updateData(e, idx, expData, setExpData)}
          >
            시작일
          </DateInput>
          <span>~</span>
          <DateInput
            id="endDate"
            name="endDate"
            width="220px"
            isStill={isStill}
            inputData={exp.endDate}
            onChange={(e) => updateData(e, idx, expData, setExpData)}
          >
            종료일
          </DateInput>
          <ProceedingBtn
            name="inProgress"
            value={isStill}
            idx={exp.id}
            type="exp"
            inputData={exp.inProgress}
            onChange={(e) => {
              setExpData(
                expData.map((el, i) =>
                  i === idx ? { ...el, inProgress: !isStill } : el
                )
              )
              setIsStill(!isStill)
            }}
            isStill={isStill}
          />
        </Period>
      </ComponentHeader>
    </ExpItem>
  )
}

const ExpItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Period = styled.div`
  color: var(--surface-color);
  display: flex;
  margin: 25px 0 0;
  & span {
    margin: 30px 8px 0;
  }
`
