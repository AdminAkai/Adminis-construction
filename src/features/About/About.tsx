import { FC } from 'react'

import Grid from 'src/shared/components/Grid'
import GridPanel from 'src/shared/components/GridPanel'
import Adminis from 'src/shared/components/Adminis'
import PanelDescription from 'src/shared/components/PanelDescription'

import { GridItems } from './lib'
import {
  AboutContainer,
  AboutHeader,
  AboutResume,
  AboutSummaryHeader,
  AboutSummaryText,
} from './styledComponents'

const JoshTrinidadPDF = new URL(
  'src/assets/JoshTrinidadResume.pdf',
  import.meta.url
).href

const About: FC = () => {
  return (
    <AboutContainer>
      <section>
        <AboutHeader>
          About <Adminis />
        </AboutHeader>
        <AboutSummaryHeader>Meet the Founder, CEO, and CTO</AboutSummaryHeader>
        <AboutSummaryText>
          I made Adminis to demonstrate where innovation and passion meet
          technology. I&apos;m Josh Trinidad, the driving force behind this
          one-man-army company. My journey in the world of programming started
          in highschool, and I&apos;ve been doing it professionally for a little
          over 8 years now. Over time, I&apos;ve honed my skills, staying
          forefront of industry trends and best practices. I love to learn, and
          programming never stops teaching.
        </AboutSummaryText>
        <AboutSummaryHeader>Let&apos;s Work Together</AboutSummaryHeader>
        <AboutSummaryText>
          Reach out and contact me, either as Adminis or Josh, and let&apos;s
          work together. Whether it&apos;s the next big thing you want to build
          from the ground up, or just a job position that needs filling,
          I&apos;m available for all. Click on any of the panels to get to know
          more about me and to get started.
        </AboutSummaryText>
        <AboutSummaryHeader>Under Construction</AboutSummaryHeader>
        <AboutSummaryText>
          I am currently rebuilding Adminis to use ThreeJS for WebGL and 3D
          rendering using React Three Fiber, while also not sacrificing any of
          its current accessibility, as well as working on a ton of personal
          projects. I&apos;ll set them so you can view them here, but
          they&apos;ll also be available on my Github (the source code for this
          site is also there). Stay tuned!
        </AboutSummaryText>
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
