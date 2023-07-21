import React, { useState } from 'react'
import { styled } from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DefaultTextarea, DateInput } from '../../atoms/Input'
import { WriteSubtitle } from '../../atoms/Title'
import { ProceedingBtn } from '../../atoms/Button'
import { updateData } from '../../../utils'
import Contribution from './Contribution'
import Skills from './Skills'

export default function Project({ idx, project, projectData, setProjectData, handleDelete }) {
  const [isStill, setIsStill] = useState(project.progress)

  return (
    <ComponentHeader
      id={project.id}
      kind={'프로젝트'}
      title={project.title ? project.title : null}
      handleDelete={handleDelete}
    >
      <Wrap>
        <DefaultInput
          type="text"
          width="738px"
          name="title"
          placeholder="프로젝트명을 입력합니다."
          onChange={(e) => {
            updateData(e, idx, projectData, setProjectData)
          }}
          inputData={project.title}
        >
          {'프로젝트명'}
        </DefaultInput>
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
          placeholder="프로젝트명에 대한 설명을 작성합니다."
          onChange={(e) => {
            updateData(e, idx, projectData, setProjectData)
          }}
          inputData={project.outline}
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
              name="progress"
              onChange={(e) => {
                updateData(e, idx, projectData, setProjectData)
              }}
              onClick={() => setIsStill(!isStill)}
              inputData={project.progress}
            />
          </DateWrap>
        </Cont>
        {/* 기여 부분 */}
        <WriteSubtitle subtitle={'기여 부분'} />
        <Contribution
          idx={idx}
          id={project.id}
          contributes={project.contributes}
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
  font-size: 14px;
  font-weight: 500;
  margin: 20px 8px 0 8px;
`
