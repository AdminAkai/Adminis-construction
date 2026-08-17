import { FC, PropsWithChildren } from 'react'

import { Link } from 'react-router-dom'

import styles from './TickerLink.module.css'

export type TickerLinkProps = {
  to: string
  ariaLabel: string
  current?: boolean
  nav?: boolean
}

const TickerLink: FC<PropsWithChildren<TickerLinkProps>> = ({
  to,
  children,
  ariaLabel,
  current,
  nav,
}) => (
  <Link
    className={`${styles['ticker-link']}  ${current && styles['ticker-current-link']}`}
    to={to}
    target={nav ? undefined : '_blank'}
    aria-label={ariaLabel}
  >
    {children}
  </Link>
)

export default TickerLink
