import React, { createContext, useRef, useState, useEffect } from 'react'
import { resumeList as initialData, remoteList } from '../data/dummy'
import { getCurrentDate } from '../utils'

export const ResumeContext = createContext(null)

export function ResumeProvider({ children }) {
  const storedData = JSON.parse(localStorage.getItem('resumeData'))
  const [resumeData, setResumeData] = useState(storedData || initialData)
  const [navList, setNavList] = useState(remoteList)
  const formRef = useRef(null)

  useEffect(() => {
    // 이력서 데이터가 변경될 때마다 최종 수정일 업데이트
    const updatedResumeData = resumeData.map((resume) => ({
      ...resume,
      lastModified: getCurrentDate(),
    }))

    localStorage.setItem('resumeData', JSON.stringify(updatedResumeData))
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
