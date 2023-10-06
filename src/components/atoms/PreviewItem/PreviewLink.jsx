import React from 'react'
import styled from 'styled-components'
import ColorIcon from '../ColorIcon/ColorIcon'
import IconUrl from '../../../assets/icon-Url.svg'

export default function PreviewLink({ link }) {
  function urlFormat(url) {
    // url 절대경로 변환
    if (!url?.startsWith('https://') && !url?.startsWith('http://')) {
      url = 'http://' + url
    }
    return url
  }
  return (
    <LinkContainer>
      <ColorIcon iconPath={IconUrl} />
      <LinkItem href={urlFormat(link)} target="_blank">
        {link}
      </LinkItem>
    </LinkContainer>
  )
}

const LinkItem = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 12px;
  background-color: #f2f2f2;
  border-radius: 5px;
`
