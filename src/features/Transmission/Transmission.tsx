import { FC } from 'react'

import { Link } from 'react-router-dom'

import PageMark from 'src/shared/components/PageMark/PageMark'
import Section from 'src/shared/components/Section/Section'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { useAppSelector } from 'src/shared/redux/store'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'

import styles from './Transmission.module.css'

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
            <Link
              to='https://www.linkedin.com/in/josh-adrian-trinidad/'
              className={styles['transmission-link']}
              target='_blank'
            >
              LINKEDIN
              <span>/in/josh-adrian-trinidad/</span>
            </Link>
          </div>
        </div>
        <div className={styles['transmission-sector']}>
          <div className={styles['transmission-form-header']}>
            <p className={styles['transmission-form-header-title']}>
              MESSAGE / 3 FIELDS
            </p>
            <p className={styles['transmission-form-header-title']}>
              [CHANNEL OPEN]
            </p>
          </div>
          <form className={styles['transmission-form']}>
            <label
              htmlFor='name'
              className={styles['transmission-form-input-label']}
            >
              [01] / NAME
            </label>
            <input
              id='name'
              className={styles['transmission-form-input']}
              placeholder='YOUR NAME'
            ></input>
          </form>
        </div>
      </div>
      <PageMark>TRANSMISSION / EP-OVA</PageMark>
    </Section>
  )
}

export default Transmission
