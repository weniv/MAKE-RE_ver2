import React, { createContext, useState, useEffect } from 'react'
import { profileData as initialData } from '../data/dummy'

export const ProfileContext = createContext(initialData)

export default function ProfileProvider({ children }) {
  // 로컬 스토리지에서 데이터 가져오기
  const storedData = JSON.parse(localStorage.getItem('profileData'))

  // 로컬 스토리지에 데이터가 있으면 그 값을 사용하고, 없으면 초기 데이터 사용
  const [profileData, setProfileData] = useState(storedData || initialData)

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 한 번만 실행
    if (!storedData) {
      // 로컬 스토리지에 'profileData'가 없거나 유효한 JSON이 아닌 경우 초기 데이터 설정
      localStorage.setItem('profileData', JSON.stringify(initialData))
      setProfileData(initialData)
    }
  }, [])

  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </ProfileContext.Provider>
  )
}
