import { FC, FormEventHandler, useActionState } from 'react'
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
import CustomButton from 'src/shared/components/CustomButton'
import { redirect } from 'react-router-dom'

export const JoshTrinidadPDF = new URL(
  'src/assets/JoshTrinidadResume.pdf',
  import.meta.url
).href

const Contact: FC = () => {
  const lang: Language = useAppSelector(selectLanguage)
  const [_, submitAction, isPending] = useActionState<{
    name: string
    email: string
    inquiry: string
  }>(
    async (previousState: unknown, formData: any) => {
      console.log(previousState)
      try {
        const response = await fetch(import.meta.env.VITE_GOOGLE_SHEETS_URL, {
          method: 'POST',
          body: formData,
        })
        return response
      } catch (err) {
        console.log(err)
        return null
      } finally {
        redirect('/path')
      }
    },
    { name: '', email: '', inquiry: '' }
  )

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
      <FormSpace action={submitAction}>
        {FormInputs.map(({ label, name, type, required }) => (
          <FormInput
            key={`${label}-${name}`}
            label={label}
            name={name}
            type={type}
            required={required}
            disabled={isPending}
          />
        ))}
        <CustomButton type='submit' loading={isPending}>
          Submit
        </CustomButton>
      </FormSpace>
    </ContactContainer>
  )
}

export default Contact
