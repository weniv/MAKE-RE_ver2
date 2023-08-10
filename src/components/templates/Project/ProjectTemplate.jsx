import React, { useState, useRef, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { WriteTitle } from '../../atoms/Title'
import { Project } from '../../organisms/Component'
import { MainBtn } from '../../atoms/Button'
import { addData } from '../../../utils'
import { Dnd } from '../../../utils'
import { Layout } from '../../organisms/Component'
import { ResumeContext } from '../../../context/ResumeContext'

export default function ProjectTemplate() {
  const { resumeData } = useContext(ResumeContext)
  const [projectData, setProjectData] = useState(resumeData['project'])

  useEffect(() => {
    resumeData['project'] = [...projectData]
  }, [projectData])

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
    demoLink: '',
    githubLink: '',
    snsLink: '',
    outline: '',
    people: '',
    startDate: '',
    endDate: '',
    inProgress: false,
    contributions: [''],
    skills: [''],
  }

  /** 프로젝트 추가 */
  const addProject = () => {
    nextId.current++
    addData(nextId.current, val, projectData, setProjectData)
  }

  /** 프로젝트 삭제 */
  const handleDelete = (idx) => {
    setProjectData(projectData.filter((pro, i) => i !== idx))
  }

  return (
    <Dnd state={projectData} setState={setProjectData}>
      <Layout>
        <Section>
          <Header>
            <WriteTitle
              title={'프로젝트'}
              description={
                '대략 본인의 프로젝트 정보를 입력해달라는 내용의 문구'
              }
            />
            <MainBtn onClick={addProject}>프로젝트 추가하기</MainBtn>
          </Header>

          <ItemList>
            {projectData &&
              projectData.map((project, idx) => (
                <Project
                  idx={idx}
                  project={project}
                  projectData={projectData}
                  setProjectData={setProjectData}
                  handleDelete={() => handleDelete(idx)}
                  key={idx}
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
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
