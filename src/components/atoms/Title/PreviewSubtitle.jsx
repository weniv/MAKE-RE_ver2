import React, { useContext } from 'react'
import styled from 'styled-components'
import ColorContext from '../../../context/ColorContext'

// hasBorder props: bottom-border 여부
export default function PreviewSubtitle({ children, hasBorder }) {
  const { mainColor, upadteMainColor } = useContext(ColorContext)

  return (
    <Subtitle mainColor={mainColor} hasBorder={hasBorder}>
      {children}
    </Subtitle>
  )
}

PreviewSubtitle.defaultProps = {
  title: 'Title',
}

const Subtitle = styled.h3`
  margin: 0 auto 12px;
  padding-bottom: ${(props) => props.hasBorder && '10px'};
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  text-align: left;

  color: ${(props) => props.mainColor};
  border-bottom: ${(props) =>
    props.hasBorder && `1px solid ${props.mainColor}`};
`
