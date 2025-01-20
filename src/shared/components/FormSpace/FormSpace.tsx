import { FC, FormEventHandler, PropsWithChildren } from 'react'
import { CustomFormSpace } from './styledComponents'

type FormSpaceProps = {
  onSubmit: FormEventHandler<HTMLFormElement>
}

const FormSpace: FC<PropsWithChildren<FormSpaceProps>> = ({
  children,
  onSubmit,
}) => (
  <CustomFormSpace
    autoComplete='off'
    aria-autocomplete='none'
    onSubmit={onSubmit}
  >
    {children}
  </CustomFormSpace>
)

export default FormSpace
