import React from 'react'
import styled from 'styled-components'
import overlayLight from '../../../assets/overlay-light.png'

export default function ExplainOverlay() {
  return (
    <Container>
      <div></div>
      <img src={overlayLight} alt="" />
      <span className="ir">안녕</span>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 500;

  & div {
    border: 1px solid black;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: url(${overlayLight}) no-repeat center top / cover;
    background-size: 192rem 108rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
