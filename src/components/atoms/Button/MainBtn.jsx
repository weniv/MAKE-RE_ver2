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
    props.type === 'preview' &&
    css`
      width: 162px;
    `}
  height: 42px;
  background-color: var(--primary-color);
  border-radius: 10px;
  padding: 13px 20px;
  color: #fff;
  line-height: 16px;
  display: flex;
  justify-content: center;
  gap: 10px;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: var(--secondary-color);
  }
`
