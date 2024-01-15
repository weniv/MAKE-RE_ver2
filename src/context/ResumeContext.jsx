import React, { createContext, useRef, useState, useEffect } from 'react'
import { resumeList as initialData, remoteList } from '../data/dummy'
import { getCurrentDate } from '../utils'

export const ResumeContext = createContext(null)

export function ResumeProvider({ children }) {
  const storedData = JSON.parse(localStorage.getItem('resumeData'))
  const [resumeData, setResumeData] = useState(storedData || initialData)
  const [navList, setNavList] = useState(remoteList)
  const formRef = useRef(null)
  // useRef를 사용하여 초기 렌더링 여부를 확인하는 변수 선언
  const isInitialRender = useRef(true)

  useEffect(() => {
    // 이전 렌더링에서는 업데이트하지 않음
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }

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
