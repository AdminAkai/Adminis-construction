import { FC } from 'react'

import { useAppSelector } from 'src/shared/redux/store'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './landing.module.css'

const Landing: FC = () => {
  // const lang: Language = useAppSelector(selectLanguage)

  return <div className={styles['landing-container']}></div>
}

export default Landing
