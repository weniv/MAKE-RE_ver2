import React from 'react'
import { ColorProvider } from './ColorContext'
import { ResumeProvider } from './ResumeContext'
import { RemoteProvider } from './RemoteContext'
import { ThemeProvider } from './ThemeContext'
import ProfileProvider from './ProfileContext'

export default function Providers({ children }) {
  return (
    <ColorProvider>
      <ThemeProvider>
        <RemoteProvider>
          <ProfileProvider>
            <ResumeProvider>{children}</ResumeProvider>
          </ProfileProvider>
        </RemoteProvider>
      </ThemeProvider>
    </ColorProvider>
  )
}
