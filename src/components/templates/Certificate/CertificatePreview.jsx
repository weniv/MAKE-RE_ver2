import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'

export default function CertificatePreview() {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const certData = data.certificate

  function formatDate(date) {
    return date.replace('-', '. ') + '.'
  }

  return (
    <>
      <section>
        <PreviewSubtitle>Certificate</PreviewSubtitle>
        {certData.map((cert) => {
          const isInvalid = !cert.date

          return (
            <PreviewMonthItem
              type="certificate"
              key={cert.id}
              date={formatDate(cert.date)}
              title={cert.title}
              isInvalid={isInvalid}
            />
          )
        })}
      </section>
    </>
  )
}
