import React, { createContext, useRef, useState } from 'react'
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

export const LocalContext = createContext(null)

export default function PreviewPage() {
  const exportRef = useRef(null)
  const getlocalData = () => {
    const data = localStorage.getItem('resumeData')
    return JSON.parse(data)
  }
  const [data, setData] = useState(getlocalData)

  return (
    <>
      <Header />
      <LocalContext.Provider value={{ data, setData }}>
        <Cont>
          <Main ref={exportRef}>
            <Layout>
              <ProfilePreview />
              <IntroPreview />
              <CareerPreview />
              <ProjectPreview />
              <ExperiencePreview />
              <CertificatePreview />
              <EducationPreview />
              <UrlPreview />
            </Layout>
          </Main>
          <Aside type="preview" exportRef={exportRef} />
        </Cont>
      </LocalContext.Provider>
    </>
  )
}

const Cont = styled.div`
  width: 100vw;
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 60px 0 120px;
  background-color: var(--hover-color);
  margin: 0 auto;
`

const Main = styled.main`
  background-color: var(--bg-color);
  border-radius: 16px;

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

  & > * {
    break-inside: avoid;
  }
`
