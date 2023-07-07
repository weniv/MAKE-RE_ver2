import GlobalStyles from './styles/GlobalStyles'
import Baek from './testPages/Baek'
import ComponentHeader from './components/organisms/ComponentHeader/ComponentHeader'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ComponentHeader kind={'커리어'} />
      <Baek />
    </div>
  )
}

export default App
