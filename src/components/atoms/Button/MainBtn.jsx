import { useContext } from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as PlusIcon } from '../../../assets/icon-+.svg'
import ColorContext from '../../../context/ColorContext'

// 미리보기, PDF 내보내기 버튼인 경우 162px로 고정임으로 type="preview"를 props로 내려보내 주어 너비 값 고정시키기
// url, 경력, 프로젝트 추가 버튼인 경우 type설정 x
export default function MainBtn({ onClick, children, type }) {
  const { mainColor, upadteMainColor } = useContext(ColorContext)

  return (
    <>
      {type ? (
        <MainButton mainColor={mainColor} onClick={onClick} type={type}>
          {children}
        </MainButton>
      ) : (
        <MainButton mainColor={mainColor} onClick={onClick}>
          <PlusIcon width="16px" height="16px" />
          {children}
        </MainButton>
      )}
    </>
  )
}

const MainButton = styled.button`
  ${(props) =>
    props.type === 'preview'
      ? css`
          width: 162px;
          background-color: var(--main-color);
        `
      : css`
          background-color: ${(props) => props.mainColor};
        `}
  border-radius: 10px;
  padding: 13px 20px;
  color: var(--hover-color);
  line-height: 16px;
  display: flex;
  justify-content: center;
  gap: 10px;

  &:hover {
    opacity: 0.7;
  }
`
