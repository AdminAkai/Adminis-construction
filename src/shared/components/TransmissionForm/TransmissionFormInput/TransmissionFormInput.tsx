import { FC } from 'react'

import styles from './TransmissionFormInput.module.css'

export type TransmissionFormInputProps = {
  name: string
  label: string
  placeholder: string
  bracket: string
  type?: string
}

const TransmissionFormInput: FC<TransmissionFormInputProps> = ({
  name,
  label,
  placeholder,
  bracket,
  type = 'text',
}) => (
  <label htmlFor={name} className={styles['transmission-form-input-label']}>
    {bracket} / {label}
    {type === 'textarea' ? (
      <textarea
        id={name}
        className={styles['transmission-form-input']}
        placeholder={placeholder}
        required
        rows={4}
        maxLength={5000}
      />
    ) : (
      <input
        id={name}
        className={styles['transmission-form-input']}
        placeholder={placeholder}
        type={type}
        required
      />
    )}
  </label>
)

export default TransmissionFormInput
