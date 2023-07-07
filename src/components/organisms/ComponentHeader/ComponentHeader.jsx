import React, { useState } from 'react'
import * as style from './ComponentHeader-style'
import DragIcon from '../../../assets/icon-hamburger.svg'
import deleteIcon from '../../../assets/icon-X.svg'

export default function ComponentHeader({ kind, title, children }) {
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
          <style.expandImg isExpand={isExpand} />
        </style.ExpandBtn>
        <style.DelBtn del>
          <style.Img src={deleteIcon} />
        </style.DelBtn>
      </style.Header>
      {children}
    </style.Cont>
  )
}
