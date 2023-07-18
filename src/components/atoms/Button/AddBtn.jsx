import { styled } from 'styled-components'
import { ReactComponent as PlusIcon } from '../../../assets/icon-+.svg'
// import ColorContext from '../../../context/ColorContext'

export default function AddBtn({ onClick }) {
  // const { mainColor, upadteMainColor } = useContext(ColorContext)

  return (
    // <Cont mainColor={mainColor}>
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
  /* background-color: ${(props) => props.mainColor}; */
  background-color: var(--main-color);
  border-radius: 10px;
  margin-bottom: 12px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
