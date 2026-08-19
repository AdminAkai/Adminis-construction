import { FC } from 'react'

import IconRenderer from 'src/shared/components/IconRenderer'
import Ticker from 'src/shared/components/Ticker'

import NavbarAdminis from './NavbarAdminis'
import NavLangSetting from './NavLangSetting'
import TransmissionButton from './TransmissionButton'

import styles from './navbar.module.css'

const Navbar: FC = () => (
  <nav className={styles.navbar}>
    <NavbarAdminis />
    <Ticker />
    <div className={styles['navbar-options']}>
      <NavLangSetting />
      <IconRenderer />
      <TransmissionButton />
    </div>
  </nav>
)

export default Navbar
