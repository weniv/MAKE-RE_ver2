import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'

export default function CertificatePreview() {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const certData = data.certificate
  const certificates = certData.filter((cert) => cert.date || cert.title.trim())

  certificates.sort(
    (a, b) =>
      parseInt(b.date.replace('-', '')) - parseInt(a.date.replace('-', ''))
  )

  const hasCertificates = !!certificates.length

  function formatDate(date) {
    return date.replace('-', '. ') + '.'
  }

  return (
    <>
      {hasCertificates && (
        <section>
          <PreviewSubtitle>Certificate</PreviewSubtitle>
          {certificates.map((cert) => {
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
      )}
    </>
  )
}
