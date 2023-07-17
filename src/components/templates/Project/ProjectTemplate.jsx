import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { WriteTitle } from '../../atoms/Title'
import { Project } from '../../organisms/Component'
import { MainBtn } from '../../atoms/Button'
import { addData } from '../../../utils'

export default function ProjectTemplate() {
  const nextId = useRef(1)
  const [projectData, setProjectData] = useState([
    {
      id: nextId.current,
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

  // console.log('projectData', projectData)

  return (
    <Cont>
      <Header>
        <WriteTitle
          title={'프로젝트'}
          description={'대략 본인의 프로젝트 정보를 입력해달라는 내용의 문구'}
        />
        <MainBtn onClick={addProject}>프로젝트 추가하기</MainBtn>
      </Header>
      {projectData &&
        projectData.map((project, idx) => (
          <>
            <Project
              idx={idx}
              project={project}
              projectData={projectData}
              setProjectData={setProjectData}
              deleteProject={() => deleteProject(idx)}
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
