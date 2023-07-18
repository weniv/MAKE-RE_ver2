import GlobalStyles from './styles/GlobalStyles'
import { ColorProvider } from './context/ColorContext'
import WritePage from './pages/WritePage'

function App() {
  return (
    <div className="App">
      <ColorProvider>
        <GlobalStyles />
        <WritePage />
      </ColorProvider>
    </div>
  )
}

export default App
