import { FC, useState } from 'react'

import { Turnstile } from '@marsidev/react-turnstile'

import TransmissionFormInput from './TransmissionFormInput'
import TransmissionButton from '../Navbar/TransmissionButton'

import { transmissionFormInputs, turnstileKey } from './lib'

import styles from './TransmissionForm.module.css'
import useMediaQuery from 'src/shared/hooks/useMediaQuery'

const TransmissionForm: FC = () => {
  const isMobile = useMediaQuery('(max-width: 959px)')

  const [turnstileToken, setTurnstileToken] = useState<string>('')

  return (
    <form className={styles['transmission-form']}>
      {transmissionFormInputs.map((input, i) => (
        <TransmissionFormInput
          key={`${input.name}-input`}
          bracket={`0${i + 1}`}
          {...input}
        />
      ))}
      <div className={styles['transmission-turnstile']}>
        <Turnstile
          siteKey={turnstileKey}
          onSuccess={setTurnstileToken}
          options={{ theme: 'dark', size: isMobile ? 'compact' : 'flexible' }}
        />
      </div>
      <TransmissionButton style={{ alignSelf: 'flex-end' }} disabled />
    </form>
  )
}

export default TransmissionForm
