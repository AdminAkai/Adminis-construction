import { FC } from 'react'

import styles from './TransmissionForm.module.css'

const TransmissionForm: FC = () => {
  return (
    <form className={styles['transmission-form']}>
      <label htmlFor='name' className={styles['transmission-form-input-label']}>
        [01] / NAME
      </label>
      <input
        id='name'
        className={styles['transmission-form-input']}
        placeholder='YOUR NAME'
      ></input>
    </form>
  )
}

export default TransmissionForm
