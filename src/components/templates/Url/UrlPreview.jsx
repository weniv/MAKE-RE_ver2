import React, { forwardRef } from 'react'
import { useParams } from 'react-router-dom'
import { PreviewSubtitle } from '../../atoms/Title'
import PreviewLink from '../../atoms/PreviewItem/PreviewLink'
import styled from 'styled-components'
import getSectionId from '../../../utils/getSectionId'
import { useResumeStore } from '../../../store/ResumeStore'

const UrlPreview = forwardRef((props, ref) => {
  const id = Number(useParams().id)
  const { resumeList } = useResumeStore()
  const selectedResume = resumeList.find((resume) => resume.id === id)

  const urlData = selectedResume.content.url
  const urlList = urlData?.filter(
    (url) => url.content?.trim() || url.link?.trim()
  )

  const sectionId = getSectionId('추가 URL', 8)

  return (
    <>
      {urlList && !!urlList.length && (
        <PreviewSection ref={(urlRef) => (ref.current[sectionId] = urlRef)}>
          <PreviewSubtitle>URL</PreviewSubtitle>
          <UrlListContainer>
            {urlList.map((url) => (
              <li>
                <PreviewLink link={url.link} title={url.title} />
              </li>
            ))}
          </UrlListContainer>
        </PreviewSection>
      )}
    </>
  )
})

const UrlListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const PreviewSection = styled.section`
  page-break-inside: avoid;
  break-inside: avoid;
`

export default UrlPreview
