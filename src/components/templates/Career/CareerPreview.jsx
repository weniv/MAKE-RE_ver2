import React, { forwardRef, useContext } from 'react'
import styled from 'styled-components'
import { PreviewSubtitle } from '../../atoms/Title'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'
import getSectionId from '../../../utils/getSectionId'

const CareerPreview = forwardRef((props, ref) => {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const careerData = data.career.filter((el) => !!el.title)

  function formatDate(date) {
    if (date) {
      return date.replace('-', '. ') + '.'
    }
  }

  const sectionId = getSectionId('커리어', 3)

  return (
    <>
      {careerData.length > 0 ? (
        <section ref={(careerRef) => (ref.current[sectionId] = careerRef)}>
          <PreviewSubtitle>Career</PreviewSubtitle>
          <Wrap gap="40px">
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
                      size={'1.2rem'}
                    />
                  ) : null}
                  <Title>{data.title}</Title>
                  <Works>{data.works}</Works>
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
  gap: ${(props) => props.gap || '16px'};
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  break-inside: avoid;
  page-break-inside: avoid;
  &:first-child {
    break-before: avoid;
    page-break-before: avoid;
  }
`
const Title = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--surface-color);
`

const Works = styled.p`
  color: var(--surface-color);
  font-size: 1.4rem;
  line-height: 2rem;
  white-space: pre-wrap;
`

export default CareerPreview
