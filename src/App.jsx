import GlobalStyles from './styles/GlobalStyles'
import { ColorProvider } from './context/ColorContext'
import WritePage from './pages/WritePage'
import Data from './context/ResumeContext'

function App() {
  return (
    <div className="App">
      <ColorProvider>
        <GlobalStyles />
        <Data>
          <WritePage />
        </Data>
      </ColorProvider>
    </div>
  )
}

export default App
