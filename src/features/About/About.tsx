import { FC } from 'react'

import Grid from 'src/shared/components/Grid'
import GridPanel from 'src/shared/components/GridPanel'
import Adminis from 'src/shared/components/Adminis'
import PanelDescription from 'src/shared/components/PanelDescription'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { useAppSelector } from 'src/shared/redux/store'
import styles from './about.module.css'

import { GridItems, PageHeader, aboutSummaries, resumeDesc } from './lib'

export const JoshTrinidadPDF = new URL(
  'src/assets/JoshTrinidadResume.pdf',
  import.meta.url
).href

const About: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  return (
    <div className={styles['about-container']}>
      <div className={styles['about-info']}>
        <div className={styles['about-header']}>
          <span>{PageHeader[lang]}</span> <Adminis />
        </div>
        {aboutSummaries.map(({ header, summary }) => (
          <div key={`${header[lang]}`}>
            <h3 className={styles['about-summary-header']}>{header[lang]}</h3>
            <p className={styles['about-summary-text']}>{summary[lang]}</p>
          </div>
        ))}
      </div>
      <Grid panels={GridItems.length}>
        {GridItems.map(({ name, description, props, Link }, index) => (
          <GridPanel key={`${name}-${index}`}>
            <Link {...props}>{name}</Link>
            <PanelDescription>{description[lang]}</PanelDescription>
          </GridPanel>
        ))}
        <GridPanel>
          <a
            className={styles['about-resume']}
            href={JoshTrinidadPDF}
            download='JoshTrinidadResume.pdf'
          >
            Resume
          </a>
          <PanelDescription>{resumeDesc[lang]}</PanelDescription>
        </GridPanel>
      </Grid>
    </div>
  )
}

export default About
