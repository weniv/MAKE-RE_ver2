import React, { forwardRef } from 'react'
import { useParams } from 'react-router-dom'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'
import getSectionId from '../../../utils/getSectionId'
import { useResumeStore } from '../../../store/ResumeStore'

const CertificatePreview = forwardRef((props, ref) => {
  const id = Number(useParams().id)
  const { resumeList } = useResumeStore()
  const selectedResume = resumeList.find((resume) => resume.id === id)

  const certData = selectedResume.content.certificate
  const certificates = certData?.filter(
    (cert) => cert.date || cert.title.trim()
  )

  certificates?.sort(
    (a, b) =>
      parseInt(b.date.replace('-', '')) - parseInt(a.date.replace('-', ''))
  )

  const hasCertificates = !!certificates?.length

  const sectionId = getSectionId('자격증', 6)

  return (
    <>
      {hasCertificates && (
        <PreviewSection
          ref={(certificateRef) => (ref.current[sectionId] = certificateRef)}
        >
          <PreviewSubtitle>Certificate</PreviewSubtitle>
          <FlexBox>
            {certificates.map((cert) => {
              const isInvalid = !cert.date

              return (
                <CertificateWrap>
                  <PreviewMonthItem
                    type="certificate"
                    key={cert.id}
                    startDate={cert.date}
                    isInvalid={isInvalid}
                  />
                  <CertificateContents>
                    <p>{cert.title}</p>
                    <DetailWrap>
                      {cert.issuer} {cert.issuer && cert.score && '|'}{' '}
                      {cert.score}
                    </DetailWrap>
                  </CertificateContents>
                </CertificateWrap>
              )
            })}
          </FlexBox>
        </PreviewSection>
      )}
    </>
  )
})
const PreviewSection = styled.section`
  page-break-inside: avoid;
  break-inside: avoid;
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const CertificateWrap = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
`
const CertificateContents = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const DetailWrap = styled.div`
  font-size: 14px;
  color: var(--gray-lv3-color);
`

export default CertificatePreview
