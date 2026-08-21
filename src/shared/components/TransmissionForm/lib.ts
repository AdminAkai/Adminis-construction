import { TransmissionFormInputProps } from './TransmissionFormInput'

export const turnstileKey = '0x4AAAAAAEXGoO0_Z4IaUzAC'

export const transmissionFormInputs: Omit<
  TransmissionFormInputProps,
  'bracket'
>[] = [
  {
    name: 'name',
    label: 'NAME',
    placeholder: 'FLESH LABEL',
  },
  {
    name: 'email',
    label: 'EMAIL',
    placeholder: 'COMMS IDENTIFIER',
    type: 'email',
  },
  {
    name: 'subject',
    label: 'SUBJECT',
    placeholder: 'CONTENT TOPIC - OPTIONAL',
    type: 'email',
  },
  {
    name: 'message',
    label: 'MESSAGE',
    placeholder: 'HOW CAN I CONTRIBUTE TO YOUR CAUSE?',
    type: 'textarea',
  },
]
