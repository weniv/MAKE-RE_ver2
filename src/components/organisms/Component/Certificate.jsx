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
}) {
  return (
    <ComponentHeader
      id={cert.id}
      kind="자격증"
      title={cert.title ? cert.title : null}
      handleDelete={deleteCert}
    >
      <Wrap>
        <DefaultInput
          id="certificateName"
          type="text"
          width="738px"
          name="title"
          placeholder="예) 정보처리기사"
          onChange={(e) => updateData(e, idx, certData, setCertData)}
          inputData={cert.title}
        >
          자격증명
        </DefaultInput>
        <DateWrap>
          <DateInput
            id="startDate"
            width="220px"
            name="date"
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

const DateWrap = styled.div`
  display: flex;
  align-items: center;
`
