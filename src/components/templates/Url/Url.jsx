import React, { useContext, useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { Layout, UrlItem } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { ResumeContext } from '../../../context/ResumeContext'
import { Dnd, addData } from '../../../utils'
import { MainBtn } from '../../atoms/Button'

export default function Url() {
  const { resumeData } = useContext(ResumeContext)
  const [urlData, setUrlData] = useState(resumeData['url'])
  const [activeAccordion, setActiveAccordion] = useState(0)

  useEffect(() => {
    resumeData['url'] = [...urlData]
  }, [urlData])

  const maxId = urlData.reduce(
    (acc, cur) => {
      return acc.id > cur.id ? acc : cur
    },
    { id: 0 }
  ).id

  const nextId = useRef(maxId)

  const val = {
    id: nextId.current,
    content: '',
    link: '',
  }

  /** url 추가 */
  const addUrl = () => {
    nextId.current++
    addData(nextId.current, val, urlData, setUrlData)
  }

  /** url 삭제 */
  const deleteUrl = (idx) => {
    setUrlData(urlData.filter((url, i) => i !== idx))
  }

  /** 아코디언 오픈 */
  const handleAccordionClick = (idx) => {
    setActiveAccordion(idx === activeAccordion ? null : idx)
  }

  return (
    <Dnd state={urlData} setState={setUrlData}>
      <Layout>
        <Section>
          <Header>
            <WriteTitle
              title="추가 URL"
              description="LinkedIn 프로필, 포트폴리오, 또는 다른 온라인 자료가 있다면 링크를 제공해 주세요."
            />
            <MainBtn onClick={addUrl}>URL 추가하기</MainBtn>
          </Header>
          <ItemList>
            {urlData &&
              urlData.map((url, idx) => (
                <UrlItem
                  idx={idx}
                  url={url}
                  deleteUrl={() => deleteUrl(idx)}
                  urlData={urlData}
                  setUrlData={setUrlData}
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
