import GlobalStyles from './styles/GlobalStyles'
import { WritePage, PreviewPage, QuitPage, LoginPage } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Providers from './context/Providers'
import SignupPage from './pages/SignupPage'

function App() {
  return (
    <div className="App">
      <Providers>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/MAKE-RE_ver2" element={<WritePage />} />
            <Route path="/MAKE-RE_ver2/preview" element={<PreviewPage />} />
            <Route path="/MAKE-RE_ver2/quit" element={<QuitPage />} />
            <Route path="/MAKE-RE_ver2/login" element={<LoginPage />} />
            <Route path="/MAKE-RE_ver2/signup" element={<SignupPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Providers>
    </div>
  )
}

export default App
