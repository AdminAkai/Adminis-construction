import { FC } from 'react'
import { Variants, motion } from 'framer-motion'

import Grid from 'src/shared/components/Grid'
import GridPanel from 'src/shared/components/GridPanel'
import Adminis from 'src/shared/components/Adminis'
import PanelDescription from 'src/shared/components/PanelDescription'

import { Language } from 'src/shared/redux/settingsSlice/initialState'
import { selectLanguage } from 'src/shared/redux/settingsSlice/selectors'
import { useAppSelector } from 'src/shared/redux/store'

import { GridItems, aboutSummaries } from './lib'
import {
  AboutContainer,
  AboutHeader,
  AboutResume,
  AboutSummaryHeader,
  AboutSummaryText,
} from './styledComponents'

export const JoshTrinidadPDF = new URL(
  'src/assets/JoshTrinidadResume.pdf',
  import.meta.url
).href

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

const About: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  return (
    <AboutContainer
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.3 }}
    >
      <section>
        <AboutHeader>
          <motion.span variants={variants}>About</motion.span> <Adminis />
        </AboutHeader>
        {aboutSummaries.map(({ header, summary }) => (
          <motion.div key={header[lang]} variants={variants}>
            <AboutSummaryHeader>{header[lang]}</AboutSummaryHeader>
            <AboutSummaryText>{summary[lang]}</AboutSummaryText>
          </motion.div>
        ))}
      </section>
      <Grid panels={GridItems.length}>
        {GridItems.map(({ name, description, props, Link }, index) => (
          <GridPanel key={`${name}-${index}`}>
            <Link {...props}>{name}</Link>
            <PanelDescription>{description}</PanelDescription>
          </GridPanel>
        ))}
        <GridPanel>
          <AboutResume href={JoshTrinidadPDF} download='JoshTrinidadResume.pdf'>
            Resume
          </AboutResume>
          <PanelDescription>
            My Resume, for those that like to personally download my data
          </PanelDescription>
        </GridPanel>
      </Grid>
    </AboutContainer>
  )
}

export default About
