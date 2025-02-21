import { FC } from 'react'

import IconRenderer from 'src/shared/components/IconRenderer'

import NavbarAdminis from './NavbarAdminis'
import NavLangSetting from './NavLangSetting'

import styles from './navbar.module.css'

const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <NavbarAdminis />
      <div className={styles['navbar-options']}>
        <NavLangSetting />
        <IconRenderer />
      </div>
    </nav>
  )
}

export default Navbar
