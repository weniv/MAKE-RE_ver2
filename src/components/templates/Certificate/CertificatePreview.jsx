import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'

export default function CertificatePreview({ certificateRef }) {
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
        <PreviewSection ref={certificateRef}>
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
        </PreviewSection>
      )}
    </>
  )
}

const PreviewSection = styled.section`
  page-break-inside: avoid;
  break-inside: avoid;
`
