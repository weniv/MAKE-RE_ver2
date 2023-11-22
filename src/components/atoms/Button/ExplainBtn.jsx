import React from 'react'
import styled, { css } from 'styled-components'
import closeIcon from '../../../assets//icon-X.svg'
import questionIcon from '../../../assets/icon-question-mark.svg'

export default function ExplainBtn({ mode, setMode }) {
  return (
    <BtnCont onClick={() => setMode(!mode)}>
      <Icon state={mode} />
    </BtnCont>
  )
}

const BtnCont = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2.8rem;
  right: 2.8rem;
  z-index: 1000;
`

const Icon = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  mask-size: 100%;
  mask-repeat: no-repeat;
  mask-position: center center;
  -webkit-mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center center;

  ${(props) =>
    props.state
      ? css`
          background-color: #595f66;
          mask-image: url(${closeIcon});
          -webkit-mask-image: url(${closeIcon});
        `
      : css`
          background-color: black;
          mask-image: url(${questionIcon});
          -webkit-mask-image: url(${questionIcon});
        `}
`
