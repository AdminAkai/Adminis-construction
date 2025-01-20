import { Variants } from 'framer-motion'
import { languageText } from 'src/shared/types'

export const FormInputs = [
  {
    label: 'Name',
    id: 'name',
    type: 'text',
  },
  {
    label: 'Email',
    id: 'email',
    type: 'text',
  },
  {
    label: 'Inquiry',
    id: 'inquiry',
    type: 'text',
  },
]

export const contactInfo = {
  header: {
    en: 'Contact me!',
    jp: '',
  },
  summary: {
    en: 'Fill out the form',
    jp: '',
  },
}

export const variants: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const resumeDesc: languageText = {
  en: 'My resume, for those that like to personally download my data',
  jp: '個人的に私のデータをダウンロードしたい人のための私の履歴書',
}

export const PageHeader: languageText = {
  en: 'About',
  jp: '概要',
}
