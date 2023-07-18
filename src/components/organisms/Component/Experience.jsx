import React, { useState } from 'react'
import { styled } from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import DefaultInput from '../../atoms/Input/DefaultInput'
import { DateInput } from '../../atoms/Input'
import { ProceedingBtn } from '../../atoms/Button'

export default function Experience({ id, data }) {
  const [name, setName] = useState(data.name)
  const [start, setStart] = useState(data.start)
  const [end, setEnd] = useState(data.end)
  const [endFlag, setEndFlag] = useState(data.endFlag)

  return (
    <ExpItem>
      <ComponentHeader kind="경험" title={name}>
        <DefaultInput
          width="100%"
          marginRight="0px"
          id={`exp-name-${id}`}
          type="text"
          placeholder="예) 제 7회 주식회사 위니브 청년 ICT 해외봉사 참여"
          inputData={name}
          setInputData={setName}
        >
          경험명
        </DefaultInput>
        <Period>
          <DateInput width="220px">시작일</DateInput>
          <span>~</span>
          <DateInput width="220px">종료일</DateInput>
          <ProceedingBtn>종료일 없음(?)</ProceedingBtn>
        </Period>
      </ComponentHeader>
    </ExpItem>
  )
}
Experience.defaultProps = {
  id: 0,
  data: { name: '', start: '', end: '', endFlag: false },
}

const ExpItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Period = styled.div`
  display: flex;
  margin: 25px 0 0;
  & span {
    margin: 30px 8px 0;
  }
`
