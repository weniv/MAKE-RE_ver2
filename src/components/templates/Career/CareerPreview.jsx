import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { PreviewSubtitle } from '../../atoms/Title'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import getSectionId from '../../../utils/getSectionId'
import { useResumeStore } from '../../../store/ResumeStore'
import { useParams } from 'react-router-dom'

const CareerPreview = forwardRef((props, ref) => {
  const id = Number(useParams().id)

  const { resumeList } = useResumeStore()
  const { mainColor } = useContext(ColorContext)

  const currnetResume = resumeList.find((resume) => resume.id === id)
  const currentCareerData = currnetResume.content.career

  const sectionId = getSectionId('커리어', 3)

  return (
    <>
      {currentCareerData &&
      currentCareerData.length > 0 &&
      currentCareerData[0].title ? (
        <section ref={(careerRef) => (ref.current[sectionId] = careerRef)}>
          <PreviewSubtitle>Career</PreviewSubtitle>
          <Wrap>
            {currentCareerData &&
              currentCareerData.map((data) => (
                <Content>
                  {data.startDate && (data.endDate || data.inProgress) ? (
                    <>
                      <PreviewMonthItem
                        type={'career'}
                        startDate={data.startDate}
                        endDate={data.endData}
                        inProgress={data.inProgress}
                        color={mainColor}
                      />
                    </>
                  ) : null}
                  <div>
                    <Title>
                      {data.title}
                      {data.rank ? (
                        <p className="rank">({`직급: ${data.rank}`})</p>
                      ) : null}
                    </Title>

                    <p className="works">{data.works}</p>
                  </div>
                </Content>
              ))}
          </Wrap>
        </section>
      ) : null}
    </>
  )
})

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const Content = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  break-inside: avoid;
  page-break-inside: avoid;

  p.works {
    line-height: 22px;
  }
`
const Title = styled.p`
  display: flex;
  gap: 8px;
  color: var(--surface-color);
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 12px;

  p.rank {
    color: #47494d;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`

export default CareerPreview
