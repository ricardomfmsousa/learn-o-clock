import './App.scss'

import { FC, useEffect, useState } from 'react'
import addSeconds from 'date-fns/addSeconds'
import addHours from 'date-fns/addHours'
import addMinutes from 'date-fns/addMinutes'
import subHours from 'date-fns/subHours'
import subMinutes from 'date-fns/subMinutes'

import TraditionalClock from './components/ClockFaces/TraditionalClock'
import DigitalClock from './components/DigitalClock/DigitalClock'
import MountainsLandscape from './components/LiveBackgrounds/MountainsLandscape/MountainsLandscape'

const App: FC = (): JSX.Element => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const updater = setInterval(() => setTime(addSeconds(time, 1)), 1000)
    // return () => clearInterval(updater)
  }, [])
  return (
    <div className="App">
      <MountainsLandscape time={time} />
      <header className="App-header">
        <TraditionalClock className="App-logo" />
        <br />
        <DigitalClock time={time} />
        <span>
          <button onClick={() => setTime(addHours(time, 1))}>+H</button>
          <button onClick={() => setTime(subHours(time, 1))}>-H</button>
          <button onClick={() => setTime(addMinutes(time, 1))}>+M</button>
          <button onClick={() => setTime(subMinutes(time, 1))}>-M</button>
        </span>
      </header>
    </div>
  )
}

export default App
