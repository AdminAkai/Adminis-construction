import { FC } from 'react'

import { Link } from 'react-router-dom'

import PageMark from 'src/shared/components/PageMark/PageMark'
import Section from 'src/shared/components/Section/Section'
import TransmissionFormHeader from 'src/shared/components/TransmissionForm/TransmissionFormHeader'
import TransmissionForm from 'src/shared/components/TransmissionForm'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './Transmission.module.css'
import TransmissionLink from 'src/shared/components/TransmissionLink'
import { transmissionLinks } from './lib'

const Transmission: FC = () => {
  // const [currentIndex, setCurrentIndex] = useState<number>(0)

  const lang: Language = useAppSelector(selectLanguage)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % taglineSubjects[lang].length)
  //   }, 2000)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <Section>
      <div className={styles.transmission}>
        <div className={styles['transmission-sector']}>
          <h1 className={styles['transmission-title']}>
            [TRANSMISSION / OPEN CHANNEL]
          </h1>
          <p className={styles['transmission-subtitle']}>
            BROADCAST YOUR SIGNAL.
          </p>
          <div className={styles['transmission-links']}>
            {transmissionLinks.map((link) => (
              <TransmissionLink key={link.linkText} {...link} />
            ))}
          </div>
        </div>
        <div className={styles['transmission-sector']}>
          <TransmissionFormHeader />
          <TransmissionForm />
        </div>
      </div>
      <PageMark>TRANSMISSION / EP-OVA</PageMark>
    </Section>
  )
}

export default Transmission
