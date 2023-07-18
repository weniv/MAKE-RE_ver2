import { styled } from 'styled-components'
import Aside from '../components/templates/Aside/Aside'
import { Career, Project } from '../components/organisms/Component'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'
import Profile from '../components/templates/Profile/Profile'

export default function WritePage() {
  return (
    <>
      <Header />
      <Cont>
        <Main>
          <Profile />
          <Project />
          <Career />
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
