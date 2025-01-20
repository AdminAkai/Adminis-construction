import { FC } from 'react'
import { motion } from 'framer-motion'

import { Language } from 'src/shared/redux/settingsSlice/settingsInitial'
import { selectLanguage } from 'src/shared/redux/settingsSlice/settingsSelectors'
import { useAppSelector } from 'src/shared/redux/store'

import { contactInfo, FormInputs, variants } from './lib'
import {
  ContactContainer,
  ContactHeader,
  ContactInfo,
  ContactSummaryHeader,
} from './styledComponents'
import FormSpace from 'src/shared/components/FormSpace/FormSpace'
import FormInput from 'src/shared/components/FormInput'

export const JoshTrinidadPDF = new URL(
  'src/assets/JoshTrinidadResume.pdf',
  import.meta.url
).href

const Contact: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)

  return (
    <ContactContainer
      initial='initial'
      animate='animate'
      transition={{ staggerChildren: 0.3 }}
    >
      <ContactInfo>
        <ContactHeader>
          <motion.span variants={variants}>
            {contactInfo.header[lang]}
          </motion.span>
        </ContactHeader>
        <motion.div variants={variants}>
          <ContactSummaryHeader>
            {contactInfo.summary[lang]}
          </ContactSummaryHeader>
        </motion.div>
      </ContactInfo>
      <FormSpace>
        {FormInputs.map(({ label, id, type }) => (
          <FormInput key={`${label}-${id}`} label={label} id={id} type={type} />
        ))}
      </FormSpace>
    </ContactContainer>
  )
}

export default Contact
