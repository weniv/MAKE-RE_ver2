import React, { forwardRef } from 'react'
import { useParams } from 'react-router-dom'
import { PreviewSubtitle } from '../../atoms/Title'
import { SkillList } from '../../atoms/SkillList'
import getSectionId from '../../../utils/getSectionId'
import styled from 'styled-components'
import { useResumeStore } from '../../../store/ResumeStore'

const IntroPreview = forwardRef((props, ref) => {
  const id = Number(useParams().id)
  const { resumeList } = useResumeStore()
  const selectedResume = resumeList.find((resume) => resume.id === id)

  const currentProfileData = selectedResume.content.profile
  const introData = selectedResume.content.intro
  const sectionId = getSectionId('자기소개서', 2)

  return (
    <>
      {introData && (
        <IntroSection ref={(introRef) => (ref.current[sectionId] = introRef)}>
          <PreviewSubtitle>Introduction</PreviewSubtitle>
          <IntroCont>{introData}</IntroCont>
        </IntroSection>
      )}
      {currentProfileData?.skills.length > 0 && (
        <SkillSection>
          <PreviewSubtitle type="skills">Skills</PreviewSubtitle>
          <SkillCont>
            {currentProfileData.skills.map((skill, i) => (
              <SkillList key={i} type="preview">
                {skill}
              </SkillList>
            ))}
          </SkillCont>
        </SkillSection>
      )}
    </>
  )
})

const IntroSection = styled.div`
  page-break-inside: avoid;
  break-inside: avoid;
`
const IntroCont = styled.pre`
  color: var(--surface-color);
  width: 100%;
  font-size: 14px;
  line-height: 28px;
  word-wrap: break-word;
  white-space: break-spaces;
`
const SkillSection = styled.section`
  display: flex;
  align-items: center;
`
const SkillCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export default IntroPreview
