import GlobalStyles from './styles/GlobalStyles'
import DateInput from './components/atoms/DateInput'
import WriteTitle from './components/atoms/Title/WriteTitle'
import WriteSubtitle from './components/atoms/Title/WriteSubtitle'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <DateInput />
      <WriteTitle />
      <WriteSubtitle />
    </div>
  )
}

export default App
