import { FC } from 'react'

import TransmissionFormInput from './TransmissionFormInput'

import styles from './TransmissionForm.module.css'
import { transmissionFormInputs } from './lib'

const TransmissionForm: FC = () => {
  return (
    <form className={styles['transmission-form']}>
      {transmissionFormInputs.map((input, i) => (
        <TransmissionFormInput
          key={`${input.name}-input`}
          bracket={`0${i + 1}`}
          {...input}
        />
      ))}
    </form>
  )
}

export default TransmissionForm
