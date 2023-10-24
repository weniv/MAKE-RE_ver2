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
  const exportRef = useRef(null)
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

  const profileRef = useRef(null)
  const introRef = useRef(null)
  const careerRef = useRef(null)
  const projectRef = useRef(null)
  const experienceRef = useRef(null)
  const certificateRef = useRef(null)
  const educationRef = useRef(null)
  const urlRef = useRef(null)

  const CurrentComponent = navList.map((el, index) => {
    const Component = components[el.title]
    return (
      <div key={index}>
        <Component
          profileRef={profileRef}
          introRef={introRef}
          careerRef={careerRef}
          projectRef={projectRef}
          experienceRef={experienceRef}
          certificateRef={certificateRef}
          educationRef={educationRef}
          urlRef={urlRef}
        />
      </div>
    )
  })

  return (
    <>
      <Header />
      <LocalContext.Provider value={{ data, setData }}>
        <Cont>
          <Main ref={exportRef}>
            <Layout>{CurrentComponent}</Layout>
          </Main>
          <Aside
            type="preview"
            exportRef={exportRef}
            profileRef={profileRef}
            introRef={introRef}
            careerRef={careerRef}
            projectRef={projectRef}
            experienceRef={experienceRef}
            certificateRef={certificateRef}
            educationRef={educationRef}
            urlRef={urlRef}
          />
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
  align-items: flex-start;
  gap: 20px;
  justify-content: center;
  margin: 0 auto;
  padding: 130px 0 120px;
  background-color: var(--gray-lv1-color);

  main::-webkit-scrollbar {
    display: none;
  }
`

const Main = styled.main`
  background-color: var(--background-color);
  border-radius: 16px;
  max-height: 1258px;
  overflow: hidden;
  overflow-y: auto;

  @page {
    size: A4;
    margin: 20mm;
  }
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 890px;
  padding: 74px 52px;
`
