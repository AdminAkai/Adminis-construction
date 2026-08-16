import { FC, useEffect, useState } from 'react'

import Adminis from 'src/shared/components/Adminis'
import PageMark from 'src/shared/components/PageMark/PageMark'
import ScrambleText from 'src/shared/components/ScrambleText'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import { taglineSubjects, tagline, underConstruction } from './lib'

import styles from './EpisodeOne.module.css'
import Section from 'src/shared/components/Section/Section'

const EpisodeOne: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const lang: Language = useAppSelector(selectLanguage)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglineSubjects[lang].length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Section>
      <div className={styles['ep-one']}>
        <Adminis />
      </div>
      <div className={styles['ep-one-subtext']}>
        <div className={styles['ep-one-tagline']}>
          <ScrambleText text={tagline[lang]} startOnLoad lang={lang} />
          {lang === Language.EN ? ' ' : null}
          <ScrambleText
            text={taglineSubjects[lang][currentIndex]}
            startOnLoad
            lang={lang}
          />
          &#46;
        </div>
        <div className={styles['ep-one-construction']}>
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
    </Section>
  )
}

export default EpisodeOne
