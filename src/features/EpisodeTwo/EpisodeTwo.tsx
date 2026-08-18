import { FC, useEffect } from 'react'

import HateMonologue from 'src/shared/components/HateMonologue'
import PageMark from 'src/shared/components/PageMark/PageMark'
import Section from 'src/shared/components/Section/Section'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { useAppDispatch, useAppSelector } from 'src/shared/redux/store'
import { setBroken } from 'src/shared/redux/settingsSlice/settingsSlice'
import useInView from 'src/shared/hooks/useInView'

import styles from './EpisodeTwo.module.css'

const EpisodeTwo: FC = () => {
  const dispatch = useAppDispatch()

  const lang: Language = useAppSelector(selectLanguage)

  const [ref, isInView] = useInView()

  useEffect(() => {
    dispatch(setBroken(isInView))
  }, [isInView])

  return (
    <Section ref={ref}>
      <div className={styles['landing-hate']}>
        <HateMonologue scrambling={isInView} lang={lang} />
      </div>
      <PageMark>HATE / EP-02</PageMark>
    </Section>
  )
}

export default EpisodeTwo
