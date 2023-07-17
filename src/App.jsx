import GlobalStyles from './styles/GlobalStyles'
import { ProjectTemplate } from './components/templates/Project'
import { CareerTemplate } from './components/templates/Career'
import { ColorProvider } from './context/ColorContext'
import WritePage from './pages/WritePage'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ProjectTemplate />
      <CareerTemplate />
      {/* <ColorProvider>
        <GlobalStyles />
        <WritePage />
      </ColorProvider> */}
    </div>
  )
}

export default App
