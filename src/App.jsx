import GlobalStyles from './styles/GlobalStyles'
import DateInput from './components/atoms/DateInput'
import Baek from './testPages/Baek'
import WriteTitle from './components/atoms/Title/WriteTitle'
import WriteSubtitle from './components/atoms/Title/WriteSubtitle'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <DateInput />
      <Baek />
      <WriteTitle />
      <WriteSubtitle />
      <Baek />
    </div>
  )
}

export default App
