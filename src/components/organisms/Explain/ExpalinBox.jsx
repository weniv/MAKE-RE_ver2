import React from 'react'
import styled, { css } from 'styled-components'
import iconPolygon from '../../../assets/icon-polygon.svg'

export default function ExpalinBox({ children, dir, pos }) {
  return (
    <BoxContainer dir={dir} pos={pos}>
      <Content>{children}</Content>
    </BoxContainer>
  )
}

const BoxContainer = styled.div`
  margin: rem;
  padding: 1.2rem 1.6rem;
  color: white;
  border: 2px solid white;
  border-radius: 1rem;
  width: fit-content;
  position: absolute;
  right: 0;

  ${(props) => props.pos}
  ${(props) => props.dir === 'left' && css``}

  &::after {
    content: '';
    width: 1.6rem;
    height: 1rem;
    position: absolute;

    background: url(${iconPolygon}) no-repeat center center;
    ${(props) => props.dir === 'top' && Top}
    ${(props) => props.dir === 'right' && Right}
    ${(props) => props.dir === 'bottom' && Bottom}
    ${(props) => props.dir === 'left' && Left}
  }
`
const Top = css`
  top: 0;
  left: 50%;
  transform: translate(-50%, Calc(-100% - 0.8rem));
`
const Right = css`
  top: 50%;
  right: 0;
  transform: translate(Calc(100% + 0.6rem), -50%) rotate(90deg);
`

const Bottom = css`
  bottom: 0;
  left: 50%;
  transform: translate(-50%, Calc(100% + 0.8rem)) rotate(180deg);
`
const Left = css`
  top: 50%;
  left: 0;
  transform: translate(Calc(-100% - 0.6rem), -50%) rotate(270deg);
`

const Content = styled.p`
  white-space: nowrap;
  word-break: keep-all;
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: 600;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & span {
    color: #ffe187;
    font-size: 1.6rem;
    line-height: 2.2rem;

    &::before {
      content: '※ ';
    }
  }
`
