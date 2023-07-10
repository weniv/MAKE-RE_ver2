import React from 'react'
import { styled } from 'styled-components'
import { ReactComponent as PlusIcon } from '../../../assets/icon-+.svg'

export default function AddBtn() {
  return (
    <Cont>
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
  background-color: var(--main-color);
  border-radius: 10px;
  margin-bottom: 12px;
  &:hover {
    background: var(--button-hover-color);
  }
`
