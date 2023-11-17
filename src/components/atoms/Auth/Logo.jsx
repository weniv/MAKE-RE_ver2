import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../../assets/makere-logo.svg'

export default function Logo() {
  return <LogoComponent />
}

const LogoComponent = styled.div`
  width: 80px;
  height: 80px;
  background-color: #2e6ff2;
  border-radius: 16px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-position: center center;
`
