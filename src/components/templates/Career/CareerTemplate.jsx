import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { WriteTitle } from '../../atoms/Title'
import { Career } from '../../organisms/Component'
import { addData } from '../../../utils'
import { MainBtn } from '../../atoms/Button'
import { DndContext, closestCenter } from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'

export default function CareerTemplates() {
  const [careerData, setCareerData] = useState([
    {
      id: 1,
      title: '',
      start: '',
      end: '',
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

  const handleDragEnd = (e) => {
    const { active, over } = e
    setCareerData((career) => {
      const oldIdx = career.findIndex((pro) => pro.id === active.id)
      const newIdx = career.findIndex((pro) => pro.id === over.id)
      return arrayMove(career, oldIdx, newIdx)
    })
  }

  console.log('careerData', careerData)

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Cont>
        <Header>
          <WriteTitle
            title={'경험'}
            description={'대략 본인의 경험을 입력해달라는 내용의 문구'}
          />
          <MainBtn onClick={addCareer}>경험 추가하기</MainBtn>
        </Header>
        <SortableContext
          items={careerData}
          strategy={verticalListSortingStrategy}
        >
          {careerData &&
            careerData.map((career, idx) => (
              <Career
                idx={idx}
                career={career}
                deleteCareer={() => deleteCareer(idx)}
                careerData={careerData}
                setCareerData={setCareerData}
                key={idx}
              />
            ))}
        </SortableContext>
      </Cont>
    </DndContext>
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
