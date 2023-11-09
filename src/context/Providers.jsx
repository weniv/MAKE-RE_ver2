import React from 'react'
import { ColorProvider } from './ColorContext'
import ResumeProvider from './ResumeContext'
import { RemoteProvider } from './RemoteContext'
import { ThemeProvider } from './ThemeContext'

export default function Providers({ children }) {
  return (
    <ColorProvider>
      <ThemeProvider>
        <RemoteProvider>
          <ResumeProvider>{children}</ResumeProvider>
        </RemoteProvider>
      </ThemeProvider>
    </ColorProvider>
  )
}
