import { FC } from 'react'

import TransmissionFormInput from './TransmissionFormInput'

import styles from './TransmissionForm.module.css'

const TransmissionForm: FC = () => {
  return (
    <form className={styles['transmission-form']}>
      <TransmissionFormInput />
    </form>
  )
}

export default TransmissionForm
