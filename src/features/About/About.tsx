import { FC } from 'react'
import { motion } from 'framer-motion'

import Grid from 'src/shared/components/Grid'
import GridPanel from 'src/shared/components/GridPanel'
import Adminis from 'src/shared/components/Adminis'
import PanelDescription from 'src/shared/components/PanelDescription'

import { Language } from 'src/shared/redux/settingsSlice/initialState'
import { selectLanguage } from 'src/shared/redux/settingsSlice/selectors'
import { useAppSelector } from 'src/shared/redux/store'

import {
  GridItems,
  PageHeader,
  aboutSummaries,
  resumeDesc,
  variants,
} from './lib'
import {
  AboutContainer,
  AboutHeader,
  AboutInfo,
  AboutResume,
  AboutSummaryHeader,
  AboutSummaryText,
} from './styledComponents'

export const JoshTrinidadPDF = new URL(
  'src/assets/JoshTrinidadResume.pdf',
  import.meta.url
).href

const About: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  return (
    <AboutContainer
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.3 }}
    >
      <AboutInfo>
        <AboutHeader>
          <motion.span variants={variants}>{PageHeader[lang]}</motion.span>{' '}
          <Adminis />
        </AboutHeader>
        {aboutSummaries.map(({ header, summary }) => (
          <motion.div key={header.en} variants={variants}>
            <AboutSummaryHeader>{header[lang]}</AboutSummaryHeader>
            <AboutSummaryText>{summary[lang]}</AboutSummaryText>
          </motion.div>
        ))}
      </AboutInfo>
      <Grid panels={GridItems.length}>
        {GridItems.map(({ name, description, props, Link }, index) => (
          <GridPanel key={`${name}-${index}`}>
            <Link {...props}>{name}</Link>
            <PanelDescription>{description[lang]}</PanelDescription>
          </GridPanel>
        ))}
        <GridPanel>
          <AboutResume href={JoshTrinidadPDF} download='JoshTrinidadResume.pdf'>
            Resume
          </AboutResume>
          <PanelDescription>{resumeDesc[lang]}</PanelDescription>
        </GridPanel>
      </Grid>
    </AboutContainer>
  )
}

export default About
