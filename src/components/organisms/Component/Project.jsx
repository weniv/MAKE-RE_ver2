import React from 'react'
import { styled } from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DefaultTextarea, DateInput } from '../../atoms/Input'
import { WriteSubtitle } from '../../atoms/Title'
import { ProceedingBtn } from '../../atoms/Button'
import { SkillList } from '../../atoms/SkillList'
import { updateData } from '../../../utils'
import Contribution from './Contribution'

export default function Project({ idx, project, projectData, setProjectData }) {
  const handleChange = (e) => {
    updateData(e, idx, projectData, setProjectData)
  }

  return (
    <ComponentHeader
      kind={'프로젝트'}
      title={project.title ? project.title : null}
    >
      <Wrap>
        <DefaultInput
          type="text"
          width="738px"
          name="title"
          placeholder="프로젝트명을 입력합니다."
          onChange={handleChange}
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
            onChange={handleChange}
            inputData={project.demoLink}
          >
            {'프로젝트 링크'}
          </DefaultInput>
          <DefaultInput
            name="githubLink"
            type="url"
            onChange={handleChange}
            inputData={project.githubLink}
          >
            {'프로젝트 깃허브 링크'}
          </DefaultInput>
          <DefaultInput
            name="snsLink"
            type="url"
            onChange={handleChange}
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
          onChange={handleChange}
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
            onChange={handleChange}
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
              onChange={handleChange}
            >
              {'시작일'}
            </DateInput>
            <Tilde>~</Tilde>
            <DateInput
              name="endDate"
              width="220px"
              inputData={project.endDate}
              onChange={handleChange}
            >
              {'종료일'}
            </DateInput>
            <ProceedingBtn
              name="progress"
              onChange={handleChange}
              inputData={project.progress}
            />
          </DateWrap>
        </Cont>
        {/* 기여 부분 */}
        <WriteSubtitle subtitle={'기여 부분'} />
        <Contribution
          idx={idx}
          contributes={project.contributes}
          projectData={projectData}
          setProjectData={setProjectData}
        />
        {/* 적용 기술 */}
        <WriteSubtitle subtitle={'적용 기술'} />
        <DefaultInput
          name="skills"
          type="text"
          onChange={handleChange}
          inputData={project.skills}
          placeholder="예) Python"
        />
        {/* 하드코딩 -- 추후 수정 필요 */}
        <SkillListWrap>
          <SkillList type="delete">Python</SkillList>
          <SkillList type="delete">Django</SkillList>
        </SkillListWrap>
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

const Contribute = styled.div`
  display: flex;
  gap: 8px;
  align-items: end;
`

const SkillListWrap = styled.div`
  margin-top: 20px;
  display: flex;
`
