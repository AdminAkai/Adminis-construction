import { FC, PropsWithChildren, useMemo } from 'react'

import { Link } from 'react-router-dom'
import styles from './customLink.module.css'

export type CustomLinkProps = {
  to: string
  ariaLabel: string
  nav?: boolean
  noUnderline?: boolean
  isActive?: boolean
}

const CustomLink: FC<PropsWithChildren<CustomLinkProps>> = ({
  isActive,
  nav,
  noUnderline,
  to,
  children,
  ariaLabel,
}) => {
  const className = useMemo(() => {
    let classNameString = `${styles['custom-link']}`

    if (isActive) {
      classNameString.concat(` ${styles['custom-link-active']}`)
    }
    if (!noUnderline) {
      classNameString.concat(` ${styles['custom-link-underline']}`)
    }

    return classNameString
  }, [isActive, noUnderline])

  return (
    <Link
      className={className}
      to={to}
      target={nav ? undefined : '_blank'}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  )
}

export default CustomLink
