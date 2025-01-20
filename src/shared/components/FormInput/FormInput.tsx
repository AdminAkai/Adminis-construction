import { FC, HTMLInputTypeAttribute } from 'react'
import {
  CustomFormInput,
  CustomFormInputLabel,
  CustomFormInputSpace,
} from './styledComponents'

type FormInputProps = {
  label: string
  id: string
  required?: boolean
  type: HTMLInputTypeAttribute
}

const FormInput: FC<FormInputProps> = ({ label, id, type, required }) => (
  <CustomFormInputSpace>
    <CustomFormInput
      type={type}
      placeholder={label}
      id={id}
      required={required}
      aria-label={`${label} Form Input`}
    />
    <CustomFormInputLabel htmlFor={id} aria-label={`${label} Form Input Label`}>
      {label}
    </CustomFormInputLabel>
  </CustomFormInputSpace>
)
export default FormInput
