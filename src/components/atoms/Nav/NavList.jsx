import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import checkIcon from '../../../assets/icon-Check.svg'
import { ReactComponent as CheckFillIcon } from '../../../assets/icon-Check-fill.svg'
import hamburgerIcon from '../../../assets/icon-hamburger.svg'
import ColorContext from '../../../context/ColorContext'
import { dndContext } from '../../../utils/dnd'
import ColorIcon from '../ColorIcon/ColorIcon'
import PageTypeContext from '../../../context/PageContext'

export default function NavList({
  clickIdx,
  listName,
  id,
  isFill,
  type,
  onClick,
}) {
  const { mainColor } = useContext(ColorContext)
  const { pageType } = useContext(PageTypeContext)
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
    <Cont
      key={id}
      isFill={true}
      clicked={clicked}
      onClick={onClick}
      pageType={pageType}
      color={mainColor}
    >
      {type === 'preview' ? (
        <>
          <NavText onClick={onClick}>{listName}</NavText>
        </>
      ) : (
        <>
          {isFill ? (
            <>
              {/* NOTE: 다크모드 여부에 따른 primary-color 차이로 아래 컴포넌트 사용 필요 */}
              {/* <ColorIcon pageType={pageType} iconPath={CheckFillIcon} /> */}
              <CheckFillIcon fill={mainColor} alt="입력 완료" />
            </>
          ) : (
            <>
              <ColorIcon type="iconLv3" iconPath={checkIcon} />
            </>
          )}
        </>
      )}
      <NavText>{listName}</NavText>
      <DragBtn ref={setNodeRef} {...attributes} {...listeners}>
        <ColorIcon
          type="iconLv3"
          iconPath={hamburgerIcon}
          width="16px"
          height="16px"
        />
      </DragBtn>
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
      border: 2px solid
        ${props.pageType === 'write' ? 'var(--primary-color)' : props.color};
      background-color: var(--gray-lv1-color);
    `}
`

const NavText = styled.p`
  margin-left: 12px;
`

const DragBtn = styled.button`
  position: absolute;
  right: 16px;
`
