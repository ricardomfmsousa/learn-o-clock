import './App.scss'

import { FC, useEffect, useState } from 'react'
import addSeconds from 'date-fns/addSeconds'

import TraditionalClock from './components/ClockFaces/TraditionalClock'
import DigitalClock from './components/DigitalClock/DigitalClock'
import MountainsLandscape from './components/LiveBackgrounds/MountainsLandscape/MountainsLandscape'

const App: FC = (): JSX.Element => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const clock = setInterval(
      () => setTime((prevTime) => addSeconds(prevTime, 1)),
      1000
    )
    return () => clearInterval(clock)
  }, [])
  return (
    <div className="App">
      <MountainsLandscape time={time} />
      <header className="App-header">
        <TraditionalClock className="App-logo" time={time} setTime={setTime} />
        <br />
        <DigitalClock time={time} setTime={setTime} />
      </header>
    </div>
  )
}

export default App
