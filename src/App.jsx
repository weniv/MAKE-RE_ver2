import GlobalStyles from './styles/GlobalStyles'
import { ColorProvider } from './context/ColorContext'
import { WritePage, PreviewPage } from './pages'
import ResumeProvider from './context/ResumeContext'
import { RemoteProvider } from './context/RemoteContext'
import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ColorProvider>
        <ThemeProvider>
          <RemoteProvider>
            <GlobalStyles />
            <ResumeProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/MAKE-RE_ver2" element={<WritePage />} />
                  <Route
                    path="/MAKE-RE_ver2/preview"
                    element={<PreviewPage />}
                  />
                </Routes>
              </BrowserRouter>
            </ResumeProvider>
          </RemoteProvider>
        </ThemeProvider>
      </ColorProvider>
    </div>
  )
}

export default App
