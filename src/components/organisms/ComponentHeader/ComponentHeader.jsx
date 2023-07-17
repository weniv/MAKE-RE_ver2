import React, { useState } from 'react'
import * as style from './ComponentHeader-style'
import DragIcon from '../../../assets/icon-hamburger.svg'
import expandIcon from '../../../assets/icon-triangle-down.svg'
import reduceIcon from '../../../assets/icon-Triangle-Up.svg'
import deleteIcon from '../../../assets/icon-X.svg'

export default function ComponentHeader({
  kind,
  title,
  children,
  deleteProject,
  deleteCareer,
}) {
  const [isExpand, setIsExpand] = useState(false)

  return (
    <style.Cont>
      <style.Header>
        <style.Btn>
          <style.Img src={DragIcon} />
        </style.Btn>
        <style.Title>{title ? title : `새로운 ${kind}`}</style.Title>
        <style.ExpandBtn
          onClick={() => {
            setIsExpand(!isExpand)
          }}
        >
          <style.Img
            src={!isExpand ? expandIcon : reduceIcon}
            isExpand={isExpand}
          />
        </style.ExpandBtn>
        <style.DelBtn
          del
          onClick={deleteProject ? deleteProject : deleteCareer}
        >
          <style.Img src={deleteIcon} />
        </style.DelBtn>
      </style.Header>

      {isExpand ? <style.Component>{children}</style.Component> : null}
    </style.Cont>
  )
}
