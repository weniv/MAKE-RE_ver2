import GlobalStyles from './styles/GlobalStyles'
import { ColorProvider } from './context/ColorContext'
import WritePage from './pages/WritePage'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ColorProvider>
        <WritePage />
      </ColorProvider>
    </div>
  )
}

export default App
