import React, { forwardRef, useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'
import getSectionId from '../../../utils/getSectionId'

const CertificatePreview = forwardRef((props, ref) => {
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
    if (date) {
      return date.replace('-', '. ') + '.'
    }
  }

  const sectionId = getSectionId('자격증', 6)

  return (
    <>
      {hasCertificates && (
        <PreviewSection
          ref={(certificateRef) => (ref.current[sectionId] = certificateRef)}
        >
          <PreviewSubtitle>Certificate</PreviewSubtitle>
          {certificates.map((cert) => {
            const isInvalid = !cert.date

            return (
              <>
                <PreviewMonthItem
                  type="certificate"
                  key={cert.id}
                  date={formatDate(cert.date)}
                  title={cert.title}
                  isInvalid={isInvalid}
                />
                <DetailWrap>
                  {cert.issuer} {cert.issuer && cert.score && '|'} {cert.score}
                </DetailWrap>
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

const DetailWrap = styled.div`
  font-size: 14px;
  color: var(--gray-lv3-color);
  margin-left: 156px;
`

export default CertificatePreview
