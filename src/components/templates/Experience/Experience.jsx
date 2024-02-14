import React, { useRef, useState, useEffect } from 'react'
import { ExpItem, Layout } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { MainBtn } from '../../atoms/Button'
import { styled } from 'styled-components'
import { useResumeStore } from '../../../store/ResumeStore'

export default function Experience({ id }) {
  // store에서 데이터를 가져옵니다.
  const { resumeList, updateResumeData } = useResumeStore()
  const selectedResume = resumeList.find((resume) => resume.id === parseInt(id))

  // 현재 페이지에서 수정할 데이터의 초기값으로 넣어줍니다
  const [expData, setExpData] = useState(selectedResume.content.experience)
  const [activeAccordion, setActiveAccordion] = useState(0)

  // 데이터가 갱신될 때마다 resume store에 저장합니다.
  useEffect(() => {
    updateResumeData(id, 'experience', expData)
  }, [expData])

  const maxId = expData?.reduce(
    (acc, cur) => {
      return acc.id > cur.id ? acc : cur
    },
    { id: 0 }
  ).id

  const nextId = useRef(maxId)

  const val = {
    id: nextId.current,
    title: '',
    startDate: '',
    endDate: '',
    inProgress: false,
    content: '',
    link: '',
  }

  // 추가, 삭제는 이 페이지에서 사용하는 데이터 (expData)에 해주면 됩니다.
  /** 경험 추가 */
  const addExp = () => {
    nextId.current++
    setExpData([...expData, val])
  }

  /** 경험 삭제 */
  const deleteExp = (idx) => {
    setExpData(expData.filter((exp, i) => i !== idx))
  }

  /** 아코디언 오픈 */
  const handleAccordionClick = (idx) => {
    setActiveAccordion(idx === activeAccordion ? null : idx)
  }

  return (
    <Layout>
      <Section>
        <Header>
          <WriteTitle
            title="경험"
            description="봉사 활동, 집필 또는 다른 경험을 기술하고 어떤 역량을 발전시키거나 배웠는지 설명해주세요."
          />
          <MainBtn onClick={addExp}>경험 추가하기</MainBtn>
        </Header>
        <ItemList>
          {expData &&
            expData.map((exp, idx) => (
              <ExpItem
                idx={idx}
                exp={exp}
                deleteExp={() => deleteExp(idx)}
                expData={expData}
                setExpData={setExpData}
                key={idx}
                activeAccordion={activeAccordion}
                onAccordionClick={handleAccordionClick}
              />
            ))}
        </ItemList>
      </Section>
    </Layout>
  )
}

const Section = styled.div`
  padding: 0 52px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
