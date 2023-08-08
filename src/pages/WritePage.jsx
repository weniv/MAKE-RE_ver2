import { styled } from 'styled-components'
import Aside from '../components/templates/Aside/Aside'
import Header from '../components/organisms/Header/Header'
import Footer from '../components/organisms/Footer/Footer'
import Profile from '../components/templates/Profile/Profile'
import Intro from '../components/templates/Intro/Intro'
import Url from '../components/templates/Url/Url'
import Experience from '../components/templates/Experience/Experience'
import Certificate from '../components/templates/Certificate/Certificate'
import Education from '../components/templates/Education/Education'
import { CareerTemplate } from '../components/templates/Career'
import { ProjectTemplate } from '../components/templates/Project'
import { GithubApi } from '../api'

export default function WritePage() {
  return (
    <>
      <GithubApi />
      <Header />
      <Cont>
        <Main>
          <Profile />
          <Intro />
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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Cont = styled.div`
  width: 100vw;
  padding: 60px 0;
  background-color: var(--hover-color);
  display: flex;
  gap: 20px;
  justify-content: center;
`
