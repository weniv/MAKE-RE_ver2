import { styled } from 'styled-components'
import closeIcon from '../../../assets/icon-X.svg'

export default function SkillList({ children, onClick, type }) {
  return (
    <SkillLi type={type}>
      <span>{children}</span>
      {type && (
        <button onClick={onClick}>
          <img src={closeIcon} />
        </button>
      )}
    </SkillLi>
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
  box-sizing; border-box;

  button {
    display: flex;
    algin-items: center;
  }
`
