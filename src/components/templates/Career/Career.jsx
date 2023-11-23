import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { WriteTitle } from '../../atoms/Title'
import { CareerItem } from '../../organisms/Component'
import { addData } from '../../../utils'
import { MainBtn } from '../../atoms/Button'
import { Dnd } from '../../../utils'
import { Layout } from '../../organisms/Component'
import { ResumeContext } from '../../../context/ResumeContext'

export default function Career() {
  const { resumeData, setResumeData } = useContext(ResumeContext)
  const [careerData, setCareerData] = useState(resumeData['career'])
  const [activeAccordion, setActiveAccordion] = useState(0)

  useEffect(() => {
    setResumeData({
      ...resumeData,
      career: careerData.filter((el, idx) => idx === 0 || !!el.title),
    })
  }, [careerData])

  const maxId = careerData.reduce(
    (acc, cur) => {
      return acc.id > cur.id ? acc : cur
    },
    { id: 0 }
  ).id

  const nextId = useRef(maxId)

  const val = {
    id: nextId.current,
    startDate: '',
    endDate: '',
    inProgress: false,
    works: '',
  }

  /** 커리어 추가 */
  const addCareer = () => {
    nextId.current++
    addData(nextId.current, val, careerData, setCareerData)
  }

  /** 커리어 삭제 */
  const handleDelete = (idx) => {
    setCareerData(careerData.filter((career, i) => i !== idx))
  }

  /** 아코디언 오픈 */
  const handleAccordionClick = (idx) => {
    setActiveAccordion(idx === activeAccordion ? null : idx)
  }

  return (
    <Dnd state={careerData} setState={setCareerData}>
      <Layout>
        <Section>
          <Header>
            <WriteTitle
              title={'커리어'}
              description={
                '경력에 대해 자세히 설명하고, 각 직무에서의 주요 책임과 성과를 기록해주세요.'
              }
            />
            <MainBtn onClick={addCareer}>커리어 추가하기</MainBtn>
          </Header>
          <ItemList>
            {careerData &&
              careerData.map((career, idx) => (
                <CareerItem
                  idx={idx}
                  career={career}
                  handleDelete={() => handleDelete(idx)}
                  careerData={careerData}
                  setCareerData={setCareerData}
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
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
