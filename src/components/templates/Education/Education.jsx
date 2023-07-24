import React, { useRef, useState } from 'react'
import { addData } from '../../../utils'
import { styled } from 'styled-components'
import { Layout, EduItem } from '../../organisms/Component'
import { WriteTitle } from '../../atoms/Title'
import { MainBtn } from '../../atoms/Button'

export default function Education() {
  const [eduData, setEduData] = useState([
    {
      id: 1,
      title: '',
      start: '',
      end: '',
      inProgres: false,
    },
  ])

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
    start: '',
    end: '',
    inProgres: false,
  }

  /** 교육 추가 */
  const addEdu = () => {
    nextId.current++
    addData(nextId.current, val, eduData, setEduData)
  }

  /** 자격증 삭제 */
  const deleteEdu = (idx) => {
    setEduData(eduData.filter((edu, i) => i !== idx))
  }
  return (
    <Layout>
      <Section>
        <Header>
          <WriteTitle
            title="교육"
            description="대략 본인의 교육을 입력해달라는 내용의 문구"
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
