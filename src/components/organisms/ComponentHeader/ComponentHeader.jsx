import React, { useContext } from 'react'
import * as styles from './ComponentHeader-style'
import DragIcon from '../../../assets/icon-hamburger.svg'
import expandIcon from '../../../assets/icon-triangle-down.svg'
import reduceIcon from '../../../assets/icon-triangle-up.svg'
import deleteIcon from '../../../assets/icon-X.svg'
import { dndContext } from '../../../utils/dnd'
import ColorIcon from '../../atoms/ColorIcon/ColorIcon'

export default function ComponentHeader({
  id,
  idx,
  kind,
  title,
  children,
  handleDelete,
  setActiveIdx,
  isActive,
  setIsActive,
}) {
  if (useContext(dndContext)) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { Style, Sort } = useContext(dndContext)
    var { attributes, listeners, setNodeRef, transform, transition } = Sort(id)
    var style = Style(transform, transition)
  }

  return (
    <styles.Cont style={style}>
      <styles.Header>
        <styles.Btn ref={setNodeRef} {...attributes} {...listeners}>
          <ColorIcon iconPath={DragIcon} type="iconLv2" />
        </styles.Btn>
        <styles.Title>{title ? title : `새로운 ${kind}`}</styles.Title>
        <styles.ExpandBtn
          onClick={() => {
            setActiveIdx(idx)
            setIsActive(!isActive)
          }}
        >
          <ColorIcon
            iconPath={!isActive ? expandIcon : reduceIcon}
            isExpand={isActive}
            type="iconLv1"
          />
        </styles.ExpandBtn>
        <styles.DelBtn del onClick={handleDelete}>
          <ColorIcon type="iconLv2" iconPath={deleteIcon} />
        </styles.DelBtn>
      </styles.Header>

      {isActive ? <styles.Component>{children}</styles.Component> : null}
    </styles.Cont>
  )
}
ComponentHeader.defaultProps = {
  id: 0,
  idx: 0,
  kind: '컴포넌트',
  title: '',
  children: null,
  handleDelete: () => {},
  setActiveIdx: () => {},
  isActive: true,
  setIsActive: () => {},
}
