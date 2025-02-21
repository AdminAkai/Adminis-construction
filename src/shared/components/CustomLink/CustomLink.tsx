import { FC, PropsWithChildren } from 'react'

import { Link } from 'react-router-dom'
import styles from './customLink.module.css'

export type CustomLinkProps = {
  to: string
  ariaLabel: string
  nav?: boolean
}

const CustomLink: FC<PropsWithChildren<CustomLinkProps>> = ({
  nav,
  to,
  children,
  ariaLabel,
}) => (
  <Link
    className={styles['custom-link']}
    to={to}
    target={nav ? undefined : '_blank'}
    aria-label={ariaLabel}
  >
    {children}
  </Link>
)

export default CustomLink
