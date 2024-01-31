import React, { forwardRef, useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'
import getSectionId from '../../../utils/getSectionId'

const EducationPreview = forwardRef((props, ref) => {
  const { selectedResume } = useContext(LocalContext)
  const eduData = selectedResume.education
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
          {educationList.map((edu) => {
            const isInvalid = !(edu.startDate || edu.endDate || edu.inProgress)

            return (
              <>
                <PreviewMonthItem
                  key={edu.id}
                  startDate={edu.startDate}
                  endDate={edu.endDate}
                  inProgress={edu.inProgress}
                  isInvalid={isInvalid}
                />
                <p>{edu.title}</p>
                <Content>{edu.content}</Content>
              </>
            )
          })}
        </PreviewSection>
      )}
    </>
  )
})

const PreviewSection = styled.section`
  page-break-inside: avoid;
  break-inside: avoid;
`

const Content = styled.p`
  font-size: 14px;
  color: var(--gray-lv3-color);
  margin-left: 156px;

  &::before {
    content: '- ';
  }
`

export default EducationPreview
