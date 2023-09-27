import React, { createContext, useState } from 'react'
import Header from '../components/organisms/Header/Header'
import Aside from '../components/templates/Aside/Aside'
import ProfilePreview from '../components/templates/Profile/ProfilePreview'
import IntroPreview from '../components/templates/Intro/IntroPreview'
import styled from 'styled-components'
import ExperiencePreview from '../components/templates/Experience/ExperiencePreview'
import CertificatePreview from '../components/templates/Certificate/CertificatePreview'
import EducationPreview from '../components/templates/Education/EducationPreview'

export const LocalContext = createContext(null)

export default function PreviewPage() {
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
          <Main>
            <Layout>
              <ProfilePreview />
              <IntroPreview />
              <ExperiencePreview />
              <CertificatePreview />
              <EducationPreview />
            </Layout>
          </Main>
          <Aside type="preview" />
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
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 890px;
  padding: 74px 52px;
`
