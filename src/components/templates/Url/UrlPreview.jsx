import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import { PreviewSubtitle } from '../../atoms/Title'
import PreviewLink from '../../atoms/PreviewItem/PreviewLink'
import styled from 'styled-components'

export default function UrlPreview({ urlRef }) {
  const { data } = useContext(LocalContext)
  const urlData = data.url
  const urlList = urlData.filter(
    (url) => url.content?.trim() || url.link?.trim()
  )

  return (
    <>
      {!!urlList.length && (
        <PreviewSection ref={urlRef}>
          <PreviewSubtitle>URL</PreviewSubtitle>
          <UrlListContainer>
            {urlList.map((url) => (
              <li>
                <UrlContent>{url.content}</UrlContent>
                <PreviewLink link={url.link} />
              </li>
            ))}
          </UrlListContainer>
        </PreviewSection>
      )}
    </>
  )
}

const UrlListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & li {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`

const UrlContent = styled.p`
  font-size: 16px;
  font-weight: 700;
`

const PreviewSection = styled.section`
  page-break-inside: avoid;
  break-inside: avoid;
`
