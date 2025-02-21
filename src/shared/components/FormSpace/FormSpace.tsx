import { FC, PropsWithChildren } from 'react'
import styles from './formSpace.module.css'

type FormSpaceProps = {
  action: string | ((formData: FormData) => void | Promise<void>) | undefined
}

const FormSpace: FC<PropsWithChildren<FormSpaceProps>> = ({
  children,
  action,
}) => (
  <form
    className={styles['form-space']}
    action={action}
    autoComplete='off'
    aria-autocomplete='none'
  >
    {children}
  </form>
)

export default FormSpace
