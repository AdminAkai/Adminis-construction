import { FC } from 'react'

import { transmissionFormInputs } from '../lib'

import styles from './TransmissionFormHeader.module.css'
import ScrambleText from '../../ScrambleText'

const TransmissionFormHeader: FC = () => {
  return (
    <div className={styles['transmission-form-header']}>
      <p className={styles['transmission-form-header-title']}>
        CONTENT / {transmissionFormInputs.length} FIELDS
      </p>
      <p className={styles['transmission-form-header-title']}>
        [CHANNEL <ScrambleText text='OPEN' startOnLoad />]
      </p>
    </div>
  )
}

export default TransmissionFormHeader
