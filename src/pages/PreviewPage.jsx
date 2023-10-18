import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import Header from '../components/organisms/Header/Header'
import Aside from '../components/templates/Aside/Aside'
import ProfilePreview from '../components/templates/Profile/ProfilePreview'
import IntroPreview from '../components/templates/Intro/IntroPreview'
import styled from 'styled-components'
import ExperiencePreview from '../components/templates/Experience/ExperiencePreview'
import CertificatePreview from '../components/templates/Certificate/CertificatePreview'
import EducationPreview from '../components/templates/Education/EducationPreview'
import UrlPreview from '../components/templates/Url/UrlPreview'
import CareerPreview from '../components/templates/Career/CareerPreview'
import { ProjectPreview } from '../components/templates/Project'
import { ResumeContext } from '../context/ResumeContext'
import Footer from '../components/organisms/Footer/Footer'
import RemoteContext from '../context/RemoteContext'

export const LocalContext = createContext(null)

export default function PreviewPage() {
  const { currentSection, updateCurrentSection } = useContext(RemoteContext)
  const { navList } = useContext(ResumeContext)
  const getlocalData = () => {
    const data = localStorage.getItem('resumeData')
    return JSON.parse(data)
  }

  const [data, setData] = useState(getlocalData)

  const components = {
    프로필: ProfilePreview,
    자기소개서: IntroPreview,
    커리어: CareerPreview,
    프로젝트: ProjectPreview,
    경험: ExperiencePreview,
    자격증: CertificatePreview,
    교육: EducationPreview,
    '추가 URL': UrlPreview,
  }

  useEffect(() => {
    updateCurrentSection({ id: navList[0].id, title: navList[0].title })
  }, [])

  const scrollRef = useRef([])

  const CurrentComponent = navList.map((el, index) => {
    const Component = components[el.title]
    return (
      <div key={index}>
        <Component scrollRef={scrollRef} />
      </div>
    )
  })

  return (
    <>
      <Header />
      <LocalContext.Provider value={{ data, setData }}>
        <Cont>
          <Main>
            <Layout>{CurrentComponent}</Layout>
          </Main>
          <Aside type="preview" scrollRef={scrollRef} />
        </Cont>
      </LocalContext.Provider>
      <Footer />
    </>
  )
}

const Cont = styled.div`
  color: var(--surface-color);
  width: 100vw;
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 0 auto;
  padding: 60px 0 120px;
  background-color: var(--gray-lv1-color);
`

const Main = styled.main`
  background-color: var(--background-color);
  border-radius: 16px;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 890px;
  padding: 74px 52px;
`
