import React, { useState } from 'react'
import * as styles from './ComponentHeader-style'
import DragIcon from '../../../assets/icon-hamburger.svg'
import expandIcon from '../../../assets/icon-triangle-down.svg'
import reduceIcon from '../../../assets/icon-triangle-up.svg'
import deleteIcon from '../../../assets/icon-X.svg'

export default function ComponentHeader({
  kind,
  title,
  children,
  deleteProject,
  deleteCareer,
  style,
  setNodeRef,
  attributes,
  listeners,
}) {
  const [isExpand, setIsExpand] = useState(false)

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
        <styles.DelBtn
          del
          onClick={deleteProject ? deleteProject : deleteCareer}
        >
          <styles.Img src={deleteIcon} />
        </styles.DelBtn>
      </styles.Header>

      {isExpand ? <styles.Component>{children}</styles.Component> : null}
    </styles.Cont>
  )
}
