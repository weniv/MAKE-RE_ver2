import GlobalStyles from './styles/GlobalStyles'
import {
  WritePage,
  PreviewPage,
  QuitPage,
  NotFoundPage,
  LandingPage,
  MyResumePage,
  LoginPage,
  SignupPage,
  SignupDonePage,
} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Providers from './context/Providers'
import ProfileSetting from './pages/ProfileSetting'

function App() {
  return (
    <div className="App">
      <Providers>
        <GlobalStyles />
        <BrowserRouter> 
          <Routes>
            <Route path="/MAKE-RE_ver2" element={<LandingPage />} />
            <Route path="/MAKE-RE_ver2/write" element={<WritePage />} />
            <Route path="/MAKE-RE_ver2/preview" element={<PreviewPage />} />
            <Route path="/MAKE-RE_ver2/quit" element={<QuitPage />} />
            <Route path="/MAKE-RE_ver2/login" element={<LoginPage />} />
            <Route path="/MAKE-RE_ver2/signup" element={<SignupPage />} />
            <Route path="/MAKE-RE_ver2/done" element={<SignupDonePage />} />
            <Route path="/MAKE-RE_ver2/myresume" element={<MyResumePage />} />
            <Route
              path="/MAKE-RE_ver2/myProfile"
              element={<ProfileSetting />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Providers>
    </div>
  )
}

export default App
