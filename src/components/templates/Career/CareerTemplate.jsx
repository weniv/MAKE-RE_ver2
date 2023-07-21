import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { WriteTitle } from '../../atoms/Title'
import { Career } from '../../organisms/Component'
import { addData } from '../../../utils'
import { MainBtn } from '../../atoms/Button'
import { Dnd } from '../../../utils'
import { Layout } from '../../organisms/Component'

export default function CareerTemplates() {
  const [careerData, setCareerData] = useState([
    {
      id: 1,
      title: '',
      startDate: '',
      endDate: '',
      works: '',
      progress: false,
    },
  ])

  const maxId = careerData.reduce(
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
    works: '',
    progress: false,
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


  console.log('careerData', careerData[0].progress)

  return (
    <Dnd state={careerData} setState={setCareerData}>
      <Layout>
        <Section>
          <Header>
            <WriteTitle
              title={'커리어'}
              description={'대략 본인의 커리어를 입력해달라는 내용의 문구'}
            />
            <MainBtn onClick={addCareer}>경력 추가하기</MainBtn>
          </Header>
          {careerData &&
            careerData.map((career, idx) => (
              <Career
                idx={idx}
                career={career}
                handleDelete={() => handleDelete(idx)}
                careerData={careerData}
                setCareerData={setCareerData}
                key={idx}
              />
            ))}
        </Section>
      </Layout>
    </Dnd>
  )
}

const Section = styled.div`
  padding: 0 52px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
