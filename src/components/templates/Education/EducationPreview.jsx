import React, { forwardRef, useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'
import getSectionId from '../../../utils/getSectionId'

const EducationPreview = forwardRef((props, ref) => {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const eduData = data.education
  const educationList = eduData.filter(
    (edu) => edu.startDate || edu.endDate || edu.title.trim()
  )

  const hasEducation = !!educationList.length

  function formatDate(date) {
    if (date) {
      return date.replace('-', '. ') + '.'
    }
  }

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
              <PreviewMonthItem
                key={edu.id}
                startDate={formatDate(edu.startDate)}
                endDate={edu.inProgress ? '진행 중' : formatDate(edu.endDate)}
                title={edu.title}
                isInvalid={isInvalid}
              />
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

export default EducationPreview
