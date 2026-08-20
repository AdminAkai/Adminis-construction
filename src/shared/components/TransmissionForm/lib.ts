import { TransmissionFormInputProps } from './TransmissionFormInput'

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
    placeholder: 'SIGNAL IDENTIFIER',
    type: 'email',
  },
  {
    name: 'message',
    label: 'MESSAGE',
    placeholder: 'HOW CAN I CONTRIBUTE TO YOUR CAUSE?',
    type: 'textarea',
  },
]
