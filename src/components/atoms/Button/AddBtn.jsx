import { styled } from 'styled-components'
import { ReactComponent as PlusIcon } from '../../../assets/icon-+.svg'

export default function AddBtn({ onClick }) {
  return (
    <Cont onClick={onClick}>
      <PlusIcon width="20px" height="20px" />
    </Cont>
  )
}

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
  margin-bottom: 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
