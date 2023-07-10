import GlobalStyles from './styles/GlobalStyles'
import Baek from './testPages/Baek'
import { Project, Career } from './components/organisms/Component'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Project />
      <Career />
      <Baek />
    </div>
  )
}

export default App
