import React, { forwardRef, useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'
import getSectionId from '../../../utils/getSectionId'

const ExperiencePreview = forwardRef((props, ref) => {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const expData = data.experience
  const expList = expData.filter(
    (edu) => edu.startDate || edu.endDate || edu.title.trim()
  )

  const hasExperience = !!expList.length

  function formatDate(date) {
    if (date) {
      return date.replace('-', '. ') + '.'
    }
  }

  const sectionId = getSectionId('경험', 5)

  return (
    <>
      {hasExperience && (
        <PreviewSection
          ref={(experienceRef) => (ref.current[sectionId] = experienceRef)}
        >
          <PreviewSubtitle>Experience</PreviewSubtitle>
          {expList.map((exp) => {
            const isInvalid = !(exp.startDate || exp.endDate || exp.inProgress)

            return (
              <PreviewMonthItem
                key={exp.id}
                startDate={formatDate(exp.startDate)}
                endDate={exp.inProgress ? '진행 중' : formatDate(exp.endDate)}
                title={exp.title}
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

export default ExperiencePreview
