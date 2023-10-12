import React, { useContext } from 'react'
import styled from 'styled-components'
import { PreviewSubtitle } from '../../atoms/Title'
import { LocalContext } from '../../../pages/PreviewPage'
import ColorContext from '../../../context/ColorContext'
import { PreviewMonthItem } from '../../atoms/PreviewItem'

export default function CareerPreview() {
  const { data } = useContext(LocalContext)
  const { mainColor } = useContext(ColorContext)
  const careerData = data.career

  return (
    <>
      {data.career.length > 0 ? (
        <section>
          <PreviewSubtitle>Career</PreviewSubtitle>
          <Wrap gap="40px">
            {careerData &&
              careerData.map((data) => (
                <Wrap>
                  {data.startDate && (data.endDate || data.inProgress) ? (
                    <PreviewMonthItem
                      type={'career'}
                      startDate={data.startDate}
                      endDate={data.inProgress ? '재직중' : data.endDate}
                      color={mainColor}
                      size={'0.75rem'}
                    />
                  ) : null}
                  <Title>{data.title}</Title>
                  <Works>{data.works}</Works>
                </Wrap>
              ))}
          </Wrap>
        </section>
      ) : null}
    </>
  )
}

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || '16px'};
`

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: var(--font-color);
`

const Works = styled.p`
  color: var(--font-color);
  font-size: 0.875rem;
  line-height: 1.25rem;
  white-space: pre-wrap;
`
