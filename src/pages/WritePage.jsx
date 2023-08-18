import { styled } from 'styled-components'
import { useContext, useEffect } from 'react'
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
import RemoteContext from '../context/RemoteContext'
import { GithubApi } from '../api'
import { ResumeContext } from '../context/ResumeContext'
import reset from 'styled-reset'

export default function WritePage() {
  const { currentSection, updateCurrentSection } = useContext(RemoteContext)
  const { resumeData, setResumeData } = useContext(ResumeContext)
  const components = {
    프로필: Profile,
    자기소개서: Intro,
    커리어: CareerTemplate,
    프로젝트: ProjectTemplate,
    경험: Experience,
    자격증: Certificate,
    학력: Education,
    '추가 URL': Url,
  }

  const CurrentComponent = components[currentSection]

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('resumeData'))
    if (data) {
      setResumeData(data)
    }
  }, [currentSection])

  return (
    <>
      {/* <GithubApi /> */}
      <Header />
      <Cont>
        <Main>
          <CurrentComponent />
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
