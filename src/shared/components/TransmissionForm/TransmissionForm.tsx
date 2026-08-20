import { FC } from 'react'

import TransmissionFormInput from './TransmissionFormInput'
import TransmissionButton from '../Navbar/TransmissionButton'

import { transmissionFormInputs } from './lib'

import styles from './TransmissionForm.module.css'

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
      <TransmissionButton style={{ alignSelf: 'flex-end' }} />
    </form>
  )
}

export default TransmissionForm
