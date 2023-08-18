import React, { createContext, useEffect, useState } from 'react'
import { resumeData as initialData } from '../data/dummy'

export const ResumeContext = createContext(null)

export default function ResumeProvider({ children }) {
  const data = JSON.parse(localStorage.getItem('resumeData'))
  const [resumeData, setResumeData] = useState(data ? data : initialData)

  return (
    <>
      <ResumeContext.Provider value={{ resumeData, setResumeData }}>
        {children}
      </ResumeContext.Provider>
    </>
  )
}
