import GlobalStyles from './styles/GlobalStyles'
import Baek from './testPages/Baek'
import ComponentHeader from './components/organisms/ComponentHeader/ComponentHeader'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <ComponentHeader kind={'커리어'}>
        <ul>
          <li>dsf</li>
          <li>dsf</li>
          <li>sdf</li>
          <li>sdfds</li>
        </ul>
      </ComponentHeader>
      <Baek />
    </div>
  )
}

export default App
