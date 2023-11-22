import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DateInput, DefaultTextarea } from '../../atoms/Input'
import { ProceedingBtn } from '../../atoms/Button'
import { updateData } from '../../../utils'
import { ResumeContext } from '../../../context/ResumeContext'
import RequireInput from '../../atoms/Input/RequireInput'

export default function Career({
  idx,
  career,
  careerData,
  setCareerData,
  activeIdx,
  setActiveIdx,
  handleDelete,
}) {
  const [isStill, setIsStill] = useState(career.inProgress)
  const [textAreaHeight, setTextAreaHeight] = useState('auto')
  const [isActive, setIsActive] = useState(0)
  const { formRef } = useContext(ResumeContext)

  const handleResizeTextArea = (height) => {
    setTextAreaHeight('auto')
    setTextAreaHeight(height)
  }

  useEffect(() => {
    setIsActive(activeIdx === idx)
  }, [activeIdx])

  return (
    <ComponentHeader
      id={career.id}
      idx={idx}
      kind={'커리어'}
      title={career.title ? career.title : null}
      handleDelete={handleDelete}
      setActiveIdx={setActiveIdx}
      isActive={isActive}
      setIsActive={setIsActive}
    >
      <Wrap>
        <div>
          <div className="firstSectionWrap">
            <RequireInput
              id="title"
              type="text"
              width="100%"
              name="title"
              placeholder="예) 위니브(WENIV)"
              onChange={(e) => {
                updateData(e, idx, careerData, setCareerData)
              }}
              inputData={career.title}
            >
              {'회사명'}
            </RequireInput>
            <DefaultInput
              id="rank"
              type="text"
              width="100%"
              name="rank"
              placeholder="예) 팀장"
              onChange={(e) => {
                updateData(e, idx, careerData, setCareerData)
              }}
              inputData={career.rank}
            >
              {'직위'}
            </DefaultInput>
          </div>
        </div>
        <DateWrap>
          <DateInput
            id="startDate"
            width="220px"
            name="startDate"
            inputData={career.startDate}
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
            inputData={career.endDate}
            onChange={(e) => {
              updateData(e, idx, careerData, setCareerData)
            }}
            isStill={isStill}
          >
            {'종료일'}
          </DateInput>

          <ProceedingBtn
            name="inProgress"
            value={isStill}
            type="career"
            idx={career.id}
            inputData={career.inProgress}
            onChange={(e) => {
              setCareerData(
                careerData.map((el, i) =>
                  i === idx ? { ...el, inProgress: !isStill } : el
                )
              )
              setIsStill(!isStill)
            }}
            isStill={isStill}
          />
        </DateWrap>
        <DefaultTextarea
          height={`${textAreaHeight}px`}
          name="works"
          placeholder={'예) 스터디인 Front-End 개발'}
          onChange={(e) => {
            handleResizeTextArea(e.target.scrollHeight)
            updateData(e, idx, careerData, setCareerData)
          }}
          inputData={career.works}
          lineHeight="21px"
        >
          {'담당 업무'}
        </DefaultTextarea>
      </Wrap>
    </ComponentHeader>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  div.firstSectionWrap {
    display: grid;
    align-items: start;
    grid-template-columns: 506px 220px;
    gap: 12px;
  }
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
