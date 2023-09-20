import React, { useContext } from 'react'
import styled from 'styled-components'
import ColorContext from '../../../context/ColorContext'

// type이 skills일 때만  type props 전달
export default function PreviewSubtitle({ children, type }) {
  const { mainColor, updateMainColor } = useContext(ColorContext)

  return (
    <Subtitle mainColor={mainColor} type={type}>
      {children}
    </Subtitle>
  )
}

PreviewSubtitle.defaultProps = {
  title: 'Title',
}

const Subtitle = styled.h3`
  display: ${(props) => props.type && 'inline-block'};
  margin-right: ${(props) => props.type && '18px'};
  margin-bottom: ${(props) => !props.type && '20px'};
  padding-bottom: ${(props) => !props.type && '10px'};

  font-size: 18px;
  font-weight: 700;

  color: ${(props) => props.mainColor};
  border-bottom: ${(props) => !props.type && `1px solid ${props.mainColor}`};
`
