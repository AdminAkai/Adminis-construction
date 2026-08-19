import { FC } from 'react'

import styles from './NavbarAdminis.module.css'
import ScrambleText from '../../ScrambleText'
import { useAppSelector } from 'src/shared/redux/store'
import { selectBroken } from 'src/shared/redux/settingsSlice/settingsSelectors'
import Redacted from '../../Redacted'
import { useNavigate } from 'react-router-dom'

const NavbarAdminis: FC = () => {
  const navigate = useNavigate()

  const broken = useAppSelector(selectBroken)

  const navigateHome = () => {
    navigate('/')
  }

  if (broken)
    return <Redacted className={styles['navbar-adminis']}>HATE</Redacted>

  return (
    <ScrambleText
      className={styles['navbar-adminis']}
      text='&lambda;dminis'
      onClick={navigateHome}
    />
  )
}

export default NavbarAdminis
