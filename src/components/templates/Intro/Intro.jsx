import { useState, useEffect, useContext } from 'react'
import { ResumeContext } from '../../../context/ResumeContext'
import { WriteTitle } from '../../atoms/Title'
import { DefaultTextarea } from '../../atoms/Input'
import Layout from '../../organisms/Component/Layout'
import { styled } from 'styled-components'

export default function Intro() {
  const { resumeData, setResumeData } = useContext(ResumeContext)
  const [intro, setIntro] = useState(resumeData['profile']['intro'])
  const maxCount = 1000

  useEffect(() => {
    if (intro.trim().length > maxCount) {
      resumeData['profile']['intro'] = intro.slice(0, maxCount)
      setIntro(intro.slice(0, maxCount))
    } else {
      // resumeData['profile']['intro'] = intro
      setResumeData({
        ...resumeData,
        profile: { ...resumeData['profile'], intro },
      })
    }
  }, [intro])

  function handleUpdateIntro(e) {
    if (intro.trim().length <= maxCount) {
      setIntro(e.target.value)
    }
  }

  useEffect(() => {}, [intro])

  return (
    <Layout>
      <Section>
        <WriteTitle
          title="자기소개서"
          description="대략 본인의 자기소개서를 입력해달라는 내용의 문구"
        />

        <>
          <DefaultTextarea
            height="516px"
            width="100%"
            type="intro"
            placeholder="예) 풀스택 웹 개발자를 꿈꾸는 홍길동입니다."
            onChange={handleUpdateIntro}
            inputData={intro}
          />
        </>
        <WordCountWrap>{intro.trim().length}/1000</WordCountWrap>
      </Section>
    </Layout>
  )
}

const Section = styled.div`
  padding: 0 52px;
`

const WordCountWrap = styled.p`
  color: var(--gray-lv4-color);
  font-size: 12px;
  margin-top: 8px;
  text-align: right;
`
