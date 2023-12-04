import React from 'react'
import Header from '../../organisms/Header/Header'
import styled from 'styled-components'

export default function Layout({ children, auth }) {
  return (
    <>
      <Header options={{ isCenter: true, isWhite: true }} />
      <Section auth={auth}>
        <Content>{children}</Content>
      </Section>
    </>
  )
}

const Section = styled.section`
  display: flex;
  align-items: ${(props) => (props.auth ? 'start' : 'center')};
  justify-content: center;
  position: relative;
  width: 100vw;
  height: calc(100vh - 71px);
  padding-top: ${(props) => (props.auth ? '60px' : '0')};
  background-color: var(--background-color);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 322px;
  height: auto;
`
