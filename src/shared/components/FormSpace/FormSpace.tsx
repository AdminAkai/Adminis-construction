import { FC, PropsWithChildren } from 'react'
import { CustomFormSpace } from './styledComponents'

type FormSpaceProps = {
  action: string | ((formData: FormData) => void | Promise<void>) | undefined
}

const FormSpace: FC<PropsWithChildren<FormSpaceProps>> = ({
  children,
  action,
}) => (
  <CustomFormSpace action={action} autoComplete='off' aria-autocomplete='none'>
    {children}
  </CustomFormSpace>
)

export default FormSpace
