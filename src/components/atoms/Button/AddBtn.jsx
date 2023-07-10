import React, { useContext } from 'react'
import { styled } from 'styled-components'
import { ReactComponent as PlusIcon } from '../../../assets/icon-+.svg'
import ColorContext from '../../../context/ColorContext'

export default function AddBtn() {
  const { mainColor, upadteMainColor } = useContext(ColorContext)

  return (
    <Cont mainColor={mainColor}>
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
  background-color: ${(props) => props.mainColor};
  border-radius: 10px;
  margin-bottom: 12px;
  &:hover {
    opacity: 0.7;
  }
`
