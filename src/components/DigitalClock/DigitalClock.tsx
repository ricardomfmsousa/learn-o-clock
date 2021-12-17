import styles from './DigitalClock.module.scss'

import { FC, useEffect, useState } from 'react'

interface Props {
  time: Date
}

const DigitalClock: FC<Props> = ({ time }): JSX.Element => {
  return (
    <div id={styles.clock}>
      <div id={styles.content}>{time.toLocaleString()}</div>
    </div>
  )
}

export default DigitalClock
