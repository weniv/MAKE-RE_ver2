import GlobalStyles from './styles/GlobalStyles'
import AddBtn from './components/atoms/Button/AddBtn'
import DateInput from './components/atoms/Input/DateInput'
import Baek from './testPages/Baek'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AddBtn />
      <DateInput />
      <Baek />
    </div>
  )
}

export default App
