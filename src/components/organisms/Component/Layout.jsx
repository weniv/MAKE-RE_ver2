import { styled } from 'styled-components'

export default function Layout({ children }) {
  return <Section>{children}</Section>
}

const Section = styled.section`
  width: 890px;
  padding: 0 0 52px;
  border-radius: 16px;
  background-color: var(--bg-color);
  box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.04);
`
