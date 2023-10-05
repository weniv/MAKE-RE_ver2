import React, { useContext } from 'react'
import styled from 'styled-components'
import ColorContext from '../../../context/ColorContext'

export default function ColorIcon({ iconPath }) {
  const { mainColor } = useContext(ColorContext)

  return (
    <>
      <Icon color={mainColor} iconPath={iconPath} />
    </>
  )
}

const Icon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  mask-image: url(${(props) => props.iconPath});
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-image: url(${(props) => props.iconPath});
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center center;
`
