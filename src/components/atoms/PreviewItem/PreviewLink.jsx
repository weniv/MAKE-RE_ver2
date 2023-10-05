import React from 'react'
import styled from 'styled-components'

export default function PreviewLink({ link }) {
  function urlFormat(url) {
    // url 절대경로 변환
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      url = 'http://' + url
    }
    return url
  }
  return <LinkItem href={urlFormat(link)}>{link}</LinkItem>
}

const LinkItem = styled.a`
  display: inline-block;
  background-color: #f2f2f2;
  padding: 8px 12px;
  color: inherit;
  text-decoration: none;
  border-radius: 5px;
`
