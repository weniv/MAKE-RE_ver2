import GlobalStyles from './styles/GlobalStyles'
<<<<<<< HEAD
import { WritePage, PreviewPage, QuitPage, LoginPage } from './pages'
=======
import {
  WritePage,
  PreviewPage,
  QuitPage,
  NotFoundPage,
  LandingPage,
  MyResumePage
} from './pages'
>>>>>>> dfc6804d5035dc70e11bc0e4c2015e7aa1e22070
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
            <Route path="/MAKE-RE_ver2" element={<LandingPage />} />
            <Route path="/MAKE-RE_ver2/write" element={<WritePage />} />
            <Route path="/MAKE-RE_ver2/preview" element={<PreviewPage />} />
            <Route path="/MAKE-RE_ver2/quit" element={<QuitPage />} />
<<<<<<< HEAD
            <Route path="/MAKE-RE_ver2/login" element={<LoginPage />} />
            <Route path="/MAKE-RE_ver2/signup" element={<SignupPage />}></Route>
=======
            <Route path="/MAKE-RE_ver2/myresume" element={<MyResumePage />} />
            <Route path="*" element={<NotFoundPage />} />
>>>>>>> dfc6804d5035dc70e11bc0e4c2015e7aa1e22070
          </Routes>
        </BrowserRouter>
      </Providers>
    </div>
  )
}

export default App
