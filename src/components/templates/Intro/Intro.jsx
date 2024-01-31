import { useState, useEffect } from 'react'
import { WriteTitle } from '../../atoms/Title'
import { DefaultTextarea } from '../../atoms/Input'
import Layout from '../../organisms/Component/Layout'
import { styled } from 'styled-components'
import { useResumeStore } from '../../../store/ResumeStore'

export default function Intro({ id }) {
  const storedResumeData = JSON.parse(
    localStorage.getItem('makere-resume-list')
  )
  const selectedResume = storedResumeData?.state.resumeList.find(
    (el) => el.id === Number(id)
  )
  const [intro, setIntro] = useState(selectedResume.content.intro)
  const updateResumeData = useResumeStore((state) => state.updateResumeData)

  const maxCount = 1000

  useEffect(() => {
    if (intro.trim().length > maxCount) {
      setIntro(intro.slice(0, maxCount))
    }
    updateResumeData(Number(id), 'intro', intro)
  }, [intro])

  function handleUpdateIntro(e) {
    const updatedIntro = e.target.value

    if (intro.trim().length <= maxCount) {
      setIntro(updatedIntro)
      updateResumeData(Number(id), 'intro', updatedIntro)
    }
  }

  return (
    <Layout>
      <Section>
        <WriteTitle
          title="자기소개서"
          description="자신의 역량, 성과, 목표 등 이력서로 전달하고 싶은 핵심 메시지를 자유롭게 기술해 주세요."
        />

        <>
          <DefaultTextarea
            height="516px"
            width="100%"
            type="intro"
            lineHeight="175%"
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
