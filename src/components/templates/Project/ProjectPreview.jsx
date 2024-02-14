import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { PreviewSubtitle } from '../../atoms/Title'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import ColorContext from '../../../context/ColorContext'
import PreviewLink from '../../atoms/PreviewItem/PreviewLink'
import getSectionId from '../../../utils/getSectionId'
import { useParams } from 'react-router'
import { useResumeStore } from '../../../store/ResumeStore'

const ProjectPreview = forwardRef((props, ref) => {
  const id = Number(useParams().id)
  const { resumeList } = useResumeStore()
  const selectedResume = resumeList.find((resume) => resume.id === id)
  const projectData = selectedResume.content.project
  const { mainColor } = useContext(ColorContext)
  const sectionId = getSectionId('프로젝트', 4)

  return (
    <>
      {projectData && projectData.length > 0 && projectData[0].title ? (
        <>
          <section ref={(projectRef) => (ref.current[sectionId] = projectRef)}>
            <PreviewSubtitle>Project</PreviewSubtitle>
            <Project>
              {projectData &&
                projectData.map((data) => (
                  <ProjectItem>
                    <ProjectTitle>
                      <Title mainColor={mainColor}>{data.title}</Title>
                      <PreviewMonthItem
                        type="project"
                        startDate={data.startDate}
                        endDate={data.endDate}
                        inProgress={data.inProgress}
                        color={mainColor}
                      ></PreviewMonthItem>
                    </ProjectTitle>
                    <ProjectWrap>
                      <p className="outline">{data.outline}</p>
                      <InformationBox>
                        <li>
                          <span className="title">개발 인원</span>
                          <span>{data.people}</span>
                        </li>
                        <li>
                          <span className="title">기여 부분</span>
                          <span>
                            <ul>
                              {data.contributions
                                .filter((cont) => cont !== '')
                                .map((cont) => (
                                  <li className="list">- {cont}</li>
                                ))}
                            </ul>
                          </span>
                        </li>
                        <li>
                          <span className="title">적용 기술</span>
                          <span>
                            <ul className="skills">
                              {data.skills
                                .filter((skill) => skill !== '')
                                .map((skill) => (
                                  <Badge className="list">{skill}</Badge>
                                ))}
                            </ul>
                          </span>
                        </li>
                      </InformationBox>
                    </ProjectWrap>
                    <LinkWrap>
                      {data.githubLink && (
                        <PreviewLink
                          link={data.githubLink}
                          title="깃허브 링크"
                        ></PreviewLink>
                      )}
                      {data.demoLink && (
                        <PreviewLink
                          link={data.demoLink}
                          title="프로젝트 링크"
                        ></PreviewLink>
                      )}
                      {data.snsLink && (
                        <PreviewLink
                          link={data.snsLink}
                          title="프로젝트 SNS 링크"
                        ></PreviewLink>
                      )}
                    </LinkWrap>
                  </ProjectItem>
                ))}
            </Project>
          </section>
        </>
      ) : null}
    </>
  )
})

const Project = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  p {
    font-size: 1.4rem;
  }

  p.outline {
    white-space: pre-wrap;
    color: var(--surface-color);
    font-size: 16px;
    line-height: 28px;
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

  display: flex;
  flex-direction: column;
  gap: 20px;
`

const ProjectTitle = styled.h4`
  display: flex;
  gap: 16px;
  align-items: center;
`

const ProjectWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Title = styled.p`
  padding: 0 4px 0;
  color: ${(props) => props.mainColor};
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.mainColor};
    opacity: 0.15;
  }
`

const InformationBox = styled.ul`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  border: 1px solid #d9dbe0;

  li {
    display: flex;
    gap: 16px;

    span {
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
    }

    span.title {
      color: #47494d;
      font-weight: 400;
    }

    ul.skills {
      display: flex;
      gap: 6px;
    }
  }
`
const Badge = styled.li`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background-color: #4f4f4f;
  color: #ffffff;
  padding: 0 4px 0;
  border-radius: 2px;
`

const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export default ProjectPreview
