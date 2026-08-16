import { FC } from 'react'

import HateMonologue from 'src/shared/components/HateMonologue'
import PageMark from 'src/shared/components/PageMark/PageMark'
import Section from 'src/shared/components/Section/Section'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { useAppSelector } from 'src/shared/redux/store'
import useInView from 'src/shared/hooks/useInView'

import styles from './EpisodeTwo.module.css'

const EpisodeTwo: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  const [ref, isInView] = useInView()

  return (
    <Section ref={ref}>
      <div className={styles['landing-hate']}>
        <HateMonologue startOnLoad lang={lang} />
      </div>
      <PageMark top={220} left={1000}>
        THE CHINESE ROOM / EP-02
      </PageMark>
    </Section>
  )
}

export default EpisodeTwo
