import { styled } from 'styled-components'
import { MainBtn, SaveBtn } from '../../atoms/Button'

export default function PreviewBox({ type }) {
  return (
    <Cont>
      {type === 'write' ? (
        <>
          <SaveBtn>임시저장</SaveBtn>
          <MainBtn type="preview">미리보기</MainBtn>
        </>
      ) : (
        <>
          <SaveBtn>돌아가기</SaveBtn>
          <MainBtn type="preview">PDF로 내보내기</MainBtn>
        </>
      )}
    </Cont>
  )
}

const Cont = styled.div`
  padding: 14px;
  border-radius: 16px;
  background-color: var(--bg-color);
  display: inline-flex;
  gap: 10px;
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.04);
`
