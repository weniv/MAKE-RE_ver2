import GlobalStyles from './styles/GlobalStyles'
import Baek from './testPages/Baek'
import { Project, Career } from './components/organisms/Component'
import { ColorProvider } from './context/ColorContext'
import ColorPicker from './components/organisms/ColorPicker/ColorPicker'

function App() {
  return (
    <div className="App">
      <ColorProvider>
        <GlobalStyles />
        <ColorPicker />
        <Project />
        <Career />
        <Baek />
      </ColorProvider>
    </div>
  )
}

export default App
