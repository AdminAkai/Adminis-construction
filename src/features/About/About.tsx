import { FC } from 'react'

import Grid from 'src/shared/components/Grid'
import GridPanel from 'src/shared/components/GridPanel'
import Adminis from 'src/shared/components/Adminis'
import PanelDescription from 'src/shared/components/PanelDescription'

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

const About: FC = () => {
  const lang = useAppSelector(selectLanguage)

  return (
    <AboutContainer>
      <section>
        <AboutHeader>
          About <Adminis />
        </AboutHeader>
        {aboutSummaries.map(({ header, summary }) => (
          <>
            <AboutSummaryHeader>{header[lang]}</AboutSummaryHeader>
            <AboutSummaryText>{summary[lang]}</AboutSummaryText>
          </>
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
