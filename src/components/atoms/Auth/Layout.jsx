import React from 'react'
import styled from 'styled-components'

export default function Layout({ children }) {
  return (
    <Section>
      <Header />
      <Content>{children}</Content>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Header = styled.div``

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 322px;
  height: auto;
  background-color: pink;
`
