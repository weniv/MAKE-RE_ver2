import React, { createContext, useEffect, useState } from 'react'
import { resumeData as initialData } from '../data/dummy'
import { remoteList } from '../data/dummy'

export const ResumeContext = createContext(null)

export default function ResumeProvider({ children }) {
  const data = JSON.parse(localStorage.getItem('resumeData'))
  const [resumeData, setResumeData] = useState(data ? data : initialData)
  const [navList, setNavList] = useState(remoteList)

  return (
    <>
      <ResumeContext.Provider
        value={{ resumeData, setResumeData, navList, setNavList }}
      >
        {children}
      </ResumeContext.Provider>
    </>
  )
}
