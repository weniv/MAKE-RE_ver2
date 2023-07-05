import GlobalStyles from './styles/GlobalStyles'
import DateInput from './components/atoms/DateInput'
import WriteTitle from './components/atoms/Title/WriteTitle'
import WriteSubtitle from './components/atoms/Title/WriteSubtitle'
import Baek from './testPages/Baek'


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <DateInput />
      <WriteTitle />
      <WriteSubtitle />
      <Baek />
    </div>
  )
}

export default App
