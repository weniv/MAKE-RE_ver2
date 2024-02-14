import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../theme/theme'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('themMode')
  const [themeMode, setThemeMode] = useState(savedTheme || 'light')
  const themeObj = themeMode === 'light' ? lightTheme : darkTheme

  useEffect(() => {
    localStorage.setItem('themMode', themeMode)
  }, [themeMode])

  const toggleTheme = () =>
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <StyledProvider theme={themeObj}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContext
