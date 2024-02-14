import React, { forwardRef } from 'react'
import { useParams } from 'react-router-dom'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import getSectionId from '../../../utils/getSectionId'
import styled from 'styled-components'
import { useResumeStore } from '../../../store/ResumeStore'

const EducationPreview = forwardRef((props, ref) => {
  const id = Number(useParams().id)
  const { resumeList } = useResumeStore()
  const selectedResume = resumeList.find((resume) => resume.id === id)

  const eduData = selectedResume.content.education
  const educationList = eduData?.filter(
    (edu) => edu.startDate || edu.endDate || edu.title.trim()
  )

  const hasEducation = !!educationList?.length

  const sectionId = getSectionId('교육', 7)

  return (
    <>
      {hasEducation && (
        <PreviewSection
          ref={(educationRef) => (ref.current[sectionId] = educationRef)}
        >
          <PreviewSubtitle>Education</PreviewSubtitle>
          <FlexBox>
            {educationList.map((edu) => {
              const isInvalid = !(
                edu.startDate ||
                edu.endDate ||
                edu.inProgress
              )

              return (
                <EducationWrap>
                  <PreviewMonthItem
                    key={edu.id}
                    startDate={edu.startDate}
                    endDate={edu.endDate}
                    inProgress={edu.inProgress}
                    isInvalid={isInvalid}
                  />
                  <EducationContents>
                    <p>{edu.title}</p>
                    <Content>{edu.description}</Content>
                  </EducationContents>
                </EducationWrap>
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

const EducationWrap = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
`

const EducationContents = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Content = styled.p`
  font-size: 14px;
  color: var(--gray-lv3-color);
`

export default EducationPreview
