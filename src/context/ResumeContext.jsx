import React, { createContext, useEffect, useState } from 'react'
import { resumeData as initialData } from '../data/dummy'

export const ResumeContext = createContext(null)

export default function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(initialData)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('resumeData'))
    if (data) {
      setResumeData(data)
    }
  }, [])

  return (
    <>
      <ResumeContext.Provider value={{ resumeData, setResumeData }}>
        {children}
      </ResumeContext.Provider>
    </>
  )
}
