import './App.scss'

import { FC } from 'react'

import LiveBackground from './components/LiveBackgrounds/MountainsLandscape'
import TraditionalClock from './components/ClockFaces/TraditionalClock'

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <LiveBackground />
      <header className="App-header">
        <TraditionalClock className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
