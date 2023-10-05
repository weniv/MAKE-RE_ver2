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

  //   {
  //     "id": 1,
  //     "companyName": "",
  //     "startData": "",
  //     "endData": "",
  //     "inProgress": false,
  //     "works": "스터디인 개발",
  //     "title": "위니브",
  //     "startDate": "2021-12",
  //     "endDate": "2023-02"
  // }

  const testData = ['111111111', '222222222', '333333333333']

  return (
    <section>
      <PreviewSubtitle>Career</PreviewSubtitle>
      <Wrap gap="40px">
        {careerData &&
          careerData.map((data) => (
            <Wrap>
              <PreviewMonthItem
                type={'career'}
                startDate={data.startDate}
                endDate={data.endDate ? data.endDate : '재직 중'}
                color={mainColor}
                size={'0.75rem'}
              />
              <Title>{data.title}</Title>
              <Works>
                {testData.map((work) => (
                  <li>{work}</li>
                ))}
              </Works>
            </Wrap>
          ))}
      </Wrap>
    </section>
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

const Works = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  color: var(--font-color);

  li {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`
