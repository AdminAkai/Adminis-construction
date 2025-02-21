import { FC } from 'react'

import CustomLink from '../../CustomLink'
import styles from './navbarAdminis.module.css'

const NavbarAdminis: FC = () => (
  <CustomLink to='/' noUnderline nav ariaLabel='home-navbar-link'>
    <h1 className={styles['navbar-adminis']}>&lambda;dminis</h1>
  </CustomLink>
)

export default NavbarAdminis
