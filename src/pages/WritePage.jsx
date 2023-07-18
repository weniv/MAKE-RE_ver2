import { styled } from 'styled-components'
import Aside from '../components/templates/Aside/Aside'
import { Career, Project } from '../components/organisms/Component'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'
import Profile from '../components/templates/Profile/Profile'
import Url from '../components/templates/Url/Url'
import Experience from '../components/templates/Experience/Experience'
import Certificate from '../components/templates/Certificate/Certificate'
import Education from '../components/templates/Education/Education'
import { CareerTemplate } from '../components/templates/Career'
import { ProjectTemplate } from '../components/templates/Project'

export default function WritePage() {
  return (
    <>
      <Header />
      <Cont>
        <Main>
          <Profile />
          <CareerTemplate />
          <ProjectTemplate />
          <Experience />
          <Certificate />
          <Education />
          <Url />
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
