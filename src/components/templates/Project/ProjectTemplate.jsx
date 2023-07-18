import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { WriteTitle } from '../../atoms/Title'
import { Project } from '../../organisms/Component'
import { MainBtn } from '../../atoms/Button'
import { addData } from '../../../utils'
import { DndContext, closestCenter } from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'

export default function ProjectTemplate() {
  const [projectData, setProjectData] = useState([
    {
      id: 1,
      title: '',
      outline: '',
      people: '',
      startDate: '',
      endDate: '',
      progress: false,
      contributes: [''],
      skills: [''],
      demoLink: '',
      githubLink: '',
      snsLink: '',
    },
  ])

  const maxId = projectData.reduce(
    (acc, cur) => {
      return acc.id > cur.id ? acc : cur
    },
    { id: 0 }
  ).id

  const nextId = useRef(maxId)

  const val = {
    id: nextId.current,
    title: '',
    outline: '',
    people: '',
    startDate: '',
    endDate: '',
    progress: false,
    contributes: [''],
    skills: [],
    demoLink: '',
    githubLink: '',
    snsLink: '',
  }

  /** 프로젝트 추가 */
  const addProject = () => {
    nextId.current++
    addData(nextId.current, val, projectData, setProjectData)
  }

  /** 프로젝트 삭제 */
  const deleteProject = (idx) => {
    setProjectData(projectData.filter((pro, i) => i !== idx))
  }

  const handleDragEnd = (e) => {
    const { active, over } = e
    setProjectData((career) => {
      const oldIdx = career.findIndex((pro) => pro.id === active.id)
      const newIdx = career.findIndex((pro) => pro.id === over.id)
      return arrayMove(career, oldIdx, newIdx)
    })
  }

  // console.log('projectData', projectData)

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <Cont>
        <Header>
          <WriteTitle
            title={'프로젝트'}
            description={'대략 본인의 프로젝트 정보를 입력해달라는 내용의 문구'}
          />
          <MainBtn onClick={addProject}>프로젝트 추가하기</MainBtn>
        </Header>
        <SortableContext
          items={projectData}
          strategy={verticalListSortingStrategy}
        >
          {projectData &&
            projectData.map((project, idx) => (
              <Project
                idx={idx}
                project={project}
                projectData={projectData}
                setProjectData={setProjectData}
                deleteProject={() => deleteProject(idx)}
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
  width: 890px;
  background-color: var(--bg-color);
  filter: drop-shadow(0px 4px 44px rgba(0, 0, 0, 0.1));
  border-radius: 16px;
  padding: 52px;
  margin: 0 auto;
  gap: 12px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
