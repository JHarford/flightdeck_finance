import AddEntry from './components/AddEntry'
import Entry from './components/Entry'
import entries from './utils/generateRandomData'

import './styles/theme.css'



function App() {
  return (
    <div className='App'>
      <AddEntry />
      <div className='entries'>
        {entries.map((entry) => (
          <Entry parms={entry} />
        ))}
      </div>
    </div>
  )
}

export default App
