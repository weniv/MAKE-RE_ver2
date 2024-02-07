import { styled } from 'styled-components'
import { ReactComponent as PlusIcon } from '../../../assets/icon-+.svg'

export default function AddBtn({ onClick, form }) {
  return (
    <Cont onClick={onClick} form={form}>
      <PlusIcon width="20px" height="20px" />
    </Cont>
  )
}

const Cont = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  background-color: var(--primary-color);
  border-radius: 10px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: opacity 0.1s ease-in;

  &:hover {
    opacity: 0.9;
  }
`
