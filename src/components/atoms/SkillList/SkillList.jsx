import { useContext } from 'react'
import { styled } from 'styled-components'
import closeIcon from '../../../assets/icon-X.svg'
import ColorContext from '../../../context/ColorContext'
import ColorIcon from '../ColorIcon/ColorIcon'

// a작성페이지와 미리보기 페이지 모두 사용하는 UI로, 작성페이지에서는 type = "delete"를 props로 넘겨주어 닫기 아이콘 추가하도록 구현

export default function SkillList({ children, onClick, type }) {
  const { mainColor } = useContext(ColorContext)

  return (
    <>
      {children ? (
        <SkillLi type={type} onClick={onClick} mainColor={mainColor}>
          <span>{children}</span>
          {type === 'delete' && (
            <button>
              <ColorIcon
                type="iconLv1"
                iconPath={closeIcon}
                width="16px"
                height="16px"
              />
            </button>
          )}
        </SkillLi>
      ) : null}
    </>
  )
}

const SkillLi = styled.li`
  height: ${(props) => (props.type === 'preview' ? '32px' : '40px')};
  display: inline-flex;
  align-items: center;
  padding: ${(props) =>
    props.type === 'delete' ? '0 16px 0 20px' : '0 20px 0'}; // 작성페이지
  padding: ${(props) =>
    props.type === 'preview' && '0 14px'}; // 미리보기 페이지
  gap: 6px;
  border-radius: 40px;
  color: ${(props) =>
    props.type === 'preview' ? props.mainColor : 'var(--primary-color)'};
  border: ${(props) =>
    `2px solid ${
      props.type === 'preview' ? props.mainColor : 'var(--primary-color)'
    }`};
  opacity: 0.9;
  background-color: var(--background-color);
  font-size: 14px;
  box-sizing: border-box;
  cursor: ${(props) => (props.type !== 'preview' ? 'pointer' : 'auto')};

  button {
    display: flex;
    align-items: center;
  }
`
