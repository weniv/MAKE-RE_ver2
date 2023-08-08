import React, { useState } from 'react'

const RemoteContext = React.createContext()

export const RemoteProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState('프로필')

  const updateCurrentSection = (section) => {
    setCurrentSection(section)
  }

  return (
    <RemoteContext.Provider value={{ currentSection, updateCurrentSection }}>
      {children}
    </RemoteContext.Provider>
  )
}

export default RemoteContext
