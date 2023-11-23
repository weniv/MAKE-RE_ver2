import React, { useRef, useContext, useState, useEffect } from 'react'
import { ExpItem, Layout } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { MainBtn } from '../../atoms/Button'
import { addData } from '../../../utils'
import { ResumeContext } from '../../../context/ResumeContext'
import { styled } from 'styled-components'
import { Dnd } from '../../../utils'

export default function Experience() {
  const { resumeData } = useContext(ResumeContext)
  const [expData, setExpData] = useState(resumeData['experience'])
  const [activeAccordion, setActiveAccordion] = useState(0)

  useEffect(() => {
    resumeData['experience'] = [...expData]
  }, [expData])

  const maxId = expData.reduce(
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

  /** 경험 추가 */
  const addExp = () => {
    nextId.current++
    addData(nextId.current, val, expData, setExpData)
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
    <Dnd state={expData} setState={setExpData}>
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
    </Dnd>
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
