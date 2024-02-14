import React, { forwardRef } from 'react'
import { useParams } from 'react-router-dom'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import getSectionId from '../../../utils/getSectionId'
import PreviewLink from '../../atoms/PreviewItem/PreviewLink'
import styled from 'styled-components'
import { useResumeStore } from '../../../store/ResumeStore'

const ExperiencePreview = forwardRef((props, ref) => {
  const id = Number(useParams().id)
  const { resumeList } = useResumeStore()
  const selectedResume = resumeList.find((resume) => resume.id === id)

  const expData = selectedResume.content.experience
  const expList = expData?.filter(
    (exp) => exp.startDate || exp.endDate || exp.title.trim()
  )

  const hasExperience = !!expList?.length

  const sectionId = getSectionId('경험', 5)

  return (
    <>
      {hasExperience && (
        <PreviewSection
          ref={(experienceRef) => (ref.current[sectionId] = experienceRef)}
        >
          <PreviewSubtitle>Experience</PreviewSubtitle>
          <FlexBox>
            {expList.map((exp) => {
              const isInvalid = !(
                exp.startDate ||
                exp.endDate ||
                exp.inProgress
              )

              return (
                <ExperienceWrap>
                  <PreviewMonthItem
                    key={exp.id}
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    inProgress={exp.inProgress}
                    isInvalid={isInvalid}
                  />
                  <ExperienceContents>
                    <p className="title">{exp.title}</p>
                    <p className="content">{exp.content}</p>
                    {exp.link && <PreviewLink link={exp.link} />}
                  </ExperienceContents>
                </ExperienceWrap>
              )
            })}
          </FlexBox>
        </PreviewSection>
      )}
    </>
  )
})

const PreviewSection = styled.section`
  page-break-inside: avoid;
  break-inside: avoid;
`
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ExperienceWrap = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
`

const ExperienceContents = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  p.title {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
  }

  p.content {
    line-height: 22px;
  }
`
export default ExperiencePreview
