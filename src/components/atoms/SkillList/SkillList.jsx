import { useContext } from 'react'
import { styled } from 'styled-components'
import closeIcon from '../../../assets/icon-X.svg'
import ColorContext from '../../../context/ColorContext'

// a작성페이지와 미리보기 페이지 모두 사용하는 UI로, 작성페이지에서는 type = "delete"를 props로 넘겨주어 닫기 아이콘 추가하도록 구현

export default function SkillList({ children, onClick, type }) {
  return (
    <>
      {children ? (
        <SkillLi type={type} onClick={onClick}>
          <span>{children}</span>
          {type && (
            <button>
              <img src={closeIcon} width={'16px'} height={'16px'} />
            </button>
          )}
        </SkillLi>
      ) : null}
    </>
  )
}

const SkillLi = styled.li`
  height: 40px;
  display: inline-flex;
  align-items: center;
  padding: ${(props) => (props.type ? '0 16px 0 20px' : '0 20px 0')};
  margin-right: 10px;
  gap: 6px;
  border-radius: 40px;
  border: 2px solid var(--main-color);
  background: var(--bg-color);
  color: var(--main-color);
  font-size: 14px;
  box-sizing: border-box;
  cursor: pointer;

  button {
    display: flex;
    align-items: center;
  }
`
