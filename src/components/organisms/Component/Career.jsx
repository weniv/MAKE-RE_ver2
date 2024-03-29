import React, { useState } from 'react'
import styled from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DateInput, DefaultTextarea } from '../../atoms/Input'
import { ProceedingBtn } from '../../atoms/Button'
import { updateData } from '../../../utils'
import RequireInput from '../../atoms/Input/RequireInput'

export default function Career({
  idx,
  career,
  careerData,
  setCareerData,
  handleDelete,
  activeAccordion,
  onAccordionClick,
  essentialMsg,
}) {
  const [isStill, setIsStill] = useState(career.inProgress)

  return (
    <form id="requiredForm">
      <ComponentHeader
        id={career.id}
        idx={idx}
        kind={'커리어'}
        title={career.title ? career.title : null}
        handleDelete={handleDelete}
        isOpen={idx === activeAccordion}
        onAccordionClick={() => onAccordionClick(idx)}
      >
        <Wrap>
          <div>
            <div className="firstSectionWrap">
              {essentialMsg ? (
                <Label>
                  <strong> {essentialMsg}</strong>
                </Label>
              ) : null}
              <RequireInput
                id="title"
                type="text"
                width="100%"
                name="title"
                placeholder="예) 위니브(WENIV)"
                onChange={(e) => {
                  console.log('title', e.target.value)
                  updateData(e, idx, careerData, setCareerData)
                }}
                inputData={career.title}
                maxLength={45}
              >
                {'회사명'}
              </RequireInput>
              <DefaultInput
                id="rank"
                type="text"
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
          {/* 새로고침시 문제 존재 */}
          <DefaultTextarea
            name="works"
            placeholder={'예) 스터디인 Front-End 개발'}
            onChange={(e) => {
              updateData(e, idx, careerData, setCareerData)
            }}
            inputData={career.works}
            lineHeight="21px"
          >
            {'담당 업무'}
          </DefaultTextarea>
        </Wrap>
      </ComponentHeader>
    </form>
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
const Label = styled.label`
  color: var(--gray-lv4-color);
  font-size: 12px;
  font-weight: 700;

  strong {
    color: var(--primary-color);
  }
`
