import { FC, useState } from 'react'

import { Link } from 'react-router-dom'

import styles from './TransmissionButton.module.css'
import ScrambleText from '../../ScrambleText'
import BroadcastIcon from '../../IconRenderer/icons/BroadcastIcon'

const TransmissionButton: FC = () => {
  const [scramble, setScramble] = useState<boolean>(false)

  const startScramble = () => {
    setScramble(true)
  }

  const stopScramble = () => {
    setScramble(false)
  }

  return (
    <Link
      to='/transmission'
      className={styles['transmission-button']}
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
    >
      <ScrambleText
        text='SIGNAL'
        startOnLoad
        scramble={scramble}
        className={styles['signal-text']}
      />
      <BroadcastIcon />
    </Link>
  )
}

export default TransmissionButton
