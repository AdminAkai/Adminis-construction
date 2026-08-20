import { FC, useEffect, useState } from 'react'

import PageMark from 'src/shared/components/PageMark/PageMark'
import Section from 'src/shared/components/Section/Section'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import { taglineSubjects } from './lib'

import styles from './Transmission.module.css'

const Transmission: FC = () => {
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
      <div className={styles.contact}>
        <div className={styles['contact-sector']}>
          <h1 className={styles['contact-title']}>
            [TRANSMISSION / OPEN CHANNEL]
          </h1>
          <p>BROADCAST YOUR SIGNAL.</p>
        </div>
        <div className={styles['contact-sector']}>
          <div className={styles['contact-form-header']}>
            <p>MESSAGE / 3 FIELDS</p>
            <p>CHANNEL OPEN</p>
          </div>
          <form className={styles['contact-form']}>
            <label htmlFor='test'>test</label>
            <input id='test' className={styles['contact-form-input']}></input>
            <label htmlFor='test'>test</label>
            <input></input>
          </form>
        </div>
      </div>
      <PageMark>TRANSMISSION / EP-OVA</PageMark>
    </Section>
  )
}

export default Transmission
