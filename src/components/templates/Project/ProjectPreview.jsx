import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { PreviewSubtitle } from '../../atoms/Title'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import PreviewLink from '../../atoms/PreviewItem/PreviewLink'
import getSectionId from '../../../utils/getSectionId'

const ProjectPreview = forwardRef((props, ref) => {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const projectData = data.project.filter((el) => !!el.title)

  const sectionId = getSectionId('프로젝트', 4)
  return (
    <>
      {projectData.length > 0 ? (
        <section ref={(projectRef) => (ref.current[sectionId] = projectRef)}>
          <PreviewSubtitle>Project</PreviewSubtitle>
          <Project>
            {projectData &&
              projectData.map((data) => (
                <ProjectItem>
                  <div className="description">
                    <PreviewMonthItem
                      type="project"
                      startDate={
                        data.startDate ? `${data.startDate}\n` : '시작일\n'
                      }
                      endDate={
                        data.inProgress
                          ? '진행 중'
                          : data.endDate
                          ? data.endDate
                          : '종료일'
                      }
                      color={mainColor}
                    ></PreviewMonthItem>
                    <ProjectWrap>
                      <Title>{data.title}</Title>
                      <p className="outline">{data.outline}</p>
                      <p>{data.people}</p>
                      <ul>
                        {data.skills
                          .filter((skill) => skill !== '')
                          .map((skill) => (
                            <Badge className="list">{skill}</Badge>
                          ))}
                      </ul>
                      <ul>
                        {data.contributions
                          .filter((cont) => cont !== '')
                          .map((cont) => (
                            <li className="list">{cont}</li>
                          ))}
                      </ul>
                    </ProjectWrap>
                  </div>
                  <LinkWrap>
                    <div className="linkCont">
                      <Title>깃허브 링크 </Title>
                      <PreviewLink link={data.githubLink}></PreviewLink>
                    </div>
                    <div className="linkCont">
                      <Title>프로젝트 링크</Title>
                      <PreviewLink link={data.demoLink}></PreviewLink>
                    </div>
                  </LinkWrap>
                </ProjectItem>
              ))}
          </Project>
        </section>
      ) : null}
    </>
  )
})

const Project = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  div.description {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }

  div.description li:not(.list) {
    display: block;
    margin: 0;
    line-height: 2rem;

    p {
      width: auto;
    }
  }

  p {
    font-size: 1.4rem;
  }

  p.outline {
    white-space: pre-wrap;
    line-height: 2rem;
    color: var(--surface-color);
  }

  & > * {
    break-inside: avoid;
  }
`
const ProjectItem = styled.div`
  break-inside: avoid;
  page-break-inside: avoid;
  &:first-child {
    break-before: avoid;
    page-break-before: avoid;
  }
`

const ProjectWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  ul {
    display: flex;
    gap: 5px;
    font-size: 1%.4;
  }

  ul:not(:has(li)) {
    display: none;
  }

  ul:last-child {
    flex-direction: column;
  }

  ul:last-child li {
    list-style-type: disc;
    list-style-position: inside;
  }
`

const Title = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--surface-color);
  white-space: nowrap;

  span {
    font-weight: 400;
    margin-left: 20px;
  }
`

const Badge = styled.li`
  height: 22px;
  display: inline-flex;
  background-color: #4f4f4f;
  color: #ffffff;
  border-radius: 100px;
  padding: 5px 11px;
  align-items: center;
`

const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 30px;

  div.linkCont {
    display: grid;
    grid-template-columns: 1fr 6fr;
    align-items: center;
  }
`

export default ProjectPreview
