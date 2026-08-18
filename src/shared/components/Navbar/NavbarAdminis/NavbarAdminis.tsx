import { FC } from 'react'

import styles from './NavbarAdminis.module.css'
import ScrambleText from '../../ScrambleText'
import { useAppSelector } from 'src/shared/redux/store'
import { selectBroken } from 'src/shared/redux/settingsSlice/settingsSelectors'
import Redacted from '../../Redacted'

const NavbarAdminis: FC = () => {
  const broken = useAppSelector(selectBroken)

  if (broken)
    return <Redacted className={styles['navbar-adminis']}>HATE</Redacted>

  return (
    <ScrambleText className={styles['navbar-adminis']} text='&lambda;dminis' />
  )
}

export default NavbarAdminis
