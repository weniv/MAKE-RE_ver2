import React, { useState } from 'react'
import { styled } from 'styled-components'
import hamburgerIcon from '../../../assets/icon-hamburger.svg'
import openIcon from '../../../assets/icon-triangle-down.svg'
import foldIcon from '../../../assets/icon-triangle-up.svg'
import deleteIcon from '../../../assets/icon-X.svg'

export default function AccordionHeader({ title, onDrag, onClick }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen(!isOpen)
  }

  return (
    <Header>
      <DragBtn onDrag={onDrag}>
        <img src={hamburgerIcon} alt="항목 순서 변경하기" />
      </DragBtn>
      <h4>{title}</h4>
      <SpreadToggleBtn onClick={handleToggle}>
        <img
          src={isOpen ? foldIcon : openIcon}
          alt={isOpen ? '항목 접기' : '항목 펼치기'}
        />
      </SpreadToggleBtn>
      <DeleteBtn onClick={onClick}>
        <img src={deleteIcon} alt="항목 삭제하기" />
      </DeleteBtn>
    </Header>
  )
}

AccordionHeader.defaultProps = {
  title: '네이버(Naver)',
  onDrag: () => {},
  onClick: () => {},
}

// style
const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  color: var(--surface-color);
  background-color: var(--background-color);
  border: 1px solid var(--gray-lv2-color);
  font-size: 16px;
  margin: 12px 0;
  padding: 24px 18px 24px 24px;
  border-radius: 16px;

  h4 {
    flex-grow: 1;
  }
`
const DragBtn = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`

const SpreadToggleBtn = styled.button`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`

const DeleteBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 10px;

  &:hover {
    background-color: var(--gray-lv1-color);
  }
`
