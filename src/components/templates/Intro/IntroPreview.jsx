import React, { useContext } from 'react'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewSubtitle } from '../../atoms/Title'
import { SkillList } from '../../atoms/SkillList'
import styled from 'styled-components'

export default function IntroPreview() {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const profileData = data.profile
  const introData = data.profile.intro

  return (
    <>
      {introData && (
        <IntroSection>
          <PreviewSubtitle>Introduction</PreviewSubtitle>
          <IntroCont>{introData}</IntroCont>
        </IntroSection>
      )}
      {profileData?.skills.length > 0 && (
        <SkillSection>
          <PreviewSubtitle type="skills">Skills</PreviewSubtitle>
          {profileData.skills.map((skill, i) => (
            <SkillList key={i} type="preview">
              {skill}
            </SkillList>
          ))}
        </SkillSection>
      )}
    </>
  )
}

const IntroSection = styled.div`
  page-break-inside: avoid;
  break-inside: avoid;
`
const IntroCont = styled.pre`
  color: var(--surface-color);
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  word-wrap: break-word;
  white-space: break-spaces;
`

const SkillSection = styled.section`
  margin-top: 40px;
`
