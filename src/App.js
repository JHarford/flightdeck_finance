import AddEntry from './components/AddEntry'
import Entry from './components/Entry'
import entries from './utils/generateRandomData'
import MainComponent from './components/Graph/MainComponent'

import './styles/theme.css'

function App() {
  return (
    <div className='App'>
      <MainComponent />
    </div>
  )
}

export default App
