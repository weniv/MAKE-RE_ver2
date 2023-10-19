import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'

export default function ExperiencePreview({ experienceRef }) {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const expData = data.experience
  const expList = expData.filter(
    (edu) => edu.startDate || edu.endDate || edu.title.trim()
  )

  const hasExperience = !!expList.length

  function formatDate(date) {
    return date.replace('-', '. ') + '.'
  }

  return (
    <>
      {hasExperience && (
        <section ref={experienceRef}>
          <PreviewSubtitle>Experience</PreviewSubtitle>
          {expList.map((exp) => {
            const isInvalid =
              (!exp.startDate && !exp.endDate) ||
              (!exp.startDate && exp.inProgress)

            return (
              <PreviewMonthItem
                key={exp.id}
                startDate={exp.startDate && formatDate(exp.startDate)}
                endDate={
                  exp.inProgress ? '' : exp.endDate && formatDate(exp.endDate)
                }
                title={exp.title}
                isInvalid={isInvalid}
              />
            )
          })}
        </section>
      )}
    </>
  )
}
