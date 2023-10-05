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

  return (
    <>
      <PreviewSubtitle>Career</PreviewSubtitle>
      {careerData &&
        careerData.map((data) => (
          <Wrap>
            <PreviewMonthItem
              startDate={data.startDate}
              endDate={data.endDate ? data.endDate : '재직 중'}
              color={mainColor}
              size={'12px'}
            />
          </Wrap>
        ))}
    </>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`
