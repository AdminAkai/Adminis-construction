import { FC, HTMLInputTypeAttribute } from 'react'
import styles from './formInput.module.css'

type FormInputProps = {
  label: string
  name: string
  required?: boolean
  type: HTMLInputTypeAttribute
  disabled?: boolean
}

const FormInput: FC<FormInputProps> = ({
  label,
  name,
  type,
  required,
  disabled,
}) => (
  <div className={styles['custom-form-input-space']}>
    <input
      className={styles['custom-form-input']}
      type={type}
      placeholder={label}
      id={name}
      required={required}
      name={name}
      aria-label={`${label} Form Input`}
      disabled={disabled}
    />
    <label
      className={styles['custom-form-input-label']}
      htmlFor={name}
      aria-label={`${label} Form Input Label`}
    >
      {label}
    </label>
  </div>
)
export default FormInput
