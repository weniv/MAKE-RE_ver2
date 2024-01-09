import React, { createContext, useRef, useState, useEffect } from 'react'
import { resumeList as initialData } from '../data/dummy'
import { remoteList } from '../data/dummy'

export const ResumeContext = createContext(null)

export function ResumeProvider({ children }) {
  const storedData = JSON.parse(localStorage.getItem('resumeData'))
  const [resumeData, setResumeData] = useState(storedData || initialData)
  const [navList, setNavList] = useState(remoteList)
  const formRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData))
  }, [resumeData])

  return (
    <>
      <ResumeContext.Provider
        value={{ resumeData, setResumeData, navList, setNavList, formRef }}
      >
        {children}
      </ResumeContext.Provider>
    </>
  )
}

export default ResumeContext
