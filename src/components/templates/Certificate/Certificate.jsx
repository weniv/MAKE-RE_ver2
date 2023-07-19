import React, { useRef, useState } from 'react'
import { addData } from '../../../utils'
import { styled } from 'styled-components'
import { Layout, CertItem } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { MainBtn } from '../../atoms/Button'

export default function Certificate() {
  const [certData, setCertData] = useState([
    {
      id: 1,
      title: '',
      date: '',
    },
  ])

  const maxId = certData.reduce(
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

  return (
    <Layout>
      <Section>
        <Header>
          <WriteTitle
            title="자격증"
            description="대략 본인의 자격증을 입력해달라는 내용의 문구"
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
