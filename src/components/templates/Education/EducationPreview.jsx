import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'

export default function EducationPreview({ educationRef }) {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const eduData = data.education
  const educationList = eduData.filter(
    (edu) => edu.startDate || edu.endDate || edu.title.trim()
  )

  const hasEducation = !!educationList.length

  function formatDate(date) {
    return date.replace('-', '. ') + '.'
  }

  return (
    <>
      {hasEducation && (
        <PreviewSection ref={educationRef}>
          <PreviewSubtitle>Education</PreviewSubtitle>
          {educationList.map((edu) => {
            const isInvalid =
              (!edu.startDate && !edu.endDate) ||
              (!edu.startDate && edu.inProgress)

            return (
              <PreviewMonthItem
                key={edu.id}
                startDate={edu.startDate && formatDate(edu.startDate)}
                endDate={
                  edu.inProgress ? '' : edu.endDate && formatDate(edu.endDate)
                }
                title={edu.title}
                isInvalid={isInvalid}
              />
            )
          })}
        </PreviewSection>
      )}
    </>
  )
}
const PreviewSection = styled.section`
  page-break-inside: avoid;
  break-inside: avoid;
`
