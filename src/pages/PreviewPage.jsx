import React, { createContext, useState } from 'react'
import Header from '../components/organisms/Header/Header'
import Aside from '../components/templates/Aside/Aside'
import ProfilePreview from '../components/templates/Profile/ProfilePreview'
import styled from 'styled-components'

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
            </Layout>
          </Main>
          <Aside type="preview" />
        </Cont>
      </LocalContext.Provider>
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
  height: calc(100vh - 70px);
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 60px 0;
  background-color: var(--hover-color);
`

const Layout = styled.div`
  width: 810px;
  margin: 0 auto;
  padding: 74px 52px;
  background-color: var(--bg-color);
  border-radius: 16px;
`
