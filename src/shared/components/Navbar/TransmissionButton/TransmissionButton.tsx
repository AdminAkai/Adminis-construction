import { CSSProperties, FC, useState } from 'react'

import { Link } from 'react-router-dom'

import ScrambleText from '../../ScrambleText'
import BroadcastIcon from '../../IconRenderer/icons/BroadcastIcon'

import styles from './TransmissionButton.module.css'

type TransmissionButtonProps = {
  hidden?: boolean
  style?: CSSProperties
}

const TransmissionButton: FC<TransmissionButtonProps> = ({ hidden, style }) => {
  const [scramble, setScramble] = useState<boolean>(false)

  const startScramble = () => {
    setScramble(true)
  }

  const stopScramble = () => {
    setScramble(false)
  }

  return (
    <Link
      style={{ display: hidden ? 'none' : 'inline-flex', ...style }}
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
