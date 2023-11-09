import React, { useContext } from 'react'
import styled from 'styled-components'
import ColorContext from '../../../context/ColorContext'

export default function ColorIcon({ type, iconPath, width, height }) {
  const { mainColor } = useContext(ColorContext)

  return (
    <>
      <Icon
        color={mainColor}
        iconPath={iconPath}
        width={width}
        height={height}
        className={type}
      />
    </>
  )
}

const Icon = styled.div`
  width: ${(props) => props.width || '20px'};
  height: ${(props) => props.height || '20px'};
  border-radius: 50%;
  background-color: ${(props) => props.color || 'var(--primary-color)'};
  background-color: ${(props) => props.className && 'inherit'};
  mask-image: url(${(props) => props.iconPath});
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-image: url(${(props) => props.iconPath});
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center center;

  &.logo {
    background-color: var(--primary-color);
  }
  &.iconLv1 {
    background-color: var(--gray-lv4-color);
  }
  &.iconLv2 {
    background-color: var(--gray-lv3-color);
  }
  &.iconLv3 {
    background-color: var(--gray-lv2-color);
  }

  &.error {
    background-color: var(--error-color);
  }
`
