import { FC } from 'react'

import styles from './TransmissionFormInput.module.css'

export type TransmissionFormInputProps = {
  name: string
  label: string
  placeholder: string
}

const TransmissionFormInput: FC = () => (
  <label htmlFor='name' className={styles['transmission-form-input-label']}>
    [01] / NAME
    <input
      id='name'
      className={styles['transmission-form-input']}
      placeholder='YOUR NAME'
    />
  </label>
)

export default TransmissionFormInput
