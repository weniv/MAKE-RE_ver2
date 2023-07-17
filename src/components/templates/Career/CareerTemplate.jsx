import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { WriteTitle } from '../../atoms/Title'
import { Career } from '../../organisms/Component'
import { addData } from '../../../utils'
import { MainBtn } from '../../atoms/Button'

export default function CareerTemplates() {
  const nextId = useRef(1)
  const [careerData, setCareerData] = useState([
    {
      id: nextId.current,
      title: '',
      start: '',
      end: '',
      works: '',
      progress: false,
    },
  ])

  const val = {
    id: nextId.current,
    title: '',
    start: '',
    end: '',
    works: '',
    progress: false,
  }

  /** 커리어 추가 */
  const addCareer = () => {
    nextId.current++
    addData(nextId.current, val, careerData, setCareerData)
  }

  /** 커리어 삭제 */
  const deleteCareer = (idx) => {
    setCareerData(careerData.filter((career, i) => i !== idx))
  }

  console.log('careerData', careerData)

  return (
    <Cont>
      <Header>
        <WriteTitle
          title={'경험'}
          description={'대략 본인의 경험을 입력해달라는 내용의 문구'}
        />
        <MainBtn onClick={addCareer}>경험 추가하기</MainBtn>
      </Header>
      {careerData &&
        careerData.map((career, idx) => (
          <>
            <Career
              idx={idx}
              career={career}
              deleteCareer={() => deleteCareer(idx)}
              careerData={careerData}
              setCareerData={setCareerData}
              key={idx}
            />
          </>
        ))}
    </Cont>
  )
}

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 890px;
  background-color: var(--bg-color);
  filter: drop-shadow(0px 4px 44px rgba(0, 0, 0, 0.1));
  border-radius: 16px;
  padding: 52px;
  margin: 0 auto;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
