import styled, { css } from 'styled-components'
import { ReactComponent as PlusIcon } from '../../../assets/icon-+.svg'

// 미리보기, PDF 내보내기 버튼인 경우 162px로 고정임으로 type="preview"를 props로 내려보내 주어 너비 값 고정시키기
// url, 경력, 프로젝트 추가 버튼인 경우 type설정 x
export default function MainBtn({ onClick, children, type }) {
  return (
    <>
      {type ? (
        <MainButton onClick={onClick} type={type}>
          {children}
        </MainButton>
      ) : (
        <MainButton onClick={onClick}>
          <PlusIcon width="16px" height="16px" />
          {children}
        </MainButton>
      )}
    </>
  )
}

const MainButton = styled.button`
  ${(props) =>
    props.type === 'preivew' &&
    css`
      width: 162px;
    `}
  border-radius: 10px;
  padding: 13px 20px;
  background: var(--main-color);
  color: var(--hover-color);
  line-height: 16px;
  display: flex;
  justify-content: center;
  gap: 10px;

  &:hover {
    background: var(--button-hover-color);
  }
`
