import { FC } from 'react'

import styles from './navbarAdminis.module.css'
import ScrambleText from '../../ScrambleText'

const NavbarAdminis: FC = () => (
  <ScrambleText className={styles['navbar-adminis']} text='&lambda;dminis' />
)

export default NavbarAdminis
