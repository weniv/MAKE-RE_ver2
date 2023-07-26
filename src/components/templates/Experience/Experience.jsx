import React, { useRef, useContext, useState } from 'react'
import { ExpItem, Layout } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { MainBtn } from '../../atoms/Button'
import { addData } from '../../../utils'
import { ResumeContext } from '../../../context/ResumeContext'
import { styled } from 'styled-components'

export default function Experience() {
  const { resumeData } = useContext(ResumeContext)
  const [expData, setExpData] = useState(resumeData['experience'])

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
  }

  /** 경험 추가 */
  const addExp = () => {
    nextId.current++
    addData(nextId.current, val, expData, setExpData)
  }

  /** 경험 삭제 */
  const deleteExp = (idx) => {
    setExpData(expData.filter((edu, i) => i !== idx))
  }

  return (
    <Layout>
      <Section>
        <Header>
          <WriteTitle
            title="경험"
            description="대략 본인의 경험을 입력해달라는 내용의 문구"
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
