import { FC } from 'react'

import styles from './TransmissionFormHeader.module.css'

const TransmissionFormHeader: FC = () => {
  return (
    <div className={styles['transmission-form-header']}>
      <p className={styles['transmission-form-header-title']}>
        CONTENT / 3 FIELDS
      </p>
      <p className={styles['transmission-form-header-title']}>[CHANNEL OPEN]</p>
    </div>
  )
}

export default TransmissionFormHeader
