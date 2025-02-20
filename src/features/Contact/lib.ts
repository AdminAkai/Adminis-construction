import { Variants } from 'framer-motion'
import { languageText } from 'src/shared/types'

export const FormInputs = [
  {
    label: 'Name',
    name: 'name',
    type: 'text',
    required: true,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'text',
    required: true,
  },
  {
    label: 'Inquiry',
    name: 'inquiry',
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

export const resumeDesc: languageText = {
  en: 'My resume, for those that like to personally download my data',
  jp: '個人的に私のデータをダウンロードしたい人のための私の履歴書',
}

export const PageHeader: languageText = {
  en: 'About',
  jp: '概要',
}
