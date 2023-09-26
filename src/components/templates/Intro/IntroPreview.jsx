import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewSubtitle } from '../../atoms/Title'
import styled from 'styled-components'

export default function IntroPreview() {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const introData = data.profile.intro

  return (
    <>
      <section>
        <PreviewSubtitle>Introduction</PreviewSubtitle>
        <IntroCont>{introData}</IntroCont>
      </section>
    </>
  )
}

const IntroCont = styled.pre`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  word-wrap: break-word;
  white-space: break-spaces;
`
