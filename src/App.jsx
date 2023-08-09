import GlobalStyles from './styles/GlobalStyles'
import { ColorProvider } from './context/ColorContext'
import WritePage from './pages/WritePage'
import Data from './context/ResumeContext'
import { RemoteProvider } from './context/RemoteContext'

function App() {
  return (
    <div className="App">
      <ColorProvider>
        <RemoteProvider>
          <GlobalStyles />
          <Data>
            <WritePage />
          </Data>
        </RemoteProvider>
      </ColorProvider>
    </div>
  )
}

export default App
