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

          {expList.map((exp) => {
            const isInvalid = !(exp.startDate || exp.endDate || exp.inProgress)

            return (
              <>
                <PreviewMonthItem
                  key={exp.id}
                  startDate={exp.startDate}
                  endDate={exp.endDate}
                  inProgress={exp.inProgress}
                  isInvalid={isInvalid}
                />
                <p>{exp.title}</p>
                <p>{exp.content}</p>
                {exp.link && <PreviewLink link={exp.link} />}
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
export default ExperiencePreview
