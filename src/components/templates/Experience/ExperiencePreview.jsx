import React, { forwardRef, useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'
import getSectionId from '../../../utils/getSectionId'
import PreviewLink from '../../atoms/PreviewItem/PreviewLink'

const ExperiencePreview = forwardRef((props, ref) => {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const expData = data.experience
  const expList = expData.filter(
    (exp) => exp.startDate || exp.endDate || exp.title.trim()
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
              <>
                <PreviewMonthItem
                  key={exp.id}
                  startDate={formatDate(exp.startDate)}
                  endDate={exp.inProgress ? '진행 중' : formatDate(exp.endDate)}
                  title={exp.title}
                  isInvalid={isInvalid}
                />
                <p>{exp.content}</p>
                <PreviewLink link={exp.link} />
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
margin`
export default ExperiencePreview
