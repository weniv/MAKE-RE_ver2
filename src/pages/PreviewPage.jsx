import React, { createContext, useState } from 'react'
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
    <Layout>
      <LocalContext.Provider value={{ data, setData }}>
        <ProfilePreview />
      </LocalContext.Provider>
    </Layout>
  )
}

const Layout = styled.div`
  width: 810px;
  margin: 0 auto;
  padding: 90px 0;
`
