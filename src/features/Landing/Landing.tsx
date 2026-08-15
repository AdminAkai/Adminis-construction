import { FC } from 'react'

import Adminis from 'src/shared/components/Adminis'

import { useAppSelector } from 'src/shared/redux/store'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import { subtitle, underConstruction } from './lib'
import ScrambleText from 'src/shared/components/ScrambleText'
import styles from './landing.module.css'

const Landing: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  return (
    <div className={styles['landing-container']}>
      <div className={styles['landing-logo']}>
        <div className={styles['landing-title']}>
          <Adminis />
        </div>
        <div className={styles['landing-subtext']}>
          <div className={styles['landing-subtitle']}>
            <ScrambleText text={subtitle[lang]} startOnLoad lang={lang} />
          </div>
          <div className={styles['landing-construction']}>
            <ScrambleText
              text={underConstruction[lang]}
              startOnLoad
              lang={lang}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
