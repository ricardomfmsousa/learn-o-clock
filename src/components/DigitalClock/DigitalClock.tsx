import styles from './DigitalClock.module.scss'
import addHours from 'date-fns/addHours'
import addMinutes from 'date-fns/addMinutes'
import subHours from 'date-fns/subHours'
import subMinutes from 'date-fns/subMinutes'
import { FC } from 'react'

interface Props {
  time: Date
  setTime: (time: Date) => void
}

const DigitalClock: FC<Props> = ({ time, setTime }): JSX.Element => {
  return (
    <div key={time.toString()} id={styles.clock}>
      <div id={styles.content}>{time.toLocaleString()}</div>
      <span>
        <button onClick={() => setTime(addHours(time, 1))}>+H</button>
        <button onClick={() => setTime(subHours(time, 1))}>-H</button>
        <button onClick={() => setTime(addMinutes(time, 1))}>+M</button>
        <button onClick={() => setTime(subMinutes(time, 1))}>-M</button>
      </span>
    </div>
  )
}

export default DigitalClock
