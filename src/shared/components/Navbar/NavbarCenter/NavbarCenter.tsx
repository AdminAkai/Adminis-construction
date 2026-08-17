import { FC, PropsWithChildren } from 'react'

import styles from './NavbarCenter.module.css'

const NavbarCenter: FC<PropsWithChildren> = ({ children }) => {
  return <ul className={styles['navbar-center']}>{children}</ul>
}

export default NavbarCenter
