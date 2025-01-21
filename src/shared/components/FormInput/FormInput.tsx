import { FC, HTMLInputTypeAttribute } from 'react'
import {
  CustomFormInput,
  CustomFormInputLabel,
  CustomFormInputSpace,
} from './styledComponents'

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
  <CustomFormInputSpace>
    <CustomFormInput
      type={type}
      placeholder={label}
      id={name}
      required={required}
      name={name}
      aria-label={`${label} Form Input`}
      disabled={disabled}
    />
    <CustomFormInputLabel
      htmlFor={name}
      aria-label={`${label} Form Input Label`}
    >
      {label}
    </CustomFormInputLabel>
  </CustomFormInputSpace>
)
export default FormInput
