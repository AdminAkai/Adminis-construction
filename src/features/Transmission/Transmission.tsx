import { FC } from 'react'

import PageMark from 'src/shared/components/PageMark/PageMark'
import TransmissionFormHeader from 'src/shared/components/TransmissionForm/TransmissionFormHeader'
import TransmissionForm from 'src/shared/components/TransmissionForm'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './Transmission.module.css'
import TransmissionLink from 'src/shared/components/TransmissionLink'
import { transmissionLinks } from './lib'
import ScrambleText from 'src/shared/components/ScrambleText'

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
    <div className={styles['transmission-viewport']}>
      <div className={styles.transmission}>
        <div className={styles['transmission-sector']}>
          <h1 className={styles['transmission-title']}>
            [TRANSMISSION / OPEN CHANNEL]
          </h1>
          <div className={styles['transmission-subtitle']}>
            <p>BROADCAST YOUR&nbsp;</p>
            <div>
              <ScrambleText text='SIGNAL' startOnLoad />
              &#46;
            </div>
          </div>
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
        <PageMark>TRANSMISSION / EP-OVA</PageMark>
      </div>
    </div>
  )
}

export default Transmission
