import React from 'react'
import styled from 'styled-components'
import ColorIcon from '../ColorIcon/ColorIcon'
import IconUrl from '../../../assets/icon-Url.svg'

export default function PreviewLink({ link, title }) {
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
      {title ? <span className="linkTitle">{title}</span> : null}
      <LinkItem href={urlFormat(link)} target="_blank">
        {link}
      </LinkItem>
    </LinkContainer>
  )
}

const LinkItem = styled.a`
  text-decoration: none;
  font-size: 14px;

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
  background-color: var(--gray-lv1-color);
  border-radius: 5px;

  span.linkTitle {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1.4rem;
    color: var(--gray-lv4-color);
  }
`
