import React, { useContext } from 'react'
import styled from 'styled-components'
import ColorContext from '../../../context/ColorContext'

export default function PreviewSubtitle({ title }) {
  // const { mainColor, upadteMainColor } = useContext(ColorContext)

  // return <Subtitle mainColor={mainColor}>{title}</Subtitle>
  return <Subtitle>{title}</Subtitle>
}
PreviewSubtitle.defaultProps = {
  title: 'Title',
}

// const Subtitle = styled.h3`
//   margin: 36px auto 20px;
//   padding-bottom: 10px;
//   width: 100%;

//   font-size: 18px;
//   font-weight: 700;
//   text-align: left;

//   color: ${(props) => props.mainColor};
//   border-bottom: 1px solid ${(props) => props.mainColor};
// `

const Subtitle = styled.h3`
  margin: 36px auto 20px;
  padding-bottom: 10px;
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  text-align: left;

  color: var(--main-color);
  border-bottom: 1px solid var(--main-color);
`
