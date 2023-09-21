import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'

export default function EducationPreview() {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const eduData = data.education

  function formatDate(date) {
    return date.replace('-', '. ') + '.'
  }

  return (
    <>
      <section>
        <PreviewSubtitle>Education</PreviewSubtitle>
        {eduData.map((edu) => {
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
      </section>
    </>
  )
}
