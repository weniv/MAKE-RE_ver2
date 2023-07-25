import React, { createContext } from 'react'
import { resumeData } from '../data/dummy'

export const ResumeContext = createContext(null)

export default function Data({ children }) {
  return (
    <>
      <ResumeContext.Provider value={{ resumeData }}>
        {children}
      </ResumeContext.Provider>
    </>
  )
}
