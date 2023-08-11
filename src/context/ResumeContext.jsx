import React, { createContext, useEffect, useState } from 'react'
import { resumeData as initialData } from '../data/dummy'

export const ResumeContext = createContext(null)

export default function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(initialData)

  const data = JSON.parse(localStorage.getItem('resumeData'))
  useEffect(() => {
    if (data) {
      setResumeData(data)
      console.log('📝 로컬 데이터 로드')
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
