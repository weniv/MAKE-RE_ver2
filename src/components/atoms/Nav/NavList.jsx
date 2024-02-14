import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import checkIcon from '../../../assets/icon-Check.svg'
import { ReactComponent as CheckFillIcon } from '../../../assets/icon-Check-fill.svg'
import hamburgerIcon from '../../../assets/icon-hamburger.svg'
import ColorContext from '../../../context/ColorContext'
import { dndContext } from '../../../utils/dnd'
import ColorIcon from '../ColorIcon/ColorIcon'

export default function NavList({ clickIdx, listName, id, type, onClick }) {
  const { mainColor } = useContext(ColorContext)
  const [clicked, setClickIdx] = useState(clickIdx === id)

  if (useContext(dndContext)) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { Style, Sort } = useContext(dndContext)
    var { attributes, listeners, setNodeRef, transform, transition } = Sort(id)
    var style = Style(transform, transition)
  }

  useEffect(() => {
    if (clickIdx === id) {
      setClickIdx(true)
    } else {
      setClickIdx(false)
    }
  }, [clickIdx])

  return (
    <Cont key={id} clicked={clicked} onClick={onClick} color={mainColor}>
      <>
        <p>{listName}</p>
        {type === 'write' && (
          <DragBtn
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            listName={listName}
          >
            <ColorIcon
              type="iconLv3"
              iconPath={hamburgerIcon}
              width="16px"
              height="16px"
            />
          </DragBtn>
        )}
      </>
    </Cont>
  )
}

NavList.defaultProps = {
  id: null,
  listName: '프로필',
  isFill: false,
}

const Cont = styled.div`
  position: relative;
  display: flex;
  width: 240px;
  height: 48px;
  color: var(--surface-color);
  background-color: var(--background-color);
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  align-items: center;
  padding: 14px 12px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-lv1-color);
  }

  ${(props) =>
    props.clicked &&
    css`
      border: 2px solid var(--primary-color);
      background-color: var(--gray-lv1-color);
    `}
`

const DragBtn = styled.button`
  position: absolute;
  right: 16px;
  display: ${(props) => (props.listName === '프로필' ? 'none' : 'block')};
`
