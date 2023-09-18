import { styled } from 'styled-components'
import { PreviewSubtitle } from '../../atoms/Title'

export default function PreviewLayout({ children }) {
  return (
    <Section>
      <PreviewSubtitle>자격증</PreviewSubtitle>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-color);
`
