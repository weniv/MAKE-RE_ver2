import React, { useEffect, useState } from 'react'

const RemoteContext = React.createContext()

export const RemoteProvider = ({ children }) => {
  const curSection = localStorage.getItem('section')

  const [currentSection, setCurrentSection] = useState(
    curSection ? JSON.parse(curSection) : { id: 1, title: '프로필' }
  )
  const updateCurrentSection = (section) => {
    setCurrentSection(section)
  }

  useEffect(() => {
    localStorage.setItem('section', JSON.stringify(currentSection))
  }, [currentSection])

  return (
    <RemoteContext.Provider value={{ currentSection, updateCurrentSection }}>
      {children}
    </RemoteContext.Provider>
  )
}

export default RemoteContext
