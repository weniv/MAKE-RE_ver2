import React from 'react'
import styled from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DateInput } from '../../atoms/Input'
import { updateData } from '../../../utils'

export default function Certificate({
  idx,
  cert,
  certData,
  setCertData,
  deleteCert,
  activeAccordion,
  onAccordionClick,
}) {
  return (
    <ComponentHeader
      id={cert.id}
      kind="자격증"
      title={cert.title ? cert.title : null}
      handleDelete={deleteCert}
      isOpen={idx === activeAccordion}
      onAccordionClick={() => onAccordionClick(idx)}
    >
      <Wrap>
        <DefaultInput
          id={`cert-title-${cert.id}`}
          type="text"
          width="738px"
          name="title"
          placeholder="예) 정보처리기사"
          onChange={(e) => updateData(e, idx, certData, setCertData)}
          inputData={cert.title}
          maxLength={45}
        >
          자격증명
        </DefaultInput>
        <DetailWrap>
          <DefaultInput
            width="506px"
            marginRight="0px"
            id={`cert-issuer-${cert.id}`}
            type="text"
            name="issuer"
            inputData={cert.issuer}
            onChange={(e) => {
              updateData(e, idx, certData, setCertData)
            }}
          >
            발급 기관
          </DefaultInput>
          <DefaultInput
            width="220px"
            marginRight="0px"
            id={`cert-score-${cert.id}`}
            type="text"
            name="score"
            inputData={cert.score}
            onChange={(e) => {
              updateData(e, idx, certData, setCertData)
            }}
          >
            취득 점수
          </DefaultInput>
        </DetailWrap>
        <DateWrap>
          <DateInput
            id={`cert-date-${cert.id}`}
            width="220px"
            name="date"
            inputData={cert.date}
            onChange={(e) => updateData(e, idx, certData, setCertData)}
          >
            취득일
          </DateInput>
        </DateWrap>
      </Wrap>
    </ComponentHeader>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const DetailWrap = styled.div`
  display: flex;
  gap: 12px;
`

const DateWrap = styled.div`
  display: flex;
  align-items: center;
`
