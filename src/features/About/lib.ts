import CustomLink from 'src/shared/components/CustomLink'
import { GridItemsType } from 'src/shared/types'

export const GridItems: GridItemsType = [
  {
    name: 'LinkedIn',
    description: 'Connect, follow, or message me on LinkedIn',
    props: {
      to: 'https://www.linkedin.com/in/josh-adrian-trinidad/',
      ariaLabel: 'LinkedIn-Josh-Adrian-Trinidad',
    },
    Link: CustomLink,
  },
  {
    name: 'Github',
    description:
      'Contains the source code for this website and many of my other projects',
    props: {
      to: 'https://github.com/AdminAkai',
      ariaLabel: 'Github-Josh-Adrian-Trinidad',
    },
    Link: CustomLink,
  },
]

export const aboutSummaries = [
  {
    header: {
      en: 'Meet the Founder, CEO, and CTO',
      jp: '',
    },
    summary: {
      en: `I made Adminis to demonstrate where innovation and passion meet
      technology. I'm Josh Trinidad, the driving force behind this
      one-man-army company. My journey in the world of programming started
      in highschool, and I've been doing it professionally for a little
      over 9 years now. Over time, I've honed my skills, staying
      forefront of industry trends and best practices. I love to learn, and
      programming never stops teaching.`,
      jp: '',
    },
  },
  {
    header: {
      en: `Let' Work Together`,
      jp: '',
    },
    summary: {
      en: `Reach out and contact me, either as Adminis or Josh, and let's
      work together. Whether it's the next big thing you want to build
      from the ground up, or just a job position that needs filling,
      I'm available for all. Click on any of the panels to get to know
      more about me and to get started.`,
      jp: '',
    },
  },
  {
    header: {
      en: `Under Construction`,
      jp: '',
    },
    summary: {
      en: `I am currently rebuilding Adminis to use ThreeJS for WebGL and 3D
      rendering using React Three Fiber, while also not sacrificing any of
      its current accessibility, as well as working on a ton of personal
      projects. I&apos;ll set them so you can view them here, but
      they&apos;ll also be available on my Github (the source code for this
      site is also there). Stay tuned!`,
      jp: '',
    },
  },
]
