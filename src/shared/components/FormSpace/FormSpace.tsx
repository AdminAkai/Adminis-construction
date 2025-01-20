import { FC, PropsWithChildren } from 'react'
import { CustomFormSpace } from './styledComponents'

const FormSpace: FC<PropsWithChildren> = ({ children }) => (
  <CustomFormSpace autoComplete='off' aria-autocomplete='none'>
    {children}
  </CustomFormSpace>
)

export default FormSpace
