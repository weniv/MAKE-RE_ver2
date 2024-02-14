import React, { useEffect, useRef, useState } from 'react'
import { addData } from '../../../utils'
import { styled } from 'styled-components'
import { Layout, CertItem } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { MainBtn } from '../../atoms/Button'
import { Dnd } from '../../../utils'
import { useResumeStore } from '../../../store/ResumeStore'

export default function Certificate({ id }) {
  const { resumeList, updateResumeData } = useResumeStore()
  const selectedResume = resumeList.find((resume) => resume.id === parseInt(id))

  const [certData, setCertData] = useState(selectedResume.content.certificate)
  const [activeAccordion, setActiveAccordion] = useState(0)

  useEffect(() => {
    updateResumeData(id, 'certificate', certData)
  }, [certData])

  const maxId = certData?.reduce(
    (acc, cur) => {
      return acc.id > cur.id ? acc : cur
    },
    { id: 0 }
  ).id

  const nextId = useRef(maxId)

  const val = {
    id: nextId.current,
    title: '',
    date: '',
  }

  /** 자격증 추가 */
  const addCert = () => {
    nextId.current++
    addData(nextId.current, val, certData, setCertData)
  }

  /** 자격증 삭제 */
  const deleteCert = (idx) => {
    setCertData(certData.filter((cert, i) => i !== idx))
  }

  /** 아코디언 오픈 */
  const handleAccordionClick = (idx) => {
    setActiveAccordion(idx === activeAccordion ? null : idx)
  }

  return (
    <Dnd state={certData} setState={setCertData}>
      <Layout>
        <Section>
          <Header>
            <WriteTitle
              title="자격증"
              description="보유한 자격증이나 인증서를 나열하고, 언제 획득했으며 어떤 의미가 있는지 설명해 주세요."
            />
            <MainBtn onClick={addCert}>자격증 추가하기</MainBtn>
          </Header>
          <ItemList>
            {certData &&
              certData.map((cert, idx) => (
                <CertItem
                  idx={idx}
                  cert={cert}
                  deleteCert={() => deleteCert(idx)}
                  certData={certData}
                  setCertData={setCertData}
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
