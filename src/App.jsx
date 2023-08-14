import GlobalStyles from './styles/GlobalStyles'
import { ColorProvider } from './context/ColorContext'
import WritePage from './pages/WritePage'
import ResumeProvider from './context/ResumeContext'
import { RemoteProvider } from './context/RemoteContext'

function App() {
  return (
    <div className="App">
      <ColorProvider>
        <RemoteProvider>
          <GlobalStyles />
          <ResumeProvider>
            <WritePage />
          </ResumeProvider>
        </RemoteProvider>
      </ColorProvider>
    </div>
  )
}

export default App
