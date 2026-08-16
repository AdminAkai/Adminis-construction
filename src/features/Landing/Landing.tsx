import { FC, useEffect, useState } from 'react'

import Adminis from 'src/shared/components/Adminis'

import { useAppSelector } from 'src/shared/redux/store'
import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import { tagline, taglineSubjects, underConstruction } from './lib'
import ScrambleText from 'src/shared/components/ScrambleText'
import styles from './landing.module.css'
import PageMark from 'src/shared/components/PageMark/PageMark'
import HateMonologue from 'src/shared/components/HateMonologue'

const Landing: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const lang: Language = useAppSelector(selectLanguage)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglineSubjects[lang].length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles['landing-container']}>
      <div className={styles['landing-section']}>
        <div className={styles['landing-title']}>
          <Adminis />
        </div>
        <div className={styles['landing-subtext']}>
          <div className={styles['landing-subtitle']}>
            <ScrambleText text={tagline[lang]} startOnLoad lang={lang} />
            {lang === Language.EN ? ' ' : null}
            <ScrambleText
              text={taglineSubjects[lang][currentIndex]}
              startOnLoad
              lang={lang}
            />
            &#46;
          </div>
          <div className={styles['landing-construction']}>
            <ScrambleText
              text={underConstruction[lang]}
              startOnLoad
              lang={lang}
            />
          </div>
        </div>
        <PageMark top={400} left={1000}>
          λ / EP-01
        </PageMark>
      </div>
      <div className={styles['landing-section']}>
        <div className={styles['landing-hate']}>
          <HateMonologue startOnLoad lang={lang} />
        </div>
        <PageMark top={120} left={1000}>
          THE CHINESE ROOM / EP-02
        </PageMark>
      </div>
    </div>
  )
}

export default Landing
