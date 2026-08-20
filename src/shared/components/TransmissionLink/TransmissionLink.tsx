import { FC } from 'react'

import { Link } from 'react-router-dom'

import styles from './TransmissionLink.module.css'

export type TransmissionLinkProps = {
  to: string
  label: string
  linkText: string
}

const TransmissionLink: FC<TransmissionLinkProps> = ({
  to,
  label,
  linkText,
}) => (
  <Link to={to} className={styles['transmission-link']} target='_blank'>
    {label}
    <span className={styles['transmission-text']}>{linkText}</span>
  </Link>
)

export default TransmissionLink
