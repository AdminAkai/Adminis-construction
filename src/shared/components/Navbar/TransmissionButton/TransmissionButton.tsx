import { FC } from 'react'

import { Link } from 'react-router-dom'

import styles from './TransmissionButton.module.css'

const TransmissionButton: FC = () => {
  return (
    <Link to='/transmission' className={styles['transmission-button']}>
      SEND A SIGNAL
    </Link>
  )
}

export default TransmissionButton
