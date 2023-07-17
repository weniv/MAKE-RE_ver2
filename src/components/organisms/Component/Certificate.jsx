import styled from 'styled-components'
import ComponentHeader from '../ComponentHeader/ComponentHeader'
import { DefaultInput, DateInput } from '../../atoms/Input'

export default function Certificate() {
  return (
    <ComponentHeader kind="자격증">
      <Wrap>
        <DefaultInput
          id="certificateName"
          type="text"
          width="738px"
          placeholder="예) 정보처리기사"
        >
          {'자격증명'}
        </DefaultInput>
        <DateWrap>
          <DateInput id="startDate" width="220px">
            {'취득일'}
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
