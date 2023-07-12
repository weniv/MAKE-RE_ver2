import { styled } from 'styled-components'
import Aside from '../components/templates/Aside/Aside'
import { Career, Project } from '../components/organisms/Component'
import Baek from '../testPages/Baek'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'

export default function WritePage() {
  return (
    <>
      <Header />
      <Cont>
        <Main>
          <Project />
          <Career />
          <Baek />
        </Main>
        <Aside type="write" />
      </Cont>
      <Footer />
    </>
  )
}

const Main = styled.main``

const Cont = styled.div`
  width: 100vw;
  padding-top: 60px;
  background-color: var(--hover-color);
  display: flex;
  gap: 20px;
  justify-content: center;
`
