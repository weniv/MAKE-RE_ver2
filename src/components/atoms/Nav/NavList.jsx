import React, { useState, useRef, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import checkIcon from '../../../assets/icon-Check.svg'
import { ReactComponent as CheckFillIcon } from '../../../assets/icon-Check-fill.svg'
import hamburgerIcon from '../../../assets/icon-hamburger.svg'
import ColorContext from '../../../context/ColorContext'
import { dndContext } from '../../../utils/dnd'

export default function NavList({
  clickIdx,
  listName,
  id,
  isFill,
  type,
  onClick,
}) {
  const { mainColor, upadteMainColor } = useContext(ColorContext)
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
    <Cont key={id} isFill={isFill} clicked={clicked} onClick={onClick}>
      {type === 'write' ? (
        <>
          {isFill ? (
            <CheckFillIcon fill={mainColor} alt="입력 완료" />
          ) : (
            <img src={checkIcon} alt="입력 미완료" />
          )}
          <NavText>{listName}</NavText>
          <DragBtn ref={setNodeRef} {...attributes} {...listeners}>
            <img src={hamburgerIcon} />
          </DragBtn>
        </>
      ) : (
        <>
          <NavText>{listName}</NavText>
        </>
      )}
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
  background-color: var(--bg-color);
  color: var(--font-color);
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  align-items: center;
  padding: 14px 12px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: var(--hover-color);
  }

  ${(props) =>
    props.clicked &&
    css`
      border: 2px solid var(--main-color);
      background-color: var(--hover-color);
    `}
`

const NavText = styled.p`
  margin-left: 12px;
`

const DragBtn = styled.button`
  position: absolute;
  right: 16px;
`
