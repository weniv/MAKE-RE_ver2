import React, { useState, useContext } from 'react'
import * as styles from './ComponentHeader-style'
import DragIcon from '../../../assets/icon-hamburger.svg'
import expandIcon from '../../../assets/icon-triangle-down.svg'
import reduceIcon from '../../../assets/icon-triangle-up.svg'
import deleteIcon from '../../../assets/icon-X.svg'
import { dndContext } from '../../../utils/dnd'

export default function ComponentHeader({
  id,
  kind,
  title,
  children,
  handleDelete,
}) {
  const [isExpand, setIsExpand] = useState(false)
  console.log('header', useContext(dndContext))

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
          <styles.Img src={DragIcon} />
        </styles.Btn>
        <styles.Title>{title ? title : `새로운 ${kind}`}</styles.Title>
        <styles.ExpandBtn
          onClick={() => {
            setIsExpand(!isExpand)
          }}
        >
          <styles.Img
            src={!isExpand ? expandIcon : reduceIcon}
            isExpand={isExpand}
          />
        </styles.ExpandBtn>
        <styles.DelBtn del onClick={handleDelete}>
          <styles.Img src={deleteIcon} />
        </styles.DelBtn>
      </styles.Header>

      {isExpand ? <styles.Component>{children}</styles.Component> : null}
    </styles.Cont>
  )
}
