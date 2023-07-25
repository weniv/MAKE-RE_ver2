import React, { useState } from 'react'

const ColorContext = React.createContext()

export const ColorProvider = ({ children }) => {
  const prevColor = localStorage.getItem('mainColor')
  const [mainColor, setMainColor] = useState(prevColor ? prevColor : '#2E6FF2')

  const updateMainColor = (newColor) => {
    setMainColor(newColor)
  }

  return (
    <ColorContext.Provider value={{ mainColor, updateMainColor }}>
      {children}
    </ColorContext.Provider>
  )
}

export default ColorContext
