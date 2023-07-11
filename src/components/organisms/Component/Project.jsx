import React from 'react'
import { styled } from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import {
  DefaultInput,
  DefaultTextarea,
  DateInput,
  ContributionInput,
} from '../../atoms/Input'
import { WriteSubtitle } from '../../atoms/Title'
import { ProceedingBtn, AddBtn } from '../../atoms/Button'
import { SkillList } from '../../atoms/SkillList'

export default function Project({ title }) {
  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
  }

  return (
    <ComponentHeader kind={'프로젝트'} title={title ? '테스트' : null}>
      <Wrap>
        <DefaultInput
          type="text"
          width="738px"
          name="title"
          placeholder="프로젝트명을 입력합니다."
          onChange={handleChange}
        >
          {'프로젝트명'}
        </DefaultInput>
        {/* 프로젝트 링크 */}
        <WriteSubtitle subtitle={'프로젝트 링크'} />
        <Cont>
          <DefaultInput name="demoLink" type="url">
            {'프로젝트 링크'}
          </DefaultInput>
          <DefaultInput name="githubLink" type="url">
            {'프로젝트 깃허브 링크'}
          </DefaultInput>
          <DefaultInput name="snsLink" type="url">
            {'프로젝트 SNS 링크'}
          </DefaultInput>
        </Cont>
        {/* 프로젝트 개요 */}
        <WriteSubtitle subtitle={'프로젝트 개요'} name="outline" />
        <DefaultTextarea placeholder="프로젝트명에 대한 설명을 작성합니다.">
          {'프로젝트 설명'}
        </DefaultTextarea>
        {/* 개발 인원 및 기간 */}
        <WriteSubtitle subtitle={'개발 인원 및 기간'} />
        <Cont>
          <DefaultInput
            type="text"
            name="people"
            placeholder="예) Front-End 4명, Back-End 2명"
          >
            {'인원'}
          </DefaultInput>
          <DateWrap>
            <DateInput name="startDate" width="220px">
              {'시작일'}
            </DateInput>
            <Tilde>~</Tilde>
            <DateInput name="endDate" width="220px">
              {'종료일'}
            </DateInput>
            <ProceedingBtn />
          </DateWrap>
        </Cont>
        {/* 기여 부분 */}
        <WriteSubtitle subtitle={'기여 부분'} />
        {/* 하드코딩 -- 추후 수정 필요 */}
        <Contribute>
          <div>
            <ContributionInput id={1} />
            <ContributionInput id={2} />
            <ContributionInput id={3} />
          </div>
          <AddBtn />
        </Contribute>
        {/* 적용 기술 */}
        <WriteSubtitle subtitle={'적용 기술'} />
        <DefaultInput name="skills" type="text" placeholder="예) Python" />
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
