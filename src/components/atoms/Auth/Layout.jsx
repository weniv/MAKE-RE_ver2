import React from 'react'
import Header from '../../organisms/Header/Header'
import styled from 'styled-components'

export default function Layout({ children }) {
  return (
    <>
      <Header options={{ isCenter: true, isWhite: true }} />
      <Section>
        <Content>{children}</Content>
      </Section>
    </>
  )
}

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: calc(100vh - 71px);
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 322px;
  height: auto;
`
