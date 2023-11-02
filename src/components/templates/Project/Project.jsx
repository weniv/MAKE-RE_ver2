import React, { useState, useRef, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { WriteTitle } from '../../atoms/Title'
import { ProjectItem } from '../../organisms/Component'
import { MainBtn } from '../../atoms/Button'
import { addData } from '../../../utils'
import { Dnd } from '../../../utils'
import { Layout } from '../../organisms/Component'
import { ResumeContext } from '../../../context/ResumeContext'

export default function Project() {
  const { resumeData, setResumeData } = useContext(ResumeContext)
  const [projectData, setProjectData] = useState(resumeData['project'])
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    setResumeData({
      ...resumeData,
      project: projectData.filter((el, idx) => idx === 0 || !!el.title),
    })
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
    skills: [],
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
                '참여한 프로젝트를 소개하고, 본인의 역할과 어떤 결과를 달성했는지 설명해 주세요.'
              }
            />
            <MainBtn onClick={addProject}>프로젝트 추가하기</MainBtn>
          </Header>

          <ItemList>
            {projectData &&
              projectData.map((project, idx) => (
                <ProjectItem
                  idx={idx}
                  project={project}
                  projectData={projectData}
                  setProjectData={setProjectData}
                  handleDelete={() => handleDelete(idx)}
                  activeIdx={activeIdx}
                  setActiveIdx={setActiveIdx}
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
