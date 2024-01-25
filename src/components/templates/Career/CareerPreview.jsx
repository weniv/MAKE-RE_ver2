import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { PreviewSubtitle } from '../../atoms/Title'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import getSectionId from '../../../utils/getSectionId'

const CareerPreview = forwardRef((props, ref) => {
  const { selectedResume } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const careerData = selectedResume.career?.filter((el) => !!el.title)

  function formatDate(date) {
    if (date) {
      return date.replace('-', '. ') + '.'
    }
  }

  const sectionId = getSectionId('커리어', 3)

  return (
    <>
      {careerData && careerData.length > 0 ? (
        <section ref={(careerRef) => (ref.current[sectionId] = careerRef)}>
          <PreviewSubtitle>Career</PreviewSubtitle>
          <Wrap>
            {careerData &&
              careerData.map((data) => (
                <Content>
                  {data.startDate && (data.endDate || data.inProgress) ? (
                    <PreviewMonthItem
                      type={'career'}
                      startDate={formatDate(data.startDate)}
                      endDate={
                        data.inProgress ? '재직 중' : formatDate(data.endDate)
                      }
                      color={mainColor}
                    />
                  ) : null}
                  <div>
                    <Title>
                      {data.title} <p className="rank">(직급: {data.rank})</p>
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
