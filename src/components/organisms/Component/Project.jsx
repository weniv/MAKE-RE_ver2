import React, { useState } from 'react'
import { styled } from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DefaultTextarea, DateInput } from '../../atoms/Input'
import { WriteSubtitle } from '../../atoms/Title'
import { ProceedingBtn } from '../../atoms/Button'
import { updateData } from '../../../utils'
import Contribution from './Contribution'
import Skills from './Skills'
import RequireInput from '../../atoms/Input/RequireInput'

export default function Project({
  idx,
  project,
  projectData,
  setProjectData,
  handleDelete,
  activeAccordion,
  onAccordionClick,
}) {
  const [isStill, setIsStill] = useState(project.inProgress)

  return (
    <ComponentHeader
      id={project.id}
      idx={idx}
      kind={'프로젝트'}
      title={project.title ? project.title : null}
      handleDelete={handleDelete}
      isOpen={idx === activeAccordion}
      onAccordionClick={() => onAccordionClick(idx)}
    >
      <Wrap>
        <RequireInput
          id="title"
          type="text"
          width="100%"
          name="title"
          placeholder="프로젝트명을 입력합니다."
          onChange={(e) => {
            updateData(e, idx, projectData, setProjectData)
          }}
          inputData={project.title}
        >
          {'프로젝트명'}
        </RequireInput>
        {/* 프로젝트 링크 */}
        <WriteSubtitle subtitle={'프로젝트 링크'} />
        <Cont>
          <DefaultInput
            name="demoLink"
            type="url"
            onChange={(e) => {
              updateData(e, idx, projectData, setProjectData)
            }}
            inputData={project.demoLink}
          >
            {'프로젝트 링크'}
          </DefaultInput>
          <DefaultInput
            name="githubLink"
            type="url"
            onChange={(e) => {
              updateData(e, idx, projectData, setProjectData)
            }}
            inputData={project.githubLink}
          >
            {'프로젝트 깃허브 링크'}
          </DefaultInput>
          <DefaultInput
            name="snsLink"
            type="url"
            onChange={(e) => {
              updateData(e, idx, projectData, setProjectData)
            }}
            inputData={project.snsLink}
          >
            {'프로젝트 SNS 링크'}
          </DefaultInput>
        </Cont>
        {/* 프로젝트 개요 */}
        <WriteSubtitle subtitle={'프로젝트 개요'} name="outline" />
        <DefaultTextarea
          name="outline"
          height="92px"
          placeholder="프로젝트명에 대한 설명을 작성합니다."
          type="project"
          onChange={(e) => {
            updateData(e, idx, projectData, setProjectData)
          }}
          inputData={project.outline}
          lineHeight="18px"
        >
          {'프로젝트 설명'}
        </DefaultTextarea>
        {/* 개발 인원 및 기간 */}
        <WriteSubtitle subtitle={'개발 인원 및 기간'} />
        <Cont>
          <DefaultInput
            type="text"
            name="people"
            onChange={(e) => {
              updateData(e, idx, projectData, setProjectData)
            }}
            inputData={project.people}
            placeholder="예) Front-End 4명, Back-End 2명"
          >
            {'인원'}
          </DefaultInput>
          <DateWrap>
            <DateInput
              name="startDate"
              width="220px"
              inputData={project.startDate}
              onChange={(e) => {
                updateData(e, idx, projectData, setProjectData)
              }}
            >
              {'시작일'}
            </DateInput>
            <Tilde>~</Tilde>
            <DateInput
              idx={idx}
              name="endDate"
              width="220px"
              inputData={project.endDate}
              onChange={(e) => {
                updateData(e, idx, projectData, setProjectData)
              }}
              isStill={isStill}
            >
              {'종료일'}
            </DateInput>
            <ProceedingBtn
              name="inProgress"
              value={isStill}
              idx={project.id}
              type="project"
              inputData={project.inProgress}
              onChange={(e) => {
                setProjectData(
                  projectData.map((el, i) =>
                    i === idx ? { ...el, inProgress: !isStill } : el
                  )
                )
                setIsStill(!isStill)
              }}
              isStill={isStill}
            />
          </DateWrap>
        </Cont>
        {/* 기여 부분 */}
        <WriteSubtitle subtitle={'기여 부분'} />
        <Contribution
          idx={idx}
          id={project.id}
          contributions={project.contributions}
          projectData={projectData}
          setProjectData={setProjectData}
        />
        {/* 적용 기술 */}
        <WriteSubtitle subtitle={'적용 기술'} />
        <Skills
          idx={idx}
          id={project.id}
          skills={project.skills}
          projectData={projectData}
          setProjectData={setProjectData}
        />
      </Wrap>
    </ComponentHeader>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Cont = styled.div`
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
