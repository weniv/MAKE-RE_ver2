import React, { useContext, useEffect, useRef, useState } from 'react'
import { addData } from '../../../utils'
import { styled } from 'styled-components'
import { Layout, EduItem } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { MainBtn } from '../../atoms/Button'
import { ResumeContext } from '../../../context/ResumeContext'
import { Dnd } from '../../../utils'

export default function Education() {
  const { resumeData } = useContext(ResumeContext)
  const [eduData, setEduData] = useState(resumeData['education'])
  const [activeAccordion, setActiveAccordion] = useState(0)

  useEffect(() => {
    resumeData['education'] = [...eduData]
  }, [eduData])

  const maxId = eduData.reduce(
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
  }

  /** 교육 추가 */
  const addEdu = () => {
    nextId.current++
    addData(nextId.current, val, eduData, setEduData)
  }

  /** 교육 삭제 */
  const deleteEdu = (idx) => {
    setEduData(eduData.filter((edu, i) => i !== idx))
  }

  /** 아코디언 오픈 */
  const handleAccordionClick = (idx) => {
    setActiveAccordion(idx === activeAccordion ? null : idx)
  }

  return (
    <Dnd state={eduData} setState={setEduData}>
      <Layout>
        <Section>
          <Header>
            <WriteTitle
              title="교육"
              description="학력 및 교육 배경을 소개하고, 학교, 전공, 학위, 졸업 연도 등에 대한 정보를 공유해 주세요."
            />
            <MainBtn onClick={addEdu}>교육 추가하기</MainBtn>
          </Header>
          <ItemList>
            {eduData &&
              eduData.map((edu, idx) => (
                <EduItem
                  idx={idx}
                  edu={edu}
                  deleteEdu={() => deleteEdu(idx)}
                  eduData={eduData}
                  setEduData={setEduData}
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
