import GlobalStyles from './styles/GlobalStyles'
import {
  WritePage,
  PreviewPage,
  QuitPage,
  NotFoundPage,
  LandingPage,
  MyResumePage,
  MyProfilePage,
  LoginPage,
  SignupPage,
  SignupDonePage,
} from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Providers from './context/Providers'
import ProfileSetting from './pages/ProfileSetting'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <div className="App">
      <Providers>
        <GlobalStyles />
        <BrowserRouter>
          <HelmetProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/write" element={<WritePage />} />
              <Route path="/preview" element={<PreviewPage />} />
              <Route path="/quit" element={<QuitPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              {/* <Route path="/MAKE-RE_ver2/done" element={<SignupDonePage />} /> */}
              <Route path="/myresume" element={<MyResumePage />} />
              <Route path="/myprofile" element={<MyProfilePage />} />
              <Route path="/profilesetting" element={<ProfileSetting />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </HelmetProvider>
        </BrowserRouter>
      </Providers>
    </div>
  )
}

export default App
