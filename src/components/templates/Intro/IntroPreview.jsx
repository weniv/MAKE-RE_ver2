import React, { useContext, useRef } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'

export default function IntroPreview({ introRef }) {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const introData = data.profile.intro

  return (
    <>
      {introData && (
        <IntroSection ref={introRef}>
          <PreviewSubtitle>Introduction</PreviewSubtitle>
          <IntroCont>{introData}</IntroCont>
        </IntroSection>
      )}
    </>
  )
}

const IntroSection = styled.div`
  page-break-inside: avoid;
  break-inside: avoid;
`
const IntroCont = styled.pre`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  word-wrap: break-word;
  white-space: break-spaces;
`
